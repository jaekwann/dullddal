'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7e9d5a509873bf43cee2d4fb292732d1",
"assets/AssetManifest.bin.json": "ee142ad2c760d627963b05b77e0505fa",
"assets/AssetManifest.json": "017d111aac8e1535bacb5e4c47c2a34c",
"assets/assets/ai/poker_ai_data.json": "a0a25ccab84ca6d55cbc3a13bd55eb17",
"assets/assets/audio/tinnitus.mp3": "3e2646368dea43b88949c9cc03f08637",
"assets/assets/images/backgroundtemp2.png": "ba4c584375cce5cc331cc262811ac000",
"assets/assets/images/background_layer_back.png": "1b50dc1fdbdfa4c5fb4a63f462fdb1b1",
"assets/assets/images/backlight_layer_middle.png": "90cba5940222014cc15e8582dc7f9362",
"assets/assets/images/card/card_empty.png": "31290756d0a0b03754b7c96383421020",
"assets/assets/images/card/card_heart_01.png": "99ef3dccbb612fd4bbd6ec55b0b4ddbb",
"assets/assets/images/card/card_heart_02.png": "140ec17ebcbacb76add7754fb9f97ada",
"assets/assets/images/card/card_heart_03.png": "f36da7bdb7591144319f364502962171",
"assets/assets/images/card/card_heart_04.png": "11fb5b34346ae2653042f9e964c74fb8",
"assets/assets/images/card/card_heart_05.png": "9304313a4ad0ae9993b3f45620f0bab0",
"assets/assets/images/card/card_heart_06.png": "f8fdefe4c7547955f99e59770e77146b",
"assets/assets/images/card/card_heart_07.png": "1e955dc1173b42f5d6ffe98ea44f565f",
"assets/assets/images/card/card_heart_08.png": "1bf78bf74809f03b7499ea9ad2c748df",
"assets/assets/images/card/card_heart_09.png": "79f467fe6dbb814bc721b5eb9c3a2b21",
"assets/assets/images/card/card_heart_10.png": "633bf33cbfdf60c2035f2c09b624e6d0",
"assets/assets/images/card/card_reverse.png": "1cc49a47ae3bf04450556768f5b8600e",
"assets/assets/images/card/card_spade_01.png": "4b52c5777c3f388593baaff6b471dbcf",
"assets/assets/images/card/card_spade_02.png": "9dd193ff6424cbd171c58c1d4c66b333",
"assets/assets/images/card/card_spade_03.png": "daa392bd08a7197028ea5027e96deeea",
"assets/assets/images/card/card_spade_04.png": "5d08860b45f7853a8e68a30173c0f229",
"assets/assets/images/card/card_spade_05.png": "6aed24dbc9bb63631dc9805ed8088d1f",
"assets/assets/images/card/card_spade_06.png": "c9b95589e700221cd012d286ec371ff4",
"assets/assets/images/card/card_spade_07.png": "dc3b5036e9d676281f9d61e27254c941",
"assets/assets/images/card/card_spade_08.png": "0e06168f217f1310ea763dc5df1f391d",
"assets/assets/images/card/card_spade_09.png": "5216a0246c585f52f6e6e148bbcb09f5",
"assets/assets/images/card/card_spade_10.png": "763f75806ce37a8908ccd8e274d50beb",
"assets/assets/images/chips/hp_chip.png": "3215a04a3609bb26f86a428ea2997ad4",
"assets/assets/images/chips/hp_chip_side.png": "89d81f2fc8bf7c367a2dc9dd67a002a4",
"assets/assets/images/chips/normal_chip.png": "a4ddbb8d18e10f24bbb2125cd72a49a1",
"assets/assets/images/chips/normal_chip_side.png": "3528884cec6b9a50b83e558061b734ad",
"assets/assets/images/itemassettemp.png": "e9add92ec174d275d5ecb0b8c8e7f0d1",
"assets/assets/images/table_layer_middle.png": "25d985f3f6d10d385fa347727299c685",
"assets/assets/images/tempch.png": "c48d59d73e7e658d9f9453a776938d5c",
"assets/assets/shaders/glitch.frag": "e3f76d6a6b9da7008534ec91dc08a2e2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d3b6831f4fd3f6a6a5a29cde4d1e18f9",
"assets/NOTICES": "b3d3592026af82ca1583b3900f4b2bb3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "27b721cbed7dcc968c758cb824f22ac7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "722be3341b9d129a80a0008e026944c9",
"/": "722be3341b9d129a80a0008e026944c9",
"main.dart.js": "624f9207e2aaff5bd78997c9ff03939a",
"manifest.json": "7939c631e33f3f2fa34fcbf25aaeb07b",
"version.json": "d7c2fd183699e32fbfc368694dffc08f"};
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
