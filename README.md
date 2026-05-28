# Pinglagi

Marketing site for a stretch ceiling installer in Estonia. Next.js + Chakra UI.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Languages

- Estonian (default) — `/`
- English — `/en`
- Russian — `/ru`

Use the **EE / EN / RU** menu in the header to switch.

## Pages

| Path         | Purpose                                  |
|--------------|------------------------------------------|
| `/`          | Home — hero, intro, advantages, types    |
| `/services`  | Six ceiling types in detail              |
| `/gallery`   | Project grid (placeholder cards)         |
| `/about`     | Company story + values                   |
| `/faq`       | Common buyer questions                   |
| `/callback`  | Phone number form (no backend yet)       |
| `/contact`   | Address / phone / email + callback form  |

## Adjusting content

All copy lives in [lib/translations.ts](lib/translations.ts). Add or edit strings in `et`, `en`, `ru`.

## Theme

[lib/theme.ts](lib/theme.ts) — deep navy `brand.700` + warm copper `accent.500` on an off-white background. Tweak there to re-skin globally.

## Form submission

The callback form (`components/CallbackForm.tsx`) currently shows a success state on submit but does not POST anywhere. Wire it to your backend / email service / CRM when ready.
