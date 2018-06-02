<template>
	<div class="container">
		<button @click='back'>back</button>
	</div>
</template>

<script>
import { SET_BACK } from '@/store/types'
export default {
	name: 'personal',
	created() {
		this.$store.commit(SET_BACK, false)
	},
	methods: {
		back() {
			this.$router.goBack()
		}
	}
}
</script>

<style lang='less'>
.container {

}
</style>
