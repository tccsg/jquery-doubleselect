# jquery-doubleselect
基于jquery的双边选项插件 可自动对项目排序


##### 使用方法：
<pre><code>npm install 
grunt dev //启动开发模式
grunt build 
$.ds.create({
    insertElement:'body',  //标签名字 类名  id名  p/.class/#id  要插入到那个元素里面
    leftlist:{}, //左边选择框的数据 json{'0':'第一项','1','第二项','2','第三项'}
    //rightlist:{},  //右侧数据
});</code></pre>
