import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import {
  Lightbulb,
  Zap,
  Hash,
  FileText,
  TrendingUp,
} from "lucide-react";

const tools = [
  {
    icon: Zap,
    title: "Idea Generator",
    description: "Never run out of content ideas. Get AI-powered suggestions tailored to your niche.",
    path: "/tools/idea-generator",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: Lightbulb,
    title: "Hook Generator",
    description: "Create attention-grabbing hooks that stop the scroll and boost engagement.",
    path: "/tools/hook-generator",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Hash,
    title: "Caption & Hashtags",
    description: "Generate engaging captions with optimal hashtags for maximum reach.",
    path: "/tools/caption-generator",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: FileText,
    title: "Script Writer",
    description: "AI-powered scripts for any content format — shorts, reels, or long-form.",
    path: "/tools/script-writer",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: TrendingUp,
    title: "Trending Ideas",
    description: "Discover what's trending in your niche and capitalize on viral moments.",
    path: "/tools/trending",
    color: "bg-green-50 text-green-600",
  },
];

const Tools = () => {
  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
            Creator Tools
          </h1>
          <p className="text-muted-foreground">
            Everything you need to create amazing content
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={tool.path}
                className="group block p-6 bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${tool.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <tool.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {tool.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tool.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <div className="p-6 bg-card rounded-2xl border border-border">
            <p className="text-2xl font-bold text-foreground">127</p>
            <p className="text-sm text-muted-foreground">Content Generated</p>
          </div>
          <div className="p-6 bg-card rounded-2xl border border-border">
            <p className="text-2xl font-bold text-foreground">24</p>
            <p className="text-sm text-muted-foreground">Saved Ideas</p>
          </div>
          <div className="p-6 bg-card rounded-2xl border border-border">
            <p className="text-2xl font-bold text-foreground">8</p>
            <p className="text-sm text-muted-foreground">Scripts Written</p>
          </div>
          <div className="p-6 bg-card rounded-2xl border border-border">
            <p className="text-2xl font-bold text-foreground">3.2K</p>
            <p className="text-sm text-muted-foreground">Hooks Created</p>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Tools;
