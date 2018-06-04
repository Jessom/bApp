<template>
	<div class="container">
		<blockquote class="desc" v-text='data.desc'></blockquote>
		<div class='content' v-html='data.content'>
		</div>
	</div>
</template>

<script>
import { SET_BACK, SET_TITLE } from '@/store/types'
export default {
	name: 'detail',
	data() {
		return {
			data: {}
		}
	},
	created() {
		this.$store.commit(SET_BACK, true)
	},
	methods: {
		async getData() {
			let id = this.$route.params.id
			try {
				this.$Progress.start()
				const res = await this.$http.get(`static/data/news.json`)
				for(let item of res) {
					if(item.id === Number(id)) {
						this.$store.commit(SET_TITLE, item.title)
						this.data = item
					}
				}
				this.$Progress.finish()
			} catch(e) {
				console.log(e)
				this.$Progress.fail()
			}
		}
	},
	activated() {
		this.getData()
	}
}
</script>

<style lang='less'>
.container {
	.content {
		padding: 15px;
		p {
			color: #666;
			line-height: 1.8;
			margin-top: 10px;
			font-size: 13px;
		}
		img {
			width: 100%;
		}
	}
	.desc {
		margin: 15px 15px 0 15px;
		padding: 10px;
		background-color: #f7f7f7;
		border-left: 2px solid #35495e;
		font-size: 13px;
		color: #636363;
		line-height: 1.8;
	}
}
</style>
