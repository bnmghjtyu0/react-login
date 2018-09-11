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
