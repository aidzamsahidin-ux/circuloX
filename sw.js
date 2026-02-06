// sw.js - Diperlukan untuk PWA Installability
// Versi: 2.1 (Dibaiki untuk ralat binaan GitHub)

const CACHE_NAME = 'krd-pdp-cache-v2';

// Fail yang ingin disimpan untuk kegunaan offline (jika perlu)
const urlsToCache = [
    './',
    './index.html',
    './manifest.json'
];

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    // Membersihkan cache lama jika ada
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Biarkan pelayar menguruskan rangkaian secara normal (online-first)
    // Ciri ini cukup untuk membolehkan butang 'Install' muncul pada Chrome/Safari
    event.respondWith(fetch(event.request).catch(() => {
        return caches.match(event.request);
    }));
});
