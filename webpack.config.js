const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')

module.exports = {
    // 单入口打包  
    /**
     * entry:'**.js'
     */
    entry:'./src/js/index.js',
    // 多入口打包 
    // entry:{
    //     index:'./src/js/index.js',
    //     test:'./src/js/test.js',
    // },


    output:{
        // name 表示文件名称
        filename:'js/[name][contenthash:10].js',
        path:resolve(__dirname,'dist')
    },

    plugins:[
        new HtmlWebpackPlugin({
            template : './src/index.html'
        }),

        // 告诉webpack 那些库不用打包，直接使用dll打包后的文件即可，好处每次构建不用重新打包第三方插件，直接去引用dll打包后的文件即可
        new webpack.DllReferencePlugin({ 
            manifest:resolve(__dirname,'dll/manifest.json')
        }),
        // // 将某个文件中的包输出进来，并在html文件中自动引入这个资源
        // new AddAssetHtmlWebpackPlugin({
        //     filepath:resolve(__dirname,'dll/jquery.js')
        // })
    ],
    // 将第三方单独打包成一个chunk输出 
    // 不会将公共代码重复打包多次   
    optimization:{
        splitChunks:{
            chunks:'all'
        }
    },

    devServer:{
        contentBase: resolve(__dirname,'dist'),
        compress:true,
        port:3000,
        open:true
    },
    mode:'production',

}