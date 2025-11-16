# Supabase Database Setup Guide

This guide will help you set up Supabase for storing waitlist information.

## Prerequisites

- Supabase account (sign up at [supabase.com](https://supabase.com))
- Supabase project created

## Step 1: Get Your Supabase Credentials

1. Go to your Supabase project dashboard
2. Navigate to **Settings** → **API**
3. Copy the following:
   - **Project URL** (this is your `VITE_SUPABASE_URL`)
   - **anon/public key** (this is your `VITE_SUPABASE_ANON_KEY`)
   - **service_role key** (keep this secret - only for server-side operations)

## Step 2: Run Database Migration

### Option A: Using Supabase Dashboard (Recommended)

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Click **New Query**
4. Copy and paste the contents of `supabase/migrations/001_create_waitlist_table.sql`
5. Click **Run** to execute the migration

### Option B: Using Supabase CLI

If you have Supabase CLI installed:

```bash
# Initialize Supabase (if not already done)
supabase init

# Link to your project
supabase link --project-ref your-project-ref

# Run the migration
supabase db push
```

## Step 3: Configure Environment Variables

### For Local Development

Create a `.env` file in the root of your project:

```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

**Important:** Never commit the `.env` file to version control. It's already in `.gitignore`.

### For Vercel Deployment

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add the following variables:
   - `VITE_SUPABASE_URL` = Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY` = Your Supabase anon/public key

4. Redeploy your application after adding the variables

## Step 4: Verify Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Test the waitlist form by submitting an entry
3. Check your Supabase dashboard:
   - Go to **Table Editor**
   - Select the `waitlist` table
   - Verify that your test entry appears

## Database Schema

The `waitlist` table has the following structure:

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key (auto-generated) |
| `name` | VARCHAR(100) | User's name (required) |
| `email` | VARCHAR(255) | User's email (required, unique) |
| `instagram` | VARCHAR(100) | Instagram handle (required) |
| `expectations` | TEXT | User's expectations (optional) |
| `story` | TEXT | User's story (optional) |
| `created_at` | TIMESTAMP | Auto-generated timestamp |
| `updated_at` | TIMESTAMP | Auto-updated timestamp |

## Security Features

- **Row Level Security (RLS)** is enabled
- **Public insert policy** allows anyone to add waitlist entries
- **Unique email constraint** prevents duplicate signups
- **Indexes** on email and created_at for performance

## Accessing Waitlist Data

### Using Supabase Dashboard

1. Go to **Table Editor** → `waitlist` table
2. View, filter, and export entries

### Using Service Role Key (Server-side only)

For server-side operations (like admin panels or API routes), you can use the service role key:

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Never expose this to client
);

// Fetch all waitlist entries
const { data, error } = await supabaseAdmin
  .from('waitlist')
  .select('*')
  .order('created_at', { ascending: false });
```

**⚠️ Security Warning:** Never expose the service role key in client-side code. Only use it in server-side environments (API routes, serverless functions, etc.).

## Troubleshooting

### "Supabase URL or Anon Key is missing" warning

- Make sure you've created a `.env` file with the correct variables
- Restart your development server after adding environment variables
- For Vercel, ensure environment variables are set in project settings

### "Duplicate email" error

- This is expected behavior - the database prevents duplicate email signups
- Users will see a friendly message if they try to sign up twice

### Migration errors

- Ensure you're running the migration in the correct Supabase project
- Check that you have the necessary permissions
- Verify the SQL syntax is correct

## Next Steps

- Set up email notifications for new waitlist signups (using Supabase Edge Functions)
- Create an admin dashboard to view and manage waitlist entries
- Export waitlist data for marketing campaigns

---

**Need help?** Check the [Supabase Documentation](https://supabase.com/docs) or the project's `DEPLOYMENT.md` file.

