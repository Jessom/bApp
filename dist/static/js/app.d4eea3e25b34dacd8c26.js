webpackJsonp([7],{LvpL:function(n,t){},NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("7+uW"),i={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view",{staticClass:"child-view"})],1)},staticRenderFns:[]};var a=e("VU/8")({name:"App"},i,!1,function(n){e("LvpL")},null,null).exports,c=e("/ocq");c.a.prototype.goBack=function(){this.isBack=!0,window.history.go(-1)},o.a.use(c.a);var r,u=new c.a({routes:[{path:"/",component:function(n){return Promise.all([e.e(0),e.e(2)]).then(function(){var t=[e("sGCq")];n.apply(null,t)}.bind(this)).catch(e.oe)},children:[{path:"",name:"basecontainer",component:function(n){return Promise.all([e.e(0),e.e(4)]).then(function(){var t=[e("9nYR")];n.apply(null,t)}.bind(this)).catch(e.oe)},children:[{path:"",name:"首页",component:function(n){return Promise.all([e.e(0),e.e(1)]).then(function(){var t=[e("2rI8")];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"menu",name:"菜单",component:function(n){return Promise.all([e.e(0),e.e(3)]).then(function(){var t=[e("AfRO")];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"personal",name:"我的",component:function(n){return e.e(5).then(function(){var t=[e("eGou")];n.apply(null,t)}.bind(this)).catch(e.oe)}}]}]}]}),l=e("NYxO"),p=e("424j"),s=e("bOdI"),h=e.n(s),d={state:{loading:!1,loadingText:"",title:"首页"},mutations:(r={},h()(r,"SHOW_LOADING",function(n){n.loading=!0}),h()(r,"HIDE_LOADING",function(n){n.loading=!1}),h()(r,"SET_LOADING_TEXT",function(n,t){n.loadingText=t}),h()(r,"SET_TITLE",function(n,t){n.title=t}),r),getters:{getLoadingStatus:function(n){return n.loading}}},f={showLoading:function(n){(0,n.commit)("SHOW_LOADING")},hideLoading:function(n){(0,n.commit)("HIDE_LOADING")},setTitle:function(n){(0,n.commit)("SET_TITLE")}};o.a.use(l.a);var m=new l.a.Store({modules:{mutations:d},actions:f,plugins:[Object(p.a)()]}),v=e("zYko"),g=e.n(v),L=e("4DoD"),T=e.n(L);o.a.prototype.$http=T.a,o.a.use(g.a),o.a.config.productionTip=!1,new o.a({el:"#app",router:u,store:m,components:{App:a},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.d4eea3e25b34dacd8c26.js.map