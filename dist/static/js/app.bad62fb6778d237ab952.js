webpackJsonp([7],{"5reh":function(n,t,e){"use strict";e.d(t,"e",function(){return o}),e.d(t,"a",function(){return i}),e.d(t,"c",function(){return a}),e.d(t,"d",function(){return c}),e.d(t,"b",function(){return r});var o="SHOW_LOADING",i="HIDE_LOADING",a="SET_LOADING_TEXT",c="SET_TITLE",r="SET_BACK"},LvpL:function(n,t){},NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("7+uW"),i={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view",{staticClass:"child-view"})],1)},staticRenderFns:[]};var a=e("VU/8")({name:"App"},i,!1,function(n){e("LvpL")},null,null).exports,c=e("/ocq");c.a.prototype.goBack=function(){this.isBack=!0,window.history.go(-1)},o.a.use(c.a);var r,u=new c.a({routes:[{path:"/",component:function(n){return Promise.all([e.e(0),e.e(2)]).then(function(){var t=[e("4M1U")];n.apply(null,t)}.bind(this)).catch(e.oe)},children:[{path:"",name:"basecontainer",component:function(n){return Promise.all([e.e(0),e.e(4)]).then(function(){var t=[e("ZZA/")];n.apply(null,t)}.bind(this)).catch(e.oe)},children:[{path:"",name:"首页",component:function(n){return Promise.all([e.e(0),e.e(1)]).then(function(){var t=[e("I5p1")];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"menu",name:"菜单",component:function(n){return Promise.all([e.e(0),e.e(3)]).then(function(){var t=[e("JN9N")];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"personal",name:"我的",component:function(n){return e.e(5).then(function(){var t=[e("js8m")];n.apply(null,t)}.bind(this)).catch(e.oe)}}]}]}]}),s=e("NYxO"),l=e("424j"),p=e("bOdI"),d=e.n(p),h=e("5reh"),f={state:{loading:!1,loadingText:"",title:"首页",showBack:!0},mutations:(r={},d()(r,h.e,function(n){n.loading=!0}),d()(r,h.a,function(n){n.loading=!1}),d()(r,h.c,function(n,t){n.loadingText=t}),d()(r,h.d,function(n,t){n.title=t}),d()(r,h.b,function(n,t){n.showBack=t}),r),getters:{getLoadingStatus:function(n){return n.loading}}},m={showLoading:function(n){(0,n.commit)(h.e)},hideLoading:function(n){(0,n.commit)(h.a)},setTitle:function(n){(0,n.commit)(h.d)}};o.a.use(s.a);var v=new s.a.Store({modules:{mutations:f},actions:m,plugins:[Object(l.a)()]}),g=e("zYko"),b=e.n(g),w=e("4DoD"),L=e.n(w);o.a.prototype.$http=L.a,o.a.use(b.a,{color:"#E4E7ED",failedColor:"#874b4b",thickness:"2px",transition:{speed:"0.2s",opacity:"0.6s",termination:300},autoRevert:!0,location:"top",inverse:!1}),o.a.config.productionTip=!1,new o.a({el:"#app",router:u,store:v,components:{App:a},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.bad62fb6778d237ab952.js.map