<template>
	<section @click="hideAll" class="resumeAroud">
		<div class="left">
			<div class="photo">
				<input type="file" @click.stop="" @change="showPhoto($event,$store.state.resumeAroud.left,'img')">
				<img :src="$store.state.resumeAroud.left.img"  alt="" >
			</div>
			<p class="name" v-html="$store.state.resumeAroud.left.name"  contenteditable="true" @click="exportPosition($event)" @blur="changeData($event,$store.state.resumeAroud.left,'name')" ></p>
			<p class="job" v-html="$store.state.resumeAroud.left.job"  contenteditable="true" @click="exportPosition($event)" @blur="changeData($event,$store.state.resumeAroud.left,'job')" ></p>
			<ul class="msg">
				<li  v-for="(item,index) in $store.state.resumeAroud.left.msg">
					<img :src="item[0]" alt="" @click="changeImg($event,item,0)">
					<p v-html="item[1]"  contenteditable="true" @click="exportPosition($event)" @blur="changeData($event,item,1)" ></p>
					<operate :item="$store.state.resumeAroud.left.msg" :index="index" :class="{hided:$store.state.isHided}"></operate>
				</li>
			</ul>
			<p class="certificate" v-html="$store.state.resumeAroud.left.certificate.title"  contenteditable="true" @click="exportPosition($event)" @blur="changeData($event,$store.state.resumeAroud.left.certificate,title)" ></p>
			<ul class="certList msg">
				<li  v-for="(item,index) in $store.state.resumeAroud.left.certificate.list">
					<img :src="item[0]" alt=""  @click="changeImg($event,item,0)">
					<p v-html="item[1]"  contenteditable="true" @click="exportPosition($event)" @blur="changeData($event,item,1)" ></p>
					<operate :item="$store.state.resumeAroud.left.certificate.list" :index="index" :class="{hided:$store.state.isHided}"></operate>
				</li>
			</ul>
			<p class="certificate" v-html="$store.state.resumeAroud.left.hobby.title"  contenteditable="true" @click="exportPosition($event)" @blur="changeData($event,$store.state.resumeAroud.left.hobby,'title')" ></p>
			<ul class="hobby">
				<li  v-for="(item,index) in $store.state.resumeAroud.left.hobby.list">
					<img :src="item[0]" alt=""  @click="changeImg($event,item,0)">
					<p v-html="item[1]"  contenteditable="true" @click="exportPosition($event)" @blur="changeData($event,item,1)" ></p>
					<operate :item="$store.state.resumeAroud.left.hobby.list" :index="index" :class="{hided:$store.state.isHided}"></operate>
				</li>
			</ul>
		</div>
		<div class="right">
			<div class="item" v-for="(item,index) in $store.state.resumeAroud.right">
				<div class="big"  v-if="item.type=='title'">
					<div class="title">
						<img :src="item.img" alt=""  @click="changeImg($event,item,'img')">
						<p class="text" v-html="item.text"  contenteditable="true" @click="exportPosition($event)" @blur="changeData($event,item,'text')" ></p>
						<operate :item="$store.state.resumeAroud.right" :index="index" :class="{hided:$store.state.isHided}"></operate>
					</div>
					<div class="content" v-for="(list,i) in item.list">
						<div class="listTitle">
							<p v-html="list.date"  contenteditable="true" @click="exportPosition($event)" @blur="changeData($event,list,'date')" ></p>
							<p v-html="list.organization" contenteditable="true" @click="exportPosition($event)" @blur="changeData($event,list,'organization')" ></p>
							<p v-html="list.job"  contenteditable="true" @click="exportPosition($event)" @blur="changeData($event,list,'job')" ></p>
							<operate :item="item.list" :index="i" :class="{hided:$store.state.isHided}"></operate>
						</div>
						<div class="detail" >
							<div class="list" v-for="(detail,j) in list.detail">
								<p  v-html="detail"  contenteditable="true" @click="exportPosition($event)" @blur="changeData($event,list.detail,j)" ></p>
								<operate :item="list.detail" :index="j" :class="{hided:$store.state.isHided}"></operate>
							</div>
						</div>
					</div>
				</div>
				<div class="small" v-else>
					<div class="title">
						<img :src="item.img" alt=""  @click="changeImg($event,item,'img')">
						<p class="text" v-html="item.text"  contenteditable="true" @click="exportPosition($event)" @blur="changeData($event,item,'text')" ></p>
						<operate :item="$store.state.resumeAroud.right" :index="index" :class="{hided:$store.state.isHided}"></operate>
					</div>
					<div class="content detail" >
						<div class="list" v-for="(detail,j) in item.detail">
							<p v-html="detail" contenteditable="true" @click="exportPosition($event)" @blur="changeData($event,item.detail,j)" ></p>
							<operate :item="item.detail" :index="j" :class="{hided:$store.state.isHided}"></operate>
						</div>
					</div>
				</div>
			</div>
			<addItem :target="$store.state.resumeAroud.right" :title="title"  :jsonArr="jsonArr" :bgColor="'#2F4E9E'"></addItem>
		</div>
	</section>
