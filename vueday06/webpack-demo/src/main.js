// 使用ie6 的语法引入 jquery
import $ from 'jquery'

import './css/index.css'

import 'bootstrap/dist/css/bootstrap.css'

$(function(){
    $('li:odd').css('backgroundColor','blue')
    $('li:even').css('backgroundColor','red')
})