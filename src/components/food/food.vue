<template>
  <transition name="move">
    <div v-show="showFood" class="food" ref="foodcontent">
      <div class="food-content">
        <div class="img-header">
          <img :src="food.image">
          <div class="icon-wrapper" @click="back">
            <i class="icon-arrow_lift"></i>
          </div> 
        </div>
        <div class="content">
          <h1 class="title">{{food.name}}</h1>
          <div class="detail">
            <span class="sell-count">月售{{food.sellCount}}份</span>
            <span class="rating">好评率{{food.rating}}%</span>
          </div>
          <div class="price">
            <span class="now">￥{{food.price}}</span>
            <span v-show="food.oldPrice" class="old">￥{{food.oldPrice}}</span>
          </div>
          <div class="cart-wrapper">
            <cartbtn :food="food"/>
          </div>
          <div class="buy" v-show="!food.count || food.count===0" @click="addfirst($event)">加入购物车</div>
        </div>
        
      </div>
    </div>
  </transition>
</template>

<script>
import Vue from 'vue'
import BScroll from "better-scroll";
import cartbtn from "../../components/cartbtn/cartbtn"
export default {
  props:['food'],
  components:{
    cartbtn
  },
  data(){
    return {
      showFood:false
    }
  },
  methods:{
    show() {
      this.showFood = true
      this.$nextTick(() => {
        if(!this.scroll){
          this.scroll = new BScroll(this.$refs.foodcontent,{
            click:true
          })
        }else{
          this.scroll.refresh()
        }
      })
    },
    back() {
      this.showFood = false
    },
    addfirst(event){
      if(!event._constructed) return
      Vue.set(this.food,'count',1)
    }
  }
}

</script>

<style lang='scss'>
@import '../../assets/scss/index.scss';
  .food {
    position: fixed;
    z-index:30;
    left:0;
    top:0;
    bottom:48px;
    background: #fff;
    width:100%;
    transform: translate3d(0,0,0);
    &.move-enter,&.move-leave-active {
      opacity: 0;
      transform: translate3d(100%,0,0)
    }
    &.move-enter-active,&.move-leave-active {
      transition: all .3s linear;
    }
    .food-content {
      .img-header {
        position: relative;
        width:100%;
        height:0;
        padding-top:100%; //宽度与高度相同
        img {
          position: absolute;
          top:0;
          left:0;
          width:100%;
          height:100%;
        }
        .icon-wrapper {
          position: absolute;
          top:10px;
          left:0;
          .icon-arrow_lift {
            display: inline-block;
            padding: 10px;
            font-size:20px;
            color:#fff;
          }
        }
      }
      .content {
        position: relative;
        padding:18px;
        .title {
          line-height:14px;
          margin-bottom: 8px;
          font-size:14px;
          font-weight:700;
          color:rgb(7,17,27);
        }
        .detail {
          margin-bottom: 18px;
          line-height:10px;
          font-size:0;
          height:10px;
          .sell-count,.rating {
            font-size:10px;
            color:rgb(147,153,159)
          }
          .sell-count {
            margin-right:18px;
          }
        }
        .price {
          font-weight: 700;
          line-height: 24px;
          .now {
            margin-right: 8px;
            font-size: 14px;
            color: rgb(240, 20, 20);
          }
          .old {
            text-decoration: line-through;
            font-size: 10px;
            color: rgb(147, 153, 159);
          }
        }
        .cart-wrapper {
        position: absolute;
        right:12px;
        bottom:12px;
        }
        .buy {
          position: absolute;
          right:18px;
          bottom:18px;
          z-index:10;
          height:24px;
          line-height:24px;
          padding: 0 12px;
          box-sizing: border-box;
          font-size:10px;
          border-radius: 12px;
          color:#fff;
          background:rgb(0,160,220);
        }
      }
      
    }
  }
</style>