// import $ from 'jquery';

export function list (x,y){
    return x + y
}

// 打包时常用但页面 特殊文件进行单独打包  设置别名 打包后更容易识别
// import 动态导入语法: 能将某个文件单独打包  
// import(/* webpackChunkName: 'test'*/'./test')
// .then(({list,cont})=>{
//     console.log(list(2,5))
// }).catch(()=>{
//     console.log(result)
// })


// 资源懒加载  需要用时才加载资源 使用es6 最新语法 import 注入的资源放到回调函数中  当回调函数时触发   加载资源  
// 预加载 prefetch  等其他资源加载完毕，等浏览器空闲时偷偷加载资源（更灵活，不需要紧急使用的资源时使用，慎用，大资源）   
// 正常加载可以认为是并行加载文件（同一时间加载多个文件）
document.getElementById('btn').onclick = function (){
    import(/* webpackChunkName : 'test'*/ './test').then(({list,account})=>{
        console.log(list(2,3))
    })
}



