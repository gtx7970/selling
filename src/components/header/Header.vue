<!--  -->
<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" alt="avatar" width="64" height="64">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description" v-if="seller.description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div class="supports" v-if="seller.supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="support-cout" @click="showDetail" v-if="seller.supports">
       <span class="count">{{seller.supports.length}}个</span>
       <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar">
    </div>
    <transition name="fade">
      <div v-show="detailShow" class="detail">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1 class="name">{{seller.name}}</h1>
            <div class="star-wrapper">
              <star :size="48" :score="seller.score" />
            </div>
            <div class="star-wrapper">
            </div>
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul v-if="seller.supports" class="supports">
              <li v-for="(item,index) in seller.supports" :key="index" class="support-item">
                <span class="icon" :class="classMap[index]"></span>
                <span class="text">{{item.description}}</span>  
              </li>
            </ul>
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="bulletin">
              <p class="content">{{seller.bulletin}}</p>
            </div>
            

          </div>
        </div>
        <div class="deatail-close" @click="hideDetail">
          <i class="icon-close"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import star from '../../components/star/star'
  export default {
    props: ['seller'],
    data() {
      return {
        detailShow:false
      }
    },
    methods: {
      showDetail() {
        this.detailShow = true
      },
      hideDetail(){
        this.detailShow = false
      }
    },
    components: {
      star
    },
    created() {
      this.classMap = ['decrease','discount','guarantee','invoice','special']
    }
  }

</script>
<style lang="scss">
@import '../../assets/scss/index.scss';
  .header {
    color: #fff;
    background:rgba(7,17,27,0.5);
    position: relative;
    overflow: hidden;
    .background {
      position: absolute;
      width:100%;
      height:100%;
      top:0;
      left:0;
      z-index:-1;
      filter:blur(10px);
      img {
        width:100%;
        height:100%;
      }
    }   
    .content-wrapper {
      padding:24px 12px 18px 24px;
      font-size:0;
      position:relative;
      .avatar {
        display: inline-block;
        vertical-align: top;
        img {
          border-radius:2px;
          display: block;
        }
      }
      .content {
        display:inline-block;
        margin-left:16px;
        font-size:0;
        .supports {
          .text {
            line-height: 12px;
            font-size:10px;  
          }
          .icon {
            display: inline-block;
            vertical-align: top;
            width:12px;
            height:12px;
            margin-right:4px;
            background-size:12px 12px;
            background-repeat: no-repeat;
            // &.decrease {
            //   @include bg-image('decrease_1');
            // }
            // &.discount {
            //   @include bg-image('discount_1');
            // }
            // &.guarantee {
            //   @include bg-image('guarantee_1');
            // }
            // &.invoice {
            //   @include bg-image('invoice_1');
            // }
            // &.special {
            //   @include bg-image('special_1');
            // }
            @include icon(1);
          }
          
        }  
        .description {
          font-size:12px;
          line-height: 12px;
          margin-bottom:10px;
        }
        .title {
          margin: 2px 0 8px 0;
          .brand {
            vertical-align: top;
            display: inline-block;
            @include bg-image('brand');
            width:30px;
            height: 18px;
            background-size: 30px 18px;
            background-repeat: no-repeat;
          }
          .name {
            font-size:16px;
            margin-left:6px;
            font-weight:bold;
            line-height: 18px;
          }
          .star-wrapper {
            margin:18px;
            padding: 2px 0;
            text-align:center;
          }
        }
      }
      .support-cout {
        position:absolute;
        right:12px;
        bottom:18px;
        padding:0 8px;
        height:24px;
        line-height:24px;
        border-radius:14px;
        background:rgba(0,0,0,.2);
        text-align: center;
        vertical-align: top;
        .count {
          font-size:10px;
        }
        .icon-keyboard_arrow_right {
          font-size:10px;
          line-height:24px;
          margin-left:2px;
      
        }
      }
  }
    .bulletin-wrapper {
        position: relative;
        height:28px;
        line-height: 28px;
        padding: 0 22px 0 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        background: rgba(7,17,27,0.2);
        .bulletin-title {
          margin-top:8px;
          vertical-align: top;
          display: inline-block;
          width:22px;
          height:12px;
          @include bg-image('bulletin');
          background-size: 22px 12px;
          background-repeat: no-repeat;
        }
        .bulletin-text {
          vertical-align: top;
          font-size: 10px;
          margin:0 4px ;
        }
        .icon-keyboard_arrow_right {
          position: absolute;
          font-size:10px;
          right:12px;
          top:8px;
        }
      }
    .detail {
      position: fixed;
      overflow: auto;
      width:100%;
      height:100%;
      z-index:100;
      top:0;
      left:0;
      background:rgba(7,17,27,0.8);
      backdrop-filter: blur(10px);
      &.fade-enter,&.fade-leave-active{
        opacity: 0; 
        background:rgba(7,17,27,0);
      }
      &.fade-enter-active,&.fade-leave-active {
        transition: all 1s ease;
      }
      // &.fade-leave-to {
      //   opacity: 1;
      //   background:rgba(7,17,27,0.8);
      // }
     
      // &.fade-leave-active {
      //   transition: all .3s ease;
      // }
      
      .detail-wrapper {
        min-height:100%;
        width:100%;
        .detail-main {
          margin-top:64px;
          padding-bottom: 64px;
          .name {
            line-height:16px;
            text-align:center;
            font-size:16px;
            font-weight: 700;
          }
          .star-wrapper {
            text-align:center;
          }
          .title {
            display: flex;
            width:80%;
            margin:28px auto 24px auto;
            .line {
              flex:1;
              border-bottom:1px solid rgba(255,255,255,0.2);
              position: relative;
              top:-6px;
            }
            .text {
              font-weight: 700;
              padding:0 12px;
              font-size:14px;
            }
          }
          .supports {
            width:80%;
            margin:0 auto;
            .support-item {
              padding:0 12px;
              margin-bottom: 12px;
              font-size:0;
              &:last-child {
                margin-bottom: 0;
              }
              .text {
                line-height:16px;
                font-size:12px;
              }
              .icon {
                vertical-align: top;
                display: inline-block;
                width:16px;
                height: 16px;
                // line-height: 16px;
                margin-right:6px;
                background-size:16px 16px;
                background-repeat: no-repeat;
                @include icon(2);
              }
            }

          }
          .bulletin {
            width:80%;
            margin:0 auto;
            .content {
              padding:0 12px;
              line-height:24px;
              font-size:12px;
            }
          }
        }
      }
      .deatail-close {
        position: relative;
        width:32px;
        height:32px;
        margin:-64px  auto 0 auto;
        clear: both;
        font-size:32px;
      }
    }
  }

</style>
