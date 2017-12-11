const path=require('path');
const webpack=require('webpack');

module.exports={
	entry:{
		index:path.resolve(__dirname,'./src/index.js')
	},
	output:{
		path:path.resolve(__dirname,'./dist'),
		filename:'[name].min.js'
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
	plugins:[
		new webpack.optimize.UglifyJsPlugin({
			except: ['$super', '$', 'exports', 'require']
		}) //js压缩
	],
}
