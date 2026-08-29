const CACHE_NAME = "workout-assistant-v4.2";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./assets/dumbbell-favicon-v42.svg",
  "./assets/dumbbell-favicon-v42.ico",
  "./assets/dumbbell-favicon-v42-32.png",
  "./assets/dumbbell-favicon-v42-16.png",
  "./assets/dumbbell-apple-v42.png",
  "./assets/dumbbell-icon-v42-192.png",
  "./assets/dumbbell-icon-v42-512.png",
  "./assets/dumbbell-icon-v42-maskable-512.png",
  "./assets/theme-palette.png"
]

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)).catch(() => {});
        return response;
      })
      .catch(() => caches.match(event.request).then(r => r || caches.match("./index.html")))
  );
});
