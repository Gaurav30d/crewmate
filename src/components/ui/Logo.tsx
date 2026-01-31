import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  return (
    <div
      className={cn(
        "rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-lg shadow-accent/25",
        sizeClasses[size],
        className
      )}
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[70%] h-[70%]"
      >
        {/* Central hub - represents the creator */}
        <circle
          cx="16"
          cy="16"
          r="5"
          fill="currentColor"
          className="text-accent-foreground"
        />
        
        {/* Three orbiting elements - representing the crew/community */}
        <circle
          cx="16"
          cy="6"
          r="3"
          fill="currentColor"
          className="text-accent-foreground/90"
        />
        <circle
          cx="7.5"
          cy="22"
          r="3"
          fill="currentColor"
          className="text-accent-foreground/90"
        />
        <circle
          cx="24.5"
          cy="22"
          r="3"
          fill="currentColor"
          className="text-accent-foreground/90"
        />
        
        {/* Connection lines forming a triangle - unity/collaboration */}
        <path
          d="M16 9L16 11"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-accent-foreground/70"
        />
        <path
          d="M13.5 17.5L9.5 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-accent-foreground/70"
        />
        <path
          d="M18.5 17.5L22.5 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-accent-foreground/70"
        />
        
        {/* Outer connecting arc - represents infinite creativity */}
        <path
          d="M9 19C7 15 9 9 16 6"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          className="text-accent-foreground/40"
        />
        <path
          d="M23 19C25 15 23 9 16 6"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          className="text-accent-foreground/40"
        />
        <path
          d="M9.5 24C12 27 20 27 22.5 24"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          className="text-accent-foreground/40"
        />
      </svg>
    </div>
  );
}