</template>
<script>
import operate from './operate'
import addItem from './addItem'

export default {
	props:{
		getOffset:Function,
		changeData:Function,
		changeImg:Function,
		editShow:Function,
		hideAll:Function,
		exportPosition:Function,
		showPhoto:Function
	},
	data(){
		let jsonArr=[];
		jsonArr.push(JSON.stringify(this.$store.state.resumeAroud.right[0]));
		jsonArr.push(JSON.stringify(this.$store.state.resumeAroud.right[1]));
		return {
			title:["小标题","无标题"],
			jsonArr
		}
	},
	components:{
		operate,
		addItem
	}
}
</script>
<style scoped>
section {background: #fff;width: 1000px;margin:0 auto;overflow: hidden;}
.left{
	background: #2F4E9E;
	float: left;
	width: 250px;
	text-align: center;
	padding: 10px;
	color:#fff;
	margin-top: 0;
	margin-bottom: -2000px;
	padding-bottom: 2000px;
}
.photo{margin: 30px auto;width: 150px;position: relative;}
.photo img{width: 100%;}
.photo input{position: absolute;left: 0;top:0;width: 100%;height: 100%;opacity: 0;}
.job{font-size: 18px;}
ul{margin:0;}
.item{margin-bottom:20px;}
.name{font-size: 22px;margin-bottom: 10px;}
.msg{margin-top: 20px;}
.msg li{text-align: left;margin-bottom: 10px;width: 100%;}
.msg li img{height: 20px;width: 20px;float: left;}
.msg li p{font-size: 15px;overflow: hidden;line-height: 22px;margin-left:24px;}
.certificate{font-size: 16px;margin-top: 20px;}
.certList,.hobby{margin-top: 5px}
.hobby{text-align: left;}
.hobby li{display: inline-block;width: 33.3%;font-size: 0;text-align: center;vertical-align: top;}
.hobby img{margin-bottom: 15px;width: 30px;}
.content{padding:15px 0 0 30px;color: #000;}
.hobby p{font-size: 16px;}
.right{overflow: hidden;float: none;padding: 15px;color:#2F4E9E;}
.title img{float: left;width: 30px;height: 30px;}
.text{font-size: 24px;line-height: 30px;border-bottom: 2px solid #2F4E9E;overflow: hidden;}
.listTitle{height: 20px;font-size: 0px;line-height: 20px;}
.listTitle p{display: inline-block;width: 33.3%;text-align: center;font-size: 15px;}
.listTitle p:first-child{text-align: left;}
.detail p{font-size: 16px;margin-top: 5px;}
.edit.hided{display: none!important;}
.edit{
	display:none;
	position:absolute;
	right:0px;
	top:0;
	font-weight:bold;
	border-radius:5px;
	transition: all 3s ease-in;
}
.edit:after{content: "";display: block;clear:both;width: 0;}
.msg li .edit,.title .edit,.list .edit,.hobby li .edit,.listTitle .edit{background: rgba(140,205,239,1);}
.msg li,.title,.list,.listTitle{position:relative;}
.msg li:hover .edit,.title:hover .edit,.list:hover .edit,.hobby li:hover .edit,.listTitle:hover .edit  {
	display:block;
}

.hobby li{position: relative;}
.hobby li .edit{
	display:none;
	position:absolute;
	right:0;
	top:-20px;
	height: 20px;
	font-weight:bold;
	border-radius:5px;
}
.resumeAroud:hover .addItem{display: block;}
.resumeAroud{padding-bottom: 20px;}
</style>

