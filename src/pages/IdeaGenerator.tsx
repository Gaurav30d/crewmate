import { useState } from "react";
import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { InputCard } from "@/components/tools/InputCard";
import { FormField } from "@/components/tools/FormField";
import { SelectField } from "@/components/tools/SelectField";
import { ChipSelect } from "@/components/tools/ChipSelect";
import { Button } from "@/components/ui/button";
import { Sparkles, Bookmark, TrendingUp, Clock, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const platformOptions = [
  { value: "instagram", label: "Instagram" },
  { value: "youtube", label: "YouTube" },
  { value: "tiktok", label: "TikTok" },
  { value: "twitter", label: "Twitter/X" },
];

const contentTypes = ["Educational", "Entertainment", "Behind-the-scenes", "Tutorial", "Storytime", "Trends"];

const mockIdeas = [
  {
    title: "Day in the Life as a Content Creator",
    type: "Behind-the-scenes",
    potential: "High",
    difficulty: "Easy",
    description: "Show your authentic daily routine, including content creation, editing, and engagement time.",
  },
  {
    title: "3 Tools Every Creator Needs in 2024",
    type: "Educational",
    potential: "Very High",
    difficulty: "Medium",
    description: "Break down your essential tools with quick demos and affiliate opportunities.",
  },
  {
    title: "My Biggest Content Mistake (And How I Fixed It)",
    type: "Storytime",
    potential: "High",
    difficulty: "Easy",
    description: "Vulnerable content performs well. Share a real failure and the lesson learned.",
  },
  {
    title: "Reacting to My First Video vs Now",
    type: "Entertainment",
    potential: "Medium",
    difficulty: "Easy",
    description: "Growth comparison content with humor and self-deprecation.",
  },
  {
    title: "How I Edit My Videos in Under 1 Hour",
    type: "Tutorial",
    potential: "Very High",
    difficulty: "Medium",
    description: "Time-saving tutorial with screen recording. Great for engagement.",
  },
];

const IdeaGenerator = () => {
  const [niche, setNiche] = useState("");
  const [platform, setPlatform] = useState("");
  const [contentType, setContentType] = useState<string[]>([]);
  const [generatedIdeas, setGeneratedIdeas] = useState<typeof mockIdeas>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = () => {
    setIsLoading(true);
    setTimeout(() => {
      setGeneratedIdeas(mockIdeas);
      setIsLoading(false);
    }, 1500);
  };

  const handleSaveIdea = (title: string) => {
    toast({
      title: "Idea saved!",
      description: `"${title}" has been added to your library.`,
    });
  };

  const getPotentialColor = (potential: string) => {
    switch (potential) {
      case "Very High":
        return "text-green-600 bg-green-50";
      case "High":
        return "text-blue-600 bg-blue-50";
      default:
        return "text-amber-600 bg-amber-50";
    }
  };

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
            Idea Generator
          </h1>
          <p className="text-muted-foreground">
            Never run out of content ideas again
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <InputCard>
              <h3 className="font-semibold text-lg text-foreground mb-6">
                Tell us about your content
              </h3>
              
              <div className="space-y-5">
                <FormField
                  label="Your Niche"
                  placeholder="e.g., Tech reviews, Fitness, Personal finance"
                  value={niche}
                  onChange={setNiche}
                />

                <SelectField
                  label="Primary Platform"
                  placeholder="Choose your platform"
                  value={platform}
                  onChange={setPlatform}
                  options={platformOptions}
                />

                <ChipSelect
                  label="Content Types"
                  options={contentTypes}
                  selected={contentType}
                  onChange={setContentType}
                  multiSelect
                />

                <Button 
                  variant="accent" 
                  size="lg" 
                  className="w-full mt-6"
                  onClick={handleGenerate}
                  disabled={!niche || isLoading}
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Generate Ideas
                </Button>
              </div>
            </InputCard>
          </motion.div>

          {/* Output Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h3 className="font-semibold text-lg text-foreground mb-4">
              Content Ideas
            </h3>
            
            {isLoading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-card rounded-2xl border border-border p-6 animate-pulse">
                    <div className="h-5 bg-muted rounded w-2/3 mb-3" />
                    <div className="h-4 bg-muted rounded w-full mb-2" />
                    <div className="h-4 bg-muted rounded w-3/4" />
                  </div>
                ))}
              </div>
            ) : generatedIdeas.length > 0 ? (
              <div className="space-y-4">
                {generatedIdeas.map((idea, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover p-6 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                        {idea.title}
                      </h4>
                      <button 
                        onClick={() => handleSaveIdea(idea.title)}
                        className="p-2 rounded-lg hover:bg-secondary transition-colors"
                      >
                        <Bookmark className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {idea.description}
                    </p>
                    
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-secondary text-secondary-foreground text-xs font-medium">
                        {idea.type}
                      </span>
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium ${getPotentialColor(idea.potential)}`}>
                        <TrendingUp className="w-3 h-3" />
                        {idea.potential} Potential
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-secondary text-secondary-foreground text-xs font-medium">
                        <Clock className="w-3 h-3" />
                        {idea.difficulty}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="bg-card rounded-2xl border border-border border-dashed p-12 flex flex-col items-center justify-center text-center">
                <Users className="w-12 h-12 text-muted-foreground/50 mb-4" />
                <p className="text-muted-foreground">
                  Fill in your details and generate ideas
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default IdeaGenerator;
