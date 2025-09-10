# Sidhant Narula - Personal Website

This is my personal website built with React, TypeScript, and Vite, deployed on GitHub Pages.

## 🚀 Quick Deploy

**Option 1: Use the deploy script (Recommended)**
```bash
./deploy.sh
```

**Option 2: Manual deployment**
```bash
npm run build
cp -r dist/* ./
git add .
git commit -m "Deploy to GitHub Pages"
git push
```

## 🔧 Development

```bash
npm install
npm run dev
```

## 📁 Project Structure

- `src/` - Source code
- `dist/` - Build output
- `assets/` - Static assets (CSS, JS)
- `index.html` - Main HTML file (deployed to root)
- `.nojekyll` - Prevents Jekyll processing on GitHub Pages

## 🌐 Live Site

Visit: https://sidhantnarula.github.io

## 🐛 Troubleshooting

If you see 404 errors:
1. Make sure all files from `dist/` are copied to the repository root
2. Verify `.nojekyll` file exists
3. Check that GitHub Pages is enabled in repository settings
4. Wait a few minutes for changes to propagate
