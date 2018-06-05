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
            <cartbtn :food="food" @addball="addFood"/>
          </div>
          <transition name="fade">
            <div class="buy" v-show="!food.count || food.count===0" @click.stop.prevent="addfirst($event)">加入购物车</div>
          </transition>
        </div>
        <split v-show="food.info"/>
        <div class="info" v-show="food.info">
          <h1 class="title">商品信息</h1>
          <p class="text">{{food.info}}</p>
        </div>
        <split />
        <div class="rating">
          <div class="title">商品评价</div>
          <ratingselect @changeSelectType="selectRating"  @changeContentType ="toggleContent"
          :selectType="selectType" :onlyContent="onlyContent" :desc="desc" :ratings="food.ratings"/>
          <div class="rating-wrapper">
            <ul v-show="food.ratings && food.ratings.length">
              <li v-for="rating in food.ratings" class="rating-item" v-show="needShow(rating.rateType,rating.text)">
                <div class="user">
                  <span class="name">{{rating.username}}</span>
                  <img :src="rating.avatar"  class="avatar" width="12" height="12">
                </div>
                <div class="time">{{rating.rateTime}}</div>
                <p class="text">
                  <span :class="{'icon-thumb_up':rating.rateType===0,
                  'icon-thumb_down':rating.rateType===1}"></span>
                  {{rating.text}}
                </p>
              </li>
            </ul>
            <div class="no-ratings" v-show="!food.ratings || !food.ratings.length">
              暂无评价
            </div>
          </div>
        </div> 
      </div>
    </div>
  </transition>
</template>

<script>
import Vue from 'vue'
import BScroll from "better-scroll";
import cartbtn from "../../components/cartbtn/cartbtn"
import split from "../../components/split/split"
import ratingselect from "../../components/ratingselect/ratingselect"
// import {formatDates} from "../../js/date.js"
const POSITIVE = 0; //正面
const NEGATIVE = 1; //负面
const ALL = 2;  //所有
export default {
  props:['food'],
  components:{
    cartbtn,
    split,
    ratingselect
  },
  data(){
    return {
      showFood:false,
      selectType:ALL,
      onlyContent:true,
      desc:{
        all:'全部',
        positive:'推荐',
        negative:'吐槽'
      }
    }
  },
  methods:{
    show() {
      this.showFood = true
      this.selectType = ALL //每次show展示所有
      this.onlyContent = true;
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
      this.$emit('addball',event.target) //传递事件
    },
    addFood(event){
      this.$emit('addball',event) //传递事件
    },
    needShow(type,text){
      if(this.onlyContent && !text) return false // 判断是否显示内容
      if(this.selectType === ALL) {
        return true
      }else {
        return type === this.selectType
      }
    },
    selectRating(type){
      console.log(type)
      this.selectType = type //接受子组件传递的type
      this.$nextTick(() => {
          this.scroll.refresh()
      });
    },
    toggleContent() {
      this.onlyContent = !this.onlyContent
      this.$nextTick(() => {
          this.scroll.refresh()
      });
    }
  }
  // filters: {
  //   formatDate(time){
  //     let date = new Date(time)
  //   }
  // }
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
          &.fade-enter-active,&.fade-leave-active {
            transition: all .5s;
          }
          &.fade-enter,&.fade-leave-active {
            opacity: 0;
            background:rgba(0,160,220,0);
          }
        }
      }
      .info {
        padding: 18px;
        .title {
          font-size:14px;
          color:rgb(7,17,27);
          margin-bottom: 6px;
          line-height: 14px;
        }
        .text {
          line-height: 24px;
          padding:0 8px;
          font-size:12px;
          color:rgb(77,83,95);
        }
      }
      .rating {
        padding-top:18px;
        .title {
          font-size:14px;
          color:rgb(7,17,27);
          margin-left: 18px;
          line-height: 14px;
        }
        .rating-wrapper {
          padding:0 18px;
          .rating-item {
            position: relative;
            padding:16px 0;
            @include border-1px(rgba(7,17,27,0.1));
            .user {
              position: absolute;
              top:16px;
              right:0;
              font-size:0;
              line-height:12px;
              .name {
                display: inline-block;
                font-size:10px;
                vertical-align: top;
                color:rgb(147,153,155);
                margin-right:6px;
              }
              .avatar {
                border-radius:50%;
              }
            }
            .time {
              margin:6px;
              font-size:10px;
              line-height:12px;
              color:rgb(147,153,155);
            }
            .text {
              font-size:12px;
              line-height:16px;
              color:rgb(7,17,27);
              .icon-thumb_up,.icon-thumb_down {
                margin-right:4px;
                line-height:24px;
                font-size:12px;
              }
              .icon-thumb_up {
                color:rgb(0,160,220);
              }
              .icon-thumb_down {
                color:rgb(147,153,159);
              }
            }
          }
          .no-ratings {
            padding:16px 0;
            font-size:12px;
            color:rgb(147,153,159);
          }
          
        }
      }
      
    }
  }
</style>