const staticCLassCatalog = "class-catalog"
const assets = [
  "/",
  "index.html",
  "button.css",
  "CheatSheets.html",
  "manifest.json",
  "mobile.css",
  "modal.css",
  "script.js",
  "serviceWorker.js",
  "SouthHillsWebRetina.svg",
  "style.css",
  "table.json",
  "/cheatSheets",
  "Cheats.html",
  "Cheats.json",
  "cheatsscriplt.js"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticClassCatalog).then(cache => {
      cache.addAll(assets)
    })
  )
})