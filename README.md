# 🎂 Happy Birthday, Meena — Website

A colorful, animated, one-page birthday experience: cinematic intro,
floating music player, photo gallery with lightbox, video memory,
interactive timeline, a personal letter, and a gift-box surprise.

## Project structure

```
birthday-meena/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/         ← put Meena's photos here
│   ├── video/           ← put the memory video here
│   └── music/            ← put the song file here
└── README.md
```

## 1. Add your photos

1. Drop your image files into `assets/images/` (e.g. `photo1.jpg`, `photo2.jpg`…).
2. Open `js/script.js` and find the `memories` array near the top.
3. Edit each entry's `image` path and `caption`:

```js
const memories = [
  { image: "assets/images/photo1.jpg", caption: "Your caption here ❤️" },
  { image: "assets/images/photo2.jpg", caption: "Another caption ✨" },
];
```

Add as many objects as you like — the gallery renders automatically from this array.

## 2. Use GitHub-hosted images instead

If your photos live in a GitHub repo (like the `Images` folder you showed), you can
point straight at them instead of copying files locally.

**Turn a normal GitHub link into a raw URL:**

```
https://github.com/USERNAME/REPO/blob/main/Images/photo1.jpeg
```
becomes
```
https://raw.githubusercontent.com/USERNAME/REPO/main/Images/photo1.jpeg
```
(swap `github.com` → `raw.githubusercontent.com`, and drop `/blob`)

**Important — filenames with spaces or parentheses:**
Your repo's files are named like `WhatsApp Image 2026-08-09 at 5.58.14 PM (1).jpeg`.
Spaces and parentheses must be URL-encoded in the link:
- space → `%20`
- `(` → `%28`
- `)` → `%29`

So that file's raw URL would be:
```
https://raw.githubusercontent.com/DHAYALANKANIAPPAN/Birthday/main/Images/WhatsApp%20Image%202026-08-09%20at%205.58.14%20PM%20%281%29.jpeg
```

Paste URLs like that directly into the `image` field in the `memories` array — no
other code needs to change.

> Tip: it's much easier to rename the files in the repo first (e.g. `photo1.jpeg`,
> `photo2.jpeg`) so the URLs stay short and simple.

## 3. Add your video

1. Put your video file at `assets/video/memory.mp4`.
2. That's it — the `<video>` tag in `index.html` already points there.

**Using a GitHub-hosted video instead:** GitHub's raw file hosting is fine for
small clips, but it isn't built for streaming video and can be slow or fail for
larger files. If your video is more than a few MB, prefer a dedicated host
(Google Drive with a direct/embed link, or a free video host) and swap the
`<source src="...">` URL inside `index.html`. The website structure already
expects a normal, direct `.mp4` URL — you're just changing that one line.

## 4. Add the music

1. Put the song file at `assets/music/dada-song.mp3`.
2. It will start automatically (with sound) the first time the visitor clicks
   **"Start the Surprise ✨"** — browsers block autoplay before any interaction,
   so this click is what unlocks it.
3. To change the file name/path, edit `websiteConfig.music` at the top of
   `js/script.js` and update the `<source>` in the `<audio>` tag in `index.html`
   to match.

*(Note: only use audio you have the rights to use/share.)*

## 5. Customize Meena's messages

Everything text-based lives in a small number of places:

| What | Where |
|---|---|
| Site title / core config | `websiteConfig` object, top of `js/script.js` |
| Photo captions | `memories` array, `js/script.js` |
| Timeline cards ("The Meena Chronicles") | `timelineEvents` array, `js/script.js` |
| Hero heading/subtitle, letter, gift message, finale lines | directly in `index.html`, clearly labelled by section |
| Colors / theme | CSS variables at the top of `css/style.css` (`:root { --pink: ...; }`) |

## 6. Run it locally

From inside the `birthday-meena` folder:

```bash
cd birthday-meena
python3 -m http.server 8000
```

Then open **http://localhost:8000** in your browser.

(Any local server works — you can also use `npx serve` if you have Node.js.)

## 7. Deploy with GitHub Pages

1. Create a new GitHub repository (or use an existing one) and push this folder's contents to it.
   ```bash
   cd birthday-meena
   git init
   git add .
   git commit -m "Meena's birthday website"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO.git
   git push -u origin main
   ```
2. On GitHub, open the repo → **Settings** → **Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
4. Choose branch `main` and folder `/ (root)`, then **Save**.
5. Wait a minute, then visit the URL GitHub shows you — usually:
   ```
   https://USERNAME.github.io/REPO/
   ```

That's it — share that link with Meena. 🎉
