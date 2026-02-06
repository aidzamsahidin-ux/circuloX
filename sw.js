// sw.js - Diperlukan untuk PWA Installability
const CACHE_NAME = 'krd-pdp-cache-v2';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Biarkan pelayar menguruskan rangkaian secara normal (online-first)
    // Ciri ini cukup untuk membolehkan 'Install' pada Chrome/Safari
});
