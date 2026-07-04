# Doggie Styles Grooming Spa & Boutique

Marketing website for the multi award winning dog grooming salon at Alpha
Garden Centre, Wickford, Essex.

Built with Vite, React, TypeScript and Tailwind CSS v4.

## Commands

```bash
npm install     # first time only
npm run dev     # local dev server
npm run build   # production build into dist/
npm run preview # preview the production build
```

## Editing content

Everything a client would ever ask to change lives in
`src/data/site.ts`: phone number, email, booking link, socials, address,
opening hours, service categories, prices, gallery photos and reviews.

### Prices

Services currently show no prices (each `price` field is `null`). When the
salon confirms their price list, set e.g. `price: "from £35"` on each
service and it will appear in the menu automatically.

### Opening hours

Hours are set to Tuesday to Saturday, 9am to 5pm (Google only shows
"Closes 5pm"). Confirm the exact days with the salon and edit
`site.hours`.

### Google review link

`site.reviewUrl` currently opens their Google Maps listing. When the salon
shares their short review link (Google Business Profile > "Ask for
reviews", a `g.page/r/...` URL), paste it there so "Leave a review" opens
the review box directly.

## Live Instagram gallery

The gallery ships with real photos downloaded from
[@doggie_styles_spa](https://www.instagram.com/doggie_styles_spa/)
(`public/gallery/`). Instagram does not allow anonymous feed access, so
automatic updates need a one-time connection by the account owner:

1. Create a free account at [behold.so](https://behold.so) (or a similar
   Instagram feed service).
2. Connect the salon's Instagram account and create a **JSON feed**.
3. Paste the feed URL into `instagramFeedUrl` in `src/data/site.ts`.

From then on, new Instagram posts appear in the gallery automatically. If
the feed is ever unreachable, the bundled photos are shown instead, so the
gallery never breaks.

## Booking

Online booking goes through their ShakeYourTail portal. The portal blocks
being embedded in other sites (X-Frame-Options), so every "Book Online"
button opens it in a new tab.

## Price guide

The Prices section is priced by size tier (Small / Medium / Large / Extra
large) in `priceGuide` in `src/data/site.ts`. While every `fullGroom` /
`bathTidy` value is `null`, the section shows an honest "get a quote"
layout. Fill in the numbers (e.g. `fullGroom: "£38"`) and it automatically
switches to a full price table. Edit the size tiers or example breeds in the
same array.

## Before / after slider

`beforeAfterPairs` in `src/data/site.ts` is empty, so the transformation
section is hidden. This is deliberate: showing mismatched or fake pairs
would look dishonest. To switch it on, add 2-4 real pairs from the salon's
camera roll (the same dog before and after its groom):

1. Drop the photos into `public/gallery/` (e.g. `before-bella.jpg`,
   `after-bella.jpg`).
2. Add an entry per pair to `beforeAfterPairs`.

The section appears automatically with a draggable before/after slider.

## WhatsApp

Every WhatsApp button uses `site.whatsapp` (the mobile number in
international format) with a pre-filled booking message (`whatsappMessage`).
Change either in `src/data/site.ts`.

## Analytics and conversion tracking

Book, Call and WhatsApp clicks are already wired to fire tracked events. No
analytics script loads until you set `plausibleDomain` in `src/data/site.ts`
to the live domain (create a free, cookie-free site at
[plausible.io](https://plausible.io)). Once set, the dashboard shows how
many people book, call or message, and from which section, so marketing spend
can be pointed at what actually converts.
