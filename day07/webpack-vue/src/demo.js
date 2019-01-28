// 模块对外暴露的默认成员, 一个模块只能对外暴露一次export default
// export default 
// 无需在导出的时候起名字. 导入时通过import xxx语法来起名
export default {
    name:'张三'
}

// export
// 按需导出
export let name = '李四'
export let age = 20