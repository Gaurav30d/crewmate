import { useState } from "react";
import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Users, 
  DollarSign, 
  Instagram,
  Youtube,
  ExternalLink,
  Filter
} from "lucide-react";

const brandDeals = [
  {
    id: 1,
    brand: "TechFlow",
    logo: "TF",
    campaign: "Product Review",
    platform: "YouTube",
    budget: "$500-1,000",
    niche: "Tech",
    requirements: "10K+ subscribers",
    description: "Looking for authentic tech reviewers to showcase our new wireless earbuds.",
  },
  {
    id: 2,
    brand: "FitLife Pro",
    logo: "FL",
    campaign: "Sponsored Post",
    platform: "Instagram",
    budget: "$300-500",
    niche: "Fitness",
    requirements: "5K+ followers",
    description: "Seeking fitness creators for our summer campaign featuring new protein supplements.",
  },
  {
    id: 3,
    brand: "BookNest",
    logo: "BN",
    campaign: "Story Series",
    platform: "TikTok",
    budget: "$200-400",
    niche: "Lifestyle",
    requirements: "3K+ followers",
    description: "Book lovers wanted! Create a reading routine featuring our smart bookmark.",
  },
  {
    id: 4,
    brand: "GreenGlow",
    logo: "GG",
    campaign: "Brand Ambassador",
    platform: "Instagram",
    budget: "$1,000-2,500/mo",
    niche: "Beauty",
    requirements: "20K+ followers",
    description: "Long-term partnership for sustainable skincare brand. Monthly content creation.",
  },
];

const creators = [
  {
    id: 1,
    name: "Alex Rivera",
    avatar: "AR",
    niche: "Tech & Gadgets",
    platform: "YouTube",
    followers: "45K",
    engagement: "8.2%",
    rate: "$400-800",
  },
  {
    id: 2,
    name: "Maya Patel",
    avatar: "MP",
    niche: "Fitness & Wellness",
    platform: "Instagram",
    followers: "32K",
    engagement: "11.5%",
    rate: "$250-500",
  },
  {
    id: 3,
    name: "Jordan Lee",
    avatar: "JL",
    niche: "Lifestyle & Travel",
    platform: "TikTok",
    followers: "128K",
    engagement: "9.8%",
    rate: "$600-1,200",
  },
];

const BrandDeals = () => {
  const [view, setView] = useState<"creators" | "brands">("creators");

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"
        >
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
              Brand Deals Marketplace
            </h1>
            <p className="text-muted-foreground">
              Find collaborations or discover creators
            </p>
          </div>
          
          {/* View Toggle */}
          <div className="flex items-center gap-1 p-1 bg-secondary rounded-xl">
            <button
              onClick={() => setView("creators")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                view === "creators"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Users className="w-4 h-4 inline mr-2" />
              For Creators
            </button>
            <button
              onClick={() => setView("brands")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                view === "brands"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Building2 className="w-4 h-4 inline mr-2" />
              For Brands
            </button>
          </div>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-3 mb-6"
        >
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <Button variant="secondary" size="sm">All Platforms</Button>
          <Button variant="secondary" size="sm">All Niches</Button>
          <Button variant="secondary" size="sm">Budget Range</Button>
        </motion.div>

        {/* Content */}
        {view === "creators" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandDeals.map((deal, index) => (
              <motion.div
                key={deal.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover p-6 transition-all duration-300"
              >
                {/* Brand Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <span className="text-sm font-bold text-accent-foreground">
                      {deal.logo}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{deal.brand}</h3>
                    <p className="text-sm text-muted-foreground">{deal.campaign}</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {deal.description}
                </p>

                {/* Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    {deal.platform === "YouTube" ? (
                      <Youtube className="w-4 h-4 text-red-500" />
                    ) : (
                      <Instagram className="w-4 h-4 text-pink-500" />
                    )}
                    <span className="text-muted-foreground">{deal.platform}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign className="w-4 h-4 text-green-500" />
                    <span className="text-foreground font-medium">{deal.budget}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-lg bg-secondary text-secondary-foreground text-xs">
                    {deal.niche}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-secondary text-secondary-foreground text-xs">
                    {deal.requirements}
                  </span>
                </div>

                <Button variant="accent" className="w-full group-hover:shadow-glow transition-shadow">
                  Apply Now
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creators.map((creator, index) => (
              <motion.div
                key={creator.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover p-6 transition-all duration-300"
              >
                {/* Creator Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-sm font-bold text-accent-foreground">
                      {creator.avatar}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{creator.name}</h3>
                    <p className="text-sm text-muted-foreground">{creator.niche}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-lg font-bold text-foreground">{creator.followers}</p>
                    <p className="text-xs text-muted-foreground">Followers</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-green-600">{creator.engagement}</p>
                    <p className="text-xs text-muted-foreground">Engagement</p>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    {creator.platform === "YouTube" ? (
                      <Youtube className="w-4 h-4 text-red-500" />
                    ) : creator.platform === "Instagram" ? (
                      <Instagram className="w-4 h-4 text-pink-500" />
                    ) : (
                      <span className="w-4 h-4 text-foreground">📱</span>
                    )}
                    <span className="text-muted-foreground">{creator.platform}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign className="w-4 h-4 text-green-500" />
                    <span className="text-foreground font-medium">{creator.rate}</span>
                    <span className="text-muted-foreground">per post</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Invite to Collaborate
                </Button>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default BrandDeals;
