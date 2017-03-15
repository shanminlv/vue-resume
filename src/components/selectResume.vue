<template>
	<section>
		<div class="scroll">
			<p class="arrowLeft" @click="move(-1)" v-if="dataArr.length">&#60;</p>
			<p class="arrowRight" @click="move(1)" v-if="dataArr.length">&#62;</p>
			<div class="middle">
				<div class="bigItem" v-if="dataArr.length">
					<ul :style="{left:ulLeft}">
						<li class="item"  v-for="(item,index) in dataArr" :class="{focusItem:focusIndex==index}" @click="addClass(index,item)">
							<img class="bgImg" :src="item.moduleSrc" alt="">
							<p>{{item.resumeName}}</p>
							<img class="delete" @click="deleteItem(index,item)" src="../images/white/delete.png" alt="" >
						</li>
					</ul>	
				</div>
				<p class="noData" v-if="!dataArr.length">您暂时没有简历数据</p>
			</div>
		</div>
	</section>
</template>
<script>
let positionNum=350;
export default {
	data(){
		let dataArr=[];
		for(let key in window.localStorage){
			let str=window.localStorage[key];
			let obj=JSON.parse(str);
			obj.moduleSrc=require('../images/'+obj.resumeModule+".png")
			dataArr.push(obj);
		}
		this.$store.commit("wrapperShow",!!dataArr.length)
		let store=this.$store.state.storage.resume;
		let focusIndex=store.index==-1?parseInt(dataArr.length/2):store.index;
		try{
			this.changeItem(focusIndex,dataArr[focusIndex]);
		}catch(e){

		}
		let ulLeft=(positionNum-focusIndex*105)+"px";
		return {
			dataArr,
			focusIndex,
			ulLeft,
		}
	},
	methods:{
		addClass(index,item){
			this.focusIndex=index;
			this.ulLeft=(positionNum-index*105)+"px";
			this.changeItem(index,item);
		},
		move(num){
			const self=this;
			let len=this.dataArr.length-1;
			this.focusIndex=this.focusIndex+num;
			if(this.focusIndex>len){
				this.focusIndex=0;
			}else if(this.focusIndex<0){
				this.focusIndex=len;
			}
			this.ulLeft=(positionNum-this.focusIndex*105)+"px";
			this.changeItem(this.focusIndex,this.dataArr[this.focusIndex]);
		},
		deleteItem(index,item){
			const self=this;
			let obj={
				text:'请确认是否删除简历'+item.resumeName+'?',
				show:true
			};
			this.$store.commit('operate',false)
			this.$store.commit('layer',obj);
			let unwatch=this.$watch('$store.state.operate',function(newVal){
				unwatch();
				if(newVal==true){
					self.dataArr.splice(index,1);
					window.localStorage.removeItem(item.key);
					self.$router.go(0);
				}
			})
		},
		changeItem(index,item){
			this.$store.commit("changeModule",item);
			this.$store.commit("changeState",{key:'resumeName',value:item.resumeName})
			this.$router.replace('/resume/'+item.resumeModule);
			let arr=[
				{
					key:'resume.index',
					value:index
				},
				{
					key:'resume.router',
					value:'/resume/'+item.resumeModule
				}
			];
			this.$store.commit("storage",arr)
		}
	}
}
</script>
<style scoped>
ul{margin:0;}
.scroll{overflow: hidden;margin-top: 20px;min-width: 1200px;}
.arrowLeft{float: left;}
.arrowRight{float: right;}
.scroll>p{
	font-size: 50px;
	width: 200px;
	padding-bottom: 1000px;
	margin-bottom: -1000px;
	line-height: 120px;
	text-align: center;
}
.middle{overflow:hidden;}
.bigItem{
	width: 800px;
	margin:0 auto;
	text-align: center;
	position: relative;
	height:120px;
}
.bigItem ul{
	height:120px;
	position: absolute;
	left: 0;
	top:0; 
	white-space:nowrap;
	text-align: center;
	transition: all .5s ease;
}
.item{
	position: relative;
	display: inline-block;
	width: 90px;
	height:120px;
	margin-right: 15px;
}
.focusItem{
	width: 110px;
	height: 145px;
}
.bgImg{
	width: 100%;
	height: 100%;
}
.item:hover .delete{
	position: absolute;
	top: 0px;
	right: 0;
	z-index: 5;
	width: 30px;
}
.item p{
	position: absolute;
	top:0;
	width: 100%;
	height: 100%;
	line-height: 120px;
	font-size: 24px;
	text-align: center;
	color:#fff;
	font-weight: bold;
	background-color:rgba(0,0,0,.5); 
}
.noData{
	font-size: 20px;
	text-align: center;
}
</style>