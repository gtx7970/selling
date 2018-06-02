<!--  -->
<template>
  <div class="shopcart">
    <!-- {{selectFood}} -->
    <div class="content">
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
      <div class="content-right">
        <div class="pay" :class="payclass">
          {{paydes}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['deliveryPrice','minPrice','selectFood'],
  // data(){
  //   return {
  //     selectFood:[{price:10,count:0}]
  //   }
  // },
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
}
</style>
