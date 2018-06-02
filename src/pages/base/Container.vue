<template>
	<div class="container">
		<router-view></router-view>
		<tabbar @on-index-change='change'>
			<tabbar-item :selected='selected==="/"'>
				<i slot="icon" class='fa fa-home'></i>
				<span slot="label">首页</span>
			</tabbar-item>
			<tabbar-item badge="2" :selected='selected==="/menu"'>
				<i slot="icon" class='fa fa-windows'></i>
				<span slot="label">菜单</span>
			</tabbar-item>
			<tabbar-item show-dot :selected='selected==="/personal"'>
				<i slot="icon" class='fa fa-user'></i>
				<span slot="label">我的</span>
			</tabbar-item>
		</tabbar>
	</div>
</template>

<script>
import { Tabbar, TabbarItem, Icon } from 'vux'
import { SET_TITLE } from '@/store/types'
export default {
	name: 'basecontainer',
	computed: {
		selected() {
			this.$store.commit(SET_TITLE, this.$route.name)
			return this.$route.path
		}
	},
	methods: {
		change(val) {
			let p = val === 0 ? '/' : (val === 1 ? '/menu' : '/personal')
			this.$router.replace({ path: p })
		}
	},
	components: {
		Tabbar,
		TabbarItem,
		Icon
	}
}
</script>

<style lang='less'>
.container {
	.weui-tabbar {
		position: fixed;
	}
}
</style>
