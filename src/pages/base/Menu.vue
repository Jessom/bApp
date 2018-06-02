<template>
	<div class="container">
		<grid :show-lr-borders="false" :show-vertical-dividers="false">
      <grid-item label="入职">
        <icon slot="icon" type="success"></icon>
      </grid-item>
      <grid-item label="客户">
        <icon slot="icon" type="info"></icon>
      </grid-item>
      <grid-item label='通讯录'>
        <icon slot="icon" type="warn"></icon>
      </grid-item>
      <grid-item label='考勤'>
        <icon slot="icon" type="warn"></icon>
      </grid-item>
    </grid>
	</div>
</template>

<script>
import { Icon, Grid, GridItem } from 'vux'
import { SET_BACK } from '@/store/types'
export default {
	name: 'menuwarp',
  created() {
    this.$store.commit(SET_BACK, false)
  },
	components: {
		Grid,
		GridItem,
		Icon
	}
}
</script>

<style lang='less'>
.container {

}
</style>
