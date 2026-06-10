# Vercel Deployment (Quick Start)

## Step-by-Step Guide for Vercel Deployment

### Prerequisites
- GitHub account
- Vercel account (free - sign up at vercel.com)

### 1. Push to GitHub

\`\`\`bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Earl Joseph Claro Resume Website"

# Set main branch
git branch -M main

# Add remote (create repository on GitHub first)
git remote add origin https://github.com/EarlJosephClaro/resume-website.git

# Push to GitHub
git push -u origin main
\`\`\`

### 2. Deploy to Vercel

1. Visit [vercel.com](https://vercel.com)
2. Click "Sign Up" and sign in with GitHub
3. Click "Add New..." → "Project"
4. Import your `resume-website` repository
5. Vercel will automatically detect Next.js settings
6. Click "Deploy"

**That's it!** Your site will be live in ~2 minutes.

### 3. Your Live URL

After deployment, you'll get a URL like:
\`\`\`
https://resume-website-earls-projects.vercel.app
\`\`\`

### 4. Add Custom Domain (Optional)

If you have a domain like `earlclaro.com`:

1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as shown
4. Your site will be available at your custom domain

### 5. Automatic Updates

Every time you push to GitHub:
\`\`\`bash
git add .
git commit -m "Update resume"
git push
\`\`\`

Vercel automatically rebuilds and deploys! ✨

---

## Quick Commands Reference

\`\`\`bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Update after changes
git add .
git commit -m "Your update message"
git push
\`\`\`

---

**Estimated deployment time: 5 minutes** ⏱️
