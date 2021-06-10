# webpack-split
多页面应用

文件打包时  常用的几种方式   

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