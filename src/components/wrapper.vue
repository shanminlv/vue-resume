<template>
	<section class="content" :class="{resume:route}" v-if="$store.state.wrapperShow">
		<div class="middle">
			<outputModule :route="route"></outputModule>
			<div id="resumeModule">
			    <router-view name="resumeBlue" :getOffset="getOffset" :changeData="changeData" :changeImg="changeImg" :editShow="changeImg"   :hideAll="hideAll" :exportPosition="exportPosition" :showPhoto="showPhoto"></router-view>
    			<router-view name="resumeAroud" :getOffset="getOffset" :changeData="changeData" :changeImg="changeImg" :editShow="changeImg" :hideAll="hideAll" :exportPosition="exportPosition" :showPhoto="showPhoto"></router-view>
			</div>
		</div>
	</section>
</template>
<script>
import Comunication from './comunication'
import outputModule from './output'
	export default{
		data(){
			return{
			}
		},
		components:{
			outputModule
		},
		computed:{
			route:function(){
				return this.$route.path.split('/')[1]=='resume'?true:false
			}
		},
		methods:{
			getOffset(dom){
				var offsetL=0, 
			    	offsetT=0,
			    	obj={};

			    while(dom!=window.document.body&&dom!=null)  
			    {  
			        offsetL+=dom.offsetLeft  
			        offsetT+=dom.offsetTop  
			        dom=dom.offsetParent  
			    }
			    obj.top=offsetT;
			    obj.left=offsetL; 
			    return obj  
			},
			changeData(event,item,index){
				this.$store.commit('isHided',false);
				let value=event.srcElement.innerHTML;
				let obj={value,item,index};
				this.$store.commit('changeData',obj)
			},
			changeImg(event,item,index){
				event.stopPropagation();
				this.$store.commit('editShow',false);
				const self=this;
				let top=0;
				if(self.getOffset(event.srcElement).top>(document.body.offsetHeight/10*7)){
					top=self.getOffset(event.srcElement).top-document.body.offsetHeight/2;
				}else{
					top=self.getOffset(event.srcElement).top-50;
				}
				let obj={
					top:top,
					left:self.getOffset(event.srcElement).left,
					item,
					index,
					show:true
				};
				self.$store.commit('isShow',true);
				self.$store.commit('iconPosition',obj)
			},
			hideAll(){
				this.$store.commit('editShow',false);
				this.$store.commit('isShow',false);
				this.$store.commit('iconHide',false);
			},
			editShow(){
				this.$store.commit('editShow',true);
			},
			exportPosition(event){
				event.stopPropagation();
				const self=this;
				let position={
					top:self.getOffset(event.srcElement).top-220,
					left:self.getOffset(self.$el).left+500
				}
				this.zIndex=15;
				this.$store.commit('editShow',true);
				this.$store.commit('isShow',true);
				Comunication.$emit('position', position);
				this.$store.commit('isHided',true)
				this.$store.commit('iconHide',false);
			},
			showPhoto(event,target,str){
				const self=this;
				var files = event.srcElement.files;
				var reader = new FileReader();
				reader.readAsDataURL(files[0]);
				reader.onload = function(e){
					var mb = (e.total/1024)/1024;
					if(mb>= .5){
						alert('文件大小大于0.5M');
						return;
					}
					target[str]= this.result;
				}
			}
		}
	}
</script>
<style scoped>
	.content.resume{padding:0;margin:50px auto 0 auto;}
	.content{width: 100%;position: relative;background: #ddd;}
	.middle{width: 1000px;margin:0 auto;position: relative;z-index: 15;background-color: #fff;overflow: hidden;}
</style>