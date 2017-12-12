const path=require('path');
const webpack=require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
	entry:{
		index:path.resolve(__dirname,'./src/index.js')
	},
	output:{
		path:path.resolve(__dirname,'./dist'),
		filename:'[name].min.js',
		//publicPath:'/dist/'
	},
	module:{
		rules:[
			{
				test:/(\.js|\.jsx)$/,
				use:{
					loader:'babel-loader',
				}
			},{
				test:/\.css$/,
				use:[
					{
						loader:'style-loader',
					},{
						loader:'css-loader',
					}
				]
			}
		]
	},
	// devServer:{
	// 	contentBase:'./src',
	// 	port:8080,
	// 	hot:true,
	// 	//inline:true,
	// 	// plugins:[
	// 	// 	new webpack.HotModuleReplacementPlugin(),
	// 	// ]
	// },
	plugins:[
		// new HtmlWebpackPlugin({
		// 	filename: 'index.html',
		// 	template: 'src/index.html',
		// 	inject: true
		// }),
		// new webpack.optimize.UglifyJsPlugin({
		// 	except: ['$super', '$', 'exports', 'require']
		// }), //js压缩
		//new webpack.HotModuleReplacementPlugin(),
	],
}
