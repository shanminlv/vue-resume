<template>
  <div id="app">
    <Top></Top>
    <router-view name="left"></router-view>
    <router-view name="selectResume"></router-view>
    <router-view name="wrapper"></router-view>
    <Editor></Editor> 
    <Icon></Icon>
    <Layer v-if="$store.state.layer.show" ></Layer>
    <div class="pop" v-show="$store.state.isShow" @click="hide"></div>
  </div>
</template>

<script>
import Top from './top'
import Editor from './editor'
import Comunication from './comunication'
import Icon from './icon'
import Layer from './layer'


export default {
  name: 'app',
  data(){
   return {
            
    }
  },
  components: {
    Top,
    Editor,
    Icon,
    Layer
  },
  methods:{
    hide(){
      this.$store.commit('isShow',false);
      this.$store.commit('editShow',false);
      this.$store.commit('iconHide');
      Comunication.$emit('hide');
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  min-width: 1200px;
}
.pop{width: 100%;height: 100%;position: fixed;left: 0;top:0;z-index: 10;background: rgba(0,0,0,.4);}
</style>
