import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-8">
            Terms & Conditions
          </h1>
          
          <div className="prose prose-slate max-w-none text-gray-600 space-y-12">
            <p className="text-sm italic">Last updated: April 27, 2026</p>
            
            <p className="font-bold text-lg text-primary">
              STANDARD TERMS AND CONDITIONS FOR TRAFFIC MANAGEMENT SERVICES AND EQUIPMENT HIRE
            </p>

            <section id="interpretation">
              <h2 className="text-2xl font-bold text-primary mb-4">1. Interpretation</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">1.1 Definitions</h3>
                  <p>In these Conditions, the following expressions have the following meanings:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li><strong>“Authority”</strong> means any highway authority, local authority, police authority, statutory undertaker, traffic commissioner, government department, agency, regulator or other competent body having jurisdiction over the Works, the Site, the highway, permits, licences, traffic orders or related activities.</li>
                    <li><strong>“Business Day”</strong> means a day other than a Saturday, Sunday or public holiday in England.</li>
                    <li><strong>“Charges”</strong> means all charges payable by the Customer to ETM, including hire charges, service charges, labour charges, design charges, call-out charges, delivery and collection charges, permit administration fees, abortive visit charges, waiting time, variation charges, cancellation charges, replacement costs, cleaning charges, storage charges and any other amounts payable under the Contract.</li>
                    <li><strong>“Conditions”</strong> means these standard terms and conditions.</li>
                    <li><strong>“Contract”</strong> means the contract between ETM and the Customer for the supply of Services, Equipment, labour, traffic management design, traffic management implementation, maintenance, inspection, removal or associated works, incorporating these Conditions and the relevant Quotation, order acceptance, schedule of rates, purchase order acceptance or other written agreement issued or accepted by ETM.</li>
                    <li><strong>“Customer”</strong> means the person, company, contractor, developer, public body or other entity purchasing Services or hiring Equipment from ETM.</li>
                    <li><strong>“Equipment”</strong> means any traffic management equipment, signage, cones, barriers, temporary lights, pedestrian management equipment, vehicles, plant, frames, sandbags, lamps, technology, accessories, consumables or ancillary items supplied, installed, hired or made available by ETM.</li>
                    <li><strong>“ETM”</strong> means ETM Traffic Management Ltd, company number 14984509.</li>
                    <li><strong>“Hire Period”</strong> means the period beginning when the Equipment leaves ETM’s depot, supplier premises or previous location of use, and ending when the Equipment is returned to ETM’s depot or such other place as ETM agrees in writing, in clean, complete and serviceable condition.</li>
                    <li><strong>“Permit”</strong> means any permit, licence, traffic regulation order, traffic management order, section 50 licence, section 171 licence, section 74 permit, road space booking, lane rental approval, parking suspension, TTRO, TTRN, temporary traffic signal approval, footway closure approval, scaffold/hoarding licence or other consent required in connection with the Works.</li>
                    <li><strong>“Quotation”</strong> means ETM’s quotation, estimate, proposal, schedule of rates, price confirmation, email offer, works instruction acceptance or other written confirmation of commercial terms.</li>
                    <li><strong>“Services”</strong> means the traffic management services to be supplied by ETM, including without limitation surveys, design, planning, permit applications, installation, maintenance, inspection, alteration, call-outs, emergency attendance, removal, labour supply and hire of Equipment.</li>
                    <li><strong>“Site”</strong> means the location at which the Services are to be performed or Equipment is to be delivered, installed, operated, maintained or collected.</li>
                    <li><strong>“Works”</strong> means the Customer’s project, works or operations in connection with which ETM supplies the Services or Equipment.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">1.2 Construction</h3>
                  <p>References to writing include email. References to legislation include replacement or amended legislation. Headings are for convenience only and do not affect interpretation.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">1.3 Business-to-business basis</h3>
                  <p>These Conditions are intended for business customers only. Where the Customer deals as a consumer, nothing in these Conditions affects any statutory rights which cannot lawfully be excluded or restricted.</p>
                </div>
              </div>
            </section>

            <section id="contract-formation">
              <h2 className="text-2xl font-bold text-primary mb-4">2. Contract Formation and Priority</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">2.1 Application of Conditions</h3>
                  <p>These Conditions apply to every Contract between ETM and the Customer to the exclusion of any terms which the Customer seeks to impose or incorporate, including under a purchase order, tender document, contractor terms, framework agreement, online portal, delivery note, payment notice or other document.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">2.2 Acceptance</h3>
                  <p>A Contract is formed when ETM:</p>
                  <ol className="list-[lower-alpha] pl-5 mt-2 space-y-1">
                    <li>accepts the Customer’s order in writing;</li>
                    <li>commences performance of the Services;</li>
                    <li>delivers or installs Equipment; or</li>
                    <li>otherwise acts in reliance on the Customer’s instruction.</li>
                  </ol>
                  <p className="mt-2">Acceptance of delivery, installation, attendance on Site, use of Equipment, or receipt of Services constitutes acceptance of these Conditions.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">2.3 Priority</h3>
                  <p>If there is inconsistency between documents, the following order of priority applies:</p>
                  <ol className="list-[lower-alpha] pl-5 mt-2 space-y-1">
                    <li>any written contract document signed by a director of ETM;</li>
                    <li>ETM’s Quotation or order acceptance;</li>
                    <li>these Conditions;</li>
                    <li>any drawings, plans, schedules or technical documents issued by ETM;</li>
                    <li>the Customer’s purchase order, but only as to project reference, Site address and invoicing details.</li>
                  </ol>
                  <p className="mt-2">No Customer term shall override these Conditions unless expressly accepted in writing by a director of ETM.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">2.4 No reliance</h3>
                  <p>The Customer acknowledges that it has not relied on any statement, representation, assurance or warranty not expressly set out in the Contract.</p>
                </div>
              </div>
            </section>

            <section id="scope-obligations">
              <h2 className="text-2xl font-bold text-primary mb-4">3. Scope of ETM’s Obligations</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">3.1 Services supplied</h3>
                  <p>ETM shall use reasonable skill and care in supplying the Services substantially in accordance with the Contract.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">3.2 Scope limited to agreed items</h3>
                  <p>ETM is responsible only for the Services and Equipment expressly stated in the Contract. Unless expressly agreed in writing, ETM is not responsible for:</p>
                  <ul className="list-[lower-alpha] pl-5 mt-2 space-y-1">
                    <li>designing the Customer’s Works;</li>
                    <li>assessing the lawfulness, sequencing or buildability of the Customer’s Works;</li>
                    <li>supervising the Customer, its contractors or other trades;</li>
                    <li>ensuring the Site is ready, safe, accessible or unoccupied;</li>
                    <li>obtaining Permits unless expressly instructed and paid to do so;</li>
                    <li>stakeholder consultation;</li>
                    <li>public relations, resident liaison or business liaison;</li>
                    <li>utility searches, trial holes, ground investigations or structural checks;</li>
                    <li>traffic modelling;</li>
                    <li>checking the Customer’s works methodology;</li>
                    <li>policing, enforcement or preventing third-party interference; or</li>
                    <li>responsibility for delay, fines or penalties arising from the Customer’s works, programme, omissions or instructions.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">3.3 Traffic management plans and drawings</h3>
                  <p>Any plan, drawing, design or layout supplied by ETM is prepared on the basis of information provided by the Customer and conditions reasonably apparent to ETM at the time. The Customer remains responsible for confirming that the plan is suitable for the Works, the Site constraints, the Customer’s method of working, and any conditions imposed by the relevant Authority.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">3.4 Authority requirements</h3>
                  <p>ETM may alter layouts, timings, methods, equipment quantities or attendance where required by an Authority, police officer, highway officer, inspector, safety auditor or other competent person. Such alterations shall be treated as a variation and charged to the Customer.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">3.5 No guarantee of approvals</h3>
                  <p>ETM does not warrant that any Permit, road space booking, closure, traffic signal approval, parking suspension, TTRO, TTRN or other approval will be granted, maintained, renewed or free from conditions.</p>
                </div>
              </div>
            </section>

            <section id="customer-responsibilities">
              <h2 className="text-2xl font-bold text-primary mb-4">4. Customer’s Primary Responsibilities</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">4.1 Customer to provide information</h3>
                  <p>The Customer shall provide ETM, in sufficient time, with accurate and complete information required for the Services, including:</p>
                  <ul className="list-[lower-alpha] pl-5 mt-2 space-y-1">
                    <li>Site address and precise work location;</li>
                    <li>scope and duration of the Works;</li>
                    <li>working hours and shift patterns;</li>
                    <li>drawings, phasing plans and construction programme;</li>
                    <li>Permit requirements and Authority correspondence;</li>
                    <li>traffic-sensitive restrictions, embargoes and lane rental information;</li>
                    <li>access constraints;</li>
                    <li>utility drawings and statutory undertaker information;</li>
                    <li>details of schools, hospitals, bus routes, refuse routes, emergency routes, events or sensitive receptors;</li>
                    <li>risk assessments and method statements relevant to the Works;</li>
                    <li>principal contractor and CDM duty-holder details; and</li>
                    <li>any Site-specific hazards.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">4.2 Accuracy of information</h3>
                  <p>ETM is entitled to rely on information supplied by the Customer. The Customer is responsible for all loss, delay, additional cost, abortive work, penalties or claims arising from inaccurate, incomplete, late or misleading information.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">4.3 Site readiness</h3>
                  <p>The Customer shall ensure that, before ETM attends Site:</p>
                  <ul className="list-[lower-alpha] pl-5 mt-2 space-y-1">
                    <li>the Site is available and accessible;</li>
                    <li>the working area is free from obstruction;</li>
                    <li>parked vehicles, skips, materials, plant and third-party obstructions are removed;</li>
                    <li>the highway or working area is suitable for the Equipment and Services;</li>
                    <li>any required parking suspensions, notices or stakeholder arrangements are in place;</li>
                    <li>ETM can safely deliver, install, maintain and collect Equipment; and</li>
                    <li>the Customer’s works will not prevent ETM from complying with any approved layout or Permit condition.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">4.4 Customer responsible for Works</h3>
                  <p>The Customer remains solely responsible for the planning, management, supervision, safety, legality and execution of the Works.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">4.5 Customer responsible for third parties</h3>
                  <p>The Customer is responsible for the acts and omissions of its employees, subcontractors, consultants, agents, invitees, suppliers, hauliers, utility providers and other persons under its control or influence.</p>
                </div>
              </div>
            </section>

            <section id="permits-authority">
              <h2 className="text-2xl font-bold text-primary mb-4">5. Permits, Licences and Authority Dealings</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">5.1 Responsibility for Permits</h3>
                  <p>Unless ETM expressly agrees in writing to apply for specific Permits, the Customer is responsible for obtaining, maintaining and complying with all Permits required for the Works.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">5.2 ETM as administrative agent only</h3>
                  <p>Where ETM agrees to assist with Permit applications, it does so as administrative agent for the Customer. ETM shall not be responsible for refusal, delay, conditions, revocation, suspension, amendment or non-renewal of any Permit unless caused directly by ETM’s wilful default.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">5.3 Conditions imposed by Authorities</h3>
                  <p>The Customer shall comply with all Permit conditions and Authority requirements. Any additional attendance, equipment, design revision, out-of-hours work, inspection, site meeting, emergency call-out or reinstallation required by an Authority shall be charged as a variation.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">5.4 Penalties and statutory charges</h3>
                  <p>The Customer is responsible for all Authority charges, fines, overrun charges, section 74 charges, lane rental charges, fixed penalty notices, defect charges, permit variation charges, inspection fees, parking suspension fees, bus stop suspension fees, TTRO/TTRN costs and any similar amounts arising in connection with the Works, except to the extent directly caused by ETM’s proven breach of the Contract.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">5.5 Authority to communicate</h3>
                  <p>The Customer authorises ETM to communicate directly with any Authority regarding the Services, Site, Works, Permits, inspections, notices, defects, penalties or proposed mitigation. ETM is not obliged to challenge any notice or penalty unless separately instructed and paid to do so.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">5.6 No liability where Authority does not accept ETM involvement</h3>
                  <p>If an Authority refuses to deal with ETM, requires communication only with the Customer, principal contractor or permit holder, or rejects ETM’s representations, ETM shall have no liability for any resulting delay, charge, penalty, refusal, suspension or loss.</p>
                </div>
              </div>
            </section>

            <section id="charges-rates">
              <h2 className="text-2xl font-bold text-primary mb-4">6. Charges and Rates</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">6.1 Rates</h3>
                  <p>Charges shall be calculated in accordance with ETM’s Quotation, schedule of rates or, where none is specified, ETM’s standard rates in force at the time of supply.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">6.2 Minimum charge</h3>
                  <p>Unless otherwise stated in writing, Equipment hire and Services are subject to ETM’s minimum hire periods, minimum shift charges, minimum call-out charges and minimum order values.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">6.3 Chargeable time</h3>
                  <p>Chargeable time includes:</p>
                  <ul className="list-[lower-alpha] pl-5 mt-2 space-y-1">
                    <li>loading;</li>
                    <li>travel;</li>
                    <li>delivery;</li>
                    <li>installation;</li>
                    <li>inspection;</li>
                    <li>maintenance;</li>
                    <li>waiting time;</li>
                    <li>alteration;</li>
                    <li>call-outs;</li>
                    <li>removal;</li>
                    <li>return transport;</li>
                    <li>cleaning, repair and sorting; and</li>
                    <li>any period during which Equipment remains on Site or unavailable to ETM.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">6.4 Standing time and obstruction</h3>
                  <p>If ETM is delayed, prevented or disrupted due to Site conditions, parked vehicles, third-party obstruction, lack of access, Customer delay, unsafe working conditions, Authority intervention or missing information, ETM may charge standing time, abortive visit charges and all additional costs.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">6.5 Out-of-hours work</h3>
                  <p>Evening night, weekend, public holiday, emergency and short-notice work shall be charged at ETM’s applicable premium rates.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">6.6 Cost increases</h3>
                  <p>ETM may increase Charges to reflect increases in labour, fuel, materials, insurance, statutory charges, Authority fees, subcontractor costs, transport, equipment costs, taxation, regulatory requirements or other costs outside ETM’s reasonable control.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">6.7 VAT</h3>
                  <p>All Charges are exclusive of VAT unless expressly stated otherwise.</p>
                </div>
              </div>
            </section>

            <section id="payment">
              <h2 className="text-2xl font-bold text-primary mb-4">7. Payment</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">7.1 Payment date</h3>
                  <p>Unless ETM has approved credit terms in writing, payment is due immediately on invoice, pro forma request or demand.</p>
                  <p>Where credit terms are approved, payment is due within 30 days of the invoice date unless ETM confirms a different period in writing.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">7.2 No withholding</h3>
                  <p>The Customer shall pay all sums in full without set-off, counterclaim, withholding, deduction, abatement or retention, except where required by law.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">7.3 Disputed invoices</h3>
                  <p>Any invoice query must be notified in writing within 7 days of invoice date, giving full details of the amount disputed and the reasons. The undisputed amount remains payable by the due date. Failure to notify a dispute within 7 days shall be deemed acceptance of the invoice.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">7.4 Late payment</h3>
                  <p>If payment is not made by the due date, ETM may:</p>
                  <ul className="list-[lower-alpha] pl-5 mt-2 space-y-1">
                    <li>charge interest under the Late Payment of Commercial Debts (Interest) Act 1998;</li>
                    <li>recover statutory compensation and reasonable debt recovery costs;</li>
                    <li>suspend Services;</li>
                    <li>withhold delivery, installation, maintenance or collection;</li>
                    <li>require payment in advance for future work;</li>
                    <li>withdraw credit terms;</li>
                    <li>terminate the Contract; and/or</li>
                    <li>recover Equipment from Site.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">7.5 Acceleration</h3>
                  <p>If any invoice becomes overdue, all other sums owed by the Customer to ETM, whether invoiced or not, become immediately due and payable.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">7.6 Credit limit</h3>
                  <p>ETM may set, reduce or withdraw any credit limit at any time. ETM is not obliged to continue Services where the Customer exceeds its credit limit.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">7.7 Payment under construction contracts</h3>
                  <p>Where the Contract is a construction contract for the purposes of the Housing Grants, Construction and Regeneration Act 1996, the payment provisions of that Act apply to the extent mandatory. Nothing in these Conditions prevents ETM from exercising any statutory right to suspend performance for non-payment.</p>
                </div>
              </div>
            </section>

            <section id="cancellation">
              <h2 className="text-2xl font-bold text-primary mb-4">8. Cancellation, Postponement and Abortive Work</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">8.1 Cancellation by Customer</h3>
                  <p>The Customer may cancel or postpone Services only by written notice received by ETM.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">8.2 Cancellation charges</h3>
                  <p>Unless otherwise agreed in writing, the following charges apply:</p>
                  <ul className="list-[lower-alpha] pl-5 mt-2 space-y-1">
                    <li>cancellation or postponement less than 24 hours before scheduled attendance: <strong>100% of the Contract value</strong>;</li>
                    <li>cancellation or postponement between 24 and 72 hours before scheduled attendance: <strong>75% of the Contract value</strong>;</li>
                    <li>cancellation or postponement between 72 hours and 7 days before scheduled attendance: <strong>50% of the Contract value</strong>;</li>
                    <li>cancellation or postponement more than 7 days before scheduled attendance: ETM’s incurred costs, committed costs and reasonable administration charge.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">8.3 Third-party and Authority costs</h3>
                  <p>The Customer shall in all cases pay all third-party costs, Authority fees, Permit costs, subcontractor charges, traffic order charges, materials costs, design costs, equipment reservation costs and other costs incurred or committed by ETM before cancellation or postponement.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">8.4 Abortive attendance</h3>
                  <p>If ETM attends Site and cannot commence or complete the Services due to any matter not caused by ETM, the visit shall be chargeable in full and any rearranged attendance shall be separately chargeable.</p>
                </div>
              </div>
            </section>

            <section id="hire-period">
              <h2 className="text-2xl font-bold text-primary mb-4">9. Hire Period and Off-Hire</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">9.1 Commencement and end of hire</h3>
                  <p>The Hire Period starts when Equipment leaves ETM’s depot, supplier premises or previous location of use and ends only when Equipment has been collected, returned, checked and accepted by ETM as clean, complete and undamaged.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">9.2 Off-hire notice</h3>
                  <p>The Customer must give off-hire instructions in writing. Off-hire is not effective until ETM issues written confirmation or an off-hire reference.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">9.3 Customer remains responsible</h3>
                  <p>The Customer remains responsible for Equipment until ETM has physically recovered it and had a reasonable opportunity to inspect it.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">9.4 Failed collection</h3>
                  <p>If ETM is unable to collect Equipment due to lack of access, obstruction, unsafe conditions, Customer delay or third-party interference, hire charges continue and ETM may charge failed collection, waiting time and return visit charges.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">9.5 Equipment left on highway</h3>
                  <p>Where Equipment remains on the highway, footway, verge or public area after off-hire, the Customer remains responsible for compliance, safety, Permits, Authority charges and third-party claims until collection.</p>
                </div>
              </div>
            </section>

            <section id="delivery-installation">
              <h2 className="text-2xl font-bold text-primary mb-4">10. Delivery, Installation and Collection</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">10.1 Access</h3>
                  <p>The Customer shall provide safe, suitable and unrestricted access and egress for ETM’s vehicles, personnel and Equipment.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">10.2 Delivery condition</h3>
                  <p>Unless the Customer notifies ETM in writing within 24 hours of delivery or installation, the Equipment shall be deemed delivered complete, undamaged, in good working order and suitable for the agreed purpose.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">10.3 Installation</h3>
                  <p>ETM shall install Equipment in accordance with the agreed layout, Authority requirement or Site conditions reasonably apparent at the time. Where Site conditions prevent installation as planned, ETM may install a reasonable alternative layout or suspend the Services and charge additional costs.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">10.4 Collection</h3>
                  <p>ETM may collect Equipment at any reasonable time after off-hire, termination, expiry of the Hire Period, non-payment, safety concerns, suspected misuse or risk to ETM’s ownership rights.</p>
                </div>
              </div>
            </section>

            <section id="care-equipment">
              <h2 className="text-2xl font-bold text-primary mb-4">11. Care of Equipment</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">11.1 Customer’s responsibility</h3>
                  <p>During the Hire Period, the Customer shall:</p>
                  <ul className="list-[lower-alpha] pl-5 mt-2 space-y-1">
                    <li>keep Equipment safe, secure and in good condition;</li>
                    <li>protect Equipment from theft, vandalism, misuse, impact, weather-related displacement and third-party interference;</li>
                    <li>not move, alter, adapt, deface, cover, obscure, damage or remove Equipment without ETM’s written consent;</li>
                    <li>not remove ETM identification marks;</li>
                    <li>not sell, charge, pledge, sub-hire, lend or part with possession of Equipment;</li>
                    <li>not permit unauthorised persons to operate, alter or interfere with Equipment;</li>
                    <li>notify ETM immediately of any loss, theft, damage, defect, movement, tampering or incident; and</li>
                    <li>comply with all applicable laws and Authority requirements.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">11.2 Loss, damage and replacement</h3>
                  <p>The Customer shall pay ETM for:</p>
                  <ul className="list-[lower-alpha] pl-5 mt-2 space-y-1">
                    <li>replacement of lost, stolen, confiscated, destroyed or non-returned Equipment at ETM’s then-current replacement cost;</li>
                    <li>repair of damaged Equipment;</li>
                    <li>cleaning of dirty or contaminated Equipment;</li>
                    <li>sorting, re-stacking and reconditioning costs;</li>
                    <li>hire charges until replacement, repair or cleaning is completed; and</li>
                    <li>any Authority or third-party charges arising from the loss, condition or location of Equipment.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">11.3 Police and incident reporting</h3>
                  <p>The Customer shall immediately notify ETM and, where appropriate, the police, of theft, vandalism, collision, injury, property damage or any incident involving Equipment.</p>
                </div>
              </div>
            </section>

            <section id="maintenance-callouts">
              <h2 className="text-2xl font-bold text-primary mb-4">12. Maintenance, Inspections and Call-Outs</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">12.1 ETM access</h3>
                  <p>The Customer shall allow ETM access to inspect, maintain, alter, repair, replace or remove Equipment.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">12.2 Customer interference</h3>
                  <p>The Customer shall not repair, modify, relocate or interfere with Equipment without ETM’s prior written consent.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">12.3 Chargeable call-outs</h3>
                  <p>Additional inspections, emergency attendances, resets, repairs or call-outs are chargeable where required due to:</p>
                  <ul className="list-[lower-alpha] pl-5 mt-2 space-y-1">
                    <li>weather;</li>
                    <li>vandalism;</li>
                    <li>third-party interference;</li>
                    <li>traffic impact;</li>
                    <li>Customer delay or misuse;</li>
                    <li>Authority instruction;</li>
                    <li>changes to the Works;</li>
                    <li>Site conditions;</li>
                    <li>unauthorised movement of Equipment; or</li>
                    <li>any cause not due to ETM’s breach of Contract.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">12.4 Breakdowns</h3>
                  <p>Where Equipment fails due to fair wear and tear or inherent defect, ETM’s sole obligation is to repair or replace the affected Equipment within a reasonable time. ETM shall have no liability for delay, disruption, penalties or consequential loss arising from Equipment failure.</p>
                </div>
              </div>
            </section>

            <section id="labour-control">
              <h2 className="text-2xl font-bold text-primary mb-4">13. Labour, Operatives and Site Control</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">13.1 ETM personnel</h3>
                  <p>ETM shall use reasonable endeavours to provide competent personnel for the Services.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">13.2 Site control remains with Customer</h3>
                  <p>Unless expressly agreed in writing, ETM personnel do not assume control of the Site, the Works, the highway occupation, the Customer’s programme, or the activities of the Customer or other contractors.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">13.3 Instructions to ETM personnel</h3>
                  <p>The Customer shall not instruct ETM personnel to work outside the agreed scope, deviate from approved layouts, breach Permit conditions, undertake unsafe work, move Equipment contrary to ETM’s instructions, or perform tasks for which they were not supplied.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">13.4 Unsafe conditions</h3>
                  <p>ETM may refuse, suspend or stop work immediately if ETM considers that conditions are unsafe, unlawful, non-compliant, outside the agreed scope or likely to expose ETM to unreasonable risk. Such suspension shall not relieve the Customer of payment obligations.</p>
                </div>
              </div>
            </section>

            <section id="health-safety">
              <h2 className="text-2xl font-bold text-primary mb-4">14. Health and Safety</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">14.1 Customer’s obligations</h3>
                  <p>The Customer shall comply with all health and safety legislation, CDM Regulations, highway safety requirements, site rules, risk assessments, method statements and Authority requirements.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">14.2 Principal contractor</h3>
                  <p>Where the Customer is principal contractor or otherwise controls the Site, it shall ensure that ETM is provided with a safe system of work, Site induction, emergency procedures, welfare arrangements, traffic interface information and all relevant risk information.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">14.3 Suspension for safety</h3>
                  <p>ETM may suspend Services where it reasonably believes that continuing would create a risk to health, safety, property, highway users, pedestrians, ETM personnel or Equipment.</p>
                </div>
              </div>
            </section>

            <section id="site-conditions">
              <h2 className="text-2xl font-bold text-primary mb-4">15. Site Conditions, Utilities and Existing Property</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">15.1 Customer knowledge</h3>
                  <p>The Customer is deemed to have full knowledge of the Site, highway, access routes, ground conditions, structures, underground services, overhead services, drainage, street furniture, surfaces and surrounding property.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">15.2 Customer liability</h3>
                  <p>The Customer is responsible for damage to roads, footways, kerbs, verges, surfaces, street furniture, underground services, overhead services, structures, adjoining property and third-party property arising in connection with the Works, Site conditions, access, loading, unloading, installation or removal, except to the extent directly caused by ETM’s proven negligence.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">15.3 Utilities</h3>
                  <p>The Customer shall identify, mark and protect all utilities and services. ETM is not liable for damage to unmarked, inaccurately marked, concealed or inadequately protected services.</p>
                </div>
              </div>
            </section>

            <section id="variations">
              <h2 className="text-2xl font-bold text-primary mb-4">16. Variations</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">16.1 Variations chargeable</h3>
                  <p>Any change to the scope, timing, phasing, Site, layout, Permit conditions, Authority requirements, quantities, working hours, duration, access arrangements or Customer programme shall be a variation and charged accordingly.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">16.2 Oral instructions</h3>
                  <p>ETM may rely on instructions given by the Customer’s site manager, supervisor, foreman, project manager, quantity surveyor, contracts manager or any person appearing to ETM to have authority.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">16.3 Records</h3>
                  <p>ETM’s worksheets, delivery notes, photographs, vehicle tracking records, timesheets, inspection records, emails and internal job records shall be prima facie evidence of Services performed, Equipment supplied, attendance, waiting time, variations and chargeable events.</p>
                </div>
              </div>
            </section>

            <section id="indemnities">
              <h2 className="text-2xl font-bold text-primary mb-4">17. Customer Indemnities</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">17.1 General indemnity</h3>
                  <p>The Customer shall indemnify ETM against all losses, liabilities, damages, claims, demands, fines, penalties, charges, costs and expenses arising from or connected with:</p>
                  <ul className="list-[lower-alpha] pl-5 mt-2 space-y-1">
                    <li>the Customer’s Works;</li>
                    <li>breach of the Contract by the Customer;</li>
                    <li>inaccurate or incomplete information supplied to ETM;</li>
                    <li>Site conditions;</li>
                    <li>lack of access or Site readiness;</li>
                    <li>Customer delay or disruption;</li>
                    <li>damage to or loss of Equipment;</li>
                    <li>injury, death or property damage arising from the Customer’s acts or omissions;</li>
                    <li>Authority charges, notices or penalties;</li>
                    <li>breach of Permit conditions;</li>
                    <li>third-party claims arising from the Works;</li>
                    <li>movement, alteration or interference with Equipment by anyone other than ETM;</li>
                    <li>parked vehicles, obstructions or failure to secure the Site;</li>
                    <li>the acts or omissions of the Customer’s contractors, employees, agents or invitees; and</li>
                    <li>any claim that ETM has delayed, obstructed or interfered with the Customer’s works except to the extent caused by ETM’s proven breach.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">17.2 Indemnity not subject to ETM liability cap</h3>
                  <p>The Customer’s indemnities are independent payment obligations and are not limited by any cap on ETM’s liability.</p>
                </div>
              </div>
            </section>

            <section id="insurance">
              <h2 className="text-2xl font-bold text-primary mb-4">18. Insurance</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">18.1 Customer insurance</h3>
                  <p>The Customer shall maintain, with reputable insurers:</p>
                  <ul className="list-[lower-alpha] pl-5 mt-2 space-y-1">
                    <li>public liability insurance;</li>
                    <li>employer’s liability insurance;</li>
                    <li>contractor’s all risks insurance where appropriate;</li>
                    <li>hired-in plant/equipment insurance covering Equipment at full replacement value; and</li>
                    <li>any insurance required by law, the Contract or the relevant Authority.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">18.2 Evidence</h3>
                  <p>The Customer shall provide evidence of insurance upon request.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">18.3 Proceeds</h3>
                  <p>Insurance proceeds relating to Equipment shall be held by the Customer on trust for ETM and applied towards repair or replacement.</p>
                </div>
              </div>
            </section>

            <section id="liability">
              <h2 className="text-2xl font-bold text-primary mb-4">19. Limitation of ETM’s Liability</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">19.1 Non-excludable liability</h3>
                  <p>Nothing in the Contract limits or excludes ETM’s liability for:</p>
                  <ul className="list-[lower-alpha] pl-5 mt-2 space-y-1">
                    <li>death or personal injury caused by ETM’s negligence;</li>
                    <li>fraud or fraudulent misrepresentation;</li>
                    <li>any liability which cannot lawfully be excluded or limited.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">19.2 Contract value cap</h3>
                  <p>Subject to clause 19.1, ETM’s total aggregate liability arising out of or in connection with the Contract, whether in contract, tort, negligence, breach of statutory duty, misrepresentation, restitution, indemnity or otherwise, shall not exceed the total Charges paid or payable by the Customer under the Contract giving rise to the claim.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">19.3 Excluded losses</h3>
                  <p>Subject to clause 19.1, ETM shall not be liable for:</p>
                  <ul className="list-[lower-alpha] pl-5 mt-2 space-y-1">
                    <li>loss of profit;</li>
                    <li>loss of revenue;</li>
                    <li>loss of business;</li>
                    <li>loss of contract;</li>
                    <li>loss of goodwill;</li>
                    <li>loss of anticipated savings;</li>
                    <li>loss of productivity;</li>
                    <li>loss of use;</li>
                    <li>delay damages;</li>
                    <li>liquidated damages imposed on the Customer;</li>
                    <li>Authority penalties or charges;</li>
                    <li>section 74 overrun charges;</li>
                    <li>lane rental charges;</li>
                    <li>third-party claims against the Customer;</li>
                    <li>wasted management time;</li>
                    <li>reputational harm;</li>
                    <li>indirect loss;</li>
                    <li>consequential loss; or</li>
                    <li>economic loss of any kind.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">19.4 Sole remedies</h3>
                  <p>Where Equipment is defective or Services are not performed in accordance with the Contract, ETM’s sole obligation shall be, at ETM’s option, to reperform the affected Services, repair or replace the affected Equipment, or credit the relevant part of the Charges.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">19.5 No liability for matters outside ETM’s control</h3>
                  <p>ETM shall not be liable for loss, delay, disruption, penalties, claims or costs caused by:</p>
                  <ul className="list-[lower-alpha] pl-5 mt-2 space-y-1">
                    <li>Authority decisions or requirements;</li>
                    <li>refusal, delay, amendment or withdrawal of Permits;</li>
                    <li>weather;</li>
                    <li>traffic conditions;</li>
                    <li>emergency services requirements;</li>
                    <li>events, protests, public behaviour or third-party interference;</li>
                    <li>vandalism or theft;</li>
                    <li>parked vehicles or obstructions;</li>
                    <li>inaccurate Customer information;</li>
                    <li>Customer programme changes;</li>
                    <li>other contractors;</li>
                    <li>utilities or statutory undertakers;</li>
                    <li>unsuitable Site conditions; or</li>
                    <li>force majeure events.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">19.6 Time limit for claims</h3>
                  <p>No claim may be brought against ETM unless the Customer gives written notice of the claim, with reasonable details, within 30 days of becoming aware of the circumstances giving rise to it. In any event, no claim may be brought more than 6 months after completion of the relevant Services or end of the Hire Period.</p>
                </div>
              </div>
            </section>

            <section id="force-majeure">
              <h2 className="text-2xl font-bold text-primary mb-4">20. Force Majeure</h2>
              <p>ETM shall not be liable for delay or failure to perform caused by events beyond its reasonable control, including severe weather, flood, fire, pandemic, epidemic, labour shortages, strikes, supply chain disruption, traffic incidents, road closures, emergency works, Authority intervention, police instructions, utility failures, fuel shortages, war, terrorism, civil disturbance, vandalism, theft or changes in law.</p>
            </section>

            <section id="suspension-termination">
              <h2 className="text-2xl font-bold text-primary mb-4">21. Suspension and Termination</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">21.1 Suspension</h3>
                  <p>ETM may suspend Services immediately if:</p>
                  <ul className="list-[lower-alpha] pl-5 mt-2 space-y-1">
                    <li>payment is overdue;</li>
                    <li>the Customer exceeds its credit limit;</li>
                    <li>Site conditions are unsafe or unsuitable;</li>
                    <li>required information is missing;</li>
                    <li>a Permit is absent, defective, suspended or withdrawn;</li>
                    <li>ETM’s Equipment is at risk;</li>
                    <li>the Customer breaches the Contract; or</li>
                    <li>ETM reasonably considers suspension necessary to protect safety, compliance or its commercial position.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">21.2 Termination by ETM</h3>
                  <p>ETM may terminate the Contract immediately by written notice if:</p>
                  <ul className="list-[lower-alpha] pl-5 mt-2 space-y-1">
                    <li>the Customer fails to pay any sum when due;</li>
                    <li>the Customer commits a material breach;</li>
                    <li>the Customer becomes insolvent or appears unable to pay its debts;</li>
                    <li>distress, execution or enforcement is levied against the Customer;</li>
                    <li>the Customer ceases or threatens to cease business;</li>
                    <li>ETM’s ownership rights in Equipment are prejudiced;</li>
                    <li>the Customer refuses access for recovery of Equipment; or</li>
                    <li>continuing the Contract may expose ETM to legal, safety, regulatory or financial risk.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">21.3 Consequences of termination</h3>
                  <p>On termination:</p>
                  <ul className="list-[lower-alpha] pl-5 mt-2 space-y-1">
                    <li>all unpaid Charges become immediately due;</li>
                    <li>ETM may recover Equipment;</li>
                    <li>the Customer shall provide immediate access for recovery;</li>
                    <li>hire charges continue until Equipment is recovered;</li>
                    <li>ETM may charge demobilisation, collection, repair, replacement and storage costs; and</li>
                    <li>termination shall not affect accrued rights or liabilities.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="ownership-risk">
              <h2 className="text-2xl font-bold text-primary mb-4">22. Ownership and Risk</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">22.1 Ownership</h3>
                  <p>Equipment remains ETM’s property at all times. No title, ownership or proprietary interest passes to the Customer.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">22.2 Risk</h3>
                  <p>Risk in Equipment passes to the Customer when Equipment leaves ETM’s depot, supplier premises or previous location of use and remains with the Customer until Equipment is recovered and accepted by ETM.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">22.3 Recovery rights</h3>
                  <p>The Customer grants ETM, its employees, agents and contractors permission to enter the Site or any premises where Equipment is located to inspect or recover Equipment. The Customer shall procure equivalent rights from any landowner, occupier, principal contractor or other relevant party.</p>
                </div>
              </div>
            </section>

            <section id="intellectual-property">
              <h2 className="text-2xl font-bold text-primary mb-4">23. Intellectual Property</h2>
              <p>All drawings, designs, layouts, traffic management plans, method statements, specifications, photographs, records, documents and know-how produced by ETM remain ETM’s property. The Customer receives a limited licence to use them only for the specific Contract and Site for which they were supplied, subject to payment in full.</p>
            </section>

            <section id="confidentiality">
              <h2 className="text-2xl font-bold text-primary mb-4">24. Confidentiality</h2>
              <p>The Customer shall keep confidential ETM’s prices, rates, drawings, designs, methods, commercial terms and technical information and shall not disclose them to any third party except where required for the Works or by law.</p>
            </section>

            <section id="data-evidence">
              <h2 className="text-2xl font-bold text-primary mb-4">25. Data, Photographs and Evidence</h2>
              <p>ETM may take and retain photographs, videos, GPS records, inspection records, delivery records and other evidence relating to the Site, Equipment and Services for contractual, evidential, training, insurance, compliance and dispute purposes.</p>
            </section>

            <section id="non-solicitation">
              <h2 className="text-2xl font-bold text-primary mb-4">26. Non-Solicitation</h2>
              <p>The Customer shall not, during the Contract and for 12 months afterwards, solicit, employ or engage any ETM employee, operative, consultant or regular subcontractor involved in the Services without ETM’s prior written consent. If the Customer breaches this clause, it shall pay ETM liquidated damages equal to 25% of the individual’s annual remuneration or projected annualised charges, representing a genuine pre-estimate of recruitment, training and business disruption costs.</p>
            </section>

            <section id="assignment">
              <h2 className="text-2xl font-bold text-primary mb-4">27. Assignment and Subcontracting</h2>
              <p>ETM may assign, transfer, subcontract or delegate any of its rights or obligations under the Contract. The Customer may not assign, transfer or subcontract its rights or obligations without ETM’s prior written consent.</p>
            </section>

            <section id="notices">
              <h2 className="text-2xl font-bold text-primary mb-4">28. Notices</h2>
              <p>Notices shall be in writing and sent by hand, prepaid first-class post, recorded delivery or email to the address or email last notified by the receiving party. Notices sent by email are deemed received at the time of transmission unless a bounce-back or delivery failure is received.</p>
            </section>

            <section id="severance">
              <h2 className="text-2xl font-bold text-primary mb-4">29. Severance</h2>
              <p>If any provision of the Contract is invalid, unlawful or unenforceable, it shall be modified to the minimum extent necessary to make it valid, lawful and enforceable. If modification is not possible, it shall be deemed deleted and the remaining provisions shall continue in force.</p>
            </section>

            <section id="waiver">
              <h2 className="text-2xl font-bold text-primary mb-4">30. Waiver</h2>
              <p>No failure or delay by ETM to exercise any right or remedy shall constitute a waiver. A waiver must be in writing and applies only to the circumstances for which it is given.</p>
            </section>

            <section id="third-party-rights">
              <h2 className="text-2xl font-bold text-primary mb-4">31. Third Party Rights</h2>
              <p>Except for ETM’s successors, assigns, insurers, employees, officers, agents and subcontractors, no person other than ETM and the Customer has rights under the Contracts (Rights of Third Parties) Act 1999 to enforce the Contract.</p>
            </section>

            <section id="dispute-resolution">
              <h2 className="text-2xl font-bold text-primary mb-4">32. Dispute Resolution and Adjudication</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">32.1 Good faith discussions</h3>
                  <p>The parties shall first seek to resolve disputes through senior management discussions.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">32.2 Adjudication</h3>
                  <p>Where the Contract is a construction contract within the meaning of the Housing Grants, Construction and Regeneration Act 1996, either party may refer a dispute to adjudication at any time. Unless otherwise agreed, the adjudicator nominating body shall be the Technology and Construction Solicitors’ Association, the Royal Institution of Chartered Surveyors, or such other nominating body as ETM reasonably selects.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">32.3 Enforcement</h3>
                  <p>The parties shall comply immediately with any adjudicator’s decision unless and until finally determined by litigation, arbitration or agreement.</p>
                </div>
              </div>
            </section>

            <section id="governing-law">
              <h2 className="text-2xl font-bold text-primary mb-4">33. Governing Law and Jurisdiction</h2>
              <p>The Contract and any dispute or claim arising out of or in connection with it shall be governed by the laws of England and Wales. Subject to any mandatory adjudication rights, the courts of England and Wales shall have exclusive jurisdiction.</p>
            </section>

            <section id="special-provisions">
              <h2 className="text-2xl font-bold text-primary mb-4">34. Special Protective Provisions for Traffic Management Works</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">34.1 No assumption of principal contractor duties</h3>
                  <p>Unless expressly agreed in writing, ETM does not accept appointment as principal contractor, principal designer, contractor in control of the Site, street works promoter, permit holder or party responsible for the Customer’s highway occupation.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">34.2 Customer remains permit holder/promoter unless otherwise agreed</h3>
                  <p>Where the Customer, main contractor, utility provider, developer or statutory undertaker is named as permit holder, works promoter or responsible organisation, that party remains fully responsible for all associated statutory obligations.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">34.3 Public interference</h3>
                  <p>ETM is not responsible for members of the public, road users, pedestrians, residents, businesses or third parties moving, damaging, ignoring or interfering with Equipment.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">34.4 Emergency alteration</h3>
                  <p>ETM may alter, remove, relocate or supplement Equipment where ETM reasonably considers it necessary for safety, compliance or protection of Equipment. Any additional cost is chargeable to the Customer.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">34.5 Weather and stability</h3>
                  <p>The Customer acknowledges that traffic management equipment may be affected by wind, rain, flooding, impact, vandalism or third-party movement. Additional inspections, ballast, reinstatement, replacement or emergency attendance required due to such matters shall be chargeable.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">34.6 Customer works overruns</h3>
                  <p>If the Customer’s Works overrun beyond the planned duration, the Customer shall be responsible for extending Permits, notifying Authorities, paying all additional Charges and indemnifying ETM against all resulting penalties, claims and costs.</p>
                </div>
              </div>
            </section>

            <section id="entire-agreement">
              <h2 className="text-2xl font-bold text-primary mb-4">35. Entire Agreement</h2>
              <p>The Contract constitutes the entire agreement between ETM and the Customer and supersedes all prior discussions, correspondence, representations, arrangements and understandings relating to the Services or Equipment.</p>
            </section>

            <div className="pt-8 mt-12 border-t border-gray-200 text-sm text-gray-500">
              <p className="font-bold text-gray-900 mb-1">ETM TRAFFIC MANAGEMENT LTD</p>
              <p>Company number: 14984509</p>
              <p>Registered office: Wellington House, 273–275 High Street, London Colney, Hertfordshire, United Kingdom, AL2 1HA</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
