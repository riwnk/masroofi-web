'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0e6867448afe21c65f6e0ac0847249d1",
".git/config": "5e86e196f3515c0622e85a74f49369b9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7a536a536eedbf16b0cf1b25608dba6c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b2bbd40a5e041164beec13ce8d36929c",
".git/logs/refs/heads/main": "cb38b1d6eb7e8eb7c320b7a346bd3624",
".git/logs/refs/remotes/origin/main": "2e24041a0047138f2fe719c0083ff76b",
".git/objects/02/7fd2f95302200c3a1d742d6b408d8fdf232a6e": "53ac175757766083e87fee0780655cac",
".git/objects/07/5e850c0d315f9749854aec1ac9e631be3bb657": "6e93302e17113106a7feadc837a321be",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0a/7cb26440084cae0ff49a14bcf0a369c6620c2a": "684d969bd5384730909a78b36ae81dcc",
".git/objects/16/f6d6e1d7a190e5838cc62b1e9a801d45a0cece": "707b47dcad9192d1fa43094c9000ba1a",
".git/objects/1e/e5aa2522bc751c4a10b93476993c79c2aabdc6": "6b06d35f770e4f5904fd7435b6d3d186",
".git/objects/27/1d93cfee37f85ccb640df74ca534302cf01a1f": "9d5a6d403cec6760f3aff1e11ab76723",
".git/objects/29/729be589b88d2a674f867f9b475b644bb9c801": "172a37e90c46df0e2b70c8417d428862",
".git/objects/2b/1d28b5284152323125dd17ae0ad9952a612df0": "41b7dfd52b0454f9e79005fe3a1b44bc",
".git/objects/2b/438b34a2b16aaa81c5e11940a08ff5f3a42188": "8b8a2c512aac7217657f88323d2f01e9",
".git/objects/2d/3931c73458e729d7e6c981b6a3d854d1449548": "0e6b65fecc4a0d2bca567180b5fd24d4",
".git/objects/2f/960bef52cb5646d50860368c2e96231b205f23": "4510ab973cddd317b1e2b481e214e711",
".git/objects/39/0f583ad836e37b9e5ad0d8f98255c7cd718b35": "1a66f6f1be095437af84fd40415695cb",
".git/objects/39/aa038914d09135d13726271c84822488e1e222": "03ad008785cd2971f26c8761737817e2",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3e/a0af1aa183416ffd372e1fd25ca0a6908ad8a7": "4d62de0b57121bb6510abd86f0c271bb",
".git/objects/42/8e7916da102279bde453df0577fb7886de8d9f": "f5c57b832429c4c0906239669d52da15",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/f0b2ea675ad39275f3fc1cf817d35f8e8da007": "0d4f1f7d409dc5b6c78fc970071835d0",
".git/objects/4d/a023a17d9dad9e9a0d521cdd98ce1fa0fb1b01": "bbad4d1b610167520c7d054f3cfdb21f",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/52/ebc7fdb2919e9241ba79804c5de830d20c2a87": "2e4bea8ec1bbb65fa02053ae4aa43ebe",
".git/objects/57/34a00a4ca7ee2c327a8b9cf6233c52d12b6b8e": "e49a292a7e806951ec59ddfb47c352b3",
".git/objects/59/78dd2c049df5fd4206627db47de75289c42b52": "98d8579da99b5b5d32a55bd27482dfd2",
".git/objects/5f/9154781a633bb7d90797fe0d9b6fcee6bd858a": "ff5a7b352d56af661626c596b3da88c7",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6a/b654719662ac1810d82117606f4a957b6e6b01": "203873b14509d3f9025ebdd1fd2821dc",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/70/78cc49b3691b2ac1499c3290f107ffc4203bc1": "e518e520506163b1cd78f10be3b94145",
".git/objects/73/ac415b69c965ecd8a7838a4a6921dba908daff": "3cbc75ff93b913d25a829c9e43727052",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/8a/1da8af421008797d79fab55a9a64c230df398c": "72d2da599ee2d48ecf49f3083bac7e0d",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/9b/518334f827bc6fe8a4e89e18f0bac657c4896d": "b5ab634f823f7e698111df7f28cca1b4",
".git/objects/9c/66d73c21f6cfa2eae9910901b55e2bc83cba19": "8d2f3f1ffe2030306fdd5d41fa9c13d9",
".git/objects/a4/8c293165e3a1c7bc71ed5c68105e6409d928b7": "9a7adbc088ccbae91b335feb0b870ce2",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/ab/e2ab3a2eab0356879ccfea1a9043bf19bc4318": "bab2592b48488d0689ffb29892c57dbc",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b0/17a2b466dd227445b56593d41ee4a8b17d2f48": "e223aaf5454c1edeffb3ba01d5564de9",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/b9/5fdb26de1cdb3f469accf586c2c6dd0e51fb00": "4807541c58a1feb2346c95e71a695250",
".git/objects/bf/ea084c41ac045462203a1369311c0b116801c0": "9bbd34b6c636188aa4c4bac3533aa896",
".git/objects/c1/a4de7dc8f3620b3f8d825b899b6923c867a09a": "ad6ccaa5dddd29fca28d630377ebd715",
".git/objects/c8/0d474408fe023c6d90163846e10e2a07462035": "5a2931ca794b02c80f4b1431f596a15d",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/cc/297daa019512c8d759442d8adf1ca05790047e": "2522e7b0dd2306643ea25031c8d66a74",
".git/objects/d0/086267ed84e0f04eb8a775af017dc7e87cb799": "ed64966a7b432e6808e87a150bb850f0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/0fb6788a9c9ffbd9380c5c08d569cf3bbb7fe7": "a8c4fde5ae2db517afee91a323b7791a",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/e0/ff3589319a202237613900254cbf821ea848f1": "53601ab62e2981f171246279e17119c9",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ef/8741c4465247858e4bf89a2efa93935a4bbafb": "7ea5a1223a133c8a7d926d0fafea459a",
".git/objects/f0/fdd7dbf1db994f688577a8612c1ff55ff518bf": "51031ca1c0af2401ed6ecaad29769ea7",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f3/85f93369b4b43eb60430caa018ed1cb6934e67": "310807ea1020835999419be0b05a53e7",
".git/objects/f4/ca2bf9bf0dda6b7b0e6a493b9cefbc1b2584ad": "6e5af976006aa6030e7563ed07a2f249",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e1eea7256ff0b1c12c8eee5d7222ce86ca67c6": "f20250cf4618145453a43d531b28e1df",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fe/a9a76e3ef74964bfe3edcb579ef20752daf37a": "cff3366e6e2feeeb93cd47dca927402f",
".git/refs/heads/main": "700dfcc4710bd049b73cf5ae532e6097",
".git/refs/remotes/origin/main": "700dfcc4710bd049b73cf5ae532e6097",
"assets/AssetManifest.bin": "8c55d4e260be5c30b1a6a4b9b821a0a2",
"assets/AssetManifest.bin.json": "b34ca5e9218bf56dfae84900d6364bb6",
"assets/assets/branding.png": "c7a428a3184116d5c398a74f46f68db1",
"assets/assets/logo.png": "403668f176c34abece2698b21dc2a4ee",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a4baccc3016500f0f6633eb20c9187f1",
"assets/NOTICES": "9ff4dbb41f454a64c4d73658a5fe859f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "ce4833ba1b39593baf9f306ba6b8a1b9",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "31204e24b9a24c3f54c9cd94bfd1e119",
"icons/Icon-192.png": "ee23df25f46f180583b74449b7696f83",
"icons/Icon-512.png": "7f3495d43ab4987fb61743243f588445",
"icons/Icon-maskable-192.png": "ee23df25f46f180583b74449b7696f83",
"icons/Icon-maskable-512.png": "7f3495d43ab4987fb61743243f588445",
"index.html": "03982ee98f7c8e7a66678097c588318f",
"/": "03982ee98f7c8e7a66678097c588318f",
"main.dart.js": "aea7619ee8f9ad1e4e64cf4f365e4945",
"manifest.json": "b5ee098d954b9ca861bc17221080a84e",
"splash/img/dark-1x.png": "28e422fad3fe010cf974c00046777dc0",
"splash/img/dark-2x.png": "3283811d3b16d8b76b90a6bf1c86d5e4",
"splash/img/dark-3x.png": "67ab5b015885cd0b364bbf3c17b1c938",
"splash/img/dark-4x.png": "0381c489a248099fd60f4808318a55ad",
"splash/img/light-1x.png": "3df14d96b49a2965e53658c756aebb14",
"splash/img/light-2x.png": "8d6bba51f4acffb1a72208f3330d5c5a",
"splash/img/light-3x.png": "2f22b7e28e3c2fff846f89e49cf7fd96",
"splash/img/light-4x.png": "a176e46f2c779feb4ec24728d45fb4ff",
"version.json": "68d7e4adf2a62d849b6953dfeec4706d",
"_redirects": "eec1937571a0e9ff382bcbf2ccad6ccc"};
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
