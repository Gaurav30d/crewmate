import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import Index from "./pages/Index";
import Tools from "./pages/Tools";
import HookGenerator from "./pages/HookGenerator";
import CaptionGenerator from "./pages/CaptionGenerator";
import ScriptWriter from "./pages/ScriptWriter";
import IdeaGenerator from "./pages/IdeaGenerator";
import Trending from "./pages/Trending";
import Insights from "./pages/Insights";
import Community from "./pages/Community";
import BrandDeals from "./pages/BrandDeals";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/tools/hook-generator" element={<HookGenerator />} />
            <Route path="/tools/caption-generator" element={<CaptionGenerator />} />
            <Route path="/tools/script-writer" element={<ScriptWriter />} />
            <Route path="/tools/idea-generator" element={<IdeaGenerator />} />
            <Route path="/tools/trending" element={<Trending />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/community" element={<Community />} />
            <Route path="/brand-deals" element={<BrandDeals />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;