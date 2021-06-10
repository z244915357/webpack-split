# webpack-split
多页面应用

文件打包时  常用的几种方式     分包处理 实现零散资源 ，公共资源 ，进行抽离打包 ，将大的js资源分成小资源包  提高编译速度 ，避免重复打包

## 单页面应用
entry : ' **/**.js'
 
###  多页面应用
entry :{
    index : ' **/**.js',
    test : ' **/**.js'
}
需要配置
optimization :{
    splitChunks:{
        chunks:'all'
    }
}

###
直接使用import（）动态载入 es10写法

文件a 中引入 文件b
/* webpackChunk 'test' */   给动态加载的文件设置别名，打包后容易辨别特殊文件

import(/* webpackChunk: 'test' */ './test').then(({fn, count}) => {
    console.log(fn())
}).then(()=>{

})


### 文件懒加载和预加载
懒加载模式  当需要使用时才加载
document.getElementById('btn').onclick = function (){
    import(/* webpackChunkName : 'test' */ './test').then(({list,account})=>{
            console.log(list(2,3))
    })
}
将资源放在回调函数在 使用import方式引入  
当回调出发时向服务器发起请求  使用标记语法 import( /* webpackChunkName : 'test' * , ./test / )



预加载模式 只需要在懒加载标记后添加  webpackprefeatch : true 即可
空闲加载  优先加载紧急资源  空闲时加载（不适合大型文件，或网络不稳定，网络慢的情况，可能会文件丢失或要使用时，资源未加载完，造成程序异常） 
import(/* webpackChunkName : 'test' , webpackPrefetch:true */ './test').then(({list,account})=>{
        console.log(list(2,3))
})