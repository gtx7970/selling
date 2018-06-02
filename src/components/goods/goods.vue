<!--  -->
<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul class="items">
        <li v-for="(item,index) in goods" class="menu-item" :key="index" :class="{'current':currentIndex===index}"
        @click="selectMenu(index,$event)">
          <span class="text" >
            <iconclass v-if="item.type>0" :idx="item.type"/>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul class="food-lists">
        <li v-for="item in goods" class="food-list food-list-hook">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item">
              <div class="icon">
                <img :src="food.icon" width="57" height="57">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="des">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}</span><span>好评率{{food.rating}}</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span v-show="food.oldPrice" class="old">￥{{food.oldPrice}}</span>
                </div>
                <div class="cart-wrapper">
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
import iconclass from '../../components/iconclassmap/iconclass'
const ERROR_OK = 0
export default {
  data() {
    return {
      goods: [],
      listHeight:[],
      scrollY:0
    }
  },
  props:['seller'],
  components:{
    shopcart,
    cartbtn,
    iconclass
  },
  created() {
    this.$http.get("/api/goods").then(response => {
      if (response.body.errno === ERROR_OK) {
        this.goods = response.body.data
        this.$nextTick(() => {
          this._initScroll()
          this._calcHeight()
        })
      }
    })
  },
  computed:{
    currentIndex(){
      for(let i=0;i<this.listHeight.length;i++){
        let height1 = this.listHeight[i]
        let height2 = this.listHeight[i+1]
        if(!height2 || (this.scrollY>=height1 && this.scrollY<height2)){
          return i
        }
      }
      return 0
    }
  },
  methods: {
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper,{
        click:true
      })
      this.foodScroll = new BScroll(this.$refs.foodsWrapper,{
        probeType:3,
        click:true
      })
      this.foodScroll.on('scroll',(pos)=>{
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    _calcHeight(){
      let foodList = this.$refs.foodsWrapper.querySelectorAll('.food-list-hook')
      let height = 0
      this.listHeight.push(height) //[0]
      for(let i=0;i<foodList.length;i++){
        let item = foodList[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    },
    selectMenu(index,event){
      if(!event._constructed) return
      let foodList = this.$refs.foodsWrapper.querySelectorAll('.food-list-hook')
      let el = foodList[index]
      this.foodScroll.scrollToElement(el,300)
      console.log(index)
    }
  }
};
</script>
<style lang='scss'>
@import '../../assets/scss/index.scss';
  .goods {
    display: flex;
    position: absolute;
    top: 174px;
    bottom: 46px;
    width: 100%;
    overflow: hidden;
    .menu-wrapper {
      flex: 0 0 80px;
      background: #f3f5f7;
      width:80px;
      .items {
        .menu-item {
          display: table;
          height: 54px;
          width: 56px;
          line-height: 14px;
          padding:0 12px;
          &.current {
            position: relative;
            margin-top:-1px;
            font-weight: 700;
            background: #fff;
            z-index:10;
          }
          .text {
            border:none;
            display: table-cell;
            font-size: 12px;
            width:56px;
            vertical-align: middle;
            @include border-1px(rgba(7,17,27,0.1));

          }
        }
      }
    }
    .foods-wrapper {
      flex: 1;
      .title {
        margin-top:0;
        padding-left: 14px;
        height: 26px;
        line-height: 16px;
        border-left:2px solid #d9dde1;
        font-size:12px;
        color:rgb(147,153,159);
        background: #f3f5f7;
      }
      .food-item {
        display: flex;
        margin: 18px;
        padding-bottom:18px;
        @include border-1px(rgba(7,17,27,0.1));
        &:last-child {
          @include border-none();
          margin-bottom:0;
        }
        .icon {
          flex:0 0 57px;
          margin-right:10px;
        }
        .content {
          flex:1;
          .name {
            margin:2px 0 8px 0;
            height:14px;
            line-height: 14px;
            font-size:14px;
            color:rgb(7,17,27);
          }
          .des,.extra {
            line-height:10px;
            font-size:10px;
            color:rgb(147,153,159);
          }
          .des {
            margin-bottom: 8px;
            line-height:12px;
          }
          .extra {
            .count {
              margin-right:12px;
            }  
          }
          .price {
            font-weight: 700;
            line-height: 24px;
            .now {
              margin-right: 8px;
              font-size: 14px;
              color: rgb(240, 20, 20);
            }
            .old {
              text-decoration: line-through;
              font-size: 10px;
              color: rgb(147, 153, 159);
            }
          }
          .cart-wrapper {
              position: absolute;
              right:0;
              bottom:12px;
            }
        }
        

      }
    }
  }
</style>