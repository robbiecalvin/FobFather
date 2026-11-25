# FobFather

[FobFather](https://fobfather.ca/) is a static website for key fob copying and appointment requests in Downtown Vancouver and the West End.

## Install on your phone

Open the site in your browser and tap **Install app** on the homepage.

- **Android** — Follow the browser's install prompt. If it hasn’t appeared, open the browser menu and look for **Install app** or **Add to Home screen**.
- **iPhone or iPad** — Open the site in Safari, tap **Share**, then **Add to Home Screen**. Turn on **Open as Web App** if shown, then tap **Add**.

Launch FobFather from its new home screen icon.

## Preview locally

From the project directory, run:

```sh
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) to preview the site and its install button. For on-device installation testing, serve the site over HTTPS. The web app manifest is in `manifest.webmanifest`, the install behavior is in `install.js`, and the app icons are in `icons/`.

## Technical scope and verification

The static site includes a web app manifest, install script and icons. Suggested checks include responsive layouts, manifest resolution, HTTPS installation and appointment-link behavior. Verify on actual supported devices before claiming installation compatibility.
