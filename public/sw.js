// Minimal service worker: enables PWA install + share-target.
// No caching — the site is SSR and should stay fresh.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
