# Nabil Portfolio

SEO content writer portfolio for Nabil Ibrahim-Oladosu — anime, manga & gaming coverage. Built with Next.js (App Router) and TypeScript, implementing the "Organic" design from Claude Design.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app` — routes: home, `/work`, `/about`, `/contact`
- `src/components` — nav, theme toggle, animated background (Three.js), reveal-on-scroll, work cards, contact form
- `src/lib/data.ts` — all site copy and the work portfolio data

## Notes

- The contact form validates client-side and shows a success state, but isn't wired to send email yet — connect it to an API route + email provider (e.g. Resend) before relying on it.
- `public/portrait.jpg` is not included; the About page currently shows a placeholder in its place — drop in a real photo and swap the `.about-portrait-inner` block in `src/app/about/page.tsx` for an `<Image>`.
