// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import routes from './router/router'
import App from './components/App'
import state from './vuex/state.js'
import action from './vuex/action.js'
import mutations from './vuex/mutations.js'
import './css/reset.css'
import './css/common.scss'
import './css/zxbj_base.css'
import './js/jquery.bigcolorpicker'
import './js/resume'
import './js/tips'



Vue.use(Vuex)
Vue.use(VueRouter)

const router = new VueRouter({
	routes
});


const store = new Vuex.Store({
	state,
	action,
	mutations
})

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})



