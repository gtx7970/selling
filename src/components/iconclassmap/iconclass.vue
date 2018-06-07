<template>
  <div class="iconlist">
    <span class="icon" :class="classMap[idx]"></span>
  </div>
</template>

<script>
export default {
  props:['idx'],
  created() {
      this.classMap = ['decrease','discount','guarantee','invoice','special']
    }
}

</script>
<style lang='scss'>
@import '../../assets/scss/index.scss';
.iconlist {
   display: inline-block;
  .icon {
    vertical-align: top;
    display: inline-block;
    width:12px;
    height: 12px;
    // line-height: 16px;
    margin-right:2px;
    background-size:12px 12px;
    background-repeat: no-repeat;
    @include icon(3);
  }
}
  
</style>