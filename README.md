# SOCC Arcade

A playful, responsive homepage for a collection of small HTML games. Built with plain HTML, CSS, and JavaScript so it can be hosted directly on GitHub Pages.

## Run locally

Open `index.html` in a browser, or serve the folder with any static file server.

## Publish with GitHub Pages

1. Push this repository to GitHub.
2. In **Settings → Pages**, choose **Deploy from a branch**.
3. Select the `main` branch and `/ (root)`, then save.

The site has no build step or dependencies. The `index.html` file is the entry point.

## Add games

Game metadata, featured selections, and the newest-games carousel are configured in `script.js`. Put each self-contained HTML game under `games/`, then add its title, description, creator, device support, and relative `href` to the `games` array. Set `featured: true` on a game to include it in Featured Games; add it to `newest` when it should appear in New & Shiny. Keep `number` unique and update the count in the page heading when the collection changes.

The first eight playable games are configured in `script.js` and stored under `games/`: **Endless Skater** (KC), **Potato Wars** (OP), **MineWorld** (LC), **Crabby's Ocean Quest** (MH), **Donut Mania** (E), **Bunny Hops** (A), **Stickgirl Candy Adventure** (MH), and **Astro Explorer** (C). The remaining 32 catalog slots are placeholders.

## Site guide

See [`docs/site-guide.md`](docs/site-guide.md) for the visual direction, page functionality, game metadata, and publishing notes.

## Project structure

- `index.html` — page structure and metadata
- `styles.css` — responsive arcade theme
- `script.js` — game catalog, device filter, and newest-games carousel
- `games/` — standalone HTML games
- `docs/site-guide.md` — site design and functionality notes
