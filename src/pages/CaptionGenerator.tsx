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
  { value: "tiktok", label: "TikTok" },
  { value: "twitter", label: "Twitter/X" },
  { value: "linkedin", label: "LinkedIn" },
];

const styleOptions = ["Short & Punchy", "Storytelling", "Educational", "Humorous", "Motivational"];

const mockCaption = `✨ The secret to creating content that actually connects?

It's not about going viral. It's about showing up consistently with value.

Here's what I've learned after posting 500+ pieces of content:

→ Authenticity beats perfection
→ Stories outperform stats
→ Engagement starts with YOU

Save this for your next content block moment 💡

#ContentCreator #SocialMediaTips #CreatorEconomy #GrowthMindset #ContentStrategy`;

const CaptionGenerator = () => {
  const [topic, setTopic] = useState("");
  const [platform, setPlatform] = useState("");
  const [style, setStyle] = useState<string[]>([]);
  const [hashtags, setHashtags] = useState("5");
  const [generatedCaption, setGeneratedCaption] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = () => {
    setIsLoading(true);
    setTimeout(() => {
      setGeneratedCaption(mockCaption);
      setIsLoading(false);
    }, 1500);
  };

  const inputSection = (
    <InputCard>
      <h3 className="font-semibold text-lg text-foreground mb-6">Create your caption</h3>
      
      <div className="space-y-5">
        <FormField
          label="What's the post about?"
          placeholder="Describe your content or upload context"
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
          label="Caption Style"
          options={styleOptions}
          selected={style}
          onChange={setStyle}
        />

        <SelectField
          label="Number of Hashtags"
          value={hashtags}
          onChange={setHashtags}
          options={[
            { value: "0", label: "No hashtags" },
            { value: "5", label: "5 hashtags" },
            { value: "10", label: "10 hashtags" },
            { value: "15", label: "15 hashtags" },
          ]}
        />

        <Button 
          variant="accent" 
          size="lg" 
          className="w-full mt-6"
          onClick={handleGenerate}
          disabled={!topic || isLoading}
        >
          <Sparkles className="w-5 h-5 mr-2" />
          Generate Caption
        </Button>
      </div>
    </InputCard>
  );

  const outputSection = (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg text-foreground">Your Caption</h3>
      <OutputCard
        content={generatedCaption}
        isLoading={isLoading}
        onRegenerate={handleGenerate}
      />
    </div>
  );

  return (
    <DashboardLayout>
      <ToolLayout
        title="Caption & Hashtag Generator"
        description="Generate engaging captions with optimal hashtags"
        inputSection={inputSection}
        outputSection={outputSection}
      />
    </DashboardLayout>
  );
};

export default CaptionGenerator;
