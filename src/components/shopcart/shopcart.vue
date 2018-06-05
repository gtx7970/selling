<!--  -->
<template>
  <div>
    <div class="shopcart">
      <!-- {{selectFood}} -->
      <div class="content" @click="toggleList">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo" :class="{'highlight':totalCount>0}">
              <i class="icon-shopping_cart" :class="{'highlight':totalCount>0}"></i>
            </div>
            <div class="num" v-show="totalCount>0">{{totalCount}}</div>
          </div>
          <div class="price" :class="{'highlight':totalCount>0}">￥{{totalPrice}}</div>
          <div class="des">配送费￥{{deliveryPrice}}元</div>
        </div>
        <div class="content-right" @click.stop="paybill">
          <div class="pay" :class="payclass">
            {{paydes}}
          </div>
        </div>
      </div>
      <div class="ball-container">
        <div v-for="ball in balls">
          <transition name="drop" @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
            <div  v-show="ball.show" class="ball">
              <div class="inner inner-hook"></div>
            </div>
          </transition>
        </div>
      </div>
      <transition name="fold">
        <div class="shopcart-list" v-show="listShow">
          <div class="list-header">
            <span class="title">购物车</span>
            <span class="empty" @click="empty">清空</span>
          </div>
          <div class="list-content" ref="listContent">
            <ul>
              <li class="food" v-for="food in selectFood">
                <span class="name">{{food.name}}</span>
                <div class="price">
                  <span>￥{{food.price * food.count}}</span>
                </div>
                <div class="cart-wrapper">
                  <cartbtn :food="food"/>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <transition name="fade">
      <div class="list-mask" @click="hideList" v-show="listShow">  
      </div>
    </transition>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import cartbtn from "../../components/cartbtn/cartbtn"
