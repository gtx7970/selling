<template>
  <div id ="app">
    <v-header :seller="seller"></v-header>
    <v-tab></v-tab>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
// import 'normalize.css'
import Header from './components/header/Header'
import Tab from './components/tab/Tab'

export default {
  name: 'App',
  data() {
    return {
      seller:{
        id:(()=>{
          let queryParam = urlParse()
          return queryParam.id
        })
      }    //  
    }
  },
  created() {
    this.$http.get('/api/seller')
      .then((response) => {
        console.log(response)
        if(response.body.errno === 0) {
          this.seller = response.body.data
          console.log(this.seller)
        }
      })
  },
  components:{
    'v-header':Header,
    'v-tab':Tab
    }
}
</script>

<style lang='scss'>
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
</style>
