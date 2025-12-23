import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Ready to level up your content?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Join thousands of creators already using CreatorHub to grow their audience and income.
          </p>
          <Link to="/tools">
            <Button 
              size="xl" 
              className="bg-card text-foreground hover:bg-card/90 shadow-lg hover:shadow-xl group"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
