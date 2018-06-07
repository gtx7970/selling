<!--  -->
<template>
  <div class="ratingselect">
    <div class="rating-type">
      <span @click="select(2,$event)" class="block positive" :class="{'active':selectType===2}">{{desc.all}}<span class="count">{{ratings.length}}</span></span>
      <span @click="select(0,$event)" class="block positive" :class="{'active':selectType===0}">{{desc.positive}}<span class="count">{{positives.length}}</span></span>
      <span @click="select(1,$event)" class="block negative" :class="{'active':selectType===1}">{{desc.negative}}<span class="count">{{negatives.length}}</span></span>
    </div>
    <div @click="toggleContent" class="switch" :class="{'on':onlyContent===true}">
      <span class="icon-check_circle"></span>
      <span class="text">只看有内容的评价</span>
    </div>
  </div>
</template>

<script>
const POSITIVE = 0;
const NEGATIVE = 1;
const ALL = 2;
export default {
  props:['ratings','selectType','onlyContent','desc'], // 评论 种类 只看内容 描述
  methods: {
    select(type,event){
      if(!event._constructed) return
      // this.change(tyep)
      // this.selectType = type
      this.$emit('changeSelectType',type) //向父组件传递改变selectType
    },
    toggleContent(event){
      if(!event._constructed) return
      // this.onlyContent = !this.onlyContent
      this.$emit('changeContentType')   ////向父组件传递改变onlyContent
    }
  },
  computed: {
    positives(){
      return this.ratings.filter(rating => {
        return rating.rateType === POSITIVE
      })
    },
    negatives(){
      return this.ratings.filter(rating => {
        return rating.rateType === NEGATIVE
      })
    }
  }
}

</script>
<style lang='scss' scoped>
@import '../../assets/scss/index.scss';
.ratingselect {
  .rating-type {
    padding:18px 0;
    margin:0 18px;
    @include border-1px(rgba(7,17,27,0.1));
    font-size:0;
    .block {
      display: inline-block;
      padding:8px 12px;
      margin-right:8px;
      border-radius:1px;
      color:rgb(77,85,93);
      font-size:12px;
      line-height:16px;
      &.active {
        color:#fff;
      }
      &.positive {
        background:rgba(0,160,220,0.2);
        &.active {
          background:rgb(0,160,220);
        }
      }
      &.negative {
        background:rgba(77,85,93,0.2);
        &.active {
          background:rgb(77,85,93)
        }
      }
      .count {
        font-size:8px;
        margin-left:2px;
        
      }
    }
  }
  .switch {
    padding:12px 18px;
    line-height:24px;
    border-bottom:1px solid rgba(7,17,27,0.2);
    color:rgb(147,159,159);
    font-size:0;
    &.on {
      .icon-check_circle {
      color:#00c850;
      }
    }
    .icon-check_circle {
      vertical-align: top;
      display: inline-block;
      font-size:24px;
      margin-right:4px;
    }
    .text {
      vertical-align: top;
      display: inline-block;
      font-size:12px;
    }
  }
}
</style>