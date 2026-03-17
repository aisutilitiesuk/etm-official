import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  tags: string[];
}

export function CaseStudyCard({ title, description, image, href, tags }: CaseStudyCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
      <div className="relative h-48 sm:h-64 bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="flex-1 p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="link" className="p-0 h-auto text-accent hover:text-accent/80">
          <Link href={href} className="flex items-center gap-2">
            Read Case Study
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
