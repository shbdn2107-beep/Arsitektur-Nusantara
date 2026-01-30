self.addEventListener("install",e=>{
  e.waitUntil(
    caches.open("arsinusantara").then(cache=>{
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json"
      ]);
    })
  );
});
