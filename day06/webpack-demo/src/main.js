// 使用ie6 的语法引入 jquery  ie6语法太高级 浏览器解析不了 需要进行配置
import $ from 'jquery'

import './css/index.css'

import 'bootstrap/dist/css/bootstrap.css'

$(function(){
    $('li:odd').css('backgroundColor','blue')
    $('li:even').css('backgroundColor','red')
})


// ie6 语法
class Name {
    static info ={
        name:'zs',
        age:20
    }
}
console.log(Name.info)