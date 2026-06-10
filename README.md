# Earl Joseph A. Claro - Resume Website

A modern, responsive personal resume website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Deployment:** Vercel (recommended)

## ✨ Features

- 📱 Fully responsive design
- 🎨 Modern and clean UI
- ⚡ Fast performance with Next.js optimizations
- 🔍 SEO optimized
- 🎯 Smooth scrolling navigation
- 📊 Comprehensive sections:
  - Hero/Landing
  - About Me
  - Professional Experience
  - Technical Skills
  - Education & Languages
  - Contact Information

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project folder:
\`\`\`bash
cd "d:\\Personal Project\\ResumeWebsite"
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## 📦 Build & Deploy

### Build for Production

\`\`\`bash
npm run build
\`\`\`

This creates an optimized static export in the `out` folder.

### Deploy to Vercel

1. Install Vercel CLI:
\`\`\`bash
npm install -g vercel
\`\`\`

2. Deploy:
\`\`\`bash
vercel
\`\`\`

Or connect your GitHub repository to Vercel for automatic deployments.

### Alternative Deployment Options

- **GitHub Pages:** Use the static export from the `out` folder
- **Netlify:** Deploy directly from the repository
- **Azure Static Web Apps:** Deploy using Azure CLI

## 📝 Customization

To update the resume data, edit the following file:
- `data/resume.ts` - Contains all personal information, experience, skills, education, etc.

To customize styling:
- `tailwind.config.ts` - Tailwind CSS configuration
- `app/globals.css` - Global styles
- Individual component files in `components/` folder

## 📄 Project Structure

\`\`\`
ResumeWebsite/
├── app/
│   ├── layout.tsx       # Root layout with fonts and metadata
│   ├── page.tsx         # Main home page
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Landing section
│   ├── About.tsx        # About section
│   ├── Experience.tsx   # Work experience
│   ├── Skills.tsx       # Technical skills
│   ├── Education.tsx    # Education & languages
│   ├── Contact.tsx      # Contact information
│   └── Footer.tsx       # Footer
├── data/
│   └── resume.ts        # Resume data
├── public/              # Static assets
├── .github/
│   └── agents/          # Custom GitHub Copilot agents
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── package.json         # Project dependencies
\`\`\`

## 👨‍💻 About

This resume website was created for **Earl Joseph A. Claro**, a Junior Web Developer at Sun-Asterisk Software Development Inc., specializing in ReactJS, NextJS, and NestJS.

**Mission:** *Keep Building Confidence and Keep Coding*

## 📧 Contact

- **Email:** earlclaro@gmail.com
- **Phone:** +63 960 039 5057
- **GitHub:** [EarlJosephClaro](https://github.com/EarlJosephClaro)
- **LinkedIn:** [Earl Joseph Claro](https://www.linkedin.com/in/earl-joseph-claro-603350163/)

## 📜 License

This project is open source and available for personal use.

---

Built with ❤️ using Next.js & Tailwind CSS
