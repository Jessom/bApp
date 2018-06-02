<template>
  <div class="hello">
    <swiper auto loop height="100px">
      <swiper-item class="black"><h2 class="title fadeInUp animated">它无孔不入</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">你无处可藏</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">不是它可恶</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">而是它不懂你</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">我们试图</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">做些改变</h2></swiper-item>
    </swiper>
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
import { Swiper, SwiperItem, Icon, Grid, GridItem } from 'vux'
import { SET_BACK } from '@/store/types'
export default {
  name: 'index',
  methods: {
    jump() {
      this.$router.push({ path: '/personal' })
    }
  },
  created() {
    this.$store.commit(SET_BACK, false)
  },
  components: {
    Swiper,
    SwiperItem,
    Icon,
    Grid,
    GridItem
  }
}
</script>

<style scoped>
.black {
  background-color: #000;
  color: #fff;
  text-align: center;
  line-height: 100px;
}
</style>
