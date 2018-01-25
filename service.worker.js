const cacheName = '001';

const cacheUrl = ['/', '/index.html', 'app.js'];

self.addEventListener('install', (event) => {
  event.waitUntill(
    caches.open(cacheName).then(cache => {
      cache.addAll(cacheUrl);
    })
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  )
})