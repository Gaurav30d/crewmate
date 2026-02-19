import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { InputCard } from "@/components/tools/InputCard";
import { OutputCard } from "@/components/tools/OutputCard";
import { FormField } from "@/components/tools/FormField";
import { SelectField } from "@/components/tools/SelectField";
import { ChipSelect } from "@/components/tools/ChipSelect";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const platformOptions = [
  { value: "instagram", label: "Instagram" },
  { value: "youtube", label: "YouTube" },
  { value: "tiktok", label: "TikTok" },
  { value: "twitter", label: "Twitter/X" },
];

const toneOptions = ["Casual", "Funny", "Educational", "Bold", "Inspiring", "Controversial"];

const mockHooks = [
  "Stop scrolling if you've ever felt stuck with content ideas...",
  "Here's the secret most successful creators won't tell you...",
  "I wasted 6 months before discovering this simple trick...",
  "POV: You just found the hack that changes everything...",
  "Nobody talks about this, but it's the #1 reason creators fail...",
];

const HookGenerator = () => {
  const [topic, setTopic] = useState("");
  const [platform, setPlatform] = useState("");
  const [tone, setTone] = useState<string[]>([]);
  const [niche, setNiche] = useState("");
  const [generatedHooks, setGeneratedHooks] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setGeneratedHooks(mockHooks);
      setIsLoading(false);
    }, 1500);
  };

  const handleRegenerate = () => {
    handleGenerate();
  };

  const inputSection = (
    <InputCard>
      <h3 className="font-semibold text-lg text-foreground mb-6">Configure your hook</h3>
      
      <div className="space-y-5">
        <FormField
          label="Content Topic"
          placeholder="What's your video about? (e.g., productivity tips for creators)"
          value={topic}
          onChange={setTopic}
          type="textarea"
        />

        <SelectField
          label="Platform"
          placeholder="Choose your platform"
          value={platform}
          onChange={setPlatform}
          options={platformOptions}
        />

        <ChipSelect
          label="Tone"
          options={toneOptions}
          selected={tone}
          onChange={setTone}
        />

        <FormField
          label="Niche (Optional)"
          placeholder="e.g., Tech, Fitness, Finance, Lifestyle"
          value={niche}
          onChange={setNiche}
        />

        <Button 
          variant="accent" 
          size="lg" 
          className="w-full mt-6"
          onClick={handleGenerate}
          disabled={!topic || isLoading}
        >
          <Sparkles className="w-5 h-5 mr-2" />
          Generate Hooks
        </Button>
      </div>
    </InputCard>
  );

  const outputSection = (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg text-foreground">Generated Hooks</h3>
      
      {isLoading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <OutputCard key={i} content="" isLoading />
          ))}
        </div>
      ) : generatedHooks.length > 0 ? (
        <div className="space-y-4">
          {generatedHooks.map((hook, index) => (
            <OutputCard
              key={index}
              title={`Hook ${index + 1}`}
              content={hook}
              onRegenerate={handleRegenerate}
            />
          ))}
        </div>
      ) : (
        <OutputCard content="" />
      )}
    </div>
  );

  return (
    <DashboardLayout>
      <ToolLayout
        title="Hook Generator"
        description="Create attention-grabbing hooks that stop the scroll"
        inputSection={inputSection}
        outputSection={outputSection}
      />
    </DashboardLayout>
  );
};

export default HookGenerator;
