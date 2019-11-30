const CACHE_NAME = ['v-1-1575122299489'];
const FILES_TO_CACHE = [
  '/',
  '/manifest.json',
  '/js/bundle.js',
  '/js/vendors.js',
  '/css/bundle.css',
  'images/icons/icon-128x128.png',
  'images/icons/icon-192x192.png',
  'images/icons/icon-512x512.png',
  'images/favicon.ico',
];

self.addEventListener('activate', ( event ) => {
  event.waitUntil(
    caches.keys().then( keyList => {
      return Promise.all(keyList.map( key => {
        if (CACHE_NAME.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});

self.addEventListener('install', ( event ) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open( CACHE_NAME[0] )
    .then( cache => {
      return cache.addAll( FILES_TO_CACHE );
    })
  );
});

self.addEventListener('fetch', ( event ) => {
  event.respondWith(
    caches.match(event.request)
    .then( response => {
      return response || fetch(event.request);
    })
  );
});