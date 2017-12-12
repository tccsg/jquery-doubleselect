//import { connect } from "net";

const webpackConfig=require('./webpack.config');
const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const webpack=require('webpack');

module.exports=function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        clean:{
            build:['dist/**/*'],
        },
        connect:{
            options:{
                port:8086,
                hostname:'*',
                livereload:35729,
            },
            server:{
                options:{
                    open:true,
                    base:['src'],
                }
            }
        },
        watch:{
            
            livereload:{
                options:{
                    livereload:'<%=connect.options.livereload%>'
                },
                files:['src/*.html']
            }

        },
        webpack:{
            options:webpackConfig,
            dev:{
                // derServer:{
                //     contentBase:'./src',
                //     inline:true,
                //     hot:true
                // },
                // plugins:webpackConfig.plugins.concat(
                //     new HotModuleReplacementPlugin(),
                // )
            },
            prod:{
                plugins:webpackConfig.plugins.concat([
                    new HtmlWebpackPlugin({
                        template:path.resolve(__dirname,'./src/index.html'),
                        inject:'head'
                    }),
                    new webpack.optimize.UglifyJsPlugin({
                        except: ['$super', '$', 'exports', 'require']
                    }), //js压缩
                ]
                    
                )
            }
        },
        "webpack-dev-server":{
            options:{
                webpack:webpackConfig,
                //publicPath:'/dist/',
            },
            start:{
                keepalive: true,
				port:8086,
                historyApiFallback: true,
                noInfo: true,
                inline:true,
                hot:true,
                compress: true,
                watchOptions: {
                    aggregateTimeout: 300,
                    poll: 1000
                },
                //open:true
            }
        }
    })

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.registerTask('default',[
        'connect',
        'watch',
    ]);

    grunt.registerTask('server',['default']);

    grunt.registerTask('build',[
        'clean',
        'webpack:prod'
    ]);

    grunt.registerTask('dev',["webpack-dev-server:start"]);
}