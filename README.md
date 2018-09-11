# react-cli 後台功能練習

## 目前進度

1. scss 模組
2. login 靜態頁面

## 分支

1. master 正式
2. develop 開發用

## gh-pages (上傳到 github 頁面)

1. 安裝

```sh
npm install --save gh-pages
```

2. 設定

```json
#package.json
  "name": "demo",
  "homepage": "https://bnmghjtyu0.github.io/react-login/",
  "scripts": {
    "start": "node scripts/start.js",
    "build": "node scripts/build.js",
    "test": "node scripts/test.js --env=jsdom",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "eject": "react-scripts eject"
  }
```

3. 執行

```sh
npm run deploy
```

#### gh-page 空白

[大神解法](https://www.jianshu.com/p/4d8011e9c805)

1. public > 新增 404.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>矮大紧的日常 | parksben's blog</title>
    <script type="text/javascript">
      var segmentCount = 0;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + segmentCount).join('/') + '/?p=/' +
        l.pathname.slice(1).split('/').slice(segmentCount).join('/').replace(/&/g, '~and~') +
        (l.search ? '&q=' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
  </body>
</html>
```

2. public > index.html head 內加入

```html
<script type="text/javascript">
  (function(l) {
    if (l.search) {
      var q = {};
      l.search.slice(1).split('&').forEach(function(v) {
        var a = v.split('=');
        q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
      });
      if (q.p !== undefined) {
        window.history.replaceState(null, null,
          l.pathname.slice(0, -1) + (q.p || '') +
          (q.q ? ('?' + q.q) : '') +
          l.hash
        );
      }
    }
  }(window.location))
</script>
```
