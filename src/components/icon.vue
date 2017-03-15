<template>
	<section class="icon" :style="{left:$store.state.iconPosition.left+'px',top:$store.state.iconPosition.top+'px'}" v-show="$store.state.iconPosition.show">
		<ul >
			<li v-for="(item,index) in colors" @click="change(index)"  :class="{bgColor:dataIndex==index}">{{item.text}}</li>
		</ul>
		<div class="wrap" :style="{backgroundColor:this.backgroundColor}">
			<img v-for="(item,index) in photoList" :src="item" alt="" @click="imgData(index)">	
		</div>
	</section>
</template>
<script>
import Comunication from './comunication'
let arr=['all','calendar','camera','certificate','code','comunity','delete','edit','email','error','favorite','gift','github','hot','iconfont-mingpian','iconfont-shumajiadian','lights','link','modify','school','set','similar-product','telephone','voice','wechat'];
let colors=[
			{
				src:'black',
				text:'黑色'
			},
			{
				src:'white',
				text:'白色'
			},
			{
				src:'blue',
				text:'蓝色'
			},
			{
				src:'orange',
				text:'橙色'
			}
			];
let photoData=[];
colors.forEach(function (val) {
	let list=[];
	for(var i=0,len=arr.length;i<len;i++){
		var icon=require('../images/'+val.src+'/'+arr[i]+'.png');
		list.push(icon)
	}
	photoData.push(list);
})

export default{
	name:'icon',
	data(){
		return{
			colors,
			photoData,
			photoList:photoData[0],
			backgroundColor:'#999',
			dataIndex:0
		}
	},
	methods:{
		change(index){
			this.dataIndex=index;
			this.photoList=this.photoData[index];
			if(index==1){
				this.backgroundColor='#999'
			}else{
				this.backgroundColor='#eee'
			}
		},
		imgData(index){
			this.$store.commit('isShow',false);
			this.$store.commit('iconHide',false);
			this.$store.commit('imgData',this.photoList[index]);
		}
	}
}
</script>
<style scoped>
	.icon{width: 500px;position: absolute;border-radius: 10px;z-index: 20;}
	.bgColor{background: #2196F3;}
	ul:after{display: block;content: '';clear:both;width: 0;}
	.icon ul{background-color: #8AC9E4;border-radius:10px 10px 0 0;margin-bottom: 0px;}
	ul li{float: left;width: 25%;text-align: center;padding: 10px;color: #fff;font-weight: bold;border-right: 1px solid #fff}
	li:last-child{border:none}
	.wrap{border:2px solid #8AC9E4;border-radius: 0 0 10px 10px;border-top: none;}
	.icon img{width: 55px;padding: 10px;}
</style>
