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
