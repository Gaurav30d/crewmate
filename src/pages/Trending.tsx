import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Flame, 
  Clock, 
  Eye,
  ExternalLink,
  Bookmark
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const trendingTopics = [
  {
    id: 1,
    title: "AI Tools for Content Creation",
    category: "Tech",
    growth: "+245%",
    views: "2.4M",
    timeframe: "Last 7 days",
    hot: true,
    description: "Creators are using AI to generate scripts, hooks, and edit videos faster than ever.",
  },
  {
    id: 2,
    title: "Day in My Life Vlogs",
    category: "Lifestyle",
    growth: "+89%",
    views: "1.8M",
    timeframe: "Last 7 days",
    hot: false,
    description: "Authentic, unfiltered daily vlogs continue to resonate with audiences seeking relatability.",
  },
  {
    id: 3,
    title: "Study With Me Sessions",
    category: "Education",
    growth: "+156%",
    views: "980K",
    timeframe: "Last 7 days",
    hot: true,
    description: "Productivity content is booming as students and professionals seek focus companions.",
  },
  {
    id: 4,
    title: "Budget-Friendly Recipes",
    category: "Food",
    growth: "+67%",
    views: "1.2M",
    timeframe: "Last 7 days",
    hot: false,
    description: "Economic content resonates as viewers look for ways to save money on meals.",
  },
  {
    id: 5,
    title: "Minimalist Home Tours",
    category: "Home",
    growth: "+112%",
    views: "750K",
    timeframe: "Last 7 days",
    hot: false,
    description: "Clean, organized spaces continue to inspire viewers looking to declutter.",
  },
];

const trendingSounds = [
  { name: "Original sound - lofi beats", uses: "1.2M", growth: "+45%" },
  { name: "POV transition audio", uses: "890K", growth: "+78%" },
  { name: "Storytelling whisper", uses: "567K", growth: "+34%" },
];

const Trending = () => {
  const { toast } = useToast();

  const handleSave = (title: string) => {
    toast({
      title: "Trend saved!",
      description: `"${title}" has been added to your saved trends.`,
    });
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
            Trending Ideas
          </h1>
          <p className="text-muted-foreground">
            Discover what's trending in your niche and capitalize on viral moments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card rounded-2xl border border-border shadow-card p-6 mb-6"
            >
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5 text-accent" />
                <h2 className="font-semibold text-lg text-foreground">
                  Hot Topics This Week
                </h2>
              </div>

              <div className="space-y-4">
                {trendingTopics.map((topic, index) => (
                  <motion.div
                    key={topic.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-background text-sm font-bold text-muted-foreground">
                      {index + 1}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                          {topic.title}
                        </h3>
                        {topic.hot && (
                          <Flame className="w-4 h-4 text-orange-500" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {topic.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3 text-green-500" />
                          {topic.growth}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {topic.views} views
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {topic.timeframe}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-background text-xs font-medium text-muted-foreground">
                        {topic.category}
                      </span>
                      <button 
                        onClick={() => handleSave(topic.title)}
                        className="p-2 rounded-lg hover:bg-background transition-colors"
                      >
                        <Bookmark className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Trending Sounds */}
            <div className="bg-card rounded-2xl border border-border shadow-card p-6">
              <h3 className="font-semibold text-foreground mb-4">
                🎵 Trending Sounds
              </h3>
              <div className="space-y-3">
                {trendingSounds.map((sound) => (
                  <div
                    key={sound.name}
                    className="p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer"
                  >
                    <p className="text-sm font-medium text-foreground mb-1 truncate">
                      {sound.name}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{sound.uses} uses</span>
                      <span className="text-green-500">{sound.growth}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-card rounded-2xl border border-border shadow-card p-6">
              <h3 className="font-semibold text-foreground mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Export Trends Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Clock className="w-4 h-4 mr-2" />
                  Set Trend Alerts
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Trending;
