// 直接引入的vue是runtime的vue文件, 该文件如果要渲染组件, 必须使用render函数
// 或者手动引入完整的vue 这样可以渲染组件也可以渲染数据    import Vue from 'vue/dist/vue.js'
// import Vue from 'vue/dist/vue.js'
import Vue from 'vue'

import login from './login.vue'

let vm = new Vue({
    el:'#app',
    data:{
        msg:'这是使用webpack 渲染的数据 '
    },
    render: c => c(login)    // 使用render 函数 渲染的组件会直接替换 el 监控的容器
})

// 导入的数据 都是只读的, 不可修改  如果需要修改, 可以在本地先另存一个变量 再修改新的变量

import userName from './demo.js'

console.log(userName)

// export 按需导出 如果需要修改名称可以使用 as
import {name , age as a } from './demo.js'

console.log(name +'----' + a)