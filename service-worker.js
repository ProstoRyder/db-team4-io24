/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "d57f037a5cb08165a000cdb7b9b95db1"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.2c192695.css",
    "revision": "84e3a2aaf60eabecf87297b88348bdb5"
  },
  {
    "url": "assets/img/ProjectAdd.b9ee4f5a.jpg",
    "revision": "b9ee4f5a3a579292881728c8dbe36370"
  },
  {
    "url": "assets/img/ProjectDelete.0fffdfd9.jpg",
    "revision": "0fffdfd9ec62ec018f28a9fdbd325412"
  },
  {
    "url": "assets/img/ProjectGetAll.9a7edcb4.jpg",
    "revision": "9a7edcb4949af917f32acded6ae02fc7"
  },
  {
    "url": "assets/img/ProjectGetId.f5b530e5.jpg",
    "revision": "f5b530e5463060df3119e7a89cada0d6"
  },
  {
    "url": "assets/img/ProjectPut.520422c7.jpg",
    "revision": "520422c7bf75b001c85b8ad1adf0351c"
  },
  {
    "url": "assets/img/relationalSchema.03c9cba4.png",
    "revision": "03c9cba456d7d301109ba0cfdbecafec"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/TaskAdd.2807ec02.jpg",
    "revision": "2807ec02604af5ed3b043208ddbaf2c8"
  },
  {
    "url": "assets/img/TaskDelete.213de977.jpg",
    "revision": "213de9778754738549115f6cda8fa3b8"
  },
  {
    "url": "assets/img/TaskGetAll.af82a503.jpg",
    "revision": "af82a5037d3e8e8139e64aab33158cd2"
  },
  {
    "url": "assets/img/TaskGetId.5c27633c.jpg",
    "revision": "5c27633cb60e0cc753b7ee005728d3f9"
  },
  {
    "url": "assets/img/TaskPut.b35ee42b.jpg",
    "revision": "b35ee42b5c506523458e056a5810e9a5"
  },
  {
    "url": "assets/img/UserAdd.94b2d090.jpg",
    "revision": "94b2d0907f5f371170ade7f385198cee"
  },
  {
    "url": "assets/img/UserDelete.7a06f800.jpg",
    "revision": "7a06f8004944c4916d1feac0113107c4"
  },
  {
    "url": "assets/img/UserGetAll.cd86e5de.jpg",
    "revision": "cd86e5de89686730b9e12639f564b01d"
  },
  {
    "url": "assets/img/UserGetId.e5938a59.jpg",
    "revision": "e5938a59586cd77c5c71f3b2bb8240a0"
  },
  {
    "url": "assets/img/UserPut.d0a6a056.jpg",
    "revision": "d0a6a056f6ecdf1810d6b445874f0c67"
  },
  {
    "url": "assets/js/10.205347da.js",
    "revision": "98b01d760f49cf0dfdc04d9b85b50abb"
  },
  {
    "url": "assets/js/11.099d8223.js",
    "revision": "6a3624f14f1eed31fe04bbd2e938ea2d"
  },
  {
    "url": "assets/js/12.76bd307b.js",
    "revision": "a26bf49e2dc6bb4b71d8faf47278b417"
  },
  {
    "url": "assets/js/13.10f9d722.js",
    "revision": "375670dec93faf6f6b47ff3f6a3e0127"
  },
  {
    "url": "assets/js/14.7338ec84.js",
    "revision": "545cb97218e46e4c740cb43e0cee1c1e"
  },
  {
    "url": "assets/js/15.682547f6.js",
    "revision": "615867e87864196572c569e0443fe2c5"
  },
  {
    "url": "assets/js/16.4e15815f.js",
    "revision": "bac5f85d457c21ed43b3d13d9b90303c"
  },
  {
    "url": "assets/js/17.bf4370a1.js",
    "revision": "f20843567c35dd1a2c20fadf9f0d8381"
  },
  {
    "url": "assets/js/18.7c462c2e.js",
    "revision": "cc5f1d1f787cc9519f10515094176dd9"
  },
  {
    "url": "assets/js/19.50cf10d7.js",
    "revision": "b20eee1aaff6bbfcee747e2eb9ee422c"
  },
  {
    "url": "assets/js/2.bea78ce5.js",
    "revision": "fd477d6cc1f8ae972ac92249c0a0c40c"
  },
  {
    "url": "assets/js/20.d00f0926.js",
    "revision": "5a60a841db8df61873286ff7f1907170"
  },
  {
    "url": "assets/js/21.424f479e.js",
    "revision": "26122d79e43ae8cc1755a69928009e66"
  },
  {
    "url": "assets/js/22.9d2824f5.js",
    "revision": "ae60dfd3e79693960b2cb9276f8d70cb"
  },
  {
    "url": "assets/js/23.731f4b88.js",
    "revision": "6ec8f2448b880b55fea86398d45253ec"
  },
  {
    "url": "assets/js/24.e42cbd46.js",
    "revision": "2ca93caab7a27a133da7d399b52326ee"
  },
  {
    "url": "assets/js/26.5e674c42.js",
    "revision": "9b106aef5362f356d095c54c89a47309"
  },
  {
    "url": "assets/js/3.1ac78f2e.js",
    "revision": "d892dd1fe688653aa1d25d0e208684e3"
  },
  {
    "url": "assets/js/4.d75cfd87.js",
    "revision": "3a52476327215185b626b5edb308949e"
  },
  {
    "url": "assets/js/5.a1d8f128.js",
    "revision": "6e75272ec4c5c8ead9d11195080d7162"
  },
  {
    "url": "assets/js/6.6e3c69dc.js",
    "revision": "19af466841f35723e4261179d448ca51"
  },
  {
    "url": "assets/js/7.5e99961f.js",
    "revision": "6c381d5f47a9cbd0c4e7dda7c71f6f16"
  },
  {
    "url": "assets/js/8.ac71efb5.js",
    "revision": "8ceef15c8f45aaacc324a75528136f44"
  },
  {
    "url": "assets/js/9.2893e9e4.js",
    "revision": "b0b9eba6d8f23db22753d9d8d3f4c68f"
  },
  {
    "url": "assets/js/app.d5736076.js",
    "revision": "64ffed156a07e8fb358bb44eabd81574"
  },
  {
    "url": "conclusion/index.html",
    "revision": "33f2c82db0968922247ed895669d3f7a"
  },
  {
    "url": "design/index.html",
    "revision": "96022979d977ecdbc791759955f798f1"
  },
  {
    "url": "index.html",
    "revision": "8cd8cc26ca1bd02dda1a2b9da53696dc"
  },
  {
    "url": "intro/index.html",
    "revision": "5f102785e56a23bd504d914812f0d7d4"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "45853e6288056d648393d1fd0b5dee2c"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "afbb69776548d3d0cca87bb7dae6da19"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "f2dde7904b19248484d020e58ece2d6a"
  },
  {
    "url": "software/index.html",
    "revision": "390ba5042d0a6c68cba4fa5d241eeac5"
  },
  {
    "url": "test/index.html",
    "revision": "93f0acbc7bf9689e2b9504102a3c53aa"
  },
  {
    "url": "use cases/index.html",
    "revision": "0ca0fc5a7cd840e8d7f1da12f91f5c2a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
