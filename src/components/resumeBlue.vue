<template>
<section @click="hideAll" class="resumeBlue">
	<div  class="top"  id="top" >
		<ul class="personal" >
			<li class="personalList" v-for="(item,index) in $store.state.resumeBlue.top.msg">
				<img :src="item[0]"  @click="changeImg($event,item,0)" >
				<span @click.stop="add($store.state.resumeBlue.top.msg,index)">+</span>
				<span @click.stop="del($store.state.resumeBlue.top.msg,index)">-</span>
				<p contenteditable="true" @click="exportPosition($event)" @blur="changeData($event,item,1)" v-html="item[1]"></p>
			</li>
		</ul>
		<div class="message">
			<p class="name" contenteditable="true" @click="exportPosition($event)" @blur="changeData($event,$store.state.resumeBlue.top,'name')" v-html="$store.state.resumeBlue.top.name"></p>
			<p class="profession" contenteditable="true"  @click="exportPosition($event)" @blur="changeData($event,$store.state.resumeBlue.top,'profession')" v-html="$store.state.resumeBlue.top.profession"></p>
		</div>
		<div class="photo">
			<input type="file" @click.stop="" @change="showPhoto($event,$store.state.resumeBlue.top,'photo')">
			<img :src="$store.state.resumeBlue.top.photo"  alt="" >
		</div>
	</div>

	<div id="content">
			<div class="left">
				<div v-for="(item,index) in $store.state.resumeBlue.left">
					<div class="mywork" v-if="item.type=='moreTitle'">
						<div class="bigTitle work" >
							<img :src="item.img" @click="changeImg($event,item,'img')">
							<div class="titleName">	
								<p contenteditable="true"  @click="exportPosition($event)" @blur="changeData($event,item,'text')" v-html="item.text"></p>
								<p contenteditable="true"  @click="exportPosition($event)" @blur="changeData($event,item,'anglish')" v-html="item.english"></p>
							</div>
							<operate :item="$store.state.resumeBlue.left" :index="index"></operate>
						</div>
						<div id="workList">
							<div class="experience" v-for="(list,i) in item.item" > 
								<div class="company" >
									<p contenteditable="true" @click="exportPosition($event)" @blur="changeData($event,list,'company')" v-html="list.company"></p>
									<p contenteditable="true" @click="exportPosition($event)" @blur="changeData($event,list,'date')" v-html="list.date"></p>
									<operate :item="item.item" :index="i"></operate>
								</div>
								<p class="job" contenteditable="true" @click="exportPosition($event)" @blur="changeData($event,list,'job')" v-html="list.job">{{list.job}}</p>
								<div class="detailImg" v-for="(detail,j) in list.detail">
									<img :src="item.detailImg" @click="changeImg($event,item,'detailImg')">
									<p class="detail"  contenteditable="true" @click="exportPosition($event)" @blur="changeData($event,list.detail,j)" v-html="detail"></p>
									<operate :item="list.detail" :index="j"></operate>
								</div>
							</div >
						</div>
					</div>
					<div class="myskill" v-else>
						<div class="bigTitle skill">
							<img :src="item.img" @click="changeImg($event,item,'img')">
							<div class="titleName">	
								<p contenteditable="true"  @click="exportPosition($event)" @blur="changeData($event,item,'text')" v-html="item.text"></p>
								<p contenteditable="true"  @click="exportPosition($event)" @blur="changeData($event,item,'anglish')" v-html="item.english"></p>
							</div>
							<operate :item="$store.state.resumeBlue.left" :index="index"></operate>
						</div>
						<div id="skillList">
						<p class="skillTitle" contenteditable="true"  @click="exportPosition($event)" @blur="changeData($event,item,'title')" v-html="item.title"></p>
						<div id="frontEnd">
							<div class="skills" v-for="(list,i) in item.item" > 
								<div class="itemTitle" >
									<p contenteditable="true" @click="exportPosition($event)" @blur="changeData($event,list,'skillName')" v-html="list.skillName"></p>
									<p contenteditable="true" @click="exportPosition($event)" @blur="changeData($event,list,'date')" v-html="list.date" v-if="list.date"></p>
									<operate :item="item.item" :index="i"></operate>
								</div>
								<div class="detailImg" v-for="(detail,j) in list.detail">
									<img :src="item.detailImg" @click="changeImg($event,item,'detailImg')">
									<p class="detail"  contenteditable="true" @click="exportPosition($event)" @blur="changeData($event,list.detail,j)" v-html="detail"></p>
									<operate :item="list.detail" :index="j"></operate>
								</div>
							</div>
						</div>
						</div>
					</div>
				</div>
				<addItem :target="$store.state.resumeBlue.left" :title="title"  :jsonArr="jsonArr" :bgColor="'#1296DB'"></addItem>
			</div>


			<div class="right">
				<div v-for="(item,index) in $store.state.resumeBlue.right">
					<div class="mywork" v-if="item.type=='moreTitle'">
						<div class="bigTitle work" >
							<img :src="item.img" @click="changeImg($event,item,'img')">
							<div class="titleName">	
								<p contenteditable="true"  @click="exportPosition($event)" @blur="changeData($event,item,'text')" v-html="item.text"></p>
								<p contenteditable="true"  @click="exportPosition($event)" @blur="changeData($event,item,'anglish')" v-html="item.english"></p>
							</div>
							<operate :item="$store.state.resumeBlue.right" :index="index"></operate>
						</div>
						<div id="workList">
							<div class="experience" v-for="(list,i) in item.item" > 
								<div class="company" >
									<p contenteditable="true" @click="exportPosition($event)" @blur="changeData($event,list,'company')" v-html="list.company"></p>
									<p contenteditable="true" @click="exportPosition($event)" @blur="changeData($event,list,'date')" v-html="list.date"></p>
									<operate :item="item.item" :index="i"></operate>
								</div>
								<p class="job" contenteditable="true" @click="exportPosition($event)" @blur="changeData($event,list,'job')" v-html="list.job">{{list.job}}</p>
								<div class="detailImg" v-for="(detail,j) in list.detail">
									<img :src="item.detailImg" @click="changeImg($event,item,'detailImg')">
									<p class="detail"  contenteditable="true" @click="exportPosition($event)" @blur="changeData($event,list.detail,j)" v-html="detail"></p>
									<operate :item="list.detail" :index="j"></operate>
								</div>
							</div >
						</div>
					</div>
					<div class="myskill" v-else>
						<div class="bigTitle skill">
							<img :src="item.img" @click="changeImg($event,item,'img')">
							<div class="titleName">	
								<p contenteditable="true"  @click="exportPosition($event)" @blur="changeData($event,item,'text')" v-html="item.text"></p>
								<p contenteditable="true"  @click="exportPosition($event)" @blur="changeData($event,item,'anglish')" v-html="item.english"></p>
							</div>
							<operate :item="$store.state.resumeBlue.right" :index="index"></operate>
						</div>
						<div id="skillList">
						<p class="skillTitle" contenteditable="true"  @click="exportPosition($event)" @blur="changeData($event,item,'title')" v-html="item.title"></p>
						<div id="frontEnd">
							<div class="skills" v-for="(list,i) in item.item" > 
								<div class="itemTitle" >
									<p contenteditable="true" @click="exportPosition($event)" @blur="changeData($event,list,'skillName')" v-html="list.skillName"></p>
									<p contenteditable="true" @click="exportPosition($event)" @blur="changeData($event,list,'date')" v-html="list.date" v-if="list.date"></p>
									<operate :item="item.item" :index="i"></operate>
								</div>
								<div class="detailImg" v-for="(detail,j) in list.detail">
									<img :src="item.detailImg" @click="changeImg($event,item,'detailImg')">
									<p class="detail"  contenteditable="true" @click="exportPosition($event)" @blur="changeData($event,list.detail,j)" v-html="detail"></p>
									<operate :item="list.detail" :index="j"></operate>
								</div>
							</div>
						</div>
						</div>
					</div>
				</div>
				<addItem :target="$store.state.resumeBlue.right" :title="title"  :jsonArr="jsonArr" :bgColor="'#1296DB'"></addItem>
		</div>

