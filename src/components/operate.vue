<template>
	<div class="edit">
		<span v-show="index" @click="moveArr(item,index,-1)">&uarr;</span>
		<span v-show="item.length-1!=index" @click="moveArr(item,index,1)">&darr;</span>
		<span v-show="item.length!=1" @click="del(item,index)">-</span>
		<span @click="add(item,index)">+</span>
	</div>
</template>
<script>
import {moveArr,add,del} from '../api/common'

export default{
	props:{
		item:Array,
		index:Number
	},
	data(){
		return{
			moveArr,
			add,
			del
		}
	}
}
</script>
<style scoped lang="scss">
	.edit{
		span {
			float: right;
			width: 18px;
			height: 20px;
			font-size: 18px;
			line-height: 20px;
		}
		span:nth-child(3){
			font-size: 25px;
	    	line-height: 16px;
		}
	}
</style>