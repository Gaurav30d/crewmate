import { motion } from "framer-motion";
import { 
  Lightbulb, 
  Hash, 
  FileText, 
  TrendingUp, 
  Users, 
  Briefcase, 
  BarChart3,
  Zap,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const features = [
  {
    icon: Lightbulb,
    title: "Hook Generator",
    description: "Create attention-grabbing hooks that stop the scroll",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10 dark:bg-amber-500/20",
    link: "/tools/hook-generator",
  },
  {
    icon: Hash,
    title: "Caption & Hashtags",
    description: "Generate engaging captions with optimal hashtags",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10 dark:bg-blue-500/20",
    link: "/tools/caption-generator",
  },
  {
    icon: FileText,
    title: "Script Writer",
    description: "AI-powered scripts for any content format",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10 dark:bg-purple-500/20",
    link: "/tools/script-writer",
  },
  {
    icon: TrendingUp,
    title: "Trending Content",
    description: "Discover what's trending in your niche",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10 dark:bg-green-500/20",
    link: "/tools/trending",
  },
  {
    icon: Users,
    title: "Creator Community",
    description: "Connect, share, and grow with fellow creators",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10 dark:bg-pink-500/20",
    link: "/community",
  },
  {
    icon: Briefcase,
    title: "Brand Deals",
    description: "Find and apply to brand collaborations",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10 dark:bg-orange-500/20",
    link: "/brand-deals",
  },
  {
    icon: BarChart3,
    title: "Creator Insights",
    description: "Understand your performance with AI analytics",
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-500/10 dark:bg-cyan-500/20",
    link: "/insights",
  },
  {
    icon: Zap,
    title: "Idea Generator",
    description: "Never run out of content ideas again",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-500/10 dark:bg-violet-500/20",
    link: "/tools/idea-generator",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            All the tools you need
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything to create, grow, and monetize — in one beautiful platform
          </p>
        </ScrollReveal>

        {/* Features Grid - Redesigned as attractive buttons */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature) => (
            <StaggerItem key={feature.title} pop>
              <Link
                to={feature.link}
                className="group block h-full"
              >
                <motion.div
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="relative h-full overflow-hidden"
                >
                  {/* Gradient border effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Card content */}
                  <div className="relative h-full m-[2px] p-6 bg-card rounded-2xl border border-border group-hover:border-transparent transition-all duration-300 flex flex-col">
                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`} />
                    
                    {/* Icon with animated background */}
                    <motion.div 
                      className={`relative w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 overflow-hidden`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {/* Icon gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      <feature.icon className="w-7 h-7 relative z-10 transition-colors duration-300 group-hover:text-white" />
                    </motion.div>
                    
                    {/* Title with arrow */}
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors duration-200">
                        {feature.title}
                      </h3>
                      <motion.div
                        initial={{ x: -5, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      >
                        <ArrowRight className="w-4 h-4 text-accent" />
                      </motion.div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                      {feature.description}
                    </p>
                    
                    {/* CTA indicator */}
                    <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between">
                      <span className="text-xs font-medium text-muted-foreground group-hover:text-accent transition-colors">
                        Try now
                      </span>
                      <motion.div
                        className={`w-8 h-8 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300`}
                        whileHover={{ scale: 1.1 }}
                      >
                        <ArrowRight className="w-4 h-4 text-white" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <ScrollReveal delay={0.4} className="text-center mt-12">
          <Link to="/tools">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block"
            >
              <Button variant="outline" size="lg" className="group">
                Explore All Tools
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
