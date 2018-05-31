<!--  -->
<template>
  <div class="tab border-1px">
      <router-link to="/goods" tag="div" class="tab-item">
        <span>商品</span>
      </router-link>
      <router-link to="/rating" tag="div" class="tab-item">
        <span>评价</span>
      </router-link>
      <router-link to="/seller" tag="div" class="tab-item">
        <span>商家</span>
      </router-link>
  </div>
</template>

<script>
export default {}
  
</script>
<style lang='scss'>
  @import '../../assets/index.scss';
  .tab {
    display: flex;
    width:100%;
    height:40px;
    line-height:40px;
    @include border-1px(rgba(7,17,27,0.1));
    .tab-item {
      flex:1;
      text-align:center;
      &.router-link-active {
          span {
            color:rgb(240,20,20);
          }   
      }
      span {
          font-size: 14px;
          color:rgb(77,85,93);
      }
    }
  }
</style>