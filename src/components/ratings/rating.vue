<template>
  <div class="ratings" ref="ratings">
    <div class="rating-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{seller.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{seller.rankRate}}%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <star :size="36" :score="seller.serviceScore"/>
            <span class="score">{{seller.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <star :size="36" :score="seller.foodScore"/>
            <span class="score">{{seller.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <split></split>
      <!-- <ratingselect></ratingselect> -->
      <div class="rating-wrapper">
        <ul>
          <li v-for="rating in ratings" class="rating-item">
            <div class="avatar">
              <img :src="rating.avatar" width="28" height="28">
            </div>
            <div class="content">
              <h1 class="name">{{rating.username}}</h1>
              <div class="star-wrapper">
                <star :size="24" :score="rating.score" />
                <span class="delivery" v-show="rating.deliveryTime">{{rating.deliveryTime}}分钟送达</span>
              </div>
              <p class="text">{{rating.text}}</p>
              <div class="recommend" v-show="rating.recommend.length>0">
                <span class="icon-thumb_up"></span>
                <span v-for="el in rating.recommend" class="item">{{el}}</span>
              </div>
              <div class="time">
                {{rating.rateTime}}
              </div>
            
            </div>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
import star from '../../components/star/star'
import split from "../../components/split/split"
import ratingselect from "../../components/ratingselect/ratingselect"
import BScroll from "better-scroll";
import axios from 'axios'
const ERROR_OK = 0
export default {
  props:['seller'],
  components:{
    star,
    split,
    ratingselect,
  },
  data(){
    return {
      ratings:[]
    }
  },
  created() {
    axios.get('./static/data.json')
      .then(res => {
        this.ratings = res.data.ratings
        this.seller = res.data.seller
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.ratings,{
            click:true
          })
        })
      })
    // axios.get('data.json').then(response => {
    //   if (response.body.errno === ERROR_OK) {
    //     this.ratings = response.body.data
    //     this.$nextTick(() => {
    //       this.scroll = new BScroll(this.$refs.ratings,{
    //         click:true
    //       })
    //     })
    //   }
    // })
  }
}
</script>
<style lang='scss'>
@import '../../assets/scss/index.scss';
  .ratings {
    position:absolute;
    top:174px;
    left:0;
    bottom:0;
    width:100%;
    overflow: hidden;
    .rating-content {
      .overview {
        display: flex;
        padding:18px 0;
        .overview-left {
          flex:0 0 137px;
          width:137px;
          border-right:1px solid rgba(7,17,27,0.1);
          text-align:center;
          padding:6px 0;
          @media (max-width: 320px) {
            flex:0 0 120px;
            width:120px
          }
          .score {
            font-size:24px;
            line-height: 28px;
            color:rgb(255,153,0);
            margin-bottom:6px;
          }
          .title {
            font-size:12px;
            line-height:12px;
            color:rgb(7,17,27);
            margin-bottom:8px;
          }
          .rank {
            font-size:10px;
            line-height:10px;
            color:rgb(147,153,159);
          }
        }
        .overview-right {
          flex:1;
          padding:6px 0 6px 24px;
          padding-left:24px;
          @media (max-width: 320px) {
            padding-left:6px;
          }
          .score-wrapper {
            margin-bottom:8px;
            font-size:0;
            .title {
              line-height:18px;
              display: inline-block;
              vertical-align: top;
              font-size:12px;
              color:rgb(7,17,27);
            }
            .star {
              display: inline-block;
              vertical-align: top;
              margin:0 12px;
            }
            .score {
              line-height:18px;
              display: inline-block;
              vertical-align: top;
              font-size:12px;
              color:rgb(255,153,0);
            }
          }
          .delivery-wrapper {
            font-size:0;
            .title {
              line-height:18px;
              font-size:12px;
              color:rgb(7,17,27);
            }
            .delivery {
              margin-left:12px;
              font-size:12px;
              color:rgb(147,153,159);
            }
          }
        }
      }
      .rating-wrapper {
        padding:0 18px;
        .rating-item {
          display: flex;
          padding:18px 0;
          @include border-1px(rgba(7,17,27,0.1));
          .avatar {
            flex:0 0 28px;
            width:28px;
            margin-right:12px;
            img {
              border-radius:50%;
            }
          }
          .content {
            flex:1;
            position: relative;
            .name {
              line-height: 12px;
              font-size:10px;
              margin-bottom:4px;
              color:(7,17,27);
            }
            .star-wrapper {
              margin-bottom:6px;
              font-size:0;
              .star {
                display: inline-block;
                vertical-align: top;
                margin-right:6px;
              }
              .delivery {
                display: inline-block;
                vertical-align: top;
                line-height: 12px;
                font-size:10px;
                color:rgb(147,153,159);
              }
            }
            .text {
              line-height: 18px;
              color:(7,17,27);
              font-size:12px;
              margin-bottom:8px;
            }
            .recommend {
              line-height: 16px;
              // color:(7,17,27);
              font-size:0;
              // margin-bottom:8px;
              .icon-thumb_up,.item {
                display: inline-block;
                margin:0 8px 4px 0;
                font-size:10px;
              }
              .icon-thumb_up {
                color:rgb(0,160,220)
              }
              .item {
                padding-left:0 6px;
                border:1px solid rgba(7,17,27,0.2);
                border-radius:1px;
                color:rgb(147,153,159);
                background:#fff;
              }
            }
            .time {
              position: absolute;
              top:0;
              right:0;
              line-height:12px;
              font-size:10px;
              color:rgb(147,153,159);
            }
          }

        }
      }
    }
  }
</style>