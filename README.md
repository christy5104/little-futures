# Little Futures

A responsive landing page about nurturing children's curiosity, practical thinking, and potential through everyday moments.

## Publish on GitHub Pages

1. Create a **public** repository on GitHub named `little-futures`. Leave it empty; do not initialize it with a README, license, or `.gitignore`.
2. From the `NWeb-Frontend` workspace root, open a terminal and run:

   ```powershell
   Set-Location "Little Futures"
   git init -b main
   git add index.html styles.css script.js README.md .github/workflows/pages.yml
   git commit -m "Build Little Futures website"
   git remote add origin https://github.com/YOUR-USERNAME/little-futures.git
   git push -u origin main
   ```

   Replace `YOUR-USERNAME` with your GitHub username. Git will prompt you to authenticate if needed.
3. In the repository, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source.
4. Open **Actions** and wait for the **Deploy to GitHub Pages** workflow to finish. The site will be available at `https://YOUR-USERNAME.github.io/little-futures/`.

Future pushes to `main` automatically redeploy the site.
