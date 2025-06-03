# ALUNA Infografiken - GitHub Pages Deployment Guide

## Quick Start (3 Steps)

### Step 1: Create GitHub Repository
1. Go to **https://github.com** and sign in
2. Click the **"+" button** in top right corner
3. Select **"New repository"**
4. Repository name: `aluna-infografiken`
5. Description: `Interactive infographics for ALUNA AI counseling system`
6. Make it **Public** (required for free GitHub Pages)
7. **Do NOT** check "Add a README file"
8. Click **"Create repository"**

### Step 2: Upload Files
1. On the empty repository page, click **"uploading an existing file"**
2. **Drag and drop ALL files** from your project folder:
   - `index.html`
   - `_config.yml`
   - `README.md`
   - `assets` folder (complete folder with css and js subfolders)
   - All documentation files
3. Commit message: "Initial ALUNA infographics upload"
4. Click **"Commit changes"**

### Step 3: Enable GitHub Pages
1. Go to **"Settings"** tab in your repository
2. Scroll down and click **"Pages"** in left sidebar
3. Under "Source", select **"Deploy from a branch"**
4. Branch: Select **"main"**
5. Folder: Select **"/ (root)"**
6. Click **"Save"**

**Your website will be available at:**
`https://YOUR_USERNAME.github.io/aluna-infografiken/`

**Wait 5-10 minutes** for deployment to complete.

---

## Detailed Instructions

### Method 1: Web Interface (Recommended for beginners)

#### Prerequisites
- GitHub account (free)
- All project files on your computer

#### Detailed Steps

**1. Create Repository**
- Navigate to GitHub.com
- Sign in to your account
- Click the green "New" button or "+" icon
- Fill out repository details:
  - **Repository name:** `aluna-infografiken`
  - **Description:** `Interactive infographics for ALUNA AI counseling system`
  - **Visibility:** Public (required for free GitHub Pages)
  - **Initialize:** Leave all checkboxes unchecked
- Click "Create repository"

**2. Upload Project Files**
- You'll see a page with upload options
- Click "uploading an existing file"
- Upload ALL these files by dragging them into the browser:
  ```
  index.html
  _config.yml
  README.md
  assets/
    ├── css/
    │   └── styles.css
    └── js/
        ├── charts.js
        └── main.js
  DEPLOYMENT_GUIDE.md
  SCHRITT_FÜR_SCHRITT_ANLEITUNG.md
  ```
- Add commit message: "Initial ALUNA infographics upload"
- Click "Commit changes"

**3. Configure GitHub Pages**
- Navigate to "Settings" tab (top of repository page)
- Scroll down to "Pages" in left navigation
- Under "Source":
  - Select "Deploy from a branch"
  - Branch: "main"
  - Folder: "/ (root)"
- Click "Save"

**4. Update Configuration**
- Go back to your repository main page
- Click on `_config.yml` file
- Click the pencil icon (Edit this file)
- Update these lines with your actual GitHub username:
  ```yaml
  url: "https://YOUR_USERNAME.github.io"
  repository: YOUR_USERNAME/aluna-infografiken
  ```
- Scroll down and click "Commit changes"

**5. Access Your Website**
Your website will be live at:
`https://YOUR_USERNAME.github.io/aluna-infografiken/`

Replace `YOUR_USERNAME` with your actual GitHub username.

---

### Method 2: Command Line (For developers)

#### Prerequisites
- Git installed on your computer
- Terminal/Command Prompt access
- GitHub account

#### Steps

**1. Initialize Git Repository**
```bash
cd /path/to/your/aluna-project
git init
git add .
git commit -m "Initial ALUNA infographics commit"
git branch -M main
```

**2. Connect to GitHub**
```bash
git remote add origin https://github.com/YOUR_USERNAME/aluna-infografiken.git
git push -u origin main
```

**3. Enable GitHub Pages**
- Follow Step 3 from Method 1 above

---

### Method 3: Automated Script

If you have the `deploy.sh` script:

```bash
chmod +x deploy.sh
./deploy.sh
```

Follow the prompts to enter your GitHub username and repository name.

---

## Verification Checklist

After deployment, verify these elements work correctly:

### 1. Website Loading
- [ ] Visit `https://YOUR_USERNAME.github.io/aluna-infografiken/`
- [ ] Page loads without errors
- [ ] All sections display properly
- [ ] No 404 errors in browser console

### 2. Interactive Elements
- [ ] Donut chart displays 15% - 70% - 15% distribution
- [ ] Radar chart shows question toolkit analysis
- [ ] Charts are interactive (hover effects work)
- [ ] Charts are responsive on mobile devices

### 3. Design Elements
- [ ] Professional SVG icons display (not emojis)
- [ ] Text is properly justified without ugly spacing
- [ ] Hover effects work on cards
- [ ] Responsive design works on mobile
- [ ] German translations display correctly

### 4. Content Verification
- [ ] Footer shows "@ 2025 Aluna-KairosShift KI Labs"
- [ ] All German terminology appears correctly
- [ ] Navigation and links work properly
- [ ] Meta tags include "infografiken" terminology

---

## Troubleshooting

### Common Issues

**1. 404 Error**
- Ensure repository is public
- Verify GitHub Pages is enabled
- Wait 10 minutes for propagation
- Check that `index.html` is in root directory

**2. Charts Not Loading**
- Check browser console for errors (F12)
- Verify internet connection for CDN resources
- Ensure Chart.js CDN links are working

**3. Styling Issues**
- Verify `assets/css/styles.css` was uploaded correctly
- Check file structure matches requirements
- Ensure Tailwind CSS CDN is loading

**4. Slow Loading**
- GitHub Pages can take 5-10 minutes for initial deployment
- Subsequent updates usually deploy within 1-2 minutes
- Clear browser cache if changes don't appear

---

## Final Configuration

### Repository Settings
- **Name:** `aluna-infografiken`
- **Description:** `Interactive infographics for ALUNA AI counseling system`
- **Topics/Tags:** `aluna`, `ai-counseling`, `infographics`, `system-theory`, `artificial-intelligence`, `visualization`, `github-pages`

### GitHub Pages Settings
- **Source:** Deploy from a branch
- **Branch:** main
- **Folder:** / (root)
- **Custom domain:** (optional)

### Final URL
Your professional ALUNA infographics website will be accessible at:
**https://YOUR_USERNAME.github.io/aluna-infografiken/**

The website features:
- Interactive charts and visualizations
- Professional design with gradient SVG icons
- Responsive layout for all devices
- Complete infographics about ALUNA AI counseling system
- German localization and terminology

Deployment typically completes within 10 minutes of enabling GitHub Pages.

---

## Support

If you encounter issues:
1. Check the GitHub Pages deployment status in repository Settings > Pages
2. Review browser console for JavaScript errors
3. Verify all files were uploaded correctly
4. Ensure repository is public and GitHub Pages is enabled

For additional help, refer to [GitHub Pages documentation](https://docs.github.com/en/pages).