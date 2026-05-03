-- Fix the schema cache issue and RLS policies
-- Run these commands in your Supabase SQL Editor:

-- 1. First, ensure RLS is enabled and policies exist
ALTER TABLE pledges ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Allow anonymous inserts" ON pledges;
DROP POLICY IF EXISTS "Allow public reads" ON pledges;

-- Create policy to allow anonymous inserts (for public form submissions)
CREATE POLICY "Allow anonymous inserts" ON pledges
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow public reads (for displaying signatures)
CREATE POLICY "Allow public reads" ON pledges
  FOR SELECT
  USING (is_public = true);

-- 2. Clear the schema cache (this forces Supabase to refresh its internal cache)
-- You can also do this by going to Settings > API in your Supabase dashboard
-- and clicking "Regenerate types" or by restarting your app

-- Create the pledges table in Supabase
CREATE TABLE pledges (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  city TEXT NOT NULL,
  team_name TEXT,
  signed_at TIMESTAMPTZ NOT NULL,
  is_public BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE pledges ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (for public form submissions)
CREATE POLICY "Allow anonymous inserts" ON pledges
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow public reads (for displaying signatures)
CREATE POLICY "Allow public reads" ON pledges
  FOR SELECT
  USING (is_public = true);

-- Optional: Create an index on created_at for efficient ordering
CREATE INDEX idx_pledges_created_at ON pledges(created_at DESC);