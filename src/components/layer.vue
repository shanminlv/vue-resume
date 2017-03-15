<template>
	<div class="layer" >
		<div class="pop">
			<p >{{$store.state.layer.text}}</p>
			<span class="btn  btn-lg btn-primary" @click="operate(false)">取消</span>
			<span class="btn  btn-lg btn-primary" @click="operate(true)">确定</span>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return {}
	},
	methods:{
		operate(bool){
			this.$store.commit("operate",bool);
			this.$store.commit("layer",false)
		}
	}
}
</script>
<style scoped>
.layer{z-index: 30;position: fixed;width: 100%;height: 100%;background-color: rgba(0,0,0,.4);left: 0;top: 0;}
.pop{width: 400px;height: 260px;background-color: #fff;text-align: right;position: absolute;transform: translate(-50%);left: 50%;top: 30%;border-radius: 10px;}
.pop p{font-size: 20px;height:200px;text-align: center;color: #000;width: 100%;line-height:200px;}
.btn{margin-right: 10px;}
</style>