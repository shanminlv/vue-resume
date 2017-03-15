<template>
	<div class="output">
		<span>请输入简历名称：</span>
		<input type="text" v-model="$store.state.resumeName" maxlength="3">
		<div class="outputRight">
			<span>导出为：</span>
			<span class="btn  btn-lg btn-primary" @click="web">网页</span>
			<span class="btn  btn-lg btn-primary" @click="img">图片</span>
			<span class="btn  btn-lg btn-primary" @click="pdf">PDF</span>
			<span class="btn  btn-lg btn-primary" @click="save">保存</span>
			<span class="btn  btn-lg btn-primary" @click="reset" v-if="!route">重置</span>
		</div>
	</div>
</template>
<script>
import {scaleCanvas,js_getDPI,exportPDF,exportImg} from "../api/common"
export default{
	data(){
		return {
			resumeAroud:["<!DOCTYPE html>",
							"<html lang=\"en\">",
							"<head>",
							"	<meta charset=\"UTF-8\">",
							"	<meta name=\"viewport\"",
							"    content=\"width=device-width,user-scalable=no,initial-scale=1.0,maximum-scale=1,minimum-scale=1\">",
							"	<title>Demo</title>",
							"  <style>",
							"blockquote,body,button,dd,dl,dt,fieldset,form,h1,h2,h3,h4,h5,h6,hr,input,legend,li,ol,p,pre,td,textarea,th,ul{margin:0;padding:0;border:0}",
							"html{color:#000}",
							"body,html{height:100%}",
							"body,button,input,select,textarea{font-size:12px;font-family:\'Microsoft Yahei\',\'微软雅黑\',\/\/5FAE\/\/8F6F\/\/96C5\/\/9ED1,\'宋体\',\/\/5b8b\/\/4f53,arial,\'Hiragino Sans GB\',Tahoma,Arial,Helvetica!important}",
							"dd,dl,dt,li,ol,ul{list-style:none}",
							"em{font-style:normal}",
							"a{text-decoration:none;color:#000;outline:0}",
							"legend{color:#000}",
							"img{border:0;width:100%}",
							"button,label{cursor:pointer}",
							"h1,h2,h3,h4,h5,h6{font-weight:400}",
							"img{-ms-interpolation-mode:bicubic}",
							".clearfix:after{content:\'\';display:block;height:0;clear:both}",
							".clearfix{zoom:1}",
							".clear{clear:both}",
							".wordwrap{word-break:break-all;word-wrap:break-word}",
							".omg{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
							".pingO{color:#4285F7}",
							"*{box-sizing:border-box}",
							"li{list-style-type:none}",
							"a{text-decoration:none}",
							"html{height:100%}",
							"body,html{-webkit-text-size-adjust:none;width:100%;font-family:\'Helvetica Neue\',Helvetica,\'Microsoft Yahei\',\'Hiragino Sans GB\',\'WenQuanYi Micro Hei\',sans-serif}",
							"body{font-size:16px;min-width: 320px;background-color:#bbb;}",
							"section {background: #fff;width: 1000px;margin:0 auto;overflow: hidden;margin-top:50px}",
							".left{",
							"  background: #2F4E9E;",
							"  float: left;",
							"  width: 250px;",
							"  text-align: center;",
							"  padding: 10px;",
							"  color:#fff;",
							"  margin-top: 0;",
							"  margin-bottom: -2000px;",
							"  padding-bottom: 2000px;",
							"}",
							".photo{margin: 30px auto;width: 150px;position: relative;}",
							".photo img{width: 100%;}",
							".photo input{position: absolute;left: 0;top:0;width: 100%;height: 100%;opacity: 0;display:none;}",
							".job{font-size: 18px;}",
							"ul{margin:0;}",
							".item{margin-bottom:20px;}",
							".name{font-size: 22px;margin-bottom: 10px;}",
							".msg{margin-top: 20px;}",
							".msg li{text-align: left;margin-bottom: 10px;width: 100%;}",
							".msg li img{height: 20px;width: 20px;float: left;}",
							".msg li p{font-size: 15px;overflow: hidden;line-height: 22px;margin-left:24px;}",
							".certificate{font-size: 16px;margin-top: 20px;}",
							".certList,.hobby{margin-top: 5px}",
							".hobby{text-align: left;}",
							".hobby li{display: inline-block;width: 33.3%;font-size: 0;text-align: center;vertical-align: top;}",
							".hobby img{margin-bottom: 15px;width: 30px;}",
							".content{padding:15px 0 0 30px;color: #000;}",
							".hobby p{font-size: 16px;}",
							".right{overflow: hidden;float: none;padding: 15px;color:#2F4E9E;}",
							".title img{float: left;width: 30px;height: 30px;}",
							".text{font-size: 24px;line-height: 30px;border-bottom: 2px solid #2F4E9E;overflow: hidden;}",
							".listTitle{height: 20px;font-size: 0px;line-height: 20px;}",
							".listTitle p{display: inline-block;width: 33.3%;text-align: center;font-size: 15px;}",
							".listTitle p:first-child{text-align: left;}",
							".detail p{font-size: 16px;margin-top: 5px;}",
							".edit.hided{display: none!important;}",
							".edit{",
							"  display:none!important;",
							"  position:absolute;",
							"  right:0px;",
							"  top:0;",
							"  font-weight:bold;",
							"  border-radius:5px;",
							"  transition: all 3s ease-in;",
							"}",
							".edit:after{content: \"\";display: block;clear:both;width: 0;}",
							".msg li .edit,.title .edit,.list .edit,.hobby li .edit,.listTitle .edit{background: rgba(140,205,239,1);}",
							".msg li,.title,.list,.listTitle{position:relative;}",
							".msg li:hover .edit,.title:hover .edit,.list:hover .edit,.hobby li:hover .edit,.listTitle:hover .edit  {",
							"  display:none;",
							"}",
							".hobby li{position: relative;}",
							".hobby li .edit{",
							"  display:none;",
							"  position:absolute;",
							"  right:0;",
							"  top:-20px;",
							"  height: 20px;",
							"  font-weight:bold;",
							"  border-radius:5px;",
							"}",
							".addItem{display: none;}",
							".resumeAroud{padding-bottom: 20px;}",
							"  </style>",
							"</head>",
							"<body >",
							"toBeReplace",
							"</body>",
							"</html>",
							].join(""),
			resumeBlue:["<!DOCTYPE html>",
						"<html lang=\"en\">",
						"<head>",
						"	<meta charset=\"UTF-8\">",
						"	<meta name=\"viewport\"",
						"    content=\"width=device-width,user-scalable=no,initial-scale=1.0,maximum-scale=1,minimum-scale=1\">",
						"	<title>Demo</title>",
						"  <style>",
						"blockquote,body,button,dd,dl,dt,fieldset,form,h1,h2,h3,h4,h5,h6,hr,input,legend,li,ol,p,pre,td,textarea,th,ul{margin:0;padding:0;border:0}",
						"html{color:#000}",
						"body,html{height:100%}",
						"dd,dl,dt,li,ol,ul{list-style:none}",
						"em{font-style:normal}",
						"a{text-decoration:none;color:#000;outline:0}",
						"legend{color:#000}",
						"img{border:0;width:100%}",
						"button,label{cursor:pointer}",
						"h1,h2,h3,h4,h5,h6{font-weight:400}",
						"img{-ms-interpolation-mode:bicubic}",
						".clearfix:after{content:\'\';display:block;height:0;clear:both}",
						".clearfix{zoom:1}",
						".clear{clear:both}",
						".wordwrap{word-break:break-all;word-wrap:break-word}",
						".omg{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
						".pingO{color:#4285F7}",
						"*{box-sizing:border-box}",
						"li{list-style-type:none}",
						"a{text-decoration:none}",
						"html{height:100%}",
						"body,html{-webkit-text-size-adjust:none;width:100%;font-family:\'Helvetica Neue\',Helvetica,\'Microsoft Yahei\',\'Hiragino Sans GB\',\'WenQuanYi Micro Hei\',sans-serif}",
						"body{font-size:16px;min-width: 320px;background: #bbb;}",
						"section{z-index:15;position:relative;background: #fff;margin-top: 50px;}",
						"section p{min-width:40px;}",
						".top{",
						"background:#0a557d;",
						"display:table;",
						"width:100%;",
						"color:#fff;",
						"}",
						".top:after{content:\'\';display:block;height:0;clear:both}",
						".personal{",
						"  display:table-cell;",
						"  vertical-align:middle;",
						"  width:25%;",
						"  padding-left:5%;",
						"}",
						".personal li{",
						"    height:25px;",
						"    line-height:25px;",
						"  }",
						".personal li img{",
						"    width:24px;",
						"    vertical-align: middle;",
						"  }",
						".personal li span{",
						"    display: none;",
						"    float: right;",
						"    width: 14px;",
						"    height: 20px;",
						"    text-align: center;",
						"    line-height:20px;",
						"    margin-top: 2.5px;",
						"    font-weight: bold;",
						"    background: #fff;",
						"    border-radius: 50%;",
						"    color:#1296DB;",
						"    font-size:16px;",
						"    margin-left: 2px;",
						"    z-index: 15;",
						"    position: relative;",
						"  }",
						".personal li p{",
						"    line-height:25px;",
						"    margin-left: 15px;",
						"    float: right;",
						"    margin:0 32px 0 16px;",
						"    width: 128px;",
						"    text-align: left;",
						"    white-space:nowrap;",
						"  }",
						".personal li p input{",
						"    background:transparent",
						"  }",
						".personal li:hover span{",
						"    display: block;",
						"  }",
						".personal li:hover p{",
						"    margin-right:0;",
						"  }",
						"      ",
						".message{",
						"  display:table-cell;",
						"  vertical-align:middle;",
						"  width: 50%;",
						"  text-align: center;",
						"}",
						".name{",
						"  font-size: 40px;",
						"  font-weight: bold;",
						"}",
						".profession{",
						"  font-size: 20px;",
						"  font-weight: bold;",
						"}",
						".photo{",
						"  display:table-cell;",
						"  vertical-align:middle;",
						"  width:25%;",
						"  height:100px;",
						"  text-align:center;",
						"  position:relative;",
						"  ",
						"  ",
						"}",
						".photo input{",
						"  position: absolute;display:none;",
						"  z-index:20;",
						"  width:40%;",
						"  left:30%;",
						"  height: 100px;",
						"    opacity: 0;",
						"    filter: alpha(opacity=0);",
						"    cursor: pointer;",
						"  }",
						".photo img{",
						"    width:40%;",
						"    height: 100%;",
						"  } ",
						"#content{",
						"  padding:10px 40px;overflow:hidden",
						"}",
						".top:after{content:\'\';display:block;height:0;clear:both}",
						".detailImg img{",
						"  float: left;",
						"  width: 20px;",
						"}",
						".detailImg p{",
						"  overflow: hidden;",
						"}",
						".detailImg:after{content:\'\';display:block;height:0;clear:both}",
						".skillName{",
						"  color:#008080;",
						"  line-height: 25px;",
						"}",
						".item>div{",
						"  line-height:20px;",
						"  .itemRight{",
						"    float: right;",
						"    margin-right: 20px;",
						"  }",
						"}",
						".item>div:after{content:\'\';display:block;height:0;clear:both}",
						".itemLeft{",
						"  width:130px;",
						"  display:inline-block;",
						"}",
						".skillName span:last-child{",
						"  float: right;",
						"  color:black;",
						"}",
						".skillName:after{content:\'\';display:block;height:0;clear:both}",
						".left{",
						"  margin:0",
						"}",
						".left>div:not(:first-child),.right>div:not(:first-child){",
						"  margin-top:10px;",
						"}",
						".left,.right{",
						"    width:50%;",
						"    padding-right:20px;",
						"    float:left;",
						"  }",
						".left:after,.right:after{content:\'\';display:block;height:0;clear:both}",
						".bigTitle{",
						"  color:#1296DB;",
						"  position: relative;",
						"}",
						".bigTitle img{",
						"    width: 40px;",
						"    float: left;",
						"    margin-top: 4px;",
						"  }",
						".bigIcon{",
						"    width: 10%;",
						"    float: left;",
						"  }",
						".titleName{",
						"    float: left;",
						"    margin-left: 20px;",
						"  }",
						".titleName p:first-child{",
						"      font-size: 20px;",
						"    }",
						".titleName p:last-child{",
						"      font-size: 14px;",
						"    } ",
						".bigTitle:after{content:\'\';display:block;height:0;clear:both}",
						".edit{",
						"  display:none!important;",
						"  position:absolute;",
						"  right:0;",
						"  top:0;",
						"  font-weight:bold;",
						"  border-radius:5px;",
						"}",
						"#workList,#skillList,.projectList{",
						"  border-left:5px solid #1296DB;",
						"  padding-left:20px;",
						"}",
						".detail{",
						"  font-size: 15px;",
						"}",
						".company,.skillTitle{",
						"  background: #333;",
						"  padding:0 20px;",
						"  border-radius:5px;",
						"  min-height:20px;",
						"  color:#fff;",
						"}",
						"  .company p:first-child,.skillTitle p:first-child{",
						"    float: left;",
						"    line-height: 20px;",
						"  }",
						"  .company p:nth-of-type(2),.skillTitle p:nth-of-type(2){",
						"    float: right;",
						"    line-height: 20px;",
						"  }",
						".company:after,.skillTitle:after{content:\'\';display:block;height:0;clear:both}",
						".itemTitle{",
						"  min-height:20px;",
						"  color:#008080;",
						"}",
						".itemTitle p:nth-child{",
						"  float: right;",
						"  line-height: 20px;",
						"}",
						".itemTitle p:first-child{",
						"  float: left;",
						"  line-height: 20px;",
						"}",
						".itemTitle:after{content:\'\';display:block;height:0;clear:both}",
						".job,.item>div{",
						"  font-weight: bold;",
						"  padding:5px 0;",
						"  color:#0a557d;",
						"}",
						".addItem{display: none!important;}",
						".resumeBlue{padding-bottom: 20px;width: 1000px;margin: 0 auto;}",
						"  </style>",
						"</head>",
						"<body >",
						"toBeReplace",
						"</body>",
						"</html>",
						].join("")
		}
	},
	props:{
		route:Boolean
	},
	methods:{
		web(){
			this.save();
			let resumeModule=this.$store.state.resumeModule;
			var data=this[resumeModule].replace(/toBeReplace/g,document.getElementById('resumeModule').innerHTML);
			data=data.replace(/contenteditable="true"/g,'');
			var name=resumeModule+".html";
		    var urlObject = window.URL || window.webkitURL || window;
		    var export_blob = new Blob([data]);
		    var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
		    save_link.href = urlObject.createObjectURL(export_blob);
		    save_link.download = name;
		    var ev = document.createEvent("MouseEvents");
		    ev.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		    save_link.dispatchEvent(ev);
		},
		img(){
			this.save();
			exportImg('resumeModule',scaleCanvas);

		},
		pdf(){
			this.save();
			exportPDF('resumeModule',js_getDPI);
		},
		save(){
			let str=this.$store.state.resumeModule;
			this.$store.state[str].key=this.$store.state[str].key||(str+this.randomName());
			let key=this.$store.state[str].key;
			this.$store.state[str].resumeName=this.$store.state.resumeName?this.$store.state.resumeName:'简历';
			this.$store.state[str].resumeModule=str;
			window.localStorage.setItem(key,JSON.stringify(this.$store.state[str]));
		},
		reset(){
			const self=this;
			let obj={
				text:'请确认是否删除所有修改?',
				show:true
			};
			this.$store.commit('operate',false)
			this.$store.commit('layer',obj);
			let unwatch=this.$watch('$store.state.operate',function(newVal){
				unwatch();
				if(newVal==true){
					let resumeModule=self.$route.path.split('/')[2];
					let item=JSON.parse(self.$store.state.storeData[resumeModule]);
					let arr=[
						{
							key:'edit.'+resumeModule,
							value:item
						}
					]
					self.$store.commit("storage",arr);
					self.$store.commit("changeModule",item);
				}
			})
			
		},
		randomName(){
			let str="abcdefghijklmnopqrstuvwsyz";
			let name='';
			for(var i=0;i<6;i++){
				let index=Math.floor(Math.random()*26);
				name+=str[index];
			}
			return name;
		}
	}
}
</script>
<style scoped>
	.output{width: 1000px;height: 45px;font-size: 16px;margin-bottom: 30px;margin-top: 30px;}
	.output>span{line-height: 45px;}
	.output>input{border:1px solid #428bca;height: 40px;width: 250px;}
	.outputRight{float: right;}
	.outputRight span:nth-child(5){margin-left: 50px}
</style>