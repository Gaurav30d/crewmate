-- Remove the overly permissive public SELECT policy that exposes user emails
DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON public.profiles;

-- The "Users can view their own profile" policy already exists and will now properly protect user data