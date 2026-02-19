import { cn } from "@/lib/utils";

interface InputCardProps {
  children: React.ReactNode;
  className?: string;
}

export function InputCard({ children, className }: InputCardProps) {
  return (
    <div className={cn(
      "bg-card rounded-2xl border border-border shadow-card p-6",
      className
    )}>
      {children}
    </div>
  );
}
