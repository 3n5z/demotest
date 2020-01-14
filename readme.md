### 手动创建webpack
**一、创建项目目录**

**二、初始化项目**

`npm init -y`     

>生成package.json项目描述文件

**三.安装webpack依赖包**

```js
     npm i webpack -g

     npm i webpack-cli -g
```
**四.打包**
```
  webpack --mode development
```
**五.loader**

>1.`babel-loader`：将es6语法转化为浏览器能识别的语言

安装：`npm install babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env webpack`

配置：
```js
{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
```
>2.`css-loader`

安装：`npm install --save-dev css-loader`

配置:
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}
```
**注意：使用`css-loader`必须要安装`style-loader`**

>3.`url-loader`

安装：`npm install --save-dev url-loader`

用法：`import img from './image.png'`

配置：
```js
module.exports = {
  module: {
    rules: [
      {
        //文件格式,必写
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  }
}
```

**注意：使用`url-loader`必须安装`file-loader`**

>4.webpack-dev-server：安装本地服务

安装：`npm install webpack-dev-server --save-dev`

配置：
```js
 devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    historyApiFallback: true, //不跳转
    inline: true //实时刷新
  }
```
在`packge.js`文件里写入：`"serve": "..\\node_modules\\.bin\\webpack-dev-server"`

--------------------------

### webpack手动创建vue项目

**1、手动配置Vue Cli脚手架工具**

安装：`npm install -D vue-loader vue-template-compiler`

配置：
```js
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  module: {
    rules: [
      // ... 其它规则
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ]
}
```
**2.安装`vue-router`和`vuex`**
安装：
```js
npm install vue-router -S

npm install vuex -S
```
**`创建vuex`**

例如
```js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vue.store({
    state: {
        user: null
    },
    mutations: {
        SAVE_USER(state, user) {
            state.user = user
        }
    },
    actions: {
        saveUser({ commit }, user) {
            commit("SAVE_USER", user)
        }
    },
    getters: {
        user: state => state.user
    }
})

```
**创建`vue-router`**
例如：
```js
import Vue from 'vue'
import Vuerouter from "vue-router"
Vue.use(Vuerouter);

const routes = [
    {
        path: '*',
        redirect: "/login"
    },
    {
        name: "login",
        path: "/login",
        component: () => import("@/views/login")
    },
    {
        name: "main",
        path: "/main",
        component: () => import("@/views/main")
    }
]

const router = new Vuerouter({
    mode: 'history',//配合nginx本地才能正常的使用history模式
    base: process.env.BASE_URL,
    routes
})
export default router
```

**在`main.js`文件里导入`vuex`和`vue-router`**
```js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App)
})
```