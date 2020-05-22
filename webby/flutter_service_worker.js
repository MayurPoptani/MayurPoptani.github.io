'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "0ef75f06c2ef65098da2f6357a2a1d04",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"git_folder/.git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"git_folder/.git/config": "fb7fc5594e8f8ae638e05480840939d0",
"git_folder/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"git_folder/.git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"git_folder/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"git_folder/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"git_folder/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"git_folder/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"git_folder/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"git_folder/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"git_folder/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"git_folder/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"git_folder/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"git_folder/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"git_folder/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"git_folder/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"git_folder/.git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
"git_folder/.git/index": "6878962a84acd2dad0af11919b0ecc18",
"git_folder/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"git_folder/.git/logs/HEAD": "c31ace33c52b7f692b1a64246b48bec2",
"git_folder/.git/logs/refs/heads/master": "c31ace33c52b7f692b1a64246b48bec2",
"git_folder/.git/logs/refs/remotes/origin/master": "a6bf929c5ff9421f3eb8142ff89c0a39",
"git_folder/.git/objects/11/490280dc27e07d440659728ba0b1a83eac0efb": "997d322dad8242d2eb2b7ea9f847ef40",
"git_folder/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"git_folder/.git/objects/24/ec36401757cb8d76bd1de318f9935975e8c0c6": "eb5940b26550fcec296f013d18b8bccb",
"git_folder/.git/objects/2a/5ba489165c94a1dd774c8eb47148e8e05b3572": "6184544695c8184fc7ad94e494dc0fe6",
"git_folder/.git/objects/3f/a48b24c5f27f6a2a60053d2b0ca84438c2f9b8": "21eb1413b5b792ca2881b8d4b8f42af3",
"git_folder/.git/objects/44/549d3bdee3ac7d46c5737312956ecf664bb1b5": "cf3f85c9da1ceccea118ba207c0a8cd7",
"git_folder/.git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
"git_folder/.git/objects/4d/795611408c1f62108f7024514ac09014a9e731": "f79e49adcd3327ca4775450c313d994f",
"git_folder/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"git_folder/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"git_folder/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"git_folder/.git/refs/heads/master": "843e945d94a340104df2b6256a1cde91",
"git_folder/.git/refs/remotes/origin/master": "843e945d94a340104df2b6256a1cde91",
"git_folder/webby/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"git_folder/webby/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"git_folder/webby/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"git_folder/webby/index.html": "33fb504fd5a6fe718083481302309f62",
"/": "33fb504fd5a6fe718083481302309f62",
"git_folder/webby/manifest.json": "1451371544e82a6b1f210a341ad94006",
"git_folder/webby/README.md": "7acfe5149e8e2c3e344fac97a6d95b5c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "33fb504fd5a6fe718083481302309f62",
"main.dart.js": "f259bbbc6114d761d86011c455273f4b",
"manifest.json": "1451371544e82a6b1f210a341ad94006",
"README.md": "7acfe5149e8e2c3e344fac97a6d95b5c"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
