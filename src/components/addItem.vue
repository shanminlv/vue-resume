<template>
	<div class="addItem" v-show="$store.state.addButton" >
		<p>
			<span v-for="(str,index) in title" @click="addType(index)" :style="{background:bgColor}">{{str}}</span>
		</p>
		<span :style="{background:bgColor}">+</span>
	</div>
</template>
<script>
export default {
	props:{
		title:Array,
		target:[Object,Array],
		keyStr:[String,Number],
		jsonArr:[Array,String],
		bgColor:String
	},
	data(){
		return{

		}
	},
	methods:{
		addType(index){
			const self=this;
			if(self.target instanceof Array){
				self.target.push(JSON.parse(self.jsonArr[index]))
			}else{
				self.target[keyStr]=JSON.parse(self.jsonArr);
			}
		}
	}
}
</script>
<style>
.addItem{
	float:right;
	font-size:30px;
	color:#fff;
	position:relative;
	display: none;
}
.addItem p{
	position:absolute;
	right:0;
	font-size:18px;
	width:175px;
	margin-top: 7px;
	display:none;
}
.addItem p span{
	display:inline-block;
	line-height:30px;
	text-align:center;
	padding:0 5px;
	color:#fff;
	border-radius:10px;
	background: #0e76ac;
	margin-left:5px;
}
.addItem>span{
	display:inline-block;
	line-height:30px;
	text-align:center;
	width:30px;
	height:30px;
	border-radius:50%;
	background: #0e76ac;
}
.addItem:hover p{display:block;}

</style>