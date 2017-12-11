/**
 * 用于产生html代码
 */

 const htmldom=function(){
     let htmlsrc='';
     htmlsrc+='<div id="dsmodule" style="overflow: hidden;">';

     htmlsrc+='	<div id="packet_list" style="float: left;">';
     htmlsrc+='		<select multiple="multiple" name="doublebox_helper1" style="height: 160px;width: 138px;">'
     htmlsrc+='			<option value="0">0：这是第0项</option>';
     htmlsrc+='			<option value="1">1：这是第1项</option>';
     htmlsrc+='			<option value="2">1：这是第2项</option>';
     htmlsrc+='		</select>';
     htmlsrc+='	</div>';

     htmlsrc+='	<div style="float: left;padding: 0 10px;">';
     htmlsrc+='		<div>';
     htmlsrc+='			<div style="margin-top: 20px;">';
     htmlsrc+='				<span id="selectright" style="cursor: pointer;display: block;border: 1px solid #09c;width: 50px;height: 30px;text-align: center;line-height: 30px;color: #09c;font-size: 18px;">>></span>';
     htmlsrc+='			</div>';
     htmlsrc+='			<div style="margin-top: 20px;">';
     htmlsrc+='				<span id="selectleft" style="cursor: pointer;display: block;border: 1px solid #09c;width: 50px;height: 30px;text-align: center;line-height: 30px;color: #09c;font-size: 18px;"><<</span>';
     htmlsrc+='			</div>';
     htmlsrc+='		</div>';
     htmlsrc+='	</div>';

     htmlsrc+='	<div id="selected_packet"style="float: left;">';
     htmlsrc+='		<select multiple="multiple" name="doublebox_helper2" style="height: 160px;width: 138px;">';
     htmlsrc+='			<option value="3">3：这是第3项</option>';
     htmlsrc+='			<option value="5">5：这是第5项</option>';
     htmlsrc+='		</select>';
     htmlsrc+='	</div>';

     htmlsrc+='</div>';
     return htmlsrc;
 }

 export default htmldom;