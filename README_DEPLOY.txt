LE CLOS DE LA VOILERIE — LIGHT DEPLOY PACKAGE

Conservative version:
- Creative homepage remains at root /index.html.
- Approved apartment pages are under /appartements/.
- /fr/ redirects to the root homepage for now, so the site is multilingual-ready without duplicating assets.
- /en/ and /de/ are lightweight noindex placeholders.
- JPEG images were optimized to reduce upload size.
- No build command needed.

Deploy:
1. Unzip.
2. Commit contents to GitHub.
3. Cloudflare Pages: no build command.

Homepage patches attempted:
[('Un jardin sur la mer', False), ('Un balcon sur la mer', True), ('Sous les toits', False)]

Size before JPEG optimization: 140.2 MB
Size after JPEG optimization: 135.6 MB
Optimized JPEG count: 61
Remaining Airbnb strings in homepage: 4
