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
            <li v-for="food in item.foods" class="food-item" @click="chooseFood(food,$event)">
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
                  <cartbtn :food="food" @addball="addFood"></cartbtn>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopcart ref="shopcart" :selectFood="selectFood" :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"></shopcart> 
    <food :food="selectedFood" ref="food" @addball="addFood"/>
  </div> 
</template>

<script>
import BScroll from "better-scroll";
import shopcart from "../../components/shopcart/shopcart"
import cartbtn from "../../components/cartbtn/cartbtn"
import iconclass from '../../components/iconclassmap/iconclass'
import food from '../../components/food/food'
import axios from 'axios'
const ERROR_OK = 0
export default {
  data() {
    return {
      goods: [],
      listHeight:[],
      scrollY:0,
      selectedFood:{}
    }
  },
  props:['seller'],
  components:{
    shopcart,
    cartbtn,
    iconclass,
    food
  },
  created() {
    axios.get('./static/data.json').then((res) => {
      this.goods = res.data.goods
      this.$nextTick(() => {
        this._initScroll(); // 初始化scroll
        this._calcHeight(); // 初始化列表高度列表
      })
    });
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
    },
    selectFood(){
      let foods =[]
      this.goods.forEach(good => {
        good.foods.forEach(food => {
          if(food.count>0){
            foods.push(food)
          }
        })
      })
      return foods
    }
  },
  methods: {
    addFood(target){
      this._drop(target) //
    },
    _drop(target) {
        this.$nextTick(() => {
          this.$refs.shopcart.drop(target); //调用子组件的方法
        });
    },
    chooseFood(food,event){
      // if(!event._constructed) return
      console.log(food)
      this.selectedFood = food
      this.$refs.food.show() //显示详情
    },
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
  },

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