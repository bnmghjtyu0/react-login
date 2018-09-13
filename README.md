# react-cli 後台功能練習

## 目前進度

1. scss 模組
2. login 靜態頁面
3. ui 模板: [material](https://www.creative-tim.com/product/material-dashboard)
4. icon: [fontawesome5](https://fontawesome.com/)
5. router: [react-router-dom](https://reacttraining.com/react-router/)

## 分支

1. master 正式
2. develop 開發用

## 本地端測試 build 檔案

1. 執行

```sh
serve -s build
```

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

#### create-react-app with sass not loading styles

```sh
npm run eject
npm install sass-loader node-sass --save-dev
```

1. open config\webpack.config.dev.js
2. 在這一行新增 /\.scss$/

```javascript
exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.scss$/]
```
