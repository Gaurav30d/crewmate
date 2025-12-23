import { motion } from "framer-motion";
import { 
  Lightbulb, 
  Hash, 
  FileText, 
  TrendingUp, 
  Users, 
  Briefcase, 
  BarChart3,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Lightbulb,
    title: "Hook Generator",
    description: "Create attention-grabbing hooks that stop the scroll",
    color: "bg-amber-50 text-amber-600",
    link: "/tools/hook-generator",
  },
  {
    icon: Hash,
    title: "Caption & Hashtags",
    description: "Generate engaging captions with optimal hashtags",
    color: "bg-blue-50 text-blue-600",
    link: "/tools/caption-generator",
  },
  {
    icon: FileText,
    title: "Script Writer",
    description: "AI-powered scripts for any content format",
    color: "bg-purple-50 text-purple-600",
    link: "/tools/script-writer",
  },
  {
    icon: TrendingUp,
    title: "Trending Content",
    description: "Discover what's trending in your niche",
    color: "bg-green-50 text-green-600",
    link: "/tools/trending",
  },
  {
    icon: Users,
    title: "Creator Community",
    description: "Connect, share, and grow with fellow creators",
    color: "bg-pink-50 text-pink-600",
    link: "/community",
  },
  {
    icon: Briefcase,
    title: "Brand Deals",
    description: "Find and apply to brand collaborations",
    color: "bg-orange-50 text-orange-600",
    link: "/brand-deals",
  },
  {
    icon: BarChart3,
    title: "Creator Insights",
    description: "Understand your performance with AI analytics",
    color: "bg-cyan-50 text-cyan-600",
    link: "/insights",
  },
  {
    icon: Zap,
    title: "Idea Generator",
    description: "Never run out of content ideas again",
    color: "bg-violet-50 text-violet-600",
    link: "/tools/idea-generator",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            All the tools you need
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything to create, grow, and monetize — in one beautiful platform
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link
                to={feature.link}
                className="group block p-6 bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
