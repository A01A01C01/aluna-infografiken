#!/bin/bash

# ALUNA Documentation - Automated GitHub Pages Deployment Script
# This script automates the deployment process to GitHub Pages

echo "🚀 ALUNA Documentation - GitHub Pages Deployment"
echo "=================================================="

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Error: Git is not installed. Please install Git first."
    exit 1
fi

# Get user input
read -p "Enter your GitHub username: " USERNAME
read -p "Enter your repository name (default: aluna-infografiken): " REPO_NAME
REPO_NAME=${REPO_NAME:-aluna-infografiken}

# Validate inputs
if [ -z "$USERNAME" ]; then
    echo "❌ Error: GitHub username is required."
    exit 1
fi

echo ""
echo "📋 Configuration:"
echo "   GitHub Username: $USERNAME"
echo "   Repository Name: $REPO_NAME"
echo "   Repository URL: https://github.com/$USERNAME/$REPO_NAME"
echo "   Website URL: https://$USERNAME.github.io/$REPO_NAME/"
echo ""

# Ask for confirmation
read -p "Continue with deployment? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Deployment cancelled."
    exit 1
fi

# Update _config.yml with user-specific information
echo "📝 Updating configuration files..."
sed -i.bak "s/your-username/$USERNAME/g" _config.yml
sed -i.bak "s/YOUR_USERNAME/$USERNAME/g" _config.yml
sed -i.bak "s/YOUR_REPOSITORY_NAME/$REPO_NAME/g" _config.yml

# Update index.html meta tags
sed -i.bak "s/your-username.github.io/$USERNAME.github.io/g" index.html
sed -i.bak "s/aluna-documentation/$REPO_NAME/g" index.html

# Initialize git repository if not already initialized
if [ ! -d ".git" ]; then
    echo "🔧 Initializing Git repository..."
    git init
    git branch -M main
fi

# Add all files
echo "📦 Adding files to Git..."
git add .

# Create commit
echo "💾 Creating commit..."
git commit -m "Deploy ALUNA Infografiken zu GitHub Pages

- Interaktive Infografiken Website
- Professionelles Design mit Gradient-Icons
- Responsive Layout für alle Geräte
- Chart.js Visualisierungen
- Barrierefreie und gut formatierte Inhalte"

# Add remote origin
echo "🔗 Setting up GitHub remote..."
git remote remove origin 2>/dev/null || true
git remote add origin "https://github.com/$USERNAME/$REPO_NAME.git"

# Push to GitHub
echo "⬆️  Pushing to GitHub..."
echo "You may be prompted to enter your GitHub credentials..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully deployed to GitHub!"
    echo ""
    echo "📋 Next Steps:"
    echo "1. Go to https://github.com/$USERNAME/$REPO_NAME/settings/pages"
    echo "2. Under 'Source', select 'Deploy from a branch'"
    echo "3. Select 'main' branch and '/ (root)' folder"
    echo "4. Click 'Save'"
    echo ""
    echo "🌐 Your website will be available at:"
    echo "   https://$USERNAME.github.io/$REPO_NAME/"
    echo ""
    echo "⏱️  Note: It may take 5-10 minutes for the site to become available."
    echo ""
    echo "🔧 To enable GitHub Pages automatically, visit:"
    echo "   https://github.com/$USERNAME/$REPO_NAME/settings/pages"
else
    echo ""
    echo "❌ Error: Failed to push to GitHub."
    echo "Please check your GitHub credentials and repository permissions."
    echo ""
    echo "Manual steps:"
    echo "1. Create repository manually at https://github.com/new"
    echo "2. Run: git remote set-url origin https://github.com/$USERNAME/$REPO_NAME.git"
    echo "3. Run: git push -u origin main"
fi

# Clean up backup files
rm -f _config.yml.bak index.html.bak

echo ""
echo "🎉 Deployment script completed!"