</section>
</template>
<script>
import {add,del} from '../api/common'
import operate from './operate'
import addItem from './addItem'

export default{
	props:{
		getOffset:Function,
		changeData:Function,
		changeImg:Function,
		editShow:Function,
		hideAll:Function,
		exportPosition:Function,
		showPhoto:Function
	},
	components:{
		operate,
		addItem
	},
	data(){
		const self=this;
		let jsonArr=[];
		jsonArr.push(JSON.stringify(self.$store.state.resumeBlue.left[0]));
		jsonArr.push(JSON.stringify(self.$store.state.resumeBlue.left[1]));
		return {
			add,
			del,
			title:["多标题","单标题"],
			jsonArr
		}
	}
}
</script>

<style scoped >
section{z-index:15;position:relative;background: #fff;}
section p{min-width:40px;}
.top{
background:#0a557d;
display:table;
width:100%;
color:#fff;
}
.top:after{content:'';display:block;height:0;clear:both}
.personal{
	display:table-cell;
	vertical-align:middle;
	width:25%;
	padding-left:5%;
}
.personal li{
		height:25px;
		line-height:25px;
	}
.personal li img{
		width:24px;
		vertical-align: middle;
	}
.personal li span{
		display: none;
		float: right;
		width: 14px;
		height: 20px;
		text-align: center;
		line-height:20px;
		margin-top: 2.5px;
		font-weight: bold;
		background: #fff;
		border-radius: 50%;
		color:#1296DB;
		font-size:16px;
		margin-left: 2px;
		z-index: 15;
		position: relative;
	}
.personal li p{
		line-height:25px;
		margin-left: 15px;
		float: right;
		margin:0 32px 0 16px;
		width: 128px;
		text-align: left;
		white-space:nowrap;
	}
.personal li p input{
		background:transparent
	}
.personal li:hover span{
		display: block;
	}
.personal li:hover p{
		margin-right:0;
	}
			
.message{
	display:table-cell;
	vertical-align:middle;
	width: 50%;
	text-align: center;
}
.name{
	font-size: 40px;
	font-weight: bold;
}
.profession{
	font-size: 20px;
	font-weight: bold;
}
.photo{
	display:table-cell;
	vertical-align:middle;
	width:25%;
	height:100px;
	text-align:center;
	position:relative;
	
	
}
.photo input{
	position: absolute;
	z-index:20;
	width:40%;
	left:30%;
	height: 100px;
    opacity: 0;
    filter: alpha(opacity=0);
    cursor: pointer;
	}
.photo img{
		width:40%;
		height: 100%;
	}	
#content{
	padding:10px 40px;
}
.top:after,#content:after{content:'';display:block;height:0;clear:both}
.detailImg img{
	float: left;
	width: 20px;
}
.detailImg p{
	overflow: hidden;
}

