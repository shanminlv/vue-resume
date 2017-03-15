import resumeBlue from '../json/resumeBlue.json'
import resumeAroud from '../json/resumeAroud.json'
import {copy} from '../api/common'

resumeBlue.top.msg.forEach(function (value) {
	value[0]=require('../images/'+value[0]);
})

resumeBlue.left.forEach(function (value) {
	value.img=require('../images/'+value.img);
	value.detailImg=require('../images/'+value.detailImg);
})

resumeBlue.right.forEach(function (value) {
	value.img=require('../images/'+value.img);
	value.detailImg=require('../images/'+value.detailImg);
})

resumeBlue.top.photo=require('../images/'+resumeBlue.top.photo);

resumeAroud.left.img=require('../images/'+resumeAroud.left.img);

resumeAroud.left.msg.forEach(function(value){
	value[0]=require('../images/'+value[0]);
})

resumeAroud.left.certificate.list.forEach(function(value){
	value[0]=require('../images/'+value[0]);
})

resumeAroud.left.hobby.list.forEach(function(value){
	value[0]=require('../images/'+value[0]);
})

resumeAroud.right.forEach(function(value){
	value.img=require('../images/'+value.img);
})



export default {
	isShow:false,
	iconPosition:{
		left:250,
		top:300,
		item:'',
		index:'',
		show:false
	},
	resumeModule:'resumeBlue',
	editShow:false,
	resumeBlue,
	resumeAroud,
	storeData:{
		resumeBlue:JSON.stringify(resumeBlue),
		resumeAroud:JSON.stringify(resumeAroud)
	},
	addButton:true,
	isHided:false,
	layer:{
		text:"请确认是否删除该简历？",
		show:false
	},
	operate:false,
	storage:{
		edit:{
			router:"/edit/resumeBlue",
			resumeBlue:copy(resumeBlue),
			resumeAroud:copy(resumeAroud)
		},
		resume:{
			router:"/resume/resumeBlue",
			index:-1,
		}
	},
	wrapperShow:true,
	resumeName:''
}
