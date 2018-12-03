<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
  </div>
</template>

<script>
import VHeader from 'components/v-header/Vheader'
import { getSeller } from 'api'

export default {
  name: 'app',
  data() {
    return {
      seller: {}
    }
  },
  created () {
    this._getSeller()
  },
  methods: {
    async _getSeller() {
      try {
        const res = await getSeller()
        this.seller = res
      } catch (e) {

      }
    }
  },
  components: {
    VHeader
  }
}
</script>

<style lang="stylus">
</style>
