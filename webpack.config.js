const path=require("path");
const HtmlWebPackPlugin=require("html-webpack-plugin");
module.exports={
    entry:"./src/main.js",
    output:{
        filename:"main.js",
        path:path.resolve(__dirname,"dist"),
        clean:true,
    },
    mode:"development",
    plugins:[
        new HtmlWebPackPlugin({
            template:"./src/index.html"
        })
    ]
}