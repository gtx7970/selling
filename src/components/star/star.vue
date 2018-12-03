<template>
  <div class="star" :class="starType">
    <span v-for="(item, index) in itemClass" :class="item" class="star-item" :key="index"></span>
  </div>
</template>

<script>
const LENGTH = 5
const HALF_CLASS = 'half'
const ON_CLASS = 'on'
const OFF_CLASS = 'off'

export default {
  props: {
    score: {
      type: Number
    },
    size: {
      type: Number
    }
  },
  computed: {
    starType() {
      return `star-${this.size}`
    },
    itemClass() {
      const result = []
      let score = Math.floor((this.score * 2) / 2)
      let isHalf = score % 1 === 0
      let len = Math.floor(score)
      for (let i = 0; i < len; i++) {
        result.push(ON_CLASS)
      }
      if (isHalf) {
        result.push(HALF_CLASS)
      }
      while (result.length < LENGTH) {
        result.push(OFF_CLASS)
      }
      return result
    }
  }

}

</script>
<style lang='stylus' scoped>
  @import "~common/stylus/mixin.styl"

  .star
    display: flex
    align-items: center
    justify-content: center
    .star-item
      background-repeat: no-repeat
    &.star-48
      .star-item
        width: 20px
        height: 20px
        margin-right: 22px
        background-size: 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('star48_on')
        &.off
          bg-image('star48_off')
        &.half
          bg-image('star48_half')
    &.star-36
      .star-item
        width: 15px
        height: 15px
        margin-right: 6px
        background-size: 15px 15px
        &:last-child
          margin-right: 0
        &.on
          bg-image('star36_on')
        &.off
          bg-image('star36_off')
        &.half
          bg-image('star36_half')
    &.star-24
      .star-item
        width: 10px
        height: 10px
        margin-right: 3px
        background-size: 10px 10px
        &:last-child
          margin-right: 0
        &.on
          bg-image('star24_on')
        &.off
          bg-image('star24_off')
        &.half
          bg-image('star24_half')
</style>
