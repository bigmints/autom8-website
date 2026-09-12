# AutoM8 website

The public marketing site is a separate React and Tailwind application.

## Local development

From the repository root, run:

```sh
npm --prefix website run dev -- --port 4174 --host 127.0.0.1
```

The Vite server supports direct navigation to `/`, `/for-business-leaders`,
`/docs`, `/docs/<topic>`, and `/plans`. The documentation area contains public
guidance for the managed AutoM8 account and desktop workflow only; local-edition
provider and model configuration is intentionally excluded. The repository's installed dependencies currently supply
the website toolchain. For a standalone checkout, run `npm install` in this folder.

## Verification

```sh
npm --prefix website run lint
npm --prefix website run build
npm run lint
npm run type-check
```

Use `npm --prefix website run preview -- --host 127.0.0.1` for the production
build preview. A deployed static host must serve `index.html` for the page routes.

## Design and content

Source was recovered from commit `9819365`. The site is now conversion-led:
download AutoM8, understand the managed workflow, choose a plan inside the app,
or plan organization adoption. It contains no links to the retiring web app.
The visual rebuild introduces responsive line illustrations,
scroll reveals, a shared light navigation, and system reduced-motion support.
Illustrations live in `src/Illustrations.tsx`; layouts use Tailwind utilities.

The primary download action points directly to the current Apple-silicon DMG. Plans publish the
Free, Individual Pro, Team, additional-member, and top-up prices, while Stripe checkout remains in Usage & Billing inside AutoM8.
Gallery examples are illustrative. This rebuild does not add a backend.
