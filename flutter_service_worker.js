'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "493e3dd114bc38996027421d9aad5409",
"index.html": "7bc89ba0051e8d46a731ba8e032050de",
"/": "7bc89ba0051e8d46a731ba8e032050de",
"main.dart.js": "7ba2c9e4bcafb260877b8152b0b257ad",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon1.png": "1d18719d002a9e9e8ff4bc146564d519",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/icon1-192.png": "521f3589f178f3a8bd8006bb8a534edf",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/icon1-512.png": "42401f55aa50b0834a9fadd1b0b4b36e",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6c6e011d4b54d513c256c2a14b0fca66",
".git/config": "52fe851d4869253f71110e71be9ee8e6",
".git/objects/0d/b14070bac75f485a9b59008b653192f01ddf45": "6709b99e3e467de7b9cc1da01764393f",
".git/objects/50/9cd4ca2395bf205479ec6ccedf355292fba218": "ae64773a0e67d559e933588df9f8ead4",
".git/objects/50/e2b101be6b8e9b1483d9b2d39ba9c193a2e10e": "c3aa74d347f980aeae7520c4043f3f27",
".git/objects/03/4dcc43beed7666ac8b8c1a1fea5ac81a12de0a": "8c7c1a179c3c446d709f6183ee4bcc2a",
".git/objects/9e/26b151be8fbc5c0644854d62e7d0267b037fe7": "2e028a384d834d07b53bfec74d0fa059",
".git/objects/6a/d5fcd9ff4a1eed5b1c5b16624700c6a34bea26": "8c32885f6f475747ae35a65b0abd4a83",
".git/objects/67/c9564bc1b6f48a2f9b131da5e03fda2d25500c": "1f8609c39922d092bad5e287762aa579",
".git/objects/93/27e4b6c20ffb50688589645590b205496aa7d4": "a2f54acb250d2b41cb044d04b1447313",
".git/objects/60/5292a8cce23fa850e0da9f5da7ca9f251825ee": "d8a40b70310d1e34969fc3ed6de77d5b",
".git/objects/5a/4ad044fd646de3e6103b7b54a3fe213e50060a": "8a2ee78a5c9c16ff87a4e9e1abf8360d",
".git/objects/5a/3b7eecd7baa57bcd55d058a873b12aa6adbd3a": "cca6557130a666945194e5727f9c05a9",
".git/objects/05/cc5bc3762b15078bf24ddc47e19d20d47e5274": "42b98ace16823c13c89163cb036f8803",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/b5/d711b0f08c7db67c70a4c42667d777764827b2": "495cd125757d5a186cc5ab6d5876ff98",
".git/objects/b2/d57c4334498d176ecf37a875b213530f1a6c24": "3ffe472967923a6d1a63a7ae2b17b38a",
".git/objects/ad/8d02351fc18162c883901de50ce20598e040d9": "b12dd9bc9323befc07b5198e602fc9db",
".git/objects/d7/ccb71760af05ba390b92e0bddadd4dfd23d139": "70c109f1136108267cad22bd366d305e",
".git/objects/be/0ebffd6141a106f85d1e3e514bc4d490ca6c6e": "cc9fea634e2c9bcfb4c891c9fc1a60d8",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/d1/37034d403d9e9c1ce1154febc12f011acfcc66": "51bb19f06a5306815db63121710526f9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/7104289a5848de486db18cea56938bd633fd67": "28a4c0c7ec786be8a1eb4037d8f4e1e7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/03b011f42ac324e134ed359059b3a83aada97c": "11c099bb40d47f270b764e07743f57c2",
".git/objects/e3/05dd0a393f9bb88502bf9eedc5db3b4946d651": "1046dd99fded86510ea9acf351d82d81",
".git/objects/18/d4991c9406e4c65552fd3dc10007ecfcb83f00": "e15067103a2312951f1b2533ab2137ba",
".git/objects/27/8053febff93d3d3371af43f8234d2f8af799a9": "b88ec0e4c25963a8000a29dfc2577a87",
".git/objects/27/3421af5d2b20367ba6149c6078fc2ba853f91c": "1fe11a3e0e460ab3e7214c835d98023d",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/89/c7aa134173e52b11e016679a45cb210a71ffa6": "f2562f5a8e886c74b3edcbad9157162b",
".git/objects/1f/df4f3dcfd08c18df882e24d57225d4e39a4dca": "91695f70c346a34d5826f71155af21f7",
".git/objects/74/2a8915b6c30bea84274a997f000535301bab62": "e5479507e2d43df60650f619faf157f8",
".git/objects/74/4ad9c9abec6dce3a82e5c15d53dc831dd6c23b": "f82f2359ec271ffed2fcbb2ee5a91e45",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/7b/956f71556051c82b4c19a36e153cc813c21857": "7a2419cbd08bed85e6465c1d8b85d546",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/646932bbbccfb710d8132cafaccaa154eea3d2": "8df5c5b53a1dfc6cdb9ad371c613bd5a",
".git/objects/21/29a2c0001667bf444a2bd8dbcc244044bd4be3": "08bc98667576b4b64ba5a6409c398d75",
".git/objects/86/d09a8bc0bd1b72cd5a0bde6108ae7c31430c0d": "cbf294264febd1a129dffaad1c24f308",
".git/objects/2a/b1df10b9e87dcdf39b37c31aba16ec04989bf9": "b770e4ff8521686f0ea1d391e2877ce0",
".git/objects/2f/2c719de9c57a14c584dfe2bdd5242a4b1e8df9": "0c4a3b622510386bcdc7b2227cd46199",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/00/872401d541499f41b800154c6bfa5c529f8e29": "16076fc3308dbaba6d9a780b8148708a",
".git/objects/9a/b07b303d9e198144c85f1695ed1bf7ffe3ccea": "efbd83dbefdeb93110d1fb178019d102",
".git/objects/5c/57470d9c4a33b7dd06b7c6f16acd5af2c4b379": "61b2bdf6c58d1a97117bf70b1b18e82a",
".git/objects/5c/8725493bbc51b77efe30a8df2e874eafd5360c": "e4d199a4139110a92621fa294d057ed1",
".git/objects/54/2142349c14534d7210b0d7d650fede7ee2f7aa": "9081438321503f33c492f2a1ae56a248",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/30/0a8c924544b3743e7626d02b33ffb8e7b11271": "182be33a88c3b4b0af833ad87fdafadf",
".git/objects/08/258164c919a4ed92373d6dd73031d5395daf77": "d2fa9eb1eea82df4016bdd03c218465f",
".git/objects/52/2c7985a27862ecfa7f3bc0bca284cf5bc218c8": "df2ec37a0883c35694ceee5f4f0b4a56",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/63/23d643e009fbe4a0901e18d75c3a1631aa20c5": "f57bed188215202ea0b9f3d8e0b99d71",
".git/objects/64/4d17db063585e710ff09fe69bf1b2322a1c1c1": "baa91b1c331e264b459ff81879681155",
".git/objects/64/28cddc757815ba040dbb9bb5cc0e6c4e073a5a": "856bbe5568738a987844328bcd123b4f",
".git/objects/bf/54825acb2cd606546dc015538074c68146f671": "24e99674930b792526ec2f613ba58eb2",
".git/objects/d3/f6cf43d9356f5d3efa9e136b0415f5b1b42d06": "8ba687a83840140a5f5f07a65c1156f1",
".git/objects/a0/927617fe21d745c4dc135fa630a4ea8878f607": "3900506c9025e8620f17df790afc666d",
".git/objects/b8/2f4213407954055fcefbc24a34c95c4459b57b": "ee034a27a6ef0478dcba798d6e4421b0",
".git/objects/dc/7fecc223663b41f3521173444ef1caf00b8e06": "e4fff805c7e22d1be5bee615f63e7176",
".git/objects/dc/dcb87404e0f32d4a1014fca30be85e77ba02cc": "79a8d9fa29d9a8207d41fb8d007c6841",
".git/objects/a9/6252ee07cfcc3082c4b9fdef5e6bff3447180d": "cba464d3bd0424d2bca29be1cd7595b4",
".git/objects/d2/9de013e2685d1c60c7ddf763696ee72e0e7c3d": "cc88b7cb59c9b949187983ea79e32855",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/7748581cf981fc76093999c9c0c8f8cc5c055b": "e38e9689b1d1ce723387ad5dd2a6acdc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/a1/56d813c8a397d7ed06840bdb78b0814c5195cf": "0962b9188afe4ba188daff8ea5dca344",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/1d4f1295c254f41a8cff86e182fd93cd31a004": "8ecacdf68c4dffe5dc19272b4f32bf88",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/f9/b4fcc742b7b3b2641ff38e3880ed34f4dee9e7": "db737407b9ecf6614f30af84a000cbd9",
".git/objects/f9/ec8d8e8230e507d46184c09b048847c7567805": "add6671dacca938205df2c092d411353",
".git/objects/f0/b74605f3aac748a20aac032979cb2cd24331fc": "3a54bb8519a13bcb579aa90162d4714e",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/ff/b9b0e6b009612c750e1b81036d5a83b9cf96ad": "b7be7f9369995ae0eda2dea318538a5f",
".git/objects/ff/e15ba748418f21cf9f65f47bec301b0b613426": "1bd2e84e3f4f2cd3f202438c667943fc",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/69f4779e1f25403469bfcb6bb1e45553c0b066": "0f282c590ef05e08e09194f3605ee4dd",
".git/objects/41/d15504eca9d3953f4ab4b44a030108e4ae6910": "331f81c287ca29197e64867a667fdca2",
".git/objects/4a/fb8516788745971114a4ae5df848941497f6af": "759c27adc40199dde36502fedfd972e4",
".git/objects/4a/3c6cc4030dcc53e04874ed212dc581c00dec53": "bafba372d4f3e11bf48c3b905a7bd026",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4a/8363d6ea74db7523ef8b8408f14696087abbf7": "dcbf46063a498e56ad7ffea5312a3733",
".git/objects/15/b104a34297365d087d752faebb2c598507e680": "5cf69085f3a4903ea1024f24f6cb3885",
".git/objects/12/7d34bdcfdf475960e1f4dbb5981b01db39bca5": "8dfb7447a99056d78d45a415a235f3ce",
".git/objects/76/76553937b7e2c495c7b245d311dc1cedbb913e": "40183911ba3b347150d8f064d61fcdcb",
".git/objects/1c/b17eba7e3e9c942413c6d1aabb8fc8d1ae5310": "2c1c0e2535c714d237870278c2dba214",
".git/objects/82/ef3be67d9a239c58fe794f2612b41f703842db": "69d357da34706471eb8e5bc660d98612",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/49/35a9893e9a3423c371ab5fe4b42a084e252ecb": "084bbafdfb105ec199362d0eceda76b0",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/172381229c5a07f8fb2339271bf864f921f485": "710420ab702f8a4ea91e9c1d4cc0cd3b",
".git/objects/13/241cbdb798fd5a2497af93b2ca4ca984acd1cf": "27845033593e4c408bc4c3241af59cfa",
".git/objects/14/78c0c3e93a83257c27e0ed4eeae6159c9c181f": "af0cfd519e876f9f1a3773d1feb86044",
".git/objects/14/c00f0a84247e3d046430c53f16479ff0175c67": "7e333f0a19c0b8ea29d3dcf5cdd20ff8",
".git/objects/22/ad36509966aecf8da6878ac922a469f8e3ddaa": "e8641bd074074980af4bdc2da835b652",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "73c0b849efd6a9aaea83bd285a520e0e",
".git/logs/refs/heads/main": "73c0b849efd6a9aaea83bd285a520e0e",
".git/logs/refs/remotes/origin/main": "52056f3b3251228cbcd538a034b0b7bc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "548c03897d7caa84cc9841603dda2ac8",
".git/refs/remotes/origin/main": "548c03897d7caa84cc9841603dda2ac8",
".git/index": "dee38521856015683a2f46057d5faf50",
".git/COMMIT_EDITMSG": "7ea3eb5125c779c7f145c83b978c101c",
".git/FETCH_HEAD": "967bd740344747c730ab1f143b362f4b",
"assets/AssetManifest.json": "d4e264b7b660bb5c0428e09eacc98cc7",
"assets/NOTICES": "6d7211d0ade74e70c0f0dd42ca4c15fd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "cc92015be8137fb849efc8041a1df648",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/huuav.png": "f416dbbc957cca141999cb01a95e511c",
"assets/assets/images/aselsan.jpeg": "2bd2114ff8fde1834ccad3e3c28e4bf0",
"assets/assets/images/apak_enerji.jpeg": "3c8797efea40778b73237cfa9f659183",
"assets/assets/images/mathpuzzle.png": "f6d066bce927b93fa5d0cf00e4bdfe2a",
"assets/assets/images/msspektral.jpeg": "d061d166662a9a0aa7c8323d74a4cbb4",
"assets/assets/images/logo_back.png": "dcc4b73d3740b1022edd0b5d6cdb37a6",
"assets/assets/images/hu_eee.jpeg": "b1786737d3ba788f832ab074b48cae80",
"assets/assets/images/hu_uav.jpeg": "24de88fc2f51953f259607f00c802187",
"assets/assets/images/swarm_logo.png": "19a8334497dc6ad65096f0d2c09efc5c",
"assets/assets/images/aoi.jpg": "50048296bd7d290ecbe1aaf258c185a3",
"assets/assets/images/ragi_studios.png": "18069ac061efcedc0794809c55fc7471",
"assets/assets/images/kardinero.jpeg": "ccf092417ffc650ee557947f53f2e2c6",
"assets/assets/images/swarm_drone.jpeg": "80f47f57b5dc8843ba9e950d48d66021",
"assets/assets/images/vnote.png": "c3125409f8ecaf4695186eac08353775",
"assets/assets/images/mustafa_eryilmaz.jpeg": "ac8cd13f345c48329be54abaf3360c63",
"assets/assets/images/bg.jpeg": "c6449162dc3940daa640a43101cfd66c",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"assets/assets/cv/Mustafa_Eryilmaz_CV.pdf": "5e9ae5ce3a72a5c79368ac5fa204d6c0",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
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
