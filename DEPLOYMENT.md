# Deployment Guide - Earl Joseph Claro Resume Website

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended - Free & Easy)

Vercel is the easiest way to deploy Next.js applications.

1. **Push to GitHub:**
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit - Resume website"
   git branch -M main
   git remote add origin https://github.com/EarlJosephClaro/resume-website.git
   git push -u origin main
   \`\`\`

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js and configure everything
   - Click "Deploy"
   - Your site will be live at: `https://your-project-name.vercel.app`

3. **Custom Domain (Optional):**
   - Go to your project settings in Vercel
   - Navigate to "Domains"
   - Add your custom domain (e.g., earlclaro.com)

### Option 2: GitHub Pages (Free Static Hosting)

1. **Build the static site:**
   \`\`\`bash
   npm run build
   \`\`\`

2. **Configure GitHub Pages:**
   - The `out` folder contains your static site
   - Push the `out` folder to the `gh-pages` branch
   - Enable GitHub Pages in repository settings

3. **Using gh-pages package:**
   \`\`\`bash
   npm install -g gh-pages
   gh-pages -d out
   \`\`\`

4. **Access your site:**
   - `https://earljosephclaro.github.io/resume-website/`

### Option 3: Netlify (Free with Continuous Deployment)

1. **Push to GitHub** (same as Option 1, step 1)

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `out`
   - Click "Deploy site"
   - Your site will be live at: `https://random-name.netlify.app`

3. **Custom Domain:** Configure in Netlify dashboard

### Option 4: Azure Static Web Apps (Professional Hosting)

Since you work at Sun-Asterisk and may have Azure access:

1. **Install Azure CLI:**
   \`\`\`bash
   winget install Microsoft.AzureCLI
   \`\`\`

2. **Login to Azure:**
   \`\`\`bash
   az login
   \`\`\`

3. **Create Static Web App:**
   \`\`\`bash
   az staticwebapp create \\
     --name earl-claro-resume \\
     --resource-group your-resource-group \\
     --source . \\
     --location "East Asia" \\
     --branch main \\
     --app-location "/" \\
     --output-location "out"
   \`\`\`

4. **Your site will be available at:**
   - `https://earl-claro-resume.azurestaticapps.net`

## 📝 Pre-Deployment Checklist

- [ ] Update personal information in `data/resume.ts`
- [ ] Test locally: `npm run dev`
- [ ] Build successfully: `npm run build`
- [ ] Check all links work (GitHub, LinkedIn, Email)
- [ ] Test on mobile devices (responsive design)
- [ ] Verify SEO metadata in `app/layout.tsx`
- [ ] Add analytics (Google Analytics, Vercel Analytics)

## 🔧 Environment Variables (if needed)

If you add any external services later (analytics, CMS, etc.):

Create `.env.local`:
\`\`\`
NEXT_PUBLIC_ANALYTICS_ID=your-id-here
# Add other environment variables
\`\`\`

## 📊 Post-Deployment Steps

1. **Test the live site:**
   - Check all navigation links
   - Test contact form/links
   - Verify mobile responsiveness
   - Check loading speed

2. **SEO Optimization:**
   - Submit sitemap to Google Search Console
   - Add Google Analytics
   - Verify Open Graph tags for social sharing

3. **Share Your Website:**
   - Update LinkedIn profile with website URL
   - Add to GitHub profile README
   - Share on professional networks

## 🔄 Updating Your Website

After initial deployment, when you need to update content:

1. **Update locally:**
   - Edit `data/resume.ts` with new information
   - Test: `npm run dev`

2. **Deploy updates:**
   - Commit changes: `git add . && git commit -m "Update resume"`
   - Push: `git push origin main`
   - Vercel/Netlify will auto-deploy (usually takes 1-2 minutes)

## 🎯 Recommended: Vercel Deployment

For your case, I recommend **Vercel** because:
- ✅ Free for personal projects
- ✅ Automatic deployments from GitHub
- ✅ Built-in SSL certificate
- ✅ Global CDN for fast loading
- ✅ Easy custom domain setup
- ✅ Made by the creators of Next.js
- ✅ No configuration needed

## 📞 Support

If you encounter any issues during deployment:
- Check the [Next.js deployment documentation](https://nextjs.org/docs/deployment)
- Vercel has excellent documentation and support
- Feel free to reach out for help

---

**Your website is ready to go live! 🚀**

Choose your preferred deployment method and share your professional presence with the world!
