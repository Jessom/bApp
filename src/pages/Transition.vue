<template>
  <div id="app">
    <x-header
      :left-options='{backText:"",showBack:showBack,preventGoBack:true}'
      :title='title'
      :class='{"show-back":showBack}'
      @on-click-back='back' />
    <transition :name='transitionName'>
      <keep-alive>
        <router-view class='child-view'></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import { XHeader } from 'vux'
import { mapState } from 'vuex'
export default {
  name: 'App',
  data() {
    return {
      transitionName: 'slide-left'
    }
  },
  watch: {
    '$route'(to, from) {
      /*
        let isBack = this.$router.isBack
        this.transitionName = isBack ? 'slide-right' : 'slide-left'
        this.$router.isBack = false
       */
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  computed: {
    ...mapState({
      title: state => state.mutations.title,
      showBack: state => state.mutations.showBack
    })
  },
  methods: {
    back() {
      this.$router.goBack()
    }
  },
  components: {
    XHeader
  }
}
</script>

<style lang='less'>
@import '~vux/src/styles/reset.less';
.child-view {
	position: absolute;
	width: 100%;
  transition: all .5s cubic-bezier(.55, 0, .1, 1);
  padding-top: 23px;
  padding-bottom: 80px;
}
.slide-left-enter, .slide-right-leave-active {
	opacity: 0;
	-webkit-transform: translate(50px, 0);
	transform: translate(50px, 0);
}
.slide-left-leave-active, .slide-right-enter {
	opacity: 0;
	-webkit-transform: translate(-50px, 0);
	transform: translate(-50px, 0);
}
#app {
  .vux-header {
    .vux-header-title {
      margin: 0 88px 0 15px;
      text-align: left;
      overflow: hidden;
      line-height: 44px;
    }
    &.show-back .vux-header-title {
      margin: 0 88px 0 40px;
    }
  }
  .vux-header {
    position: fixed;
    width: 100%;
    z-index: 10;
    top: 0;
  }
}
</style>
