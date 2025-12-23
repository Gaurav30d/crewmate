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

const formatOptions = [
  { value: "short", label: "Short (15-60s)" },
  { value: "medium", label: "Medium (1-3 min)" },
  { value: "long", label: "Long (5-10 min)" },
  { value: "podcast", label: "Podcast Segment" },
];

const ctaOptions = ["Subscribe", "Follow", "Comment", "Share", "Link in Bio", "No CTA"];

const mockScript = `[HOOK - 0:00]
"Most creators are making this one mistake that's killing their growth..."

[INTRO - 0:05]
Hey, I'm [Name], and after working with hundreds of creators, I've noticed a pattern that separates those who grow from those who stay stuck.

[MAIN CONTENT - 0:15]
The mistake? Focusing on quantity over quality... but not in the way you think.

It's not about spending weeks on one video. It's about spending 80% of your time on the first 3 seconds.

Here's why:
- The algorithm decides in the first second
- Your viewer decides in the first three
- Everything else is just retention

[EXAMPLE - 0:45]
Look at this creator. Same niche, same posting schedule, but 10x the views. The difference? Their hooks.

[CTA - 1:15]
If this helped, hit follow for more creator tips. And comment "HOOK" if you want my swipe file of 50 viral hooks.

[OUTRO - 1:25]
See you in the next one.`;

const ScriptWriter = () => {
  const [topic, setTopic] = useState("");
  const [format, setFormat] = useState("");
  const [audience, setAudience] = useState("");
  const [cta, setCta] = useState<string[]>([]);
  const [generatedScript, setGeneratedScript] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = () => {
    setIsLoading(true);
    setTimeout(() => {
      setGeneratedScript(mockScript);
      setIsLoading(false);
    }, 2000);
  };

  const inputSection = (
    <InputCard>
      <h3 className="font-semibold text-lg text-foreground mb-6">Build your script</h3>
      
      <div className="space-y-5">
        <FormField
          label="Video Topic"
          placeholder="What's your video about? Be specific for better results."
          value={topic}
          onChange={setTopic}
          type="textarea"
        />

        <SelectField
          label="Video Format"
          placeholder="Choose video length"
          value={format}
          onChange={setFormat}
          options={formatOptions}
        />

        <FormField
          label="Target Audience"
          placeholder="Who are you creating this for? (e.g., beginner creators)"
          value={audience}
          onChange={setAudience}
        />

        <ChipSelect
          label="Call to Action"
          options={ctaOptions}
          selected={cta}
          onChange={setCta}
          multiSelect
        />

        <Button 
          variant="accent" 
          size="lg" 
          className="w-full mt-6"
          onClick={handleGenerate}
          disabled={!topic || isLoading}
        >
          <Sparkles className="w-5 h-5 mr-2" />
          Generate Script
        </Button>
      </div>
    </InputCard>
  );

  const outputSection = (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg text-foreground">Your Script</h3>
      <OutputCard
        content={generatedScript}
        isLoading={isLoading}
        onRegenerate={handleGenerate}
      />
    </div>
  );

  return (
    <DashboardLayout>
      <ToolLayout
        title="Script Writer"
        description="AI-powered scripts for any content format"
        inputSection={inputSection}
        outputSection={outputSection}
      />
    </DashboardLayout>
  );
};

export default ScriptWriter;
