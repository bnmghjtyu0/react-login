"use strict";var precacheConfig=[["/react-login/index.html","711c926df8ad479a83e73514a1646859"],["/react-login/static/css/main.0d635256.css","c82426f090edf99f64f027bb0d3bd6c3"],["/react-login/static/js/main.15827f79.js","5520548966a172581cf151e6fd6a7f33"],["/react-login/static/media/Ubuntu-Bold.7308c07c.ttf","7308c07c89a127057df24c13aa426b63"],["/react-login/static/media/Ubuntu-Bold.81f39b10.woff2","81f39b100c12b86eb0f6b143c2547877"],["/react-login/static/media/Ubuntu-Bold.cece6cb2.eot","cece6cb2e964f112b912d871cb14b0fc"],["/react-login/static/media/Ubuntu-Bold.e33d177d.woff","e33d177da1b2e189861e313176ae5223"],["/react-login/static/media/Ubuntu-Light.4cebf850.ttf","4cebf85024818058701dabdc4279995c"],["/react-login/static/media/Ubuntu-Light.50bee00c.woff","50bee00c10cd5036db56af0dcc78d030"],["/react-login/static/media/Ubuntu-Light.a2747bdc.woff2","a2747bdce85018821fd9bd3bff356516"],["/react-login/static/media/Ubuntu-Light.b983ed7d.eot","b983ed7d8c2e8df7efdcf5fa9c84053b"],["/react-login/static/media/Ubuntu-Medium.67be82c5.woff2","67be82c5bf31cabffea18c717cc3cb68"],["/react-login/static/media/Ubuntu-Medium.a46de103.woff","a46de1032aba9a4f509979cfdd9cdc77"],["/react-login/static/media/Ubuntu-Medium.a690c126.eot","a690c126aca1e56c66640d2e03f4376d"],["/react-login/static/media/Ubuntu-Medium.aefa0114.ttf","aefa011450890445121cd2c43d24a8fb"],["/react-login/static/media/Ubuntu-Regular.0782ac86.woff2","0782ac86c2c03631f8ab828dbc31a86a"],["/react-login/static/media/Ubuntu-Regular.690d3622.woff","690d3622d8d391257851634e3c54c062"],["/react-login/static/media/Ubuntu-Regular.a876ac10.eot","a876ac10e23a171502d7f0b11401f828"],["/react-login/static/media/Ubuntu-Regular.e7da1b79.ttf","e7da1b79b58db42c9a15fdf80e5db9d3"],["/react-login/static/media/index.d41d8cd9.scss","d41d8cd98f00b204e9800998ecf8427e"],["/react-login/static/media/login.bab86238.scss","bab86238321b3ca53628bbcc847cbe61"],["/react-login/static/media/materialdesignicons-webfont.1eccbc4c.ttf","1eccbc4c41d49fd81840aef3eaabe862"],["/react-login/static/media/materialdesignicons-webfont.3efec83a.eot","3efec83af3e00d224094f2889c32edb6"],["/react-login/static/media/materialdesignicons-webfont.4b135967.woff2","4b1359677a76d07aa0526d2fddbd77b7"],["/react-login/static/media/materialdesignicons-webfont.6473d7d5.woff","6473d7d5a01bb3f8fccd5bbeaf2be312"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/react-login/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});