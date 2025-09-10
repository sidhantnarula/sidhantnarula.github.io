#!/bin/bash

echo "🚀 Deploying to GitHub Pages..."

# Build the project
echo "📦 Building project..."
npm run build

# Copy dist files to root
echo "📋 Copying files to root..."
cp -r dist/* ./

# Ensure .nojekyll exists
touch .nojekyll

# Add all files to git
echo "📝 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy to GitHub Pages - $(date)"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push

echo "✅ Deployment complete!"
echo "🌐 Your site should be available at: https://sidhantnarula.github.io"
echo "⏰ It may take a few minutes for changes to appear."
