# SNEH by Nehil Shah

A React + Tailwind jewellery storefront app with a luxury storefront layout, WhatsApp checkout, virtual try-on and astrology-backed gemstone sections.

## Run locally

1. Open a terminal in `sneh-jewellery-app`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open the local URL shown in the terminal.

## Features

- Responsive landing page with hero section
- Jewellery categories: gold, silver, lab grown diamonds
- Live metal rate cards
- Trending product showcase
- AI recommendation section
- Virtual try-on section
- Astrology-backed gemstone highlights
- WhatsApp enquiry / order integration

## Deploy to GitHub Pages

1. Create a GitHub repository for this project (for example, `sneh-jewellery-app`).
2. Initialize Git in the workspace if needed:
   ```bash
   git init
   git add .
   git commit -m "Initial SNEH website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Replace `/your-repo-name/` in `package.json` deploy script with your actual repo name.
5. Run deploy:
   ```bash
   npm run deploy
   ```
6. Your site will be published at:
   `https://<your-username>.github.io/<your-repo>/`

If you want to publish from the `main` branch `docs/` folder instead, you can also use GitHub Pages settings and update `vite.config.js` base path accordingly.
