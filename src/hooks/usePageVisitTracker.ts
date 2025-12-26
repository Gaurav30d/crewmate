import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

export function usePageVisitTracker() {
  const location = useLocation();

  useEffect(() => {
    const trackVisit = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        await supabase.from("page_visits").insert({
          user_id: session?.user?.id || null,
          page_path: location.pathname,
          user_agent: navigator.userAgent,
          referrer: document.referrer || null,
        });
      } catch (error) {
        // Silently fail - don't interrupt user experience
        console.error("Failed to track page visit:", error);
      }
    };

    trackVisit();
  }, [location.pathname]);
}
