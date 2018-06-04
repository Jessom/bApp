import Vue from 'vue'
import Router from 'vue-router'

Router.prototype.goBack = function() {
	this.isBack = true
	window.history.go(-1)
}

Vue.use(Router)
export default new Router({
	scrollBehavior(to, from, savedPosition) {
		if(savedPosition) {
			return savedPosition
		} else {
			return { x: 0, y: 0 }
		}
	},
  routes: [{
		path: '/',
		component: resolve => require(['@/pages/Transition.vue'], resolve),
		children: [{
			path: '',
			component: resolve => require(['@/pages/base/Container.vue'], resolve),
			children: [{
				path: '',
				name: '首页',
				component: resolve => require(['@/pages/base/Index.vue'], resolve)
			}, {
				path: 'menu',
				name: '菜单',
				component: resolve => require(['@/pages/base/Menu.vue'], resolve)
			}, {
				path: 'personal',
				name: '我的',
				component: resolve => require(['@/pages/base/Personal.vue'], resolve)
			}]
		}, {
			path: 'detail/:id',
			name: 'detail',
			component: resolve => require(['@/pages/Detail.vue'], resolve)
		}]
  }, {
		path: '*',
		name: '404',
		component: resolve => require(['@/pages/404.vue'], resolve)
	}]
})
