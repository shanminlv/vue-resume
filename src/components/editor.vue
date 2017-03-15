<template>
	<div class="resume-toolbar"   :style="{left: left+'px', top: top+'px' }" v-show="$store.state.editShow" >
    <div class="dropdown fontfamily" >
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">
             <span class="FontName">Arial</span> <span class="caret"></span>
          </a>
          <ul class="dropdown-menu">
             <li><a href="javascript:;" data-cmd="FontName" class="editors" data-param="Arial">Arial</a></li>
             <li><a href="javascript:;" data-cmd="FontName" class="editors" data-param="宋体">宋体</a></li>
             <li><a href="javascript:;" data-cmd="FontName" class="editors" data-param="微软雅黑">微软雅黑</a></li>
             <li><a href="javascript:;" data-cmd="FontName" class="editors" data-param="黑体">黑体</a></li>              
          </ul>
        </div>
    <div class="dropdown fontsize">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">
             <span class="FontSize">3</span> <span class="caret"></span>
          </a>
          <ul class="dropdown-menu">
             <li><a href="javascript:;" data-cmd="FontSize" class="editors" data-param="1">1</a></li>
             <li><a href="javascript:;" data-cmd="FontSize" class="editors" data-param="2">2</a></li>
             <li><a href="javascript:;" data-cmd="FontSize" class="editors" data-param="3">3</a></li>
             <li><a href="javascript:;" data-cmd="FontSize" class="editors" data-param="4">4</a></li>
             <li><a href="javascript:;" data-cmd="FontSize" class="editors" data-param="5">5</a></li>
             <li><a href="javascript:;" data-cmd="FontSize" class="editors" data-param="6">6</a></li>
             <li><a href="javascript:;" data-cmd="FontSize" class="editors" data-param="7">7</a></li>          
          </ul>
        </div>
    <div class="barbtn">
      <a href="javascript:void(0);" data-cmd="Bold" class="editors"><span class="bold tipstool" title="加粗"></span></a>
      <a href="javascript:void(0);" data-cmd="Italic" class="editors"><span class="italic tipstool" title="倾斜"></span></a>
      <a href="javascript:void(0);" data-cmd="Underline" class="editors"><span class="underline tipstool" title="下划线"></span></a>
      <a href="javascript:void(0);" class=""><span class="bgcolor tipstool qfontcolor" title="背景色">A</span></a>
      <a href="javascript:void(0);"><span class="fontcolor tipstool qfontcolor" title="字体颜色"><em style="background-color: rgb(102, 255, 43);"></em></span></a>
      <a href="javascript:void(0);" data-cmd="JustifyLeft" class="editors mp"><span class="align-left tipstool" title="左对齐"></span></a>
      <a href="javascript:void(0);" data-cmd="JustifyCenter" class="editors mp"><span class="align-center tipstool" title="居中对齐"></span></a>
      <a href="javascript:void(0);" data-cmd="JustifyRight" class="editors mp"><span class="align-right tipstool" title="右对齐"></span></a>
      <a href="javascript:void(0);" data-cmd="InsertUnorderedList" class="editors mp"><span class="list-ul tipstool" title="无序列表"></span></a>
      <a href="javascript:void(0);" data-cmd="InsertOrderedList" class="editors mp"><span class="list-ol tipstool" title="有序列表"></span></a>
      <a href="javascript:void(0);" data-cmd="RemoveFormat" class="editors mp"><span class="RemoveFormat tipstool" title="清除格式"></span></a>
    </div>
  </div>
</template>
<script>
import Comunication from './comunication'


	export default{
		data(){
      var that=this;
      var data={
              left:0,
              top:0
       }
       Comunication.$on('position',function(val){
        data.left=val.left;
        data.top=val.top;
      });
			return data;
		},
		methods:{
			
		}
	}
</script>
<style scoped> 
</style>