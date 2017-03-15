<template>
	<div class="output">
		<span>请输入简历名称：</span>
		<input type="text" v-model="resumeName">
		<div class="outputRight">
			<span>导出为：</span>
			<span class="btn  btn-lg btn-primary" @click="web">网页</span>
			<span class="btn  btn-lg btn-primary" @click="img">图片</span>
			<span class="btn  btn-lg btn-primary" @click="pdf">PDF</span>
			<span class="btn  btn-lg btn-primary" @click="save">保存</span>
		</div>
	</div>
</template>
<script>
import {scaleCanvas,js_getDPI,exportPDF,exportImg} from "../api/common"
export default{
	data(){
		return {
			resumeName:""
		}
	},
	methods:{
		web(){
			this.$store.commit("addButton",false)
			this.save();
			var data=document.getElementById('resumeModule').innerHTML;
			var name=this.$store.state.resumeModule+".html";
		    var urlObject = window.URL || window.webkitURL || window;
		    var export_blob = new Blob([data]);
		    var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
		    save_link.href = urlObject.createObjectURL(export_blob);
		    save_link.download = name;
		    var ev = document.createEvent("MouseEvents");
		    ev.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		    save_link.dispatchEvent(ev);

			this.$store.commit("addButton",true)
		},
		img(){
			this.$store.commit("addButton",false)
			this.save();
			exportImg('resumeModule',scaleCanvas);
			this.$store.commit("addButton",true)

		},
		pdf(){
			this.$store.commit("addButton",false)
			this.save();
			exportPDF('resumeModule',js_getDPI);
			this.$store.commit("addButton",true)
		},
		save(){
			let str=this.$store.state.resumeModule;
			this.$store.state[str].resumeName=this.resumeName;
			window.localStorage.setItem(str,JSON.stringify(this.$store.state[str]));
		}
	}
}
</script>
<style scoped>
	.output{width: 1000px;margin:0 auto;height: 45px;position: absolute;left: 0;top:-60px;font-size: 16px;z-index: 5;}
	.output>span{line-height: 45px;}
	.output>input{border:1px solid #428bca;height: 40px;width: 350px;}
	.outputRight{float: right;}
	.outputRight span:last-child{margin-left: 50px}
</style>

