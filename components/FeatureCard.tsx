import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative flex flex-col items-start p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-300 rounded-2xl" />

      <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 group-hover:bg-accent/10 transition-colors duration-300">
        <Icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" />
      </div>

      <h3 className="relative text-base font-bold text-primary mb-2">{title}</h3>
      <p className="relative text-sm text-gray-500 leading-relaxed">{description}</p>

      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent group-hover:w-full transition-all duration-500 rounded-b-2xl" />
    </div>
  );
}
