import { motion } from "framer-motion";
import { Shield, Users, Heart } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const trustItems = [
  {
    icon: Users,
    title: "Built for Creators",
    description: "Every feature designed with creators in mind",
  },
  {
    icon: Heart,
    title: "Creator-First Platform",
    description: "Your success is our priority",
  },
  {
    icon: Shield,
    title: "Brand Safe & Transparent",
    description: "Trusted by creators and brands alike",
  },
];

export function TrustSection() {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          {trustItems.map((item) => (
            <StaggerItem key={item.title}>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-3 cursor-default"
              >
                <motion.div 
                  className="w-10 h-10 rounded-lg bg-accent-soft flex items-center justify-center"
                  whileHover={{ rotate: 5 }}
                >
                  <item.icon className="w-5 h-5 text-accent" />
                </motion.div>
                <div>
                  <p className="font-medium text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
