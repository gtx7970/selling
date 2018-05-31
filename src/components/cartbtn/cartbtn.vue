<!--  -->
<template>
  <div class="cartbtn">
    <div class="cart-decrease"></div>
    <div class="cart-count"></div>
    <div class="cart-add"></div>
  </div>
</template>

<script>
export default {
  props: {
    food: {}
  },
  created() {
    console.log(this.food);
  }
};
</script>
<style lang='scss' >
.cartbtn {
  .cart-decrease {
    display: inline-block;
    padding: 6px;
  }
  .cart-count {
  }
  .cart-add {
  }
}
</style>