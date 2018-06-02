<template>
  <div class="container">
    <swiper auto loop height="100px">
      <swiper-item class="black"><h2 class="title fadeInUp animated">它无孔不入</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">你无处可藏</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">不是它可恶</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">而是它不懂你</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">我们试图</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">做些改变</h2></swiper-item>
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
      list: [{
        id: 1,
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '谷歌在中国推出第二款应用：Google文件极客',
        desc: '谷歌今日在中国多家应用商店推出文件管理工具Files Go中文版Google文件极客，这是自谷歌主要服务退出中国市场之后推出的第二个面向中国市场的App。'
      }, {
        id: 2,
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '今日头条腾讯再掀口水仗百度躺枪',
        desc: '腾讯和今日头条在短视频领域的纠葛还未结束，战火便迅速烧到了其他领域。'
      }, {
        id: 3,
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '软银将向通用汽车（GM）旗下 Cruise投资22.5亿美元',
        desc: '通用汽车（GM）周四表示，日本软银将向GM旗下无人驾驶车公司Cruise Holdings投资22.5亿美元。'
      }, {
        id: 4,
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '滴滴：新版紧急求助功能上线，快车人车不符可举报',
        desc: '滴滴宣布，新版紧急求助功能已正式上线；快车已上线人车不符评价机制；快车已在部分城市上线每天出车前司机人脸识别功能，将尽快做到快车、专车、豪华车全量上线；平台已研发并上线大数据识别模型，对识别出的人车不符进行核查，一经核实马上封禁。'
      }, {
        id: 5,
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '百度回应输入法植入广告: 不是官方版本',
        desc: '5月31日消息，针对微博网友质疑百度手机输入法根据用户输入推送相应广告的质疑'
      }]
    }
  },
  methods: {
    itemClick(item) {
      console.log(item)
      this.$router.push({ path: `/detail/${item.id}` })
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
    line-height: 100px;
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
