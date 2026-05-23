LE CLOS DE LA VOILERIE — PRODUCTION BASE

Goal of this package:
- Keep the approved visual rendering unchanged.
- Add the non-visual foundations needed for production: SEO, sitemap, robots, JSON-LD, OpenGraph/Twitter cards, LLM summary, and future multilingual structure.

Visual safety check:
The <body> of each approved page was not changed. Body hash checks:
{
  "index.html": true,
  "un-jardin-sur-la-mer.html": true,
  "un-balcon-sur-la-mer.html": true,
  "refuge-sous-les-toits.html": true
}

Published pages:
- /index.html
- /un-jardin-sur-la-mer.html
- /un-balcon-sur-la-mer.html
- /refuge-sous-les-toits.html

Added non-visual files:
- /robots.txt
- /sitemap.xml
- /llms.txt
- /site.webmanifest
- /content-manifest.json
- /_headers
- /fr/ redirect placeholders
- /en/ and /de/ noindex placeholders

Multilingual plan:
Current French pages remain at root for compatibility. /fr/ redirects to these pages for now. When English/German copy is ready, create real /fr/, /en/ and /de/ versions and update hreflang from page-to-self only to the full language set.

Tracking recommendation:
Add analytics after deployment verification. Plausible is the simplest privacy-friendly option. GA4 can be added later if Google Ads/advanced attribution becomes important.

Deployment:
Static site. No build command. Deploy the unzipped contents as the site root.
