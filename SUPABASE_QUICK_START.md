# Supabase Quick Start - When You Have Credentials

Once you have your Supabase URL and service role key, follow these steps:

## Step 1: Set Up Environment Variables

### For Local Development

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=your-supabase-url-here
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### For Vercel

1. Go to Vercel project → Settings → Environment Variables
2. Add:
   - `VITE_SUPABASE_URL` = Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY` = Your Supabase anon/public key

## Step 2: Run Database Migration

1. Go to Supabase Dashboard → SQL Editor
2. Open `supabase/migrations/001_create_waitlist_table.sql`
3. Copy and paste the entire SQL into the SQL Editor
4. Click "Run"

## Step 3: Test

1. Start dev server: `npm run dev`
2. Submit a test waitlist entry
3. Check Supabase Dashboard → Table Editor → `waitlist` table

## That's It! 🎉

Your waitlist form is now connected to Supabase and ready to collect signups.

---

For detailed setup instructions, see `SUPABASE_SETUP.md`