export default {
  components:{
    cartbtn
  },
  props:['deliveryPrice','minPrice','selectFood'],
  data(){
    return {
      balls:[
        {show:false},
        {show:false},
        {show:false},
        {show:false},
        {show:false}
      ],
      dropBalls:[],
      fold:true  //购物车详情默认是折叠的
    }
  },
  computed: {
    totalPrice() {   //总价
      let total = 0
      this.selectFood.forEach(food => {
        total += food.price * food.count
      })
      return total
    },
    totalCount() {
      let num = 0
      this.selectFood.forEach(food => {
        num += food.count
      })
      return num
    },
    paydes(){
      if(this.totalPrice === 0){
        return `￥${this.minPrice}`
      }else if(this.totalPrice < this.minPrice){
        let diff = this.minPrice - this.totalPrice
        return `还差￥${diff}起送`
      }else {
        return '去结算'
      }
    },
    payclass(){
      if(this.totalPrice < this.minPrice){
        return 'not-enough'
      }else {
        return 'enough'
      }
    },
    listShow(){
      if(!this.totalCount){
        this.fold = true
        return false
      }
      let show = !this.fold
      if(show){
        this.$nextTick(()=> {
          if(!this.scroll) {
            this.scroll = new BScroll(this.$refs.listContent,{
            click:true
          })
          }else {
            this.scroll.refresh()
          } 
        })
      }
      return show
    }
  },
  methods: {
    drop(el){
      console.log(el)
      for(let i=0;i<this.balls.length;i++){
        let ball = this.balls[i]
        if(!ball.show) {
          ball.show = true //找到隐藏的ball
          ball.el = el //存储dom的位置
          this.dropBalls.push(ball)
          return
        }
      }
    },
    beforeDrop(el){ // 下落之前,找到所有true的ball
      let count = this.balls.length
      while(count--){
        let ball = this.balls[count]
        if(ball.show) {
          let rect = ball.el.getBoundingClientRect()
          let x = rect.left - 32
          let y = -(window.innerHeight - rect.top - 22)
          console.log(x,y)
          el.style.display = ''
          el.style.webkitTransform = `translate3d(0,${y}px,0)`  //外部y轴移动
          el.style.transform = `translate3d(0,${y}px,0)`        //
          let inner = el.getElementsByClassName('inner-hook')[0]
          inner.style.webkitTransform = `translate3d(${x}px,0,0)` // 内部x轴移动
          inner.style.transform = `translate3d(${x}px,0,0)`
        }
      }
    },
    dropping(el){ //下落
      let rf = el.offsetHeight; //触发浏览器重绘
      this.$nextTick(() => {
        el.style.webkitTransform = 'translate3d(0,0,0)'
        el.style.transform = 'translate3d(0,0,0)'
        let inner = el.getElementsByClassName('inner-hook')[0]
        inner.style.webkitTransform = 'translate3d(0,0,0)'
        inner.style.transform = 'translate3d(0,0,0)'
        // el.addEventListener('transitionend', done);
      });
      

    },
    afterDrop(el){ //下落后
      let ball = this.dropBalls.shift();
        if (ball) {
          ball.show = false;
          el.style.display = 'none';
        }
    },
    toggleList(){
      if(!this.totalCount) return
      this.fold = !this.fold
    },
    empty(){
      this.selectFood.forEach(food=>{
        food.count = 0
      })
    },
    hideList(){
      this.fold = true
    },
    paybill(){
      if(this.totalPrice<this.minPrice) return
      window.alert(`支付${this.totalPrice}元`)
    }
  }
};
</script>
<style lang='scss'>
@import '../../assets/scss/index.scss';
.shopcart {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 50;
  height: 48px;
  .content {
    display: flex;
    background: #141d27;
    font-size:0;
    color:rgba(255,255,255,0.4);
    .content-left {
      vertical-align: top;
      flex: 1;
      .logo-wrapper {
        display: inline-block;
        border-radius:50%;
        height:56px;
        width:56px;
        position: relative;
        top:-10px;
        margin:0 12px;
        padding:6px;
        box-sizing: border-box;
        vertical-align: top;
        background: #141d27;
        .logo {
          width:100%;
          height:100%;
          border-radius:50%;
          background: #2b343c;
          text-align: center;
          &.highlight {
            background: rgb(0,160,220);
          }
          .icon-shopping_cart {
            font-size:24px;
            color:#80858a;
            line-height:44px;
            &.highlight {
              color:#fff;
            }
          }
        }
        .num {
          position: absolute;
          top:0;
          right:0;
          width:24px;
          height:16px;
          line-height: 16px;
          text-align: center;
          border-radius:16px;
          font-size:9px;
          font-weight:700;
          color:#fff;
          background: rgb(240,24,0);
          box-shadow: 0 4px 8px 0 rgba(0,0,0,.4);
        }

      }
      .price {
        vertical-align: top;
        display: inline-block;
        line-height:24px;
        margin-top:12px;
        padding-right:12px;
        box-sizing: border-box;
        border-right:1px solid rgba(255,255,255,0.4);
        font-size: 16px;
        font-weight:700;
        &.highlight {
          color: #fff;
        }
      }
      .des {
        display: inline-block;
        vertical-align: top;
        line-height: 24px;
        margin:12px 0 0 12px;
        font-size:10px;
      }
    }
    .content-right {
      flex: 0 0 105px;
      width: 105px;
      .pay {
        font-size:12px;
        line-height:48px;
        height:48px;
        text-align: center;
        font-weight: 700;
        &.not-enough {
          background: #2b333b;
        }
        &.enough {
          background: #00b43c;
          color:#fff;
        }
      }
    }
  }
  .ball-container {
    .ball {
      position: fixed;
      left: 32px;
      bottom: 22px;
      z-index:200;
      transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41);
      .inner {
        width:16px;
        height:16px;
        border-radius: 50%;
        background: rgb(0,160,220);
        transition: all 0.4s linear;
      }
    }
  }
  .shopcart-list {
    position: absolute;
    top:0;
    left:0;
    z-index:-1;
    width:100%;
    opacity: 1;
    transform: translate3d(0,-100%,0);
    &.fold-enter,&.fold-leave-active{
      transform: translate3d(0,0,0);
      opacity: 0;
    }
    // &.fold-leave,&.fold-leave-active{
    //   transform: translate3d(0,-100%,0);
    // }
    &.fold-enter-active,&.fold-leave-active {
      transition: all .5s ;
    }
    .list-header {
      background: #f3f5f7;
      height:40px;
      line-height:40px;
      padding:0 18px;
      border-bottom:1px solid rgba(7,17,27,0.1);
      font-size:0;
      .title {
        // float: left;
        font-size:14px;
        color:rgb(7,17,27);
        // vertical-align: middle;
      }
      .empty {
        float:right;
        font-size:12px;
        color:rgb(0,160,220);
        vertical-align: middle;
      }
    }
    .list-content {
      padding:0 18px;
      max-height:217px;
      overflow: hidden;
      background: #fff;
      .food {
        position:relative;
        padding:12px 0;
        box-sizing: border-box;
        @include border-1px(rgba(7,17,27,0.1));
        .name {
          line-height: 24px;
          font-size:14px;
          color:rgb(7,17,27);
        }
        .price {
          position: absolute;
          right:90px;
          bottom:12px;
          line-height:24px;
          font-weight:700;
          font-size:14px;
          color:rgb(240,20,20);
        }
        .cart-wrapper {
          position: absolute;
          right:0;
          bottom:6px;
        }
      }
    }
  }
}
.list-mask {
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index:40;
  backdrop-filter: blur(10px);
  background: rgba(7,17,27,0.6);
  &.fade-enter,&.fade-leave-active {
    opacity: 0;
    background: rgba(7,17,27,0);
  }
  &.fade-enter-active,&.fade-leave-active {
    transition: all .5s
  }

}
</style>
