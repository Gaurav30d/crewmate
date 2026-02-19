-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- PROFILES: Linked to Supabase Auth
CREATE TABLE public.profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    username TEXT UNIQUE,
    full_name TEXT,
    avatar_url TEXT,
    niche TEXT,
    role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS: Public profiles are viewable by everyone, editable only by owner
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT WITH CHECK ((select auth.uid()) = id);
CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING ((select auth.uid()) = id);

-- TRIGGER: Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url)
  VALUES (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();


-- GENERATED CONTENT: Stores history of AI tools
CREATE TABLE public.generated_content (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    tool_type TEXT NOT NULL CHECK (tool_type IN ('hook', 'script', 'caption', 'idea', 'hashtag')),
    content TEXT, 
    metadata JSONB, -- Stores extra info like tone, input params
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS: Only owner can see/edit their content
ALTER TABLE public.generated_content ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can see their own generated content" ON public.generated_content FOR SELECT USING ((select auth.uid()) = user_id);
CREATE POLICY "Users can insert their own content" ON public.generated_content FOR INSERT WITH CHECK ((select auth.uid()) = user_id);
CREATE POLICY "Users can delete their own content" ON public.generated_content FOR DELETE USING ((select auth.uid()) = user_id);


-- TRENDS: Migrated from SQLite/Local
CREATE TABLE public.trends (
    id SERIAL PRIMARY KEY,
    hot_topics JSONB, -- Stores the list of topics
    trending_sounds JSONB,
    platform TEXT DEFAULT 'all',
    snapshot_date TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS: Viewable by all authenticated users
ALTER TABLE public.trends ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authenticated users can view trends" ON public.trends FOR SELECT TO authenticated USING (true);


-- SOCIAL CONNECTIONS: Stores OAuth tokens (encrypted ideally, or just metadata if using client-side flow)
-- ideally tokens should be stored in a separate secure vault or encrypted column
CREATE TABLE public.social_connections (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    platform TEXT NOT NULL,
    platform_user_id TEXT,
    access_token TEXT, -- CAUTION: Encrypt this in application layer before inserting
    refresh_token TEXT, -- CAUTION: Encrypt this
    expires_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, platform)
);

-- RLS
ALTER TABLE public.social_connections ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage their own connections" ON public.social_connections USING ((select auth.uid()) = user_id);
