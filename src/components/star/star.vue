<!--  -->
<template>
  <div class="star" :class="starType">
    <!-- {{starType}} -->
    <span v-for="(item,index) in itemClass" :class="item" class="star-item" :key="index"></span>
  </div>
</template>

<script>
const LENGTH = 5
const CLS_ON = 'on'
const CLS_OFF = 'off'
const CLS_Half = 'half'
export default { 
    props:['score','size'],
    computed: {
      starType(){
        return 'star_' + this.size
      },
      itemClass(){
        let result =[]
        let score = Math.floor(this.score *2) /2
        let hadHalf = score%1 !== 0
        let int = Math.floor(score)
        for(let i=0;i<int;i++){
          result.push(CLS_ON)
        }
        if(hadHalf){
          result.push(CLS_Half)
        }
        while(result.length<LENGTH) {
          result.push(CLS_OFF)
        }
        return result

      }
      
    }

}

</script>
<style lang='scss'>
@import '../../assets/scss/index.scss';
  .star {
    font-size:0;
    .star-item {
      display: inline-block;
      background-repeat: no-repeat;
    }
    &.star_36{
      .star-item {
        width:15px;
        height:15px;
        margin-right:6px;
        background-size: 15px 15px;
        &.on {
          @include bg-image('star36_on');
        }
        &.off {
          @include bg-image('star36_off');
        }
        &.half {
          @include bg-image('star36_half');
        }
        &:last-child {
          margin-right:0;
        }
      }
    }
    &.star_48 {
      .star-item {
        width:20px;
        height:20px;
        margin-right:22px;
        background-size: 20px 20px;
        &.on {
          @include bg-image('star48_on');
        }
        &.off {
          @include bg-image('star48_off');
        }
        &.half {
          @include bg-image('star48_half');
        }
        &:last-child {
          margin-right:0;
        }
      }
    }
   
    &.star_24{
      .star-item {
        width:10px;
        height:10px;
        margin-right:3px;
        background-size: 10px 10px;
        &.on {
          @include bg-image('star24_on');
        }
        &.off {
          @include bg-image('star24_off');
        }
        &.half {
          @include bg-image('star24_half');
        }
        &:last-child {
          margin-right:0;
        }
      }
    }
    
  }
</style>