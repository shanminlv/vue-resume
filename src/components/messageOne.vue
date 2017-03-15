<template>
<section >
	<div  class="top" @click="exportPosition" id="top" :style="{zIndex:zIndex}">
		<ul class="personal" >
			<li class="personalList" v-for="(item,index) in photoData">
				<img :src="item[0]" ref="img" @click="changeImg(index)">
				<span @click.stop="add(index)">+</span>
				<span @click.stop="del(index)">-</span>
				<p contenteditable="true" @blur="changeData($event,'photoData',index)">{{item[1]}}</p>
			</li>
		</ul>
		<div class="message">
			<p class="name" contenteditable="true">{{name}}</p>
			<p class="profession" contenteditable="true">{{profession}}</p>
		</div>
		<div class="photo">
			<input type="file" @change="showPhoto($event)">
			<img :src="submitImg" ref="head" alt="" >
		</div>
	</div>
	<div id="content">
			<div class="left">
				<div class="mywork" >
					<div class="bigTitle work" >
						<div class="titleName">	
							<p>工作经验</p>
							<p>Work Experience</p>
						</div>
					</div>
					<div id="workList">
						<div class="experience" v-for="(item,index) in resume.workExperience" > 
							<p class="company">{{item.company}}<span>{{item.date}}</span></p>
							<p class="job">{{item.job}}</p>
							<p class="detail" v-for="(list,i) in item.detail">{{list}}</p>
						</div >
					</div>
				</div>
				<div class="myskill">
					<div class="bigTitle skill">
						<div class="titleName">	
						<p>技能</p>
							<p>My Skills</p>
						</div>
					</div>
					<div id="skillList">
					<p class="skillTitle">WEB 前端</p>
					<div id="frontEnd">
						<div class="skills" v-for="(item,index) in resume.frontEnd" > 
							<p class="skillName">{{item.skillName}}</p>
							<p class="listDetail" v-for="(list,i) in item.listDetail">{{list}}</p>
						</div>
					</div>
					<p class="skillTitle">其他</p>
					<div id="otherSkill">
						<div class="otherSkill" v-for="(item,index) in resume.otherSkill">
							<p>{{item}}</p>
						</div>
					</div>
					</div>
				</div>
			</div>
			<div class="right">
				<div class="projectBig">
					<div class="bigTitle project">
						<div class="titleName">	
							<p>项目经验</p>
							<p>Project Experience</p>
						</div>
					</div>
					<div class="projectList">
						<p class="skillTitle">我的项目</p>
						<div id="projectList">
							<div class="item" v-for="(item,index) in resume.project">
								<div>
									<span class="itemLeft">{{item.name}}</span>
									<a :href="item.code" class="itemRight">源代码</a>
									<a :href="item.demo" class="itemRight">实例</a>
									<span class="itemRight">{{item.time}}</span>
								</div>
								<p class="itemDetail" v-for="(list,i) in item.detail">{{list}}</p>
							</div>
						</div>
					</div>
				</div>
				<div class="schoolBig">
					<div class="bigTitle school">
						<div class="titleName">	
							<p>校园经历</p>
							<p>school Experience</p>
						</div>
					</div>
					<div class="projectList">
						<p class="skillTitle">我的实践</p>
						<div id="school">
							<div class="skills" v-for="(item,index) in resume.schoolExperience" > 
								<p class="skillName"><span>{{item.skillName}}</span><span>{{item.date}}</span></p>
								<p class="schoolIcon" v-for="(list,i) in item.listDetail">{{list}}</p>
							</div>
						</div>
						<p class="skillTitle">其他</p>
						<div id="otherSchool">
							<div class="otherSkill" v-for="(item,index) in resume.otherSchool">
								<p class="schoolIcon">{{item}}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
</section>
</template>
<script>
import Comunication from './comunication'
import resume from '../json/messageOne.json'
let photoSrc=['email','wechat','github','telephone','school'];
let msg=['ddd','hhh','jjj','mmmmmmmmmmmmm','fff','aaa'];
let photoData=[];
photoSrc.forEach(function(value,index){
	let data=require('../images/white/'+value+'.png');
	let arr=[data,msg[index]]
	photoData.push(arr);
})
let head=require('../images/white/comunity.png');


