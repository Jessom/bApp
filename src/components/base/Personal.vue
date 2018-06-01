<template>
	<div class="container">
		<button @click='back'>back</button>
	</div>
</template>

<script>
export default {
	name: 'personal',
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
