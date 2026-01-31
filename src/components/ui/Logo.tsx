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
        "rounded-xl bg-primary flex items-center justify-center",
        sizeClasses[size],
        className
      )}
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[65%] h-[65%]"
      >
        {/* Main shape - abstract crew/team symbol */}
        <path
          d="M16 4C16 4 8 8 8 16C8 20 10 24 16 28C22 24 24 20 24 16C24 8 16 4 16 4Z"
          fill="currentColor"
          className="text-primary-foreground"
        />
        {/* Inner accent - connection symbol */}
        <circle
          cx="16"
          cy="14"
          r="3"
          fill="currentColor"
          className="text-primary"
        />
        {/* Two connected dots representing collaboration */}
        <circle
          cx="12"
          cy="18"
          r="2"
          fill="currentColor"
          className="text-primary-foreground"
        />
        <circle
          cx="20"
          cy="18"
          r="2"
          fill="currentColor"
          className="text-primary-foreground"
        />
        {/* Connection lines */}
        <path
          d="M14 18H18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-primary-foreground"
        />
        <path
          d="M16 14V17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-primary-foreground"
        />
      </svg>
    </div>
  );
}
