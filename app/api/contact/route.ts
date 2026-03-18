import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('Received contact body:', body);
    
    let { name, email, phone, company, service, message } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    if (!name) {
      name = 'Website User';
    }

    // Split name into First and Last name
    const nameParts = name.trim().split(/\s+/).filter(Boolean);
    const firstName = nameParts[0] || 'Website';
    const lastName = nameParts.slice(1).join(' ') || '-';

    // Basic UK phone formatting for Brevo (E.164)
    if (phone) {
      const cleanPhone = phone.replace(/[^\d+]/g, '');
      if (cleanPhone.startsWith('0') && cleanPhone.length === 11) {
        phone = '+44' + cleanPhone.substring(1);
      } else {
        phone = cleanPhone;
      }
    }

    const apiKey = process.env.BREVO_API_KEY || '';
    const listId = 29;

    const contactPayload = {
      email: email.trim(),
      attributes: {
        FIRSTNAME: firstName,
        LASTNAME: lastName,
        SMS: phone,
        COMPANY_NAME: company || '-',
        PROJECT_DETAILS: message || '-',
        PROJECT_TYPE: service || '-',
      },
      listIds: [listId],
      updateEnabled: true,
    };

    let response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify(contactPayload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      
      const isDuplicateSMS = (errorData.code === 'duplicate_parameter' || errorData.code === 'duplicate_identifier') && 
                            JSON.stringify(errorData).toUpperCase().includes('SMS');

      if (isDuplicateSMS) {
        console.log('SMS conflict detected, retrying without SMS attribute...');
        // Retry without SMS to ensure the enquiry is at least captured
        const fallbackPayload = { ...contactPayload };
        delete (fallbackPayload.attributes as any).SMS;

        const fallbackResponse = await fetch('https://api.brevo.com/v3/contacts', {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'api-key': apiKey,
            'content-type': 'application/json',
          },
          body: JSON.stringify(fallbackPayload),
        });

        if (fallbackResponse.ok) {
          return NextResponse.json({ success: true, warning: 'SMS conflict skipped' });
        }
        
        const fallbackError = await fallbackResponse.json().catch(() => ({}));
        console.error('Brevo Fallback Error:', fallbackError);
        return NextResponse.json({ error: 'Sync failed twice', details: fallbackError }, { status: 500 });
      }

      console.error('Brevo API Error:', errorData);
      return NextResponse.json({ error: 'Sync failed', details: errorData }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ 
      error: 'Internal server error', 
      message: error instanceof Error ? error.message : String(error) 
    }, { status: 500 });
  }
}
