const staticAnimeshData = "site-cache-v1";
const assets = [
  //   "/",
  "/index.html",
  "/assets/css/styles.css",
  "/assets/css/swiper-bundle.min.css",
  "/assets/js/main.js",
  "/assets/js/swiper-bundle.min.js",
  "/assets/pdf/IshaSharma_Resume.pdf",
  "/assets/img/blob.svg",
  "/assets/img/profile.png",
  "/assets/img/about.png",
  "/assets/img/mt-fuji.jpg",
  "/assets/img/skills/angular.svg",
  "/assets/img/skills/vue.svg",
  "/assets/img/skills/react.svg",
  "/assets/img/skills/typescript.svg",
  "/assets/img/skills/javascript.svg",
  "/assets/img/skills/html.svg",
  "/assets/img/skills/css.svg",
  "/assets/img/skills/sass.svg",
  "/assets/img/skills/firebase.svg",
  "/assets/img/portfolio/eventify.jpeg",
  "/assets/img/portfolio/rockpaperscissor.png",
  "/assets/img/portfolio/tutorhub.png",
  "/assets/img/portfolio/streamlit.png",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticAnimeshData).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
