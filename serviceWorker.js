const TICsPWA = "dev-TICsPWA-site-v1";
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/images/irv1.jpg",
    "/images/irv2.jpg",
    "/images/irv3.jpg",
    "/images/irv4.jpg",
    "/images/irv5.jpg",
    "/images/irv6.jpg",
    "/images/irv7.jpg",
    "/images/irv8.jpg",
    "/images/irv9.jpg"
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(TICsPWA).then(cache => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request);
        })
    );
});