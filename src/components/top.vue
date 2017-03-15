<template>
	<section class="top">
		<a @click="linkTo('resume')" class="btn  btn-lg btn-default" :class="{'btn-primary':route=='resume'}">{{myResume}}</a>
  	<a @click="linkTo('edit')" class="btn  btn-lg btn-default" :class="{'btn-primary':route=='edit'}">{{selectModule}}</a>
	</section>
</template>
<script>
export default {
  data () {
    return {
  		myResume: '命名视图',
  		selectModule: '选择模板',
  	}
  },
  computed:{
    route:function(){
      return this.$route.path.split('/')[1];
    }
  },
  methods:{
      linkTo(router){
        this.$store.commit('editShow',false);
        this.$store.commit('isShow',false);
        this.$store.commit('iconHide',false);
        this.$router.push(this.$store.state.storage[router].router);
      }
  }
}
</script>
<style  scoped>
	.top{text-align: center;width: 100%;background:#fff;position: fixed;left: 0;top: 0;border-bottom: 1px solid #888;z-index: 20;min-width: 1200px;}
	.top a{
    margin:10px 10px;
  }
  .top.btn-primary{
    color: #fff;
    background-color: #428bca;
    border-color: #357ebd;
  }
</style>