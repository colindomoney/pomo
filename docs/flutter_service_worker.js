'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "339eb13021f57dd185714b026f9cdbc2",
"version.json": "b077993cfdc84ee766669977355e50e3",
"splash/img/light-2x.png": "41f14d71e8da84f9cc55e0a4f39a0845",
"splash/img/dark-4x.png": "35021b222a35f836e4a45af58dcffeca",
"splash/img/light-3x.png": "a44ed941f732f6c8e8d461ddbf3b7318",
"splash/img/dark-3x.png": "a44ed941f732f6c8e8d461ddbf3b7318",
"splash/img/light-4x.png": "35021b222a35f836e4a45af58dcffeca",
"splash/img/dark-2x.png": "41f14d71e8da84f9cc55e0a4f39a0845",
"splash/img/dark-1x.png": "85cc7ffc3c2ca0d320a85770a7886e25",
"splash/img/light-1x.png": "85cc7ffc3c2ca0d320a85770a7886e25",
"index.html": "e702e6dca1eb34f4b5acc3d25c51987b",
"/": "e702e6dca1eb34f4b5acc3d25c51987b",
"main.dart.js": "2d3ae86edf1866fb97e99e271dac7e73",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "97c30df063e615f531e285ddf9d1df05",
"icons/favicon-16x16.png": "7835ca93e621bbffda079aa0d18881c4",
"icons/favicon.ico": "3d6e90617e2c52120d3561c3e95a3119",
"icons/apple-icon.png": "809142fa3178c1e4f04e810eaa711501",
"icons/apple-icon-144x144.png": "dc75a562a8dc06823f684233eec8bf9d",
"icons/android-icon-192x192.png": "95d23f138cf71536a1c0cfa6fc20bcfe",
"icons/apple-icon-precomposed.png": "809142fa3178c1e4f04e810eaa711501",
"icons/apple-icon-114x114.png": "fb110b1052602ccaf2a0c646598700b0",
"icons/ms-icon-310x310.png": "7da1db1c7dd805471e9fc4e449f471f1",
"icons/Icon-192.png": "cb962430065f58e762f952b986e04f11",
"icons/Icon-maskable-192.png": "cb962430065f58e762f952b986e04f11",
"icons/ms-icon-144x144.png": "dc75a562a8dc06823f684233eec8bf9d",
"icons/apple-icon-57x57.png": "1237b298defe8ed68bae73fa587dd9ef",
"icons/apple-icon-152x152.png": "e6ace17ad9e1372b4b4d020d3bb3c5e4",
"icons/favicon.png": "7a26ea9d4e61122fc023b84e5acdb148",
"icons/ms-icon-150x150.png": "a99815bcba9f55534890e26700dd852a",
"icons/android-icon-72x72.png": "4cf235ea1180ce155bf4ab06380007aa",
"icons/android-icon-96x96.png": "895c8d59cd3432d228dc7fccbc1ec6dd",
"icons/android-icon-36x36.png": "1e0407715508ec6ac4612bdaa0676223",
"icons/apple-icon-180x180.png": "7dd16e0a2196cc2d75565727a943b870",
"icons/favicon-96x96.png": "895c8d59cd3432d228dc7fccbc1ec6dd",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/android-icon-48x48.png": "361a05dfcc6e6f3e0af2db8e8d6c43ba",
"icons/apple-icon-76x76.png": "b7be1f3640bc65b6850db6254c9fd2a5",
"icons/apple-icon-60x60.png": "65f4e27ae7d186aa035b16c1e98f269d",
"icons/Icon-maskable-512.png": "d9201f7b8de616d21eef3f1cfde25c6a",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/android-icon-144x144.png": "dc75a562a8dc06823f684233eec8bf9d",
"icons/apple-icon-72x72.png": "4cf235ea1180ce155bf4ab06380007aa",
"icons/apple-icon-120x120.png": "d0ab05981de221114c8770f585ac08e7",
"icons/Icon-512.png": "d9201f7b8de616d21eef3f1cfde25c6a",
"icons/favicon-32x32.png": "bd16dc23c6b4cbdc285bc542340b35a8",
"icons/ms-icon-70x70.png": "005fd9fff3600b5b731ad24add525415",
"manifest.json": "0eca155a4be98da2019c517563c521f3",
"assets/AssetManifest.json": "3523d226da4ed6fce33127186d183133",
"assets/NOTICES": "88b1fff94c50650ea194d702e94333a2",
"assets/FontManifest.json": "608a9229248fb049d4529f02f491d88c",
"assets/AssetManifest.bin.json": "c124e8f2ed0a3286b3ec03d662946784",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9a2968f3b7a45f56c155ea1b42bceff8",
"assets/fonts/MajorMonoDisplay-Regular.ttf": "e7acc228230d22332855765872b0a3bf",
"assets/fonts/LilitaOne-Regular.ttf": "ce83b4bfa37f53ea2a3fc97088af7181",
"assets/fonts/MaterialIcons-Regular.otf": "4fafb10cd8ed7d88d440dc796e1df35a",
"assets/fonts/RubikMonoOne-Regular.ttf": "f5486d33c22f837e905d600a5407da06",
"assets/assets/images/pomo_logo_dark.svg": "78f44d1d6e951e68e86a6d98e428fa30",
"assets/assets/images/pomo_logo.png": "f238f05dc13803a81395cafff091ee79",
"assets/assets/images/pomo_splash.png": "f238f05dc13803a81395cafff091ee79",
"assets/assets/images/pomo_logo.svg": "e40ddbf9ebc1a2ab0786b0bb5572c268",
"assets/assets/images/pomo_logo_dark.png": "902a01674175f325ff194ffce6a9a45a",
"assets/assets/sounds/ding_dong.aac": "3d204232e10958da6418578dacfb0f40",
"assets/assets/sounds/pop.aac": "ab188dfd11210fc8293ea0d93aaeb7b0",
"assets/assets/sounds/click.aac": "acde4d89a4315689c8c74a5b294b4a64",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "b1d2280fb36c6d5a51c5959da3c3d232",
"canvaskit/canvaskit.js.symbols": "80e8f131119f63a164c0adda80515009",
"canvaskit/skwasm_heavy.js.symbols": "e3424caea126826f15d4492a542f69a4",
"canvaskit/skwasm.wasm": "5173ef1887754164ddfa6df6fedf8221",
"canvaskit/chromium/canvaskit.js.symbols": "ee71615b4771fe00f4c077b7238f07bd",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "5587a61c2b0a1697052bf44ec53bce5b",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "b9176a7e969a26cbd5377c8017acc8f1",
"canvaskit/skwasm_heavy.wasm": "d86656623eda143f0ad619a0968f75aa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
