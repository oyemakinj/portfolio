# Victor Oyemakin — Portfolio
## Brand Systems Architect

Built with React + Vite. Deployable to Vercel in under 5 minutes.

---

## Quick Start (Local Preview)

```bash
npm install
npm run dev
```

Open http://localhost:5173

---

## Deploy to Vercel (Recommended)

### Option A — Drag & Drop (Fastest)
1. Run `npm run build` — this creates a `/dist` folder
2. Go to vercel.com → New Project → drag the `/dist` folder in
3. Done. Live in ~60 seconds.

### Option B — GitHub (Best for updates)
1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project → Import from GitHub
3. Vercel auto-detects Vite. Click Deploy.
4. Every future `git push` auto-deploys.

> The `vercel.json` file is already included — it handles SPA routing
> so page refreshes on /strategy, /automation etc. work correctly.

---

## Adding Your Images

All image slots are labeled placeholders. To replace them:

### 1. Put your images in `/public/images/`
```
public/
  victor.jpg          ← your headshot (already in place)
  images/
    adanna-1.jpg
    adanna-2.jpg
    lfw-runway.jpg
    sensei-dashboard.jpg
    djmc-workflow.jpg
    ... etc
```

### 2. Replace ImageSlot components with img tags
Find any `<ImageSlot label="..." />` and replace with:
```jsx
<img src="/images/your-file.jpg" alt="Description"
  style={{ width: '100%', objectFit: 'cover' }} />
```

### Recommended Images Per Page

**Strategy Page:**
- Adanna: editorial shoot, documentary still, press coverage
- Lagos Fashion Week: TikTok reel screenshot, runway visual
- Lanre Da Silva: show editorial, social post screenshot
- BNXN: Tour Diaries campaign visual
- Odumodublvck: editorial cover visual
- Swypatune: campaign creative

**Campaigns Page:**
- Sensei Publishing: Google Ads dashboard (from your PDF — screenshot it)
- Social Growth: Instagram followers screenshot, views dashboard (from your PDF)
- Lagos Fashion Week: TikTok analytics screenshot
- Spotify Africa: Grix Magazine editorial

**Automation Page:**
- DJMC: GoHighLevel pipeline screenshot, Make.com workflow canvas
- Coverfy: Make.com scenario screenshot
- AI Voice Agent: Vapi + Make.com workflow screenshot
- Video Workflow: N8N workflow screenshot
- Multi-Platform: Make.com scenario + Google Sheet

**Grix Page:**
- Grix editorial cover or magazine spread
- Event coverage photo (LFW)
- Grix Tickets: screenshot from www.grixtickets.com
- Campaign visuals grid (5 images)

---

## Adding Vimeo Videos (Automation Page)

Open `src/pages/Automation.jsx`. Find any case study and uncomment:
```jsx
/* vimeoId="YOUR_DJMC_VIDEO_ID" */
```
Replace with your actual Vimeo video ID. Example:
```jsx
vimeoId="987654321"
```
The video embeds automatically in that case study's image slot.

---

## Site Structure

```
/                 Home (hero + pillar overview + featured work)
/strategy         Brand Strategy & Creative Direction (full case studies)
/campaigns        Campaign Management & Growth (full case studies)
/automation       Automation & Systems (full case studies)
/grix             Grix Studio (brand profile + all projects)
```

---

## Customisation

All colors live in `src/index.css` under `:root {}`:
- `--gold: #C4973A`     ← change to adjust gold accent
- `--blue: #2E6BE6`     ← change to adjust blue accent
- `--bg: #090909`       ← change to adjust background

---

## Contact
Victor Oyemakin · Victoroye2020@gmail.com · Lagos, Nigeria
