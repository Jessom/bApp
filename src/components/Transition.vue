<template>
  <div id="app">
    <x-header
      :left-options='{backText:"",showBack:false,preventGoBack:true}'
      :title='title'
      @on-click-back='back' />
    <transition :name='transitionName'>
      <router-view class='child-view'></router-view>
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
  computed: {
    ...mapState({
      title: state => state.mutations.title
    })
  },
  beforeRouteUpdate(to, from, next) {
    let isBack = this.$router.isBack
    this.transitionName = isBack ? 'slide-right' : 'slide-left'
    this.$router.isBack = false
    next()
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
  .vux-header .vux-header-title {
    margin: 0 88px 0 40px;
    text-align: left;
  }
  .vux-header {
    position: fixed;
    width: 100%;
    z-index: 10;
    top: 0;
  }
}
</style>
