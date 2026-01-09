# Vercel SPA Routing + Sitemap Fix

## Problem Summary
1. **SPA Routes 404 on Refresh**: Visiting `/en`, `/es`, `/pt-br`, etc. and refreshing returns 404
2. **Sitemap.xml served as HTML**: `/sitemap.xml` shows as plain text (XML tags not visible), indicating it's being rewritten to `index.html` or served with wrong Content-Type

## Solution Applied

### Updated `vercel.json`
The configuration now:
- **Excludes static files** from SPA rewrite using negative lookahead regex
- **Sets correct headers** for `sitemap.xml` (application/xml) and `robots.txt` (text/plain)
- **Falls back to index.html** for all app routes (SPA behavior)

### Key Changes
1. **Simplified rewrite pattern**: Matches all paths EXCEPT:
   - `sitemap.xml`
   - `robots.txt`
   - `favicon.png`
   - Any file with an extension (`.js`, `.css`, `.png`, etc.)

2. **Explicit headers**: Ensures `sitemap.xml` and `robots.txt` are served with correct Content-Type

## File Structure Verified
✅ `/public/sitemap.xml` exists  
✅ `/public/robots.txt` exists  
✅ Vite builds to `/dist` (index.html at root)  
✅ React Router handles client-side routing

## Verification Steps

### Local Testing (after build)
```bash
# Build the project
npm run build

# Preview the build
npm run preview

# In another terminal, test with curl:
curl -I http://localhost:4173/sitemap.xml
# Expected: Content-Type: application/xml; charset=utf-8

curl -I http://localhost:4173/robots.txt
# Expected: Content-Type: text/plain; charset=utf-8

curl -I http://localhost:4173/en
# Expected: Content-Type: text/html (200 OK)

curl -I http://localhost:4173/es/faq
# Expected: Content-Type: text/html (200 OK)
```

### Production Testing (after deploy)
```bash
# Test sitemap.xml
curl -I https://sleepintime.com/sitemap.xml
# Expected headers:
# HTTP/2 200
# content-type: application/xml; charset=utf-8
# x-content-type-options: nosniff
# cache-control: public, max-age=3600, s-maxage=3600

# Test robots.txt
curl -I https://sleepintime.com/robots.txt
# Expected headers:
# HTTP/2 200
# content-type: text/plain; charset=utf-8
# cache-control: public, max-age=3600, s-maxage=3600

# Test SPA route (should return HTML, not 404)
curl -I https://sleepintime.com/en
# Expected: HTTP/2 200, content-type: text/html

# Test nested SPA route
curl -I https://sleepintime.com/pt-br/faq
# Expected: HTTP/2 200, content-type: text/html

# Verify sitemap content (should be valid XML)
curl -s https://sleepintime.com/sitemap.xml | head -5
# Expected: <?xml version="1.0" encoding="UTF-8"?>
```

### Browser Testing
1. **Sitemap**: Visit https://sleepintime.com/sitemap.xml
   - ✅ Should render as XML (formatted, collapsible)
   - ❌ Should NOT show as plain text

2. **Robots**: Visit https://sleepintime.com/robots.txt
   - ✅ Should show as plain text
   - ✅ Should NOT be HTML

3. **SPA Routes**: Visit https://sleepintime.com/en
   - ✅ Should load the app
   - ✅ Refresh (F5) should NOT show 404
   - ✅ Should work for: `/es`, `/pt-br`, `/fr`, `/zh`
   - ✅ Should work for nested routes: `/en/faq`, `/es/how-it-works`, etc.

4. **DevTools Network Tab**:
   - Open DevTools → Network
   - Visit `/sitemap.xml`
   - Check Response Headers → `Content-Type` should be `application/xml; charset=utf-8`
   - Visit `/robots.txt`
   - Check Response Headers → `Content-Type` should be `text/plain; charset=utf-8`

## Git Commands

```bash
# Check status
git status

# Add changes
git add vercel.json

# Commit
git commit -m "fix: correct Vercel routing for SPA and static files (sitemap.xml, robots.txt)"

# Push (triggers Vercel auto-deploy)
git push origin main
```

## Checklist

After deployment, verify:

- [ ] `/sitemap.xml` renders as XML in browser (not plain text)
- [ ] `/robots.txt` shows as plain text
- [ ] `/en` loads and refreshes without 404
- [ ] `/es` loads and refreshes without 404
- [ ] `/pt-br` loads and refreshes without 404
- [ ] `/fr` loads and refreshes without 404
- [ ] `/zh` loads and refreshes without 404
- [ ] `/en/faq` loads and refreshes without 404
- [ ] `/es/how-it-works` loads and refreshes without 404
- [ ] Assets (`.js`, `.css`, `.png`, etc.) load correctly
- [ ] `curl -I` shows correct Content-Type headers for sitemap and robots

## Technical Details

### How Vercel Routing Works
1. **Static files** from `/public` are served first
2. **Rewrites** are checked next (if no static file matches)
3. **Headers** are applied to matching sources

### Why This Works
- The rewrite pattern uses a **negative lookahead** `(?!...)` to exclude:
  - Specific files: `sitemap.xml`, `robots.txt`, `favicon.png`
  - Any file with an extension: `.*\\.[a-zA-Z0-9]+$`
- This ensures static files are NOT rewritten to `index.html`
- Headers ensure correct `Content-Type` for XML and TXT files
- All app routes (without extensions) fallback to `index.html` for SPA behavior


