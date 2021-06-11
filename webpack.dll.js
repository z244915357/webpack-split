/**
 * 使用dll技术，对某些库（第三方库：jquery,react,vue...） 第三方库单独打包
 * 当你运行webpack 时 ，默认查找webpack.config.js 文件
 * 需求： 需要运行webpack.dll.js
 * --> webpack --config webpack.dll.js  运行
 * 
 * 
 * 
 */

const { resolve } = require('path');
const webpack = require('webpack');
module.exports = {
    entry:{
        jquery:['jquery']
    },
    output:{
        filename:'[name].js',
        path:resolve(__dirname,'dll'),
        library:'[name]_[hash]' // 打包的库里面向外面暴露出去的内容
    },
    plugins:[
        // 打包生成一个mainfest.json --> 提供jquery映射
        new webpack.DllPlugin({
           name:'[name]_[hash]', //映射库的暴露的内容名称
           path:resolve(__dirname,'dll/manifest.json')  //输出文件路劲
        })
    ],
    mode: 'production'
}