export default{
	props:{
		getOffset:Function
	},
	data(){
		const self=this;
		Comunication.$on('hide',function () {
			if(self.zIndex==15){
				self.zIndex=5
			}
		})
		Comunication.$on('imgData',function (val) {
			if(val.target!='messageOne')return;
			self.photoData[self.imgIndex].splice(0,1,val.data);
		})
		return {
			photoData,
			resume,
			zIndex:5,
			name:'ddd',
			profession:'ddd',
			imgIndex:0,
			submitImg:head
		}
	},
	methods:{
		exportPosition(){
			let position={
				top:this.getOffset(this.$el).top-this.$el.offsetHeight-30,
				left:this.getOffset(this.$el).left
			}
			this.zIndex=15;
			this.$store.commit('isShow',true)
			Comunication.$emit('position', position)
		},
		add(index){
			this.photoData.splice(index+1,0,[this.photoData[0][0],'详情'])
		},
		del(index){
			this.photoData.splice(index,1);
		},
		changeImg(index){
			const self=this;
			self.imgIndex=index;
			let obj={
				top:self.getOffset(self.$refs.img[index]).top-50,
				left:self.getOffset(self.$refs.img[index]).left+50,
				show:true
			};
			self.$store.commit('iconPosition',obj)
		},
		changeData(event,target,index){
			this[target][index][1]=event.srcElement.innerHTML;
		},
		showPhoto(event){
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
				self.$refs.head.src = this.result;
			}
		}
	}
}
</script>

<style scoped lang="scss">
@mixin clearfix{
	&:after{content:'';display:block;height:0;clear:both;}
}

$blue:#1296DB;
$gray:#333;
$white:#fff;
$listpx:15px;
@mixin back($value) {
	background:url($value) no-repeat;
	background-size:20px 20px;
	background-position:0 1px;
	padding-left:30px;
	font-size: $listpx;
}
@mixin titleIcon($val){
	background:url(../images/#{$val}.png) no-repeat;
	background-size:30px 30px;
	background-position:0 8px;
	padding-left:30px;
}

@each $src in 'work','skill','project','school'{
	.#{$src}{
		@include titleIcon($src);
	}
}
$blue:#1296DB;
.top{
background:darken($blue,10%);
display:table;
width:100%;
color:#fff;
&:after{content:'';display:block;height:0;clear:both}
.personal{
	display:table-cell;
	vertical-align:middle;
	width:25%;
	padding-left:5%;
	li{
		height:25px;
		line-height:25px;
	}
	li img{
		width:24px;
		vertical-align: middle;
	}
	li p{
		line-height:25px;
		margin-left: 15px;
		float: right;
		margin:0 32px 0 16px;
		width: 128px;
		text-align: left;
		white-space:nowrap;
	}
	li span{
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
		color:$blue;
		font-size:16px;
		margin-left: 2px;
		z-index: 15;
		position: relative;
	}
	li:hover span{
		display: block;
	}
	li:hover p{
		margin-right:0;
	}
	li p input{
		background:transparent
	}
}
.message{
	display:table-cell;
	vertical-align:middle;
	width: 50%;
	text-align: center;
	.name{
		font-size: 40px;
		font-weight: bold;
	}
	.profession{
		font-size: 20px;
		font-weight: bold;
	}
}
.photo{
	display:table-cell;
	vertical-align:middle;
	width:25%;
	height:100px;
	text-align:center;
	position:relative;
	input{
	position: absolute;
	z-index:20;
	width:40%;
	left:30%;
	height: 100px;
    opacity: 0;
    filter: alpha(opacity=0);
    cursor: pointer;
	}
	img{
		width:40%;
		height: 100%;
	}
}
}

#content{
	padding:10px 40px;
	@include clearfix;
}


.skillName{
	color:#008080;
	line-height: 25px;
}
.listDetail{
	@include back('../images/skillDetail.png');
}

#skillList{@extend #workList}
.skillTitle{@extend .company}
.otherSkill p{
	@extend .listDetail;
}


.projectList{
	@extend #workList;
}
.item>div{
	@include clearfix;
	@extend .job;
	line-height:20px;
	.itemRight{
		float: right;
		margin-right: 20px;
	}
}
.itemDetail{
	@include back('../images/item.png');
}

.projectBig a{
	&[href=""]{
		visibility: hidden;
	}
	cursor: pointer;
	background:url(../images/link.png) no-repeat;
	background-size:15px 15px;
	background-position:0 1px;
	padding-left:20px;
}

.itemLeft{
	width:130px;
	display:inline-block;
}

.schoolBig .schoolIcon{
	@include back('../images/practice.png');
}
.skillName span:last-child{
	float: right;
	color:black;
}

.skillName {
	@include clearfix;
}


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
		@include clearfix;
	}

.bigTitle{
	@include clearfix;
	color:$blue;
	.bigIcon{
		width: 10%;
		float: left;
	}
	.titleName{
		float: left;
		margin-left: 20px;
		p:first-child{
			font-size: 20px;
		}
		p:last-child{
			font-size: 14px;
		}
	}
}

#workList{
	border-left:5px solid $blue;
	padding-left:20px;
}
.detail{
	font-size: $listpx;
}
.company{
	background: $gray;
	padding:0 20px;
	border-radius:5px;
	color:#fff;
	span{
		float: right;
		line-height: 24px;
	}
}
.job{
	font-weight: bold;
	padding:5px 0;
	color:darken($blue,20%);
}
.detail{
	@include back('../images/workDetail.png');
}



</style>