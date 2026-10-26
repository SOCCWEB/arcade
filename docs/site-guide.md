# SOCC Arcade — Site Guide

## Purpose

SOCC Arcade is a static, GitHub Pages-friendly host for small HTML games. The page presents a collection like the selection panel of a playful 1980s upright arcade cabinet.

## Visual direction

- **Overall shape:** a centered upright cabinet with a rounded silhouette, layered side trim, bezel, decorative screws, and a recessed control deck.
- **Marquee/screen:** the top panel holds the dimensional pixel-font SOCC ARCADE title, blinking marquee lights, a green “Press Start for Fun” control, and the page navigation.
- **Cabinet controls:** a decorative joystick, two buttons, and “Choose Your Game” label bridge the marquee and game selection area.
- **Selection deck:** newest games and the main catalog sit in framed, illuminated panels with beveled borders, dark violet surfaces, neon green accents, and retro pixel lettering.
- **Palette and type:** deep indigo and violet cabinet paint, warm yellow trim, lime controls, pink highlights, and the Press Start 2P pixel display font paired with DM Sans for small descriptive text.
- **Responsive behavior:** the cabinet narrows for tablets and phones; the marquee title and control strip resize for smaller screens; the five-column game grid becomes horizontally swipeable on narrow screens so card details stay legible.

## Page functionality

### Marquee navigation

- **Games** jumps to the full game catalog.
- **New & shiny** jumps to the newest-games carousel.
- **About** jumps to the footer.
- **Press Start for Fun** selects a random playable game and launches it through the marquee loading animation.
- **Submit a game** opens a submission dialog for the game name, description, creator, one HTML file, and thumbnail design. The thumbnail designer previews preset icons and backing colors.

### Featured Games and New & Shiny carousels

Both horizontal carousels show about three and a half cards at a time on desktop, with a partial next card on narrow screens. New & Shiny uses the `newest` array in `script.js`. Featured Games is generated from catalog entries marked `featured: true`; set or remove that flag to curate the section. A lower `featuredOrder` value places a game earlier in the carousel. Previous and next buttons operate independently, cards can be dragged, and playable cards open their game. The featured order is La Festa Simulator, Endless Skater, Potato Wars, Astro Explorer, and Bunny Hops.

### Game catalog

The catalog is populated from the `games` array and renders 45 slots. Each entry can include:

- `number`: unique slot number
- `title`: visible game title
- `description`: one-line summary
- `creator`: creator credit
- `laptop` / `mobile`: support indicators and filter values
- `href`: relative path to the playable HTML file; omit it for an unfilled placeholder

The device filter shows all games, laptop-friendly games, or mobile-friendly games. The first eight entries are playable: **Endless Skater** (KC), **Potato Wars** (OP), **MineWorld** (LC), **Crabby's Ocean Quest** (MH), **Donut Mania** (E), **Bunny Hops** (A), **Stickgirl Candy Adventure** (MH), and **Astro Explorer** (C). All support laptop; Stickgirl Candy Adventure uses keyboard controls only, and the other seven include touch controls for mobile. The remaining 32 slots are placeholders.

Each playable catalog tile has a game-specific backing color and icon. Placeholder slots retain the cabinet's neutral purple treatment.

### Submitting a game

The form offers 42 preset thumbnail icons and eight backing colors with a live preview. It validates a single `.html` or `.htm` selection, then opens a prefilled email draft to `hello@socc.games` containing the entered details and thumbnail choices. Because GitHub Pages serves static files, submissions are not uploaded or published automatically. The selected HTML file must be attached manually to the email before sending.

### Launch animation

Playable cards and playable carousel entries use the same launch sequence: the complete colorful tile slides upward inside its own thumbnail frame, the page scrolls back to the cabinet marquee, and the matching full-color tile appears at the center of the console screen and expands to fill it before the browser transitions to the standalone game page. The green random-start control launches a randomly chosen playable entry through the same sequence. Empty placeholder slots are not treated as playable games.

## Adding or updating a game

1. Add the standalone HTML file to `games/`.
2. Add or update its metadata in the `games` array in `script.js`.
3. Add it to `newest` when it should appear in the carousel.
4. Update the catalog count in `index.html` if the number of entries changes.
5. Check the relative link and device-support flags before publishing.

## Hosting notes

The arcade shell has no build step or package dependencies and can be served from the repository root with GitHub Pages. Games are separate HTML documents loaded through ordinary relative links. The included games use Tailwind CDN and/or Google Fonts from their original HTML, so those external resources need an internet connection when the games run. The game files are included locally in this repository.
