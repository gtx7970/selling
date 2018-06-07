webpackJsonp([0],{0:function(t,s){},"3Mdb":function(t,s){},"7rRe":function(t,s){},B7rM:function(t,s){},Jcxa:function(t,s){},MHBa:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW"),a={props:["score","size"],computed:{starType:function(){return"star_"+this.size},itemClass:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1!=0,i=Math.floor(s),a=0;a<i;a++)t.push("on");for(e&&t.push("half");t.length<5;)t.push("off");return t}}},n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"star",class:this.starType},this._l(this.itemClass,function(t,e){return s("span",{key:e,staticClass:"star-item",class:t})}))},staticRenderFns:[]};var o=e("VU/8")(a,n,!1,function(t){e("St5W")},null,null).exports,l={props:["seller"],data:function(){return{detailShow:!1}},methods:{showDetail:function(){this.detailShow=!0},hideDetail:function(){this.detailShow=!1}},components:{star:o},created:function(){this.classMap=["decrease","discount","guarantee","invoice","special"]}},r={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.seller.avatar,alt:"avatar",width:"64",height:"64"}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),t.seller.description?e("div",{staticClass:"description"},[t._v("\n        "+t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达\n      ")]):t._e(),t._v(" "),t.seller.supports?e("div",{staticClass:"supports"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[0].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])]):t._e()]),t._v(" "),t.seller.supports?e("div",{staticClass:"support-cout",on:{click:t.showDetail}},[e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length)+"个")]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),t._v(" "),e("div",{staticClass:"bulletin-wrapper",on:{click:t.showDetail}},[e("span",{staticClass:"bulletin-title"}),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.detailShow,expression:"detailShow"}],staticClass:"detail"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:48,score:t.seller.score}})],1),t._v(" "),e("div",{staticClass:"star-wrapper"}),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,i){return e("li",{key:i,staticClass:"support-item"},[e("span",{staticClass:"icon",class:t.classMap[i]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])])})):t._e(),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"bulletin"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])])])]),t._v(" "),e("div",{staticClass:"deatail-close",on:{click:t.hideDetail}},[e("i",{staticClass:"icon-close"})])])])],1)},staticRenderFns:[]};var c={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tab border-1px"},[s("router-link",{staticClass:"tab-item",attrs:{to:"/goods",tag:"div"}},[s("span",[this._v("商品")])]),this._v(" "),s("router-link",{staticClass:"tab-item",attrs:{to:"/rating",tag:"div"}},[s("span",[this._v("评价")])]),this._v(" "),s("router-link",{staticClass:"tab-item",attrs:{to:"/seller",tag:"div"}},[s("span",[this._v("商家")])])],1)},staticRenderFns:[]};var v={name:"App",data:function(){return{seller:{id:function(){return urlParse().id}}}},created:function(){var t=this;this.$http.get("/api/seller").then(function(s){console.log(s),0===s.body.errno&&(t.seller=s.body.data,console.log(t.seller))})},components:{"v-header":e("VU/8")(l,r,!1,function(t){e("MHBa")},null,null).exports,"v-tab":e("VU/8")({},c,!1,function(t){e("yX3U")},null,null).exports}},d={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("v-header",{attrs:{seller:this.seller}}),this._v(" "),s("v-tab"),this._v(" "),s("keep-alive",[s("router-view",{attrs:{seller:this.seller}})],1)],1)},staticRenderFns:[]};var u=e("VU/8")(v,d,!1,function(t){e("fRIE")},null,null).exports,p=e("/ocq"),h=e("GQaK"),f={props:["food"],created:function(){console.log(this.food)},methods:{addCart:function(t){t._constructed&&(console.log("click"),this.food.count?this.food.count++:i.a.set(this.food,"count",1),this.$emit("addball",t.target))},removeCart:function(){event._constructed&&this.food.count&&this.food.count--}}},_={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartbtn"},[e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-decrease",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.removeCart(s)}}},[e("span",{staticClass:"inner icon-remove_circle_outline"})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))]),t._v(" "),e("div",{staticClass:"cart-add icon-add_circle ",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.addCart(s)}}})],1)},staticRenderFns:[]};var C=e("VU/8")(f,_,!1,function(t){e("yPfW")},null,null).exports,m={components:{cartbtn:C},props:["deliveryPrice","minPrice","selectFood"],data:function(){return{balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],dropBalls:[],fold:!0}},computed:{totalPrice:function(){var t=0;return this.selectFood.forEach(function(s){t+=s.price*s.count}),t},totalCount:function(){var t=0;return this.selectFood.forEach(function(s){t+=s.count}),t},paydes:function(){return 0===this.totalPrice?"￥"+this.minPrice:this.totalPrice<this.minPrice?"还差￥"+(this.minPrice-this.totalPrice)+"起送":"去结算"},payclass:function(){return this.totalPrice<this.minPrice?"not-enough":"enough"},listShow:function(){var t=this;if(!this.totalCount)return this.fold=!0,!1;var s=!this.fold;return s&&this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new h.a(t.$refs.listContent,{click:!0})}),s}},methods:{drop:function(t){console.log(t);for(var s=0;s<this.balls.length;s++){var e=this.balls[s];if(!e.show)return e.show=!0,e.el=t,void this.dropBalls.push(e)}},beforeDrop:function(t){for(var s=this.balls.length;s--;){var e=this.balls[s];if(e.show){var i=e.el.getBoundingClientRect(),a=i.left-32,n=-(window.innerHeight-i.top-22);console.log(a,n),t.style.display="",t.style.webkitTransform="translate3d(0,"+n+"px,0)",t.style.transform="translate3d(0,"+n+"px,0)";var o=t.getElementsByClassName("inner-hook")[0];o.style.webkitTransform="translate3d("+a+"px,0,0)",o.style.transform="translate3d("+a+"px,0,0)"}}},dropping:function(t){t.offsetHeight;this.$nextTick(function(){t.style.webkitTransform="translate3d(0,0,0)",t.style.transform="translate3d(0,0,0)";var s=t.getElementsByClassName("inner-hook")[0];s.style.webkitTransform="translate3d(0,0,0)",s.style.transform="translate3d(0,0,0)"})},afterDrop:function(t){var s=this.dropBalls.shift();s&&(s.show=!1,t.style.display="none")},toggleList:function(){this.totalCount&&(this.fold=!this.fold)},empty:function(){this.selectFood.forEach(function(t){t.count=0})},hideList:function(){this.fold=!0},paybill:function(){this.totalPrice<this.minPrice||window.alert("支付"+this.totalPrice+"元")}}},g={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"shopcart"},[e("div",{staticClass:"content",on:{click:t.toggleList}},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"logo",class:{highlight:t.totalCount>0}},[e("i",{staticClass:"icon-shopping_cart",class:{highlight:t.totalCount>0}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount>0"}],staticClass:"num"},[t._v(t._s(t.totalCount))])]),t._v(" "),e("div",{staticClass:"price",class:{highlight:t.totalCount>0}},[t._v("￥"+t._s(t.totalPrice))]),t._v(" "),e("div",{staticClass:"des"},[t._v("配送费￥"+t._s(t.deliveryPrice)+"元")])]),t._v(" "),e("div",{staticClass:"content-right",on:{click:function(s){return s.stopPropagation(),t.paybill(s)}}},[e("div",{staticClass:"pay",class:t.payclass},[t._v("\n          "+t._s(t.paydes)+"\n        ")])])]),t._v(" "),e("div",{staticClass:"ball-container"},t._l(t.balls,function(s){return e("div",[e("transition",{attrs:{name:"drop"},on:{"before-enter":t.beforeDrop,enter:t.dropping,"after-enter":t.afterDrop}},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"ball.show"}],staticClass:"ball"},[e("div",{staticClass:"inner inner-hook"})])])],1)})),t._v(" "),e("transition",{attrs:{name:"fold"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcart-list"},[e("div",{staticClass:"list-header"},[e("span",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])]),t._v(" "),e("div",{ref:"listContent",staticClass:"list-content"},[e("ul",t._l(t.selectFood,function(s){return e("li",{staticClass:"food"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"price"},[e("span",[t._v("￥"+t._s(s.price*s.count))])]),t._v(" "),e("div",{staticClass:"cart-wrapper"},[e("cartbtn",{attrs:{food:s}})],1)])}))])])])],1),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"list-mask",on:{click:t.hideList}})])],1)},staticRenderFns:[]};var w=e("VU/8")(m,g,!1,function(t){e("m3qH")},null,null).exports,y={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"iconlist"},[s("span",{staticClass:"icon",class:this.classMap[this.idx]})])},staticRenderFns:[]};var x=e("VU/8")({props:["idx"],created:function(){this.classMap=["decrease","discount","guarantee","invoice","special"]}},y,!1,function(t){e("7rRe")},null,null).exports,b={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"split"})},staticRenderFns:[]};var k=e("VU/8")({},b,!1,function(t){e("WHA5")},null,null).exports,T={props:["ratings","selectType","onlyContent","desc"],methods:{select:function(t,s){s._constructed&&this.$emit("changeSelectType",t)},toggleContent:function(t){t._constructed&&this.$emit("changeContentType")}},computed:{positives:function(){return this.ratings.filter(function(t){return 0===t.rateType})},negatives:function(){return this.ratings.filter(function(t){return 1===t.rateType})}}},$={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ratingselect"},[e("div",{staticClass:"rating-type"},[e("span",{staticClass:"block positive",class:{active:2===t.selectType},on:{click:function(s){t.select(2,s)}}},[t._v(t._s(t.desc.all)),e("span",{staticClass:"count"},[t._v(t._s(t.ratings.length))])]),t._v(" "),e("span",{staticClass:"block positive",class:{active:0===t.selectType},on:{click:function(s){t.select(0,s)}}},[t._v(t._s(t.desc.positive)),e("span",{staticClass:"count"},[t._v(t._s(t.positives.length))])]),t._v(" "),e("span",{staticClass:"block negative",class:{active:1===t.selectType},on:{click:function(s){t.select(1,s)}}},[t._v(t._s(t.desc.negative)),e("span",{staticClass:"count"},[t._v(t._s(t.negatives.length))])])]),t._v(" "),e("div",{staticClass:"switch",class:{on:!0===t.onlyContent},on:{click:t.toggleContent}},[e("span",{staticClass:"icon-check_circle"}),t._v(" "),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])])])},staticRenderFns:[]};var P=e("VU/8")(T,$,!1,function(t){e("3Mdb")},"data-v-06ea8d80",null).exports,F={props:["food"],components:{cartbtn:C,split:k,ratingselect:P},data:function(){return{showFood:!1,selectType:2,onlyContent:!0,desc:{all:"全部",positive:"推荐",negative:"吐槽"}}},methods:{show:function(){var t=this;this.showFood=!0,this.selectType=2,this.onlyContent=!0,this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new h.a(t.$refs.foodcontent,{click:!0})})},back:function(){this.showFood=!1},addfirst:function(t){t._constructed&&(i.a.set(this.food,"count",1),this.$emit("addball",t.target))},addFood:function(t){this.$emit("addball",t)},needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)},selectRating:function(t){var s=this;console.log(t),this.selectType=t,this.$nextTick(function(){s.scroll.refresh()})},toggleContent:function(){var t=this;this.onlyContent=!this.onlyContent,this.$nextTick(function(){t.scroll.refresh()})}}},S={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFood,expression:"showFood"}],ref:"foodcontent",staticClass:"food"},[e("div",{staticClass:"food-content"},[e("div",{staticClass:"img-header"},[e("img",{attrs:{src:t.food.image}}),t._v(" "),e("div",{staticClass:"icon-wrapper",on:{click:t.back}},[e("i",{staticClass:"icon-arrow_lift"})])]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.food.name))]),t._v(" "),e("div",{staticClass:"detail"},[e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.food.sellCount)+"份")]),t._v(" "),e("span",{staticClass:"rating"},[t._v("好评率"+t._s(t.food.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(t.food.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(t.food.oldPrice))])]),t._v(" "),e("div",{staticClass:"cart-wrapper"},[e("cartbtn",{attrs:{food:t.food},on:{addball:t.addFood}})],1),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count||0===t.food.count,expression:"!food.count || food.count===0"}],staticClass:"buy",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.addfirst(s)}}},[t._v("加入购物车")])])],1),t._v(" "),e("split",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}]}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}],staticClass:"info"},[e("h1",{staticClass:"title"},[t._v("商品信息")]),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(t.food.info))])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"rating"},[e("div",{staticClass:"title"},[t._v("商品评价")]),t._v(" "),e("ratingselect",{attrs:{selectType:t.selectType,onlyContent:t.onlyContent,desc:t.desc,ratings:t.food.ratings},on:{changeSelectType:t.selectRating,changeContentType:t.toggleContent}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.food.ratings&&t.food.ratings.length,expression:"food.ratings && food.ratings.length"}]},t._l(t.food.ratings,function(s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType,rating.text)"}],staticClass:"rating-item"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("img",{staticClass:"avatar",attrs:{src:s.avatar,width:"12",height:"12"}})]),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(s.rateTime))]),t._v(" "),e("p",{staticClass:"text"},[e("span",{class:{"icon-thumb_up":0===s.rateType,"icon-thumb_down":1===s.rateType}}),t._v("\n                "+t._s(s.text)+"\n              ")])])})),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.ratings||!t.food.ratings.length,expression:"!food.ratings || !food.ratings.length"}],staticClass:"no-ratings"},[t._v("\n            暂无评价\n          ")])])],1)],1)])])},staticRenderFns:[]};var E={data:function(){return{goods:[],listHeight:[],scrollY:0,selectedFood:{}}},props:["seller"],components:{shopcart:w,cartbtn:C,iconclass:x,food:e("VU/8")(F,S,!1,function(t){e("Jcxa")},null,null).exports},created:function(){var t=this;this.$http.get("/api/goods").then(function(s){0===s.body.errno&&(t.goods=s.body.data,t.$nextTick(function(){t._initScroll(),t._calcHeight()}))})},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],e=this.listHeight[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return t}return 0},selectFood:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count>0&&t.push(s)})}),t}},methods:{addFood:function(t){this._drop(t)},_drop:function(t){var s=this;this.$nextTick(function(){s.$refs.shopcart.drop(t)})},chooseFood:function(t,s){console.log(t),this.selectedFood=t,this.$refs.food.show()},_initScroll:function(){var t=this;this.menuScroll=new h.a(this.$refs.menuWrapper,{click:!0}),this.foodScroll=new h.a(this.$refs.foodsWrapper,{probeType:3,click:!0}),this.foodScroll.on("scroll",function(s){t.scrollY=Math.abs(Math.round(s.y))})},_calcHeight:function(){var t=this.$refs.foodsWrapper.querySelectorAll(".food-list-hook"),s=0;this.listHeight.push(s);for(var e=0;e<t.length;e++){s+=t[e].clientHeight,this.listHeight.push(s)}},selectMenu:function(t,s){if(s._constructed){var e=this.$refs.foodsWrapper.querySelectorAll(".food-list-hook")[t];this.foodScroll.scrollToElement(e,300),console.log(t)}}}},N={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[e("ul",{staticClass:"items"},t._l(t.goods,function(s,i){return e("li",{key:i,staticClass:"menu-item",class:{current:t.currentIndex===i},on:{click:function(s){t.selectMenu(i,s)}}},[e("span",{staticClass:"text"},[s.type>0?e("iconclass",{attrs:{idx:s.type}}):t._e(),t._v(t._s(s.name)+"\n        ")],1)])}))]),t._v(" "),e("div",{ref:"foodsWrapper",staticClass:"foods-wrapper"},[e("ul",{staticClass:"food-lists"},t._l(t.goods,function(s){return e("li",{staticClass:"food-list food-list-hook"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s){return e("li",{staticClass:"food-item",on:{click:function(e){t.chooseFood(s,e)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{src:s.icon,width:"57",height:"57"}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"des"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月售"+t._s(s.sellCount))]),e("span",[t._v("好评率"+t._s(s.rating))])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(s.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(s.oldPrice))])]),t._v(" "),e("div",{staticClass:"cart-wrapper"},[e("cartbtn",{attrs:{food:s},on:{addball:t.addFood}})],1)])])}))])}))]),t._v(" "),e("shopcart",{ref:"shopcart",attrs:{selectFood:t.selectFood,deliveryPrice:t.seller.deliveryPrice,minPrice:t.seller.minPrice}}),t._v(" "),e("food",{ref:"food",attrs:{food:t.selectedFood},on:{addball:t.addFood}})],1)},staticRenderFns:[]};var R=e("VU/8")(E,N,!1,function(t){e("Umm2")},null,null).exports,M={props:["seller"],components:{star:o,split:k,ratingselect:P},data:function(){return{ratings:[]}},created:function(){var t=this;this.$http.get("/api/ratings").then(function(s){0===s.body.errno&&(t.ratings=s.body.data,t.$nextTick(function(){t.scroll=new h.a(t.$refs.ratings,{click:!0})}))})}},H={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"ratings",staticClass:"ratings"},[e("div",{staticClass:"rating-content"},[e("div",{staticClass:"overview"},[e("div",{staticClass:"overview-left"},[e("h1",{staticClass:"score"},[t._v(t._s(t.seller.score))]),t._v(" "),e("div",{staticClass:"title"},[t._v("综合评分")]),t._v(" "),e("div",{staticClass:"rank"},[t._v("高于周边商家"+t._s(t.seller.rankRate)+"%")])]),t._v(" "),e("div",{staticClass:"overview-right"},[e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("服务态度")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.serviceScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.serviceScore))])],1),t._v(" "),e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("商品评分")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.foodScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.foodScore))])],1),t._v(" "),e("div",{staticClass:"delivery-wrapper"},[e("span",{staticClass:"title"},[t._v("送达时间")]),t._v(" "),e("span",{staticClass:"delivery"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",t._l(t.ratings,function(s){return e("li",{staticClass:"rating-item"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:s.avatar,width:"28",height:"28"}})]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:24,score:s.score}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.deliveryTime,expression:"rating.deliveryTime"}],staticClass:"delivery"},[t._v(t._s(s.deliveryTime)+"分钟送达")])],1),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(s.text))]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:s.recommend.length>0,expression:"rating.recommend.length>0"}],staticClass:"recommend"},[e("span",{staticClass:"icon-thumb_up"}),t._v(" "),t._l(s.recommend,function(s){return e("span",{staticClass:"item"},[t._v(t._s(s))])})],2),t._v(" "),e("div",{staticClass:"time"},[t._v("\n              "+t._s(s.rateTime)+"\n            ")])])])}))])],1)])},staticRenderFns:[]};var U=e("VU/8")(M,H,!1,function(t){e("v4hX")},null,null).exports,V={props:["seller"],data:function(){return{favorite:!1}},computed:{favoriteText:function(){return this.favorite?"已收藏":"收藏"}},components:{star:o,split:k,iconclass:x},methods:{toggleCollect:function(t){t._constructed&&(this.favorite=!this.favorite)}},mounted:function(){var t=this;if(console.log(this.seller),this.scroll=new h.a(this.$refs.seller,{click:!0}),this.seller.pics){var s=126*this.seller.pics.length-6;this.$refs.piclist.style.width=s+"px",this.$nextTick(function(){t.picScroll=new h.a(t.$refs.piclist,{scrollX:!0,eventPassthrough:"vertical"})})}}},W={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"seller",staticClass:"seller"},[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"overview"},[e("div",{staticClass:"title"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"desc"},[e("star",{attrs:{size:36,score:t.seller.score}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.ratingCount))]),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.sellCount))])],1),t._v(" "),e("ul",{staticClass:"remark"},[e("li",{staticClass:"block"},[e("h2",{staticClass:"name"},[t._v("起送价")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.minPrice))]),t._v("元\n          ")])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",{staticClass:"name"},[t._v("商家配送")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryPrice))]),t._v("元\n          ")])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",{staticClass:"name"},[t._v("平均配送时间")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.minPrice))]),t._v("分钟\n          ")])])]),t._v(" "),e("div",{staticClass:"collect",on:{click:t.toggleCollect}},[e("span",{staticClass:"icon-favorite",class:{active:t.favorite}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.favoriteText))])])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"bulletin"},[e("div",{staticClass:"title"},[t._v("公告与活动")]),t._v(" "),e("div",{staticClass:"content-wrapper"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,i){return e("li",{key:i,staticClass:"support-item"},[e("iconclass",{attrs:{idx:i}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])],1)})):t._e()]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"pics"},[e("div",{staticClass:"title"},[t._v("商家实景")]),t._v(" "),e("div",{ref:"piclist",staticClass:"pic-wrapper"},[e("ul",{staticClass:"pic-list"},t._l(t.seller.pics,function(t,s){return e("Li",{key:s,staticClass:"pic-item"},[e("img",{attrs:{src:t,width:"120",height:"90"}})])}))])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"info"},[e("h1",{staticClass:"title"},[t._v("商家信息")]),t._v(" "),e("ul",t._l(t.seller.infos,function(s){return e("li",{staticClass:"info-item"},[t._v(t._s(s))])}))])],1)])},staticRenderFns:[]};var D=e("VU/8")(V,W,!1,function(t){e("B7rM")},null,null).exports;i.a.use(p.a);var B=new p.a({routes:[{path:"/",redirect:"/goods"},{path:"/goods",component:R},{path:"/rating",component:U},{path:"/seller",component:D}]}),A=e("8+8L");e("uMhA"),e("d4tr");i.a.config.productionTip=!1,i.a.use(A.a),new i.a({el:"#app",components:{App:u},template:"<App/>",router:B})},St5W:function(t,s){},Umm2:function(t,s){},WHA5:function(t,s){},d4tr:function(t,s){},fRIE:function(t,s){},m3qH:function(t,s){},uMhA:function(t,s){},v4hX:function(t,s){},yPfW:function(t,s){},yX3U:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.d86dd589fe8705f2127b.js.map