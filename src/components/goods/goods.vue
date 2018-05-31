<!--  -->
<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul class="items">
        <li v-for="item in goods" class="menu-item">
          <span class="text">
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li v-for="item in goods" class="food-list">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item">
              <div class="icon">
                <img :src="food.icon">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="des">{{food.description}}</p>
                <div class="extra">
                  <span>月售{{food.sellCount}}</span>
                  <span>好评率{{food.rating}}</span>
                </div>
                <div class="price">
                  <span>￥{{food.price}}</span>
                  <span v-show="food.oldPrice"></span>
                </div>
                <div class="cartcon">
                  <cartbtn :food="food"></cartbtn>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopcart :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"></shopcart> 
  </div> 
</template>

<script>
import BScroll from "better-scroll";
import shopcart from "../../components/shopcart/shopcart"
import cartbtn from "../../components/cartbtn/cartbtn"
export default {
  data() {
    return {
      goods: []
    };
  },
  props: {
    seller:{}
  },
  components:{
    shopcart,
    cartbtn 
  },
  created() {
    this.$http.get("/api/goods").then(response => {
      if (response.body.errno === 0) {
        this.goods = response.body.data;
        this.$nextTick(() => {
          this._initScroll();
        });
      }
    });
  },
  methods: {
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper);
      this.foodScroll = new BScroll(this.$refs.foodsWrapper);
    },
    _calcHeight(){

    }
  }
};
</script>
<style lang='scss'>
  .goods {
    display: flex;
    position: absolute;
    top: 200px;
    bottom: 46px;
    width: 100%;
    overflow: hidden;
    .menu-wrapper {
      flex: 0 0 80px;
      background: #f3f5f7;
      .items {
        .menu-item {
          display: table;
          height: 54px;
          width: 56px;
          line-height: 14px;
          .text {
            display: table-cell;
            font-size: 12px;
          }
        }
      }
    }
    .foods-wrapper {
      flex: 1;
      .title {
        padding-left: 14px;
      }
      .food-item {
        display: flex;
        margin: 18px;
      }
    }
  }
</style>