<!--  -->
<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo">
            <span class="icon-shop-cart"></span>
          </div>
          <div class="price">{{minPrice}}</div>
          <div class="des">{{deliveryPrice}}</div>
        </div>
      </div>
      <div class="content-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    minPrice: {
      type:Number
    },
    deliveryPrice:{
      type:Number
    }
  },
  computed: {
    totalPrice() {
      
    }
  }
};
</script>
<style lang='scss'>
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
    .content-left {
      flex: 1;
      .logo-wrapper {
        display: inline-block;
        border-radius:50%;
        height:56px;
        width:56px;
        position: relative;
        top:-10px;
        background: #141d27;
        .logo {
            width:100%;
            height:100%;
            border-radius:50%;
            background: #2b343c;
        }

      }
      .price {
        display: inline-block;
        line-height:24px;
        margin-top:24px;
        box-sizing: border-box;
        color:rgba(255,255,255,0.4);
      }
      .des {
        display: inline-block;
        line-height: 24px;
        color:rgba(255,255,255,0.4);
      }
    }
    .content-right {
      flex: 0 0 105px;
      width: 105px;
    }
  }
}
</style>
