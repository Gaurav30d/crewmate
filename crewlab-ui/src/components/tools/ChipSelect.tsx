import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface ChipSelectProps {
  label: string;
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  multiSelect?: boolean;
  className?: string;
}

export function ChipSelect({ 
  label, 
  options, 
  selected, 
  onChange, 
  multiSelect = false,
  className 
}: ChipSelectProps) {
  const handleClick = (option: string) => {
    if (multiSelect) {
      if (selected.includes(option)) {
        onChange(selected.filter((s) => s !== option));
      } else {
        onChange([...selected, option]);
      }
    } else {
      onChange([option]);
    }
  };

  return (
    <div className={cn("space-y-3", className)}>
      <Label className="text-sm font-medium text-foreground">{label}</Label>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = selected.includes(option);
          return (
            <button
              key={option}
              type="button"
              onClick={() => handleClick(option)}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                isSelected
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
