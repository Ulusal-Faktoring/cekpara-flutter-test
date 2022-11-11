'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "4ca8cc1c7668c75631793041e762d89c",
"index.html": "8bc3e12c4288b0d50eb5b0b62fb0f41f",
"/": "8bc3e12c4288b0d50eb5b0b62fb0f41f",
"firebase-messaging-sw.js": "d41d8cd98f00b204e9800998ecf8427e",
"server.js": "47a6914b2aee46034c791d7084df32be",
"main.dart.js": "d83bba3e0a3c00e2bb6722c9b81aa47b",
"next.config.js": "b8d49cb4410cf792b2a0f2aa67c922d8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"package-lock.json": "2c9f52582ff8103f1be9123c1ec34941",
"package.json": "db7d3b0b93d8d4d48857e701a54c8a01",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1b237818896b2c1b0cd95b419545a963",
"assets/AssetManifest.json": "a02baa9b23f56b95e000c1ce26e3bb24",
"assets/NOTICES": "d37d045c92c0e83d585ac8a3c20bcc39",
"assets/FontManifest.json": "f45096a314f453e7ea336722dae1c6af",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/mixpanel_flutter/assets/mixpanel.js": "5c717055b6683529243c292ab78aa797",
"assets/shaders/ink_sparkle.frag": "c919dee2c3358b449b28a306eb87c84d",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/cheque-x-point.svg": "1c148d723b3cf6499cb483559abfee0e",
"assets/assets/images/file-extension-zip.png": "736dded2789f623aff9640184eab2eb1",
"assets/assets/images/info_filled.svg": "639c75952b33573725d51a37c09f49d2",
"assets/assets/images/person-circle.svg": "b01653328ea615a85d5a48e610bc0d68",
"assets/assets/images/loading_indicator.svg": "43a58838e1052246515c8d183af86006",
"assets/assets/images/lock-solid.svg": "f09fbae9f4f2a7d6219f281243b19d16",
"assets/assets/images/cheque_add_front.svg": "a1a8dfad11d959cc83c577d3b696a8ef",
"assets/assets/images/scan_tutorial/scan_tutorial.png": "2c5f21c3683e6db8803e15c4117c2643",
"assets/assets/images/scan_tutorial/2.0x/scan_tutorial.png": "0fbe5497e0b026c2da7026c61a98a356",
"assets/assets/images/scan_tutorial/3.0x/scan_tutorial.png": "2b08d301faa6666ddf4944a38b9bfbda",
"assets/assets/images/envelope_outline.svg": "f6534692b1c44953254ac06d546f4fdf",
"assets/assets/images/cheque-f-point.svg": "64977f88fbe2def5d7b0ba6b55e70c73",
"assets/assets/images/file.svg": "d437a516789cdb97beb4a7174b1234f0",
"assets/assets/images/logo_check.svg": "269d651ef5d994aaa434f44a15555735",
"assets/assets/images/1x1-00000000.png": "91e42db1c66c0b276abf6234dc50b2eb",
"assets/assets/images/enterprise.svg": "c81dbd9d808560aed766c768d13852ad",
"assets/assets/images/cheque-y-point.svg": "6a5f01b9844a715b9f2499e23ade99db",
"assets/assets/images/qr-code-outline.svg": "28da914aa176b33a118c5a2ae07e8aee",
"assets/assets/images/cheque_back_info/2.0x/cheque_back_info.png": "ac06c9a2d31098695da17f3f5ba02d60",
"assets/assets/images/cheque_back_info/3.0x/cheque_back_info.png": "0eb21237f35ae3ba6e66e944d2ad2c53",
"assets/assets/images/cheque_back_info/cheque_back_info.png": "5384605f19d8fbbaf4353cdf090c4e6d",
"assets/assets/images/sign-out-alt-solid.svg": "77949de37a9fc2124ce74c7c29e192b0",
"assets/assets/images/cheque-a-point.svg": "20657936044dfdf9bbed31df8bf9cf2e",
"assets/assets/images/file-extension-xml.png": "1972808458e525d06981dfc152e77b72",
"assets/assets/images/loading_indicator.png": "c8541337301a0d3c17b5e22343b577eb",
"assets/assets/images/load_failure.png": "3395b016134c0b6ee83b2e90f15d28ca",
"assets/assets/images/wallet.svg": "cd09715afd9a44d6ca30ccf7bba29066",
"assets/assets/images/push_modal_header/2.0x/push_modal_header.png": "ecf75212c3b80e9c2bcb1074e6f16e62",
"assets/assets/images/push_modal_header/3.0x/push_modal_header.png": "49d608294e31e381218640619a4bebe7",
"assets/assets/images/push_modal_header/push_modal_header.png": "bc41dc087b6e3c87261aaa77bb5651ed",
"assets/assets/images/individual.svg": "35363a2d663269899f0cb197bbeed982",
"assets/assets/images/map-marker-alt-solid.svg": "87b182c5cc5a9d80b12a3f3043cc7b94",
"assets/assets/images/cheque_status/yesil_nokta.svg": "376073acd37f6f3e8bb7da84769031fe",
"assets/assets/images/cheque_status/cekler_ulusala_devredildi.svg": "6faa798881b5184b0bbaefc222ff8738",
"assets/assets/images/cheque_status/onay_bekliyor.svg": "22a7da79b33278700fefedb61f6399ef",
"assets/assets/images/cheque_status/erisilemedi.svg": "17ac6651b27bd220af3001eb2eaa26b8",
"assets/assets/images/cheque_status/onaylandi.svg": "d4b7946e66b0724c186efd04bc375960",
"assets/assets/images/cheque_status/tahsil_edildi.svg": "f7303dfaaa4934d426878d5d5733310f",
"assets/assets/images/cheque_status/tahsilat_bekliyor.svg": "6b076c35987a12e809a50c80bb10a658",
"assets/assets/images/cheque_status/vade_bekliyor.svg": "6a5f7182f19b664b6084672b5e6a1072",
"assets/assets/images/cheque_status/onaylanmadi.svg": "993da063bc887fb4403882fb7fdb50cb",
"assets/assets/images/cheque_status/karsiliksiz.svg": "791d8033bce8e725144d16237a5b05b9",
"assets/assets/images/cheque-b-point.svg": "e155239ddf0bd5d76a20390dfaaa754a",
"assets/assets/images/delete_button.svg": "f7cabf4c83111c6eb28c7ec6044a56e2",
"assets/assets/images/camera.svg": "1eaa5d9fa339247696214ee0cb809aa9",
"assets/assets/images/qr_tutorial/qr_tutorial.png": "6cbe3d7c9a4fafc2cc772ac0af1673f5",
"assets/assets/images/qr_tutorial/2.0x/qr_tutorial.png": "6496f3a3035f2cf2c95068f0fdb09fd3",
"assets/assets/images/qr_tutorial/3.0x/qr_tutorial.png": "dc361af31ed35f5cd91e89e6efcd04bf",
"assets/assets/images/file-extension-html.png": "89d3b4187d7c8833f0f23b993a365d40",
"assets/assets/images/location.png": "2493d3a7d04bbb52d42bd711c445ae7a",
"assets/assets/images/00000.png": "786617256a2a54d2efa875374ccdcd4b",
"assets/assets/images/cheque-d-point.svg": "89937debbd5869e04ef72b9c930135fd",
"assets/assets/images/phone.svg": "dfad2d63ddeb3ae3db28f8bbf278691c",
"assets/assets/images/location.svg": "c43a592ce0ebdcb7b221a2600b6b97e3",
"assets/assets/images/cheque_front_info/2.0x/cheque_front_info.png": "e9e2eebead81a6d428aa187cb0f9e330",
"assets/assets/images/cheque_front_info/3.0x/cheque_front_info.png": "7181ad8f9d6263556bf03e86c353a1e4",
"assets/assets/images/cheque_front_info/cheque_front_info.png": "346f08c479eae373bd9459e446df424a",
"assets/assets/images/currency-symbol-circle.svg": "7865e3f58c472a168b37ed30c259f2f2",
"assets/assets/images/cheque-due-circle.svg": "ec70ed8ff4ac0b2f6d38d7284f1fc2e7",
"assets/assets/images/bell-solid.svg": "fa429787beca4abe6c970c0bb13e4471",
"assets/assets/images/button_pointer/2.0x/button_pointer.png": "ccec992a5f44896b8174e1e93a1e4f81",
"assets/assets/images/button_pointer/3.0x/button_pointer.png": "087d358c582f1cba33d6dbb5ff3d1165",
"assets/assets/images/button_pointer/button_pointer.png": "4500d79f17bf6fd4a473ae3578cb749b",
"assets/assets/images/cheque-c-point.svg": "d4dcad0d35b7b18074090afc02aea372",
"assets/assets/images/envelope-solid.svg": "87249a9d417643ca08721857bb81a654",
"assets/assets/images/cheque_status_big/cekler_ulusala_devredildi.svg": "e02fd877a53763ea769da3a965fe5b58",
"assets/assets/images/cheque_status_big/onay_bekliyor.svg": "27086a9d70fd0e103c5e555245ce08ab",
"assets/assets/images/cheque_status_big/erisilemedi.svg": "90edca263ef27fcb6e69aa89c48027ab",
"assets/assets/images/cheque_status_big/onaylandi.svg": "8ba77e007971952fce7535f0a88fe0c4",
"assets/assets/images/cheque_status_big/tahsil_edildi.svg": "14ce071696fde548574fe81c2ad6f27a",
"assets/assets/images/cheque_status_big/tahsilat_bekliyor.svg": "94b983b03a0169de13e66f78d70519cb",
"assets/assets/images/cheque_status_big/vade_bekliyor.svg": "9190e42a62ca0a77a996d6b44c3c4fcc",
"assets/assets/images/cheque_status_big/onaylanmadi.svg": "412ed89fabd38ed17806df4effb96d72",
"assets/assets/images/cheque_status_big/karsiliksiz.svg": "847e8f37cd0f36ccf461ac39e611a9da",
"assets/assets/images/logo.svg": "d66a86cbed6c41dcf0924d87db6c8806",
"assets/assets/images/cheque_points_big/cheque-x-point.svg": "edb1d8dfd77f5e1b8921ef3e7bcc4359",
"assets/assets/images/cheque_points_big/cheque-f-point.svg": "3682c0f9a9b03f2fd6d233dfe6f86fa4",
"assets/assets/images/cheque_points_big/cheque-y-point.svg": "0e58006767966b8b5a5e12133a7e6ef7",
"assets/assets/images/cheque_points_big/cheque-a-point.svg": "e664caf9ec0a4e499919985ae0a54856",
"assets/assets/images/cheque_points_big/cheque-b-point.svg": "48ce4616459183923badf084b6ddad8a",
"assets/assets/images/cheque_points_big/cheque-d-point.svg": "9edee41d3060dd3d1ef057f1c5ad826a",
"assets/assets/images/cheque_points_big/cheque-c-point.svg": "f752b896d44c5e62d150dc81445e9dcb",
"assets/assets/images/cheque_points_big/cheque-e-point.svg": "2e713763d4dd7ae7bb3cbbb5b9e3071c",
"assets/assets/images/invoice-file.svg": "4814b82510e06a0c6ef12e101469ee49",
"assets/assets/images/calculator.svg": "a062e86741ef7e0341864e33af51fdd7",
"assets/assets/images/images-outline.svg": "052b37cbd9ce09376d1b1425326f4b4d",
"assets/assets/images/onboarding/n_onboarding_7.png": "901a89add6462900b3bb8c846e5fa768",
"assets/assets/images/onboarding/n_onboarding_6.png": "3abbe9423e4e5a309ba138feae4e7698",
"assets/assets/images/onboarding/n_onboarding_4.png": "915dbf68201c7c8de5686607629a458c",
"assets/assets/images/onboarding/n_onboarding_5.png": "5542124e03d048850f2c5e05e7086152",
"assets/assets/images/onboarding/n_onboarding_1.png": "48f493d2df5babf86f67785c98548153",
"assets/assets/images/onboarding/n_onboarding_2.png": "8cb726df9ee793aff690b1fa44d2d757",
"assets/assets/images/onboarding/n_onboarding_3.png": "16082c27379ba0f8740d7cc440bbdfbc",
"assets/assets/images/onboarding/2.0x/n_onboarding_7.png": "c17778a87d5c9bf599007bb29644fc91",
"assets/assets/images/onboarding/2.0x/n_onboarding_6.png": "419378f0adb79eb09cebb9f667a06bf0",
"assets/assets/images/onboarding/2.0x/n_onboarding_4.png": "a8dfed0c3ad34e51e8595525f5177961",
"assets/assets/images/onboarding/2.0x/n_onboarding_5.png": "bb4504436a7b8553524eeae0ff0ef311",
"assets/assets/images/onboarding/2.0x/n_onboarding_1.png": "c2e2fbb32fc670675bca5c028216dbd7",
"assets/assets/images/onboarding/2.0x/n_onboarding_2.png": "4b42fa6927b42f3bc7140b30cec49687",
"assets/assets/images/onboarding/2.0x/n_onboarding_3.png": "36a8615ba0aae3b9b5b7b47a01205b41",
"assets/assets/images/onboarding/3.0x/n_onboarding_7.png": "a62bfd3a6b9ea18fef23c2ef93328c8e",
"assets/assets/images/onboarding/3.0x/n_onboarding_6.png": "bd9fdfd44fd89fb259d7b34e887939ea",
"assets/assets/images/onboarding/3.0x/n_onboarding_4.png": "e2677976ffee0a9c91c5cfdb3ad98f6a",
"assets/assets/images/onboarding/3.0x/n_onboarding_5.png": "2b7e3d27f9f95ce133c284070a9f3c6c",
"assets/assets/images/onboarding/3.0x/n_onboarding_1.png": "e9d42b998d0a77a49f569eebab34d779",
"assets/assets/images/onboarding/3.0x/n_onboarding_2.png": "8103086478c9762eb6962647b0c122b2",
"assets/assets/images/onboarding/3.0x/n_onboarding_3.png": "1b78ae5647b8a29f9257760dee224b50",
"assets/assets/images/folder.svg": "1d8fd3813e6e474a72d67b8a46cf1e36",
"assets/assets/images/gallery_tutorial/2.0x/gallery_tutorial.png": "24938c00403ad46effe5605d4f844fc4",
"assets/assets/images/gallery_tutorial/gallery_tutorial.png": "1a3b4d69a7d1265b80a4ec62dabf486c",
"assets/assets/images/gallery_tutorial/3.0x/gallery_tutorial.png": "cae9489725c112c09752afa0a60b569d",
"assets/assets/images/file-extension-pdf.png": "021a6b7c787032c5a8f027210de8124f",
"assets/assets/images/cheque_add_back.svg": "53916917125fc68a4f4cecef708fda23",
"assets/assets/images/help-circle.svg": "dd7103b6f893f33f553fce2227c2ef6e",
"assets/assets/images/money-check-solid.svg": "bb463f2ba55925987b576ad19c6e4e8b",
"assets/assets/images/cheque-e-point.svg": "a87aa9278015865bc669325cbedf2dd5",
"assets/assets/fonts/Quicksand-Bold.ttf": "0738679df4cf4e566f60343830da7bfa",
"assets/assets/fonts/Quicksand-Medium.ttf": "865b25e449878b6b4d1f9e098ff2f510",
"assets/assets/fonts/Quicksand-Regular.ttf": "216d43ee8707910af457af569eda1dec",
"assets/assets/fonts/Quicksand-SemiBold.ttf": "c82b184bf7450e14adccb7b0d6117474",
"assets/assets/fonts/Quicksand-Light.ttf": "188ca708e4cbbbe3837c3d904b8eeb61"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
