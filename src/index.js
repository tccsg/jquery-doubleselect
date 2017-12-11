import HtmlDom from './js/template';

(function($){

    const htmlsrc=HtmlDom();//生成html代码
    function DS(){}

    DS.prototype={
        constructor:DS,
        create:function(option){
            var dstemp=htmlsrc;
            var bean=this.createNode(dstemp);
            this.initEvent(bean,option);
        },
        createNode:function(temp){
            var _tempNode=$(temp);
            _tempNode.appendTo($('body'));
            return _tempNode;
        },
        initEvent:function(bean,option){
            var that=this;
            $('#dsmodule option').dblclick(function(){
                var $insert_data=$(this);
                var $insert_list_name;
                if($(this).parent('select').attr('name')=="doublebox_helper1"){
                    $insert_list_name=$('select[name="doublebox_helper2"]');
                }else if($(this).parent('select').attr('name')=="doublebox_helper2"){
                    $insert_list_name=$('select[name="doublebox_helper1"]');
                }
                that.sortList($insert_list_name,$insert_data);
            })
            $('#selectright').click(function(){
                that.selectF('r');
            })
            $('#selectleft').click(function(){
                that.selectF('l')
            })
        },
        sortList:function($insert_list_obj,$insert_data){
            var $llist_col=$insert_list_obj.find('option');
            if($llist_col.length==0){
                $insert_data.each(function(){
                    $(this).appendTo($insert_list_obj);
                })
            }
            $llist_col.each(function(){
                var _this=this;
                    if($(_this).val()<$($insert_data[0]).val()){
                        if($(_this).next('option').val()==null){
                            $($insert_data[0]).insertAfter($(_this));
                        }
                        if($(_this).next('option').val()>$($insert_data[0]).val()){
                            $($insert_data[0]).insertAfter($(_this));
                        }
                    }
                    if($(_this).val()>$($insert_data[0]).val()&&$(_this).prev('option').val()==null){
                        $($insert_data[0]).insertBefore($(_this));
                    }
                    
            })	
        },
        selectF:function(sign){
            var $pselect=null;
            var $dasources=null;
            var that=this;
            if(sign=='l'){
                var pselectelement='#packet_list select';
                var dasourceselement='#selected_packet select';
            }else if(sign=='r'){
                var pselectelement='#selected_packet select';
                var dasourceselement='#packet_list select';
            }
            $pselect=$(pselectelement);
            $dasources=$(dasourceselement);
            if($pselect!==null){
                var $optiondatacoll=$dasources.find('option:selected');
                $optiondatacoll.each(function(){
                    $pselect=$(pselectelement);
                    that.sortList($pselect,$(this))
                })
                
            }	
        }
    }
    $.ds=new DS();
})(jQuery)