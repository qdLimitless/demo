webpackJsonp([0],{TyaH:function(t,s){},kvay:function(t,s,e){"use strict";var i=e("Dd8w"),a=e.n(i),l=e("qwAB"),n=e("y/jF"),r=e("ZV4u"),o=e("3Q4o"),c=e("b8UZ"),g=e("F4+m"),h=Object(o.c)("transform"),f=Object(o.c)("filter"),d={mixins:[g.b],data:function(){return{scrollY:0}},props:{bgImage:{type:String,default:""},songs:{type:Array,default:function(){return[]}},title:{type:String,default:""},rank:{type:Boolean,default:!1}},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.minTranslateY=40-this.imageHeight,this.$refs.list.$el.style.top=this.imageHeight+"px"},created:function(){this.probeType=3,this.listenScroll=!0},watch:{scrollY:function(t){var s=Math.max(this.minTranslateY,t),e=0,i=1,a=0;this.$refs.layer.style[h]="translate3d(0,"+s+"px,0)";var l=Math.abs(t/this.imageHeight);t>0?(i=1+l,e=10):a=Math.min(20*l,20),this.$refs.filter.style[f]="blur("+a+"px)",t<this.minTranslateY?(e=10,this.$refs.bgImage.style.paddingTop="0",this.$refs.bgImage.style.height="40px",this.$refs.playBtn.style.display="none"):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height="0",this.$refs.playBtn.style.display=""),this.$refs.bgImage.style.zIndex=e,this.$refs.bgImage.style[h]="scale("+i+")"}},computed:{bgStyle:function(){return"background:url('"+this.bgImage+"') no-repeat;background-size:100%"}},methods:a()({goBack:function(){this.$router.back()},scroll:function(t){this.scrollY=t.y},selectItem:function(t,s){this.selectPlay({list:this.songs,index:s})},random:function(){this.randomPlay({list:this.songs})},handlePlaylist:function(t){var s=t.length>0?"60px":"";this.$refs.list.$el.style.bottom=s,this.$refs.list.refresh()}},Object(c.b)(["selectPlay","randomPlay"])),components:{Scroll:l.a,Loading:n.a,SongList:r.a}},p={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"music-list"},[e("div",{staticClass:"back",on:{click:t.goBack}},[e("i",{staticClass:"icon-back"})]),t._v(" "),e("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),e("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[e("div",{staticClass:"play-wrapper"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.songs.length>0,expression:"songs.length>0"}],ref:"playBtn",staticClass:"play",on:{click:t.random}},[e("i",{staticClass:"icon-play"}),t._v(" "),e("span",{staticClass:"text"},[t._v("随机播放全部")])])]),t._v(" "),e("div",{ref:"filter",staticClass:"filter"})]),t._v(" "),e("div",{ref:"layer",staticClass:"bg-layer"}),t._v(" "),e("scroll",{ref:"list",staticClass:"list",attrs:{probeType:t.probeType,listenScroll:t.listenScroll,data:t.songs},on:{scroll:t.scroll}},[e("div",{staticClass:"song-list-wrapper"},[e("song-list",{attrs:{songs:t.songs,rank:t.rank},on:{select:t.selectItem}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading-container"},[e("loading")],1)])],1)},staticRenderFns:[]};var y=e("VU/8")(d,p,!1,function(t){e("TyaH")},null,null);s.a=y.exports}});
//# sourceMappingURL=0.6102f0d9cecf7f501187.js.map