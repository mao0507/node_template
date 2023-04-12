# node_template

## 簡介

建立一個通用的node js 後端 API 系統，將大概率會使用到的項目先整理寫好

### 使用套件

1. express
2. body-parser
3. dotenv
4. jsonwebtoken
5. nodemon
6. swagger-ui-express
7. swagger-autogen
8. swagger-jsdoc
9. ts-node
10. yarn

### 檔案規劃
│📁 src <br>
│├ index.js <br>
│├ 📁 config <br>
│ &nbsp; ├  config.ts <br> 
│ &nbsp; └  express.ts<br>
│├ 📁 controller <br>
│ &nbsp; └  auth.ts<br>
│├ 📁 model <br>
│ &nbsp; └  token.ts <br> 
│├ 📁 server <br>
│ &nbsp; ├ 📁 modules  <br> 
│ &nbsp; ├ 📁 router  <br> 
│ &nbsp; &nbsp; ├  auth.ts <br>
│ &nbsp; &nbsp; └  test.ts <br> 
│ &nbsp; └  index.ts<br>
│└ 📁 swagger <br>
│ &nbsp; ├  sawgger.js <br> 
│ &nbsp; └  sawgger.json<br>
│ ⚙️ .env <br>
│ .gitgnore <br>
│ package-lock.json <br>
│ package.json <br>
│ README.md <br>
│ tsconfig.json <br>
│ yarn.lock


### 現有功能

1. 基本api 功能
2. swagger 文件自動產生
3. jwtToken 產生


### 安裝方式

1. 安裝功能

```shell
yarn 
```

2. 開啟
```
yarn serve 
```


