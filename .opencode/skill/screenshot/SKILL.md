---
name: screenshot
description: "Take screenshots of the aiandi.dev website. Start dev server, capture pages with Puppeteer, return paths. Use when visual verification or documentation needed."
---

# Screenshot Skill

**Purpose:** Capture screenshots of the blog for visual verification, documentation, or debugging.

---

## When to Use

- Visual verification of changes before commit/deploy
- Documenting UI states for discussion
- Debugging layout or styling issues
- Capturing before/after comparisons

---

## Prerequisites

This project has Puppeteer installed (`puppeteer@24.35.0`). No additional setup required.

---

## Procedure

### 1. Start the Dev Server (if not running)

```bash
bun run dev --host 0.0.0.0 &
sleep 8
```

**Note:** The server may use port 4321 or 4322 if 4321 is occupied. Check the output for the actual port.

### 2. Take Screenshot with Puppeteer

Create a temporary screenshot in `/tmp` (auto-cleaned by system):

```bash
cat << 'EOF' | bun run -
import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});

const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 800 });

// Change URL path as needed (/, /blog, /about, /blog/post-slug)
await page.goto('http://localhost:4322/', { waitUntil: 'networkidle0' });

// Use /tmp for auto-cleanup
const path = `/tmp/aiandi-screenshot-${Date.now()}.png`;
await page.screenshot({ path, fullPage: false });

await browser.close();
console.log(`Screenshot saved to ${path}`);
EOF
```

### 3. Read the Screenshot

Use the Read tool to view the screenshot:

```
Read /tmp/aiandi-screenshot-TIMESTAMP.png
```

---

## Configuration Options

### Viewport Sizes

| Device | Width | Height |
|--------|-------|--------|
| Desktop | 1280 | 800 |
| Tablet | 768 | 1024 |
| Mobile | 375 | 667 |

### Screenshot Options

```javascript
// Full page (scrolls entire content)
await page.screenshot({ path, fullPage: true });

// Specific element only
const element = await page.$('.hero');
await element.screenshot({ path });

// With transparency (PNG only)
await page.screenshot({ path, omitBackground: true });
```

### Common Pages

| Page | Path |
|------|------|
| Home | `/` |
| Blog index | `/blog` |
| About | `/about` |
| Specific post | `/blog/[slug]` |

---

## Complete Example: Multiple Screenshots

```bash
cat << 'EOF' | bun run -
import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});

const page = await browser.newPage();
const timestamp = Date.now();

const pages = [
  { path: '/', name: 'home' },
  { path: '/blog', name: 'blog' },
  { path: '/about', name: 'about' }
];

for (const { path, name } of pages) {
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto(`http://localhost:4322${path}`, { waitUntil: 'networkidle0' });
  const filepath = `/tmp/aiandi-${name}-${timestamp}.png`;
  await page.screenshot({ path: filepath, fullPage: false });
  console.log(`Saved: ${filepath}`);
}

await browser.close();
EOF
```

---

## Cleanup

Screenshots in `/tmp` are automatically cleaned by the system. For immediate cleanup:

```bash
rm /tmp/aiandi-screenshot-*.png
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 4321 in use | Check server output for actual port (often 4322) |
| Blank screenshot | Increase `sleep` time or use `waitUntil: 'networkidle0'` |
| Browser launch fails | Ensure `--no-sandbox` flag is included |
| Element not found | Wait for selector: `await page.waitForSelector('.element')` |

---

## Important Notes

- **Always use `/tmp`** for screenshots to avoid cluttering the repo
- **Never commit screenshots** to the repository
- The dev server runs in background (`&`); kill it when done if needed: `pkill -f "astro dev"`
- Screenshots are for verification only; delete after use or let `/tmp` auto-clean

---

*Visual verification catches what code review misses.*
