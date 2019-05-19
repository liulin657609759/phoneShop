console.log('ok');
import Vue from 'vue'
//1.1导入路由的包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter)
//1.3导入自己的router.js
import router from "./router.js"

//2.1 导入vue-resource
import VueResource from 'vue-resource'
//2.2 安装vue-resource
Vue.use(VueResource)

//导入mui
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'


// //导入所有的 Mint-UI组件
// import MintUI from 'mint-ui'
// //可以省略掉node_modules这一层目录
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI);

//按需导入组件
// import {Button} from 'mint-ui'
//使用Vue.component 注册按钮组件
// Vue.component(Button.name,Button)//Button.name就是组件名称（mt-button ）

import { Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//导入App根组件
import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c=>c(app),
    router//1.4挂载路由对象到实例vm
})