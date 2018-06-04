<template>
  <div class="seller" ref="seller">
    <div class="seller-content">
      <div class="overview">
        <div class="title">{{seller.name}}</div>
        <div class="desc">
          <star :size="36" :score="seller.score"/>
          <span class="text">{{seller.ratingCount}}</span>
          <span class="text">{{seller.sellCount}}</span>
        </div>
        <ul class="remark">
          <li class="block">
            <h2 class="name">起送价</h2>
            <div class="content">
              <span class="stress">{{seller.minPrice}}</span>元
            </div>
          </li>
          <li class="block">
            <h2 class="name">商家配送</h2>
            <div class="content">
              <span class="stress">{{seller.deliveryPrice}}</span>元
            </div>
          </li>
          <li class="block">
            <h2 class="name">平均配送时间</h2>
            <div class="content">
              <span class="stress">{{seller.minPrice}}</span>分钟
            </div>
          </li>
        </ul>
      </div>
      <split/>
      <div class="bulletin">
        <div class="title">公告与活动</div>
        <div class="content-wrapper">
          <p class="content">{{seller.bulletin}}</p>
        </div>
        <ul v-if="seller.supports" class="supports">
          <li v-for="(item,index) in seller.supports" :key="index" class="support-item">
            <!-- <span class="icon" :class="classMap[index]"></span> -->
            <iconclass :idx="index"/>
            <span class="text">{{item.description}}</span>  
          </li>
        </ul>
      </div>
      <split/>
      <div class="pics">
        <div class="title">商家实景</div>
        <div class="pic-wrapper" ref="piclist">
          <ul class="pic-list">
            <Li class="pic-item" v-for="(pic,index) in seller.pics" :key="index">
              <img :src="pic" width="120" height="90">
            </Li>
          </ul>
        </div>
      </div>
      <split/>
      <div class="info">
        <h1 class="title">商家信息</h1>
        <ul>
          <li class="info-item" v-for="info in seller.infos">{{info}}</li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
import star from '../../components/star/star'
import split from "../../components/split/split"
import iconclass from '../../components/iconclassmap/iconclass'
export default {
  props:['seller'],
  components:{
    star,
    split,
    iconclass
  },
  mounted(){
    console.log(this.seller)
    this.scroll = new BScroll(this.$refs.seller,{
      click:true
    })
    if(this.seller.pics) {
      let picWidth = 120
      let margin = 6
      let total = picWidth + margin
      let width = total *(this.seller.pics.length) - margin
      this.$refs.piclist.style.width = width + 'px'
      this.$nextTick(()=>{
        this.picScroll = new BScroll(this.$refs.piclist,{
          // click:true,
          scrollX: true,
          eventPassthrough: 'vertical'
        })
      })

    }
  }

}
</script>
<style lang='scss'>
@import '../../assets/scss/index.scss';
  .seller {
    position: absolute;
    left:0;
    bottom:0;
    top:174px;
    width:100%;
    overflow: hidden;
    .overview {
      padding:18px;
      .title {
        margin-bottom:8px;
        line-height: 14px;
        color:rgb(7,17,27);
        font-size:14px;
      }
      .desc {
        padding-bottom:18px;
        font-size:0;
        @include border-1px(rgba(7,17,27,0.1));
        .star {
          display:inline-block;
          vertical-align: top;
        }
        .text {
          line-height:18px;
           display:inline-block;
           vertical-align: top;
           font-size:10px;
        }
      }
      .remark {
        display: flex;
        padding:18px;
        .block {
          flex:1;
          text-align:center;
          border-right:1px solid rgba(7,17,27,0.1);
          &:last-child {
            border:none;
          }
          .name {
            margin-bottom:4px;
            line-height:10px;
            font-size:10px;
            color:rgb(1477,153,159);
          }
          .content {
            line-height:24px;
            font-size:10px;
            color:rgb(7,17,27);
            .stress {
              font-size:24px;
            }
          }

        }
      }
    }
    .bulletin {
      padding:18px 18px  0 18px;
      .title {
        margin-bottom:8px;
        line-height: 14px;
        color:rgb(7,17,27);
        font-size:14px;
      }
      .content-wrapper {
        padding:0 12px 16px 12x;
        @include border-1px(rgba(7,17,27,0.1));
        .content {
          line-height: 24px;
          font-size:12px;
          color:rgb(240,20,20);
        }
      }
      .supports {
        .support-item {
          padding:16px 12px;
          font-size:0;
          @include border-1px(rgba(7,17,27,0.1));
          &:last-child {
            border:none;
          }
          .text {
            line-height:16px;
            font-size:12px;
            color:rgb(7,17,27);
          }
        }
      }
    }
    .pics {
      padding:18px;
      .title {
        margin-bottom:12px;
        line-height: 14px;
        color:rgb(7,17,27);
        font-size:14px;
      }
      .pic-wrapper {
        width:100%;
        overflow: hidden;
        white-space: nowrap;
        .pic-list {
          font-size:0;
          .pic-item {
            display: inline-block;
            margin-right:6px;
            width:120px;
            height:90px;
            &:last-child {
              margin:0;
            }
          }
        }
      }
    }
    .info {
      padding:18px 18px 0 18px;
      color:rgb(7,17,27);
      .title {
        padding-bottom:12px;
        line-height:14px;
        color:rgb(7,17,27);
        font-size:14px;
        @include border-1px(rgba(7,17,27,0.1));
      }
      .info-item {
        padding:16px 12px;
        line-height:16px;
        @include border-1px(rgba(7,17,27,0.1));
        font-size:12px;
        &:last-child {
          border:none;
        }
      }
    }
    
  }
</style>