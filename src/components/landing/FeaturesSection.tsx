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
    color: "bg-amber-500/10 text-amber-500 dark:bg-amber-500/20",
    link: "/tools/hook-generator",
  },
  {
    icon: Hash,
    title: "Caption & Hashtags",
    description: "Generate engaging captions with optimal hashtags",
    color: "bg-blue-500/10 text-blue-500 dark:bg-blue-500/20",
    link: "/tools/caption-generator",
  },
  {
    icon: FileText,
    title: "Script Writer",
    description: "AI-powered scripts for any content format",
    color: "bg-purple-500/10 text-purple-500 dark:bg-purple-500/20",
    link: "/tools/script-writer",
  },
  {
    icon: TrendingUp,
    title: "Trending Content",
    description: "Discover what's trending in your niche",
    color: "bg-green-500/10 text-green-500 dark:bg-green-500/20",
    link: "/tools/trending",
  },
  {
    icon: Users,
    title: "Creator Community",
    description: "Connect, share, and grow with fellow creators",
    color: "bg-pink-500/10 text-pink-500 dark:bg-pink-500/20",
    link: "/community",
  },
  {
    icon: Briefcase,
    title: "Brand Deals",
    description: "Find and apply to brand collaborations",
    color: "bg-orange-500/10 text-orange-500 dark:bg-orange-500/20",
    link: "/brand-deals",
  },
  {
    icon: BarChart3,
    title: "Creator Insights",
    description: "Understand your performance with AI analytics",
    color: "bg-cyan-500/10 text-cyan-500 dark:bg-cyan-500/20",
    link: "/insights",
  },
  {
    icon: Zap,
    title: "Idea Generator",
    description: "Never run out of content ideas again",
    color: "bg-violet-500/10 text-violet-500 dark:bg-violet-500/20",
    link: "/tools/idea-generator",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background">
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

        {/* Features Grid */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <StaggerItem key={feature.title} pop>
              <Link
                to={feature.link}
                className="group block h-full"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="h-full p-6 bg-card rounded-2xl border border-border shadow-card hover:shadow-xl hover:border-accent/30 transition-all duration-300"
                >
                  <motion.div 
                    className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <feature.icon className="w-6 h-6" />
                  </motion.div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
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
