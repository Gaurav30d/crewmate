import { useState } from "react";
import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  MessageCircle, 
  Bookmark, 
  MoreHorizontal,
  Plus,
  TrendingUp
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const posts = [
  {
    id: 1,
    author: {
      name: "Sarah Chen",
      handle: "@sarahcreates",
      avatar: "SC",
    },
    content: "Just hit 50K followers! 🎉 Here's what worked for me:\n\n1. Consistent posting (even when motivation was low)\n2. Engaging with EVERY comment for the first 6 months\n3. Collaborating with creators at similar follower counts\n4. Repurposing content across platforms\n\nWhat's your biggest growth hack?",
    likes: 234,
    comments: 47,
    time: "2h ago",
    tags: ["Growth Tips", "Milestone"],
  },
  {
    id: 2,
    author: {
      name: "Marcus Johnson",
      handle: "@marcusj",
      avatar: "MJ",
    },
    content: "Hot take: You don't need expensive equipment to start.\n\nMy first 100K views came from videos shot on my phone with natural lighting.\n\nContent > Production Quality (at least in the beginning)",
    likes: 189,
    comments: 32,
    time: "4h ago",
    tags: ["Hot Take", "Beginners"],
  },
  {
    id: 3,
    author: {
      name: "Emily Rodriguez",
      handle: "@emilyrod",
      avatar: "ER",
    },
    content: "Does anyone else struggle with the algorithm lately? 📉\n\nMy reels that used to get 10K views are barely hitting 1K now. Same content style, same posting time.\n\nWould love to hear if others are experiencing this and what you're trying.",
    likes: 312,
    comments: 89,
    time: "6h ago",
    tags: ["Discussion", "Algorithm"],
  },
];

const trendingTopics = [
  "Instagram Algorithm Update",
  "TikTok Shop Tips",
  "Hook Formulas",
  "Brand Deal Rates 2024",
  "Content Batching",
];

const Community = () => {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [savedPosts, setSavedPosts] = useState<number[]>([]);
  const { toast } = useToast();

  const handleLike = (postId: number) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter(id => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };

  const handleSave = (postId: number) => {
    if (savedPosts.includes(postId)) {
      setSavedPosts(savedPosts.filter(id => id !== postId));
    } else {
      setSavedPosts([...savedPosts, postId]);
      toast({
        title: "Post saved!",
        description: "Added to your saved posts.",
      });
    }
  };

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
              Community
            </h1>
            <p className="text-muted-foreground">
              Connect, share, and grow with fellow creators
            </p>
          </div>
          <Button variant="accent">
            <Plus className="w-4 h-4 mr-2" />
            New Post
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Feed */}
          <div className="lg:col-span-2 space-y-6">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border shadow-card p-6"
              >
                {/* Author */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                      <span className="text-sm font-medium text-accent-foreground">
                        {post.author.avatar}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{post.author.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {post.author.handle} · {post.time}
                      </p>
                    </div>
                  </div>
                  <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                    <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>

                {/* Content */}
                <p className="text-foreground whitespace-pre-wrap mb-4">
                  {post.content}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-secondary text-secondary-foreground text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <button
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors ${
                      likedPosts.includes(post.id)
                        ? "text-red-500 bg-red-50"
                        : "text-muted-foreground hover:bg-secondary"
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${likedPosts.includes(post.id) ? "fill-current" : ""}`} />
                    <span className="text-sm font-medium">
                      {likedPosts.includes(post.id) ? post.likes + 1 : post.likes}
                    </span>
                  </button>
                  <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-muted-foreground hover:bg-secondary transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">{post.comments}</span>
                  </button>
                  <button
                    onClick={() => handleSave(post.id)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors ml-auto ${
                      savedPosts.includes(post.id)
                        ? "text-accent bg-accent-soft"
                        : "text-muted-foreground hover:bg-secondary"
                    }`}
                  >
                    <Bookmark className={`w-4 h-4 ${savedPosts.includes(post.id) ? "fill-current" : ""}`} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-card rounded-2xl border border-border shadow-card p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-accent" />
                <h3 className="font-semibold text-foreground">Trending Topics</h3>
              </div>
              
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <button
                    key={topic}
                    className="w-full text-left p-3 rounded-xl hover:bg-secondary transition-colors"
                  >
                    <span className="text-sm text-muted-foreground mr-2">
                      {index + 1}.
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {topic}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Community;
