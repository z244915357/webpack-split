// import $ from 'jquery';

export function list (x,y){
    return x + y
}

// 打包时常用但页面 特殊文件进行单独打包  设置别名 打包后更容易识别
// import 动态导入语法: 能将某个文件单独打包  
import(/* webpackChunkName: 'test'*/'./test')
.then(({list,cont})=>{
    console.log(list(2,5))
}).catch(()=>{
    console.log(result)
})
