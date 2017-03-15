<template>
	<section class="left">
		<p>{{msg}}</p>
		<img v-for="(item,index) in resumeImg" :src="item.src" @click="linkTo(item.module)" alt="">
	</section>
</template>
<script>
import resumeImg from "../json/resumeImg.json"
resumeImg.forEach(function(val){
	val.src=require("../images/"+val.src)
});
export default{
	data(){
		const self=this;
		let arr=[
			{
				key:'edit.router',
				value:self.$route.path
			}
		];
		let resumeModule=this.$route.path.split('/')[2];
		this.$store.commit("wrapperShow",true);
		this.$store.commit("changeState",{key:'resumeName',value:''})
		this.$store.commit("storage",arr);
		this.$store.commit("changeModule",this.$store.state.storage.edit.resumeBlue);
		this.$store.commit("changeModule",this.$store.state.storage.edit.resumeAroud);
		this.$store.commit("changeState",{key:'resumeModule',value:resumeModule})
		return{
			msg:'模板列表',
			resumeImg
		}
	},
	methods:{
		linkTo(module){
			let arr=[
				{
					key:'edit.router',
					value:'/edit/'+module
				}
			]
			this.$store.commit("storage",arr);
			this.$store.commit("changeModule",module);
			this.$router.replace('/edit/'+module);
		}
	}
}
</script>
<style  scoped>
.left{position: fixed;left:0px;top:0;width:200px;height:100%;border-right: 1px solid #888;z-index: 1;text-align: center;background: #ddd;}
.left>p{font-size:16px;text-align: center;}
.left>img{width: 150px; height: 200px;margin-bottom: 25px;}
</style>