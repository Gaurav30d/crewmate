import { motion } from "framer-motion";
import { Copy, RefreshCw, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface OutputCardProps {
  title?: string;
  content: string;
  isLoading?: boolean;
  onRegenerate?: () => void;
  className?: string;
}

export function OutputCard({ title, content, isLoading, onRegenerate, className }: OutputCardProps) {
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    toast({
      title: "Copied!",
      description: "Content copied to clipboard",
    });
  };

  const handleSave = () => {
    toast({
      title: "Saved!",
      description: "Added to your library",
    });
  };

  if (isLoading) {
    return (
      <div className={cn(
        "bg-card rounded-2xl border border-border shadow-card p-6",
        className
      )}>
        <div className="space-y-4 animate-pulse">
          <div className="h-4 bg-muted rounded w-3/4" />
          <div className="h-4 bg-muted rounded w-full" />
          <div className="h-4 bg-muted rounded w-5/6" />
          <div className="h-4 bg-muted rounded w-2/3" />
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className={cn(
        "bg-card rounded-2xl border border-border border-dashed shadow-card p-6 flex items-center justify-center min-h-[200px]",
        className
      )}>
        <p className="text-muted-foreground text-center">
          Your generated content will appear here
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn(
        "bg-card rounded-2xl border border-border shadow-card p-6",
        className
      )}
    >
      {title && (
        <h4 className="text-sm font-medium text-muted-foreground mb-3">{title}</h4>
      )}
      <p className="text-foreground leading-relaxed whitespace-pre-wrap mb-4">
        {content}
      </p>
      <div className="flex items-center gap-2 pt-4 border-t border-border">
        <Button variant="ghost" size="sm" onClick={handleCopy}>
          <Copy className="w-4 h-4 mr-2" />
          Copy
        </Button>
        <Button variant="ghost" size="sm" onClick={handleSave}>
          <Bookmark className="w-4 h-4 mr-2" />
          Save
        </Button>
        {onRegenerate && (
          <Button variant="ghost" size="sm" onClick={onRegenerate} className="ml-auto">
            <RefreshCw className="w-4 h-4 mr-2" />
            Regenerate
          </Button>
        )}
      </div>
    </motion.div>
  );
}
