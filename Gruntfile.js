//import { connect } from "net";

const webpackConfig=require('./webpack.config');
const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

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
            dev:{},
            prod:{
                plugins:webpackConfig.plugins.concat(
                    new HtmlWebpackPlugin({
                        template:path.resolve(__dirname,'./src/index.html'),
                        inject:'head'
                    })
                )
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
    ])
}