<template>
	<div class="container">
		<h1>detail</h1>
	</div>
</template>

<script>
import { SET_BACK, SET_TITLE } from '@/store/types'
export default {
	name: 'detail',
	created() {
		this.$store.commit(SET_BACK, true)
		this.$store.commit(SET_TITLE, '详情')
	}
}
</script>

<style lang='less'>
.container {

}
</style>