.detailImg:after{content:'';display:block;height:0;clear:both}

.skillName{
	color:#008080;
	line-height: 25px;
}

.item>div{
	line-height:20px;
	.itemRight{
		float: right;
		margin-right: 20px;
	}
}

.item>div:after{content:'';display:block;height:0;clear:both}

.itemLeft{
	width:130px;
	display:inline-block;
}

.skillName span:last-child{
	float: right;
	color:black;
}

.skillName:after{content:'';display:block;height:0;clear:both}

.left{
	margin:0
}
.left>div:not(:first-child),.right>div:not(:first-child){
	margin-top:10px;
}


.left,.right{
		width:50%;
		padding-right:20px;
		float:left;
	}

.left:after,.right:after{content:'';display:block;height:0;clear:both}

.bigTitle{
	color:#1296DB;
	position: relative;
	
	
	
}
.bigTitle img{
		width: 40px;
		float: left;
		margin-top: 4px;
	}
.bigIcon{
		width: 10%;
		float: left;
	}
.titleName{
		float: left;
		margin-left: 20px;
	}

.titleName p:first-child{
			font-size: 20px;
		}
.titleName p:last-child{
			font-size: 14px;
		}	
.bigTitle:after{content:'';display:block;height:0;clear:both}
.edit{
	display:none;
	position:absolute;
	right:0;
	top:0;
	font-weight:bold;
	border-radius:5px;
}

.edit:after{content:'';display:block;height:0;clear:both}
.detailImg .edit,.company .edit,.itemTitle .edit{background: rgba(140,205,239,1);}
.detailImg,.company,.itemTitle{position:relative;}
.bigTitle:hover .edit,.detailImg:hover .edit,.company:hover .edit,.itemTitle:hover .edit{
	display:block;
}

#workList,#skillList,.projectList{
	border-left:5px solid #1296DB;
	padding-left:20px;
}
.detail{
	font-size: 15px;
}
.company,.skillTitle{
	background: #333;
	padding:0 20px;
	border-radius:5px;
	min-height:20px;
	color:#fff;
}

	.company p:first-child,.skillTitle p:first-child{
		float: left;
		line-height: 20px;
	}

	.company p:nth-of-type(2),.skillTitle p:nth-of-type(2){
		float: right;
		line-height: 20px;
	}
.company:after,.skillTitle:after{content:'';display:block;height:0;clear:both}

.itemTitle{
	min-height:20px;
	color:#008080;
}

.itemTitle p:nth-child{
	float: right;
	line-height: 20px;
}

.itemTitle p:first-child{
	float: left;
	line-height: 20px;
}
.itemTitle:after{content:'';display:block;height:0;clear:both}
.job,.item>div{
	font-weight: bold;
	padding:5px 0;
	color:#0a557d;
}

.resumeBlue:hover .addItem{display: block;}
.resumeBlue{padding-bottom: 20px;}


</style>