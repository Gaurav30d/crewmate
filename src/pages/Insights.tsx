import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { 
  TrendingUp, 
  TrendingDown, 
  Eye, 
  Heart, 
  MessageCircle, 
  Share2,
  Lightbulb,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  {
    label: "Total Views",
    value: "124.5K",
    change: "+12.3%",
    trend: "up",
    icon: Eye,
  },
  {
    label: "Engagement Rate",
    value: "8.2%",
    change: "+2.1%",
    trend: "up",
    icon: Heart,
  },
  {
    label: "Comments",
    value: "3,247",
    change: "-5.4%",
    trend: "down",
    icon: MessageCircle,
  },
  {
    label: "Shares",
    value: "1,892",
    change: "+18.7%",
    trend: "up",
    icon: Share2,
  },
];

const topContent = [
  {
    title: "How I Grew to 10K Followers in 30 Days",
    views: "45.2K",
    engagement: "12.4%",
    platform: "Instagram",
  },
  {
    title: "5 Tools Every Creator Needs",
    views: "32.1K",
    engagement: "9.8%",
    platform: "YouTube",
  },
  {
    title: "Morning Routine That Changed My Life",
    views: "28.7K",
    engagement: "11.2%",
    platform: "TikTok",
  },
];

const aiSuggestions = [
  {
    type: "success",
    title: "Your hook format is working",
    description: "Videos starting with 'Here's what nobody tells you...' have 3x higher retention.",
  },
  {
    type: "action",
    title: "Post more reels like this",
    description: "Educational content under 30s performs 45% better than your average.",
  },
  {
    type: "insight",
    title: "Best posting time",
    description: "Your audience is most active between 7-9 PM EST. Consider scheduling content then.",
  },
];

const Insights = () => {
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
            Creator Insights
          </h1>
          <p className="text-muted-foreground">
            Understand your performance and get AI-powered suggestions
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl border border-border shadow-card p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <span className={`flex items-center gap-1 text-sm font-medium ${
                  stat.trend === "up" ? "text-green-600" : "text-red-500"
                }`}>
                  {stat.trend === "up" ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Top Performing Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-card rounded-2xl border border-border shadow-card p-6">
              <h3 className="font-semibold text-lg text-foreground mb-6">
                Top Performing Content
              </h3>
              
              <div className="space-y-4">
                {topContent.map((content, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground truncate mb-1">
                        {content.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {content.platform}
                      </p>
                    </div>
                    <div className="flex items-center gap-6 ml-4">
                      <div className="text-right">
                        <p className="font-medium text-foreground">{content.views}</p>
                        <p className="text-xs text-muted-foreground">Views</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">{content.engagement}</p>
                        <p className="text-xs text-muted-foreground">Engagement</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* AI Suggestions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-card rounded-2xl border border-border shadow-card p-6">
              <div className="flex items-center gap-2 mb-6">
                <Lightbulb className="w-5 h-5 text-accent" />
                <h3 className="font-semibold text-lg text-foreground">
                  AI Suggestions
                </h3>
              </div>
              
              <div className="space-y-4">
                {aiSuggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-accent-soft border border-accent/10"
                  >
                    <p className="font-medium text-foreground mb-1">
                      {suggestion.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {suggestion.description}
                    </p>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="w-full mt-6 group">
                View All Insights
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Insights;
