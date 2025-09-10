# GitHub Pages Deployment Guide

## Current Issue
The site is showing 404 errors for CSS and JS files. This is likely due to incorrect base path configuration.

## Solution Applied
1. ✅ Updated `vite.config.ts` to use `base: '/'` for user site
2. ✅ Created proper MIME type headers in `_headers` file
3. ✅ Added `.nojekyll` file to prevent Jekyll processing
4. ✅ Created GitHub Actions workflow for automated deployment

## Deployment Options

### Option 1: GitHub Actions (Recommended)
1. Go to your repository on GitHub
2. Go to Settings → Pages
3. Under "Source", select "GitHub Actions"
4. Push your changes to the `main` branch
5. The workflow will automatically build and deploy

### Option 2: Manual Deployment
1. Run `npm run build` locally
2. Copy the contents of the `dist` folder to your repository root
3. Commit and push the changes
4. Go to Settings → Pages
5. Under "Source", select "Deploy from a branch"
6. Select "main" branch and "/ (root)" folder

## Verification
After deployment, visit:
- Main site: `https://sidhantnarula.github.io/`
- Test page: `https://sidhantnarula.github.io/test-mime.html`

## Troubleshooting
If you still see 404 errors:
1. Check that the `dist` folder contents are in the repository root
2. Verify that `.nojekyll` file is present
3. Check the browser's Network tab to see the exact URLs being requested
4. Ensure GitHub Pages is enabled and pointing to the correct source
