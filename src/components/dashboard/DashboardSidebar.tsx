import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Lightbulb,
  Zap,
  Hash,
  FileText,
  TrendingUp,
  BarChart3,
  Users,
  Briefcase,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/tools" },
  { name: "Idea Generator", icon: Zap, path: "/tools/idea-generator" },
  { name: "Hook Generator", icon: Lightbulb, path: "/tools/hook-generator" },
  { name: "Caption Generator", icon: Hash, path: "/tools/caption-generator" },
  { name: "Script Writer", icon: FileText, path: "/tools/script-writer" },
  { name: "Trending Ideas", icon: TrendingUp, path: "/tools/trending" },
  { divider: true },
  { name: "Insights", icon: BarChart3, path: "/insights" },
  { name: "Community", icon: Users, path: "/community" },
  { name: "Brand Deals", icon: Briefcase, path: "/brand-deals" },
];

interface DashboardSidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export function DashboardSidebar({ isCollapsed, onToggle }: DashboardSidebarProps) {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/tools") {
      return location.pathname === "/tools";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 72 : 260 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="h-screen bg-sidebar border-r border-sidebar-border flex flex-col sticky top-0"
    >
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border flex items-center justify-between">
        {!isCollapsed && (
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">C</span>
            </div>
            <span className="font-semibold text-foreground">CreatorHub</span>
          </Link>
        )}
        {isCollapsed && (
          <Link to="/" className="mx-auto">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">C</span>
            </div>
          </Link>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {sidebarItems.map((item, index) => {
          if ('divider' in item && item.divider) {
            return <div key={index} className="my-4 border-t border-sidebar-border" />;
          }
          
          const Icon = item.icon!;
          const active = isActive(item.path!);

          return (
            <Link
              key={item.path}
              to={item.path!}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                active
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
              )}
            >
              <Icon className={cn("w-5 h-5 flex-shrink-0", active && "text-accent")} />
              {!isCollapsed && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Toggle Button */}
      <div className="p-3 border-t border-sidebar-border">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-sm text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors"
        >
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <>
              <ChevronLeft className="w-5 h-5" />
              <span>Collapse</span>
            </>
          )}
        </button>
      </div>
    </motion.aside>
  );
}
