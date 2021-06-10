const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


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
        })
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