import Vue from 'vue'
import Router from 'vue-router'

Router.prototype.goBack = function() {
	this.isBack = true
	window.history.go(-1)
}

Vue.use(Router)
export default new Router({
  routes: [{
		path: '/',
		component: resolve => require(['@/components/Transition.vue'], resolve),
		children: [{
			path: '',
			name: 'basecontainer',
			component: resolve => require(['@/components/base/Container.vue'], resolve),
			children: [{
				path: '',
				name: '首页',
				component: resolve => require(['@/components/base/Index.vue'], resolve)
			}, {
				path: 'menu',
				name: '菜单',
				component: resolve => require(['@/components/base/Menu.vue'], resolve)
			}, {
				path: 'personal',
				name: '我的',
				component: resolve => require(['@/components/base/Personal.vue'], resolve)
			}]
		}]
  }]
})
