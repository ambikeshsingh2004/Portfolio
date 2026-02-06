# 🚀 How to Deploy Your Portfolio

Your portfolio is built with pure HTML/CSS, which makes it incredibly easy and free to host.

## Option 1: Netlify Drop (Easiest - 30 seconds)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the entire `portfolio` folder from your Desktop into the browser window.
3. **Done!** Netlify will give you a URL instantly.
4. (Optional) Go to "Site Settings" -> "Change Site Name" to get something like `ambikesh-singh.netlify.app`.

## Option 2: GitHub Pages (Best for Developers)
1. Create a new repository on GitHub (e.g., `portfolio`).
2. Open a terminal in the `portfolio` folder.
3. Run these commands:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/[YOUR-USERNAME]/portfolio.git
   git push -u origin main
   ```
4. Go to repository **Settings** -> **Pages**.
5. Select `main` branch and click **Save**.

## ✅ SEO Verification
Once deployed, check your site on [Google's Rich Results Test](https://search.google.com/test/rich-results) to verify your "Person" schema is working.
