<template>
  <div class="container">
    <swiper auto loop :interval='5000' height="140px">
      <swiper-item class="black">
        <h2 class="title fadeInUp animated">きみとなつのおわりしょうらいのゆめ</h2>
        <p>与你在夏末约定 将来的梦想</p>
      </swiper-item>
      <swiper-item class="black">
        <h2 class="title fadeInUp animated">おおきなきぼうわすれない</h2>
        <p>远大的希望 别忘记</p>
      </swiper-item>
      <swiper-item class="black">
        <h2 class="title fadeInUp animated">じゅうねんごのはちげつ</h2>
        <p>在十年后的八月</p>
      </swiper-item>
      <swiper-item class="black">
        <h2 class="title fadeInUp animated">またであえるのをしんじて</h2>
        <p>我相信还能再与你相遇</p>
      </swiper-item>
      <swiper-item class="black">
        <h2 class="title fadeInUp animated">さいこうのおもいでを…</h2>
        <p>最美好的回忆...</p>
      </swiper-item>
    </swiper>
    <grid
      :show-lr-borders="false"
      class='menu-group'
      :show-vertical-dividers="false">
      <grid-item label="热门">
        <i slot="icon" class="fa fa-fire hot" aria-hidden="true"></i>
      </grid-item>
      <grid-item label="推荐">
        <i slot="icon" class="fa fa-paper-plane reco" aria-hidden="true"></i>
      </grid-item>
      <grid-item label='最新'>
        <i slot="icon" class="fa fa-quote-right new" aria-hidden="true"></i>
      </grid-item>
    </grid>
    <panel
      header="今日推荐"
      :list="list"
      type="1"
      @on-click-item="itemClick" />
  </div>
</template>

<script>
import { Swiper, SwiperItem, Icon, Grid, GridItem, Panel } from 'vux'
import { SET_BACK } from '@/store/types'
export default {
  name: 'index',
  data() {
    return {
      list: []
    }
  },
  methods: {
    itemClick(item) {
      this.$router.push({ path: `/detail/${item.id}` })
    },
    async getData() {
      try {
        const res = await this.$http.get(`static/data/news.json`)
        this.list = res.map(c => {
          return {
            id: c.id,
            src: c.image,
            title: c.title,
            desc: c.desc
          }
        })
      } catch(e) {
        console.log(e)
      }
    }
  },
  created() {
    this.$store.commit(SET_BACK, false)
    this.getData()
  },
  components: {
    Swiper,
    SwiperItem,
    Icon,
    Grid,
    GridItem,
    Panel
  }
}
</script>

<style lang='less'>
.container {
  .black {
    background-color: #000;
    color: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .menu-group {
    background-color: #fff;
  }
  .weui-grid__icon {
    text-align: center;
    font-size: 22px;
  }
  .hot {
    color: #F56C6C;
  }
  .reco {
    color: #67C23A;
  }
  .new {
    color: #E6A23C;
  }
}
</style>
