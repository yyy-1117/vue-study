// 直接引入的vue是runtime的vue文件, 该文件如果要渲染组件, 必须使用render函数
// 或者手动引入完整的vue 这样可以渲染组件也可以渲染数据    import Vue from 'vue/dist/vue.js'
// import Vue from 'vue/dist/vue.js'
import Vue from 'vue'
// 导入 vue-router包
import VueRouter from 'vue-router'
// 2. 手动安装 VueRouter 
Vue.use(VueRouter)

// 导入App页面
import App from './App.vue'

import login from './login.vue'

import register from './register.vue'

let router = new VueRouter({
    routes:[
        {path:'/login',component:login},
        {path:'/register',component:register}
    ]
})


let vm = new Vue({
    el:'#app',
    render: c => c(App),    // 使用render 函数 渲染的组件会直接替换 el 监控的容器
    router
})
