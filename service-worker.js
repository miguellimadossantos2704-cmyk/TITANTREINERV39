const cacheName = 'titan-v1';
const assets = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './i18n.js',      // <--- Adicione as traduções
    './manifest.json',
    './favicon.ico'   // <--- E os ícones
];

// Instala o Service Worker e guarda os arquivos no cache
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll(assets);
        })
    );
});

// Responde com os arquivos do cache quando estiver offline
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(res => {
            return res || fetch(e.request);
        })
    );
});
