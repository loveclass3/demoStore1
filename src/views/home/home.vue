<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">未来的搜索框</div></nav-bar>
    <home-swiper :banners="banners"/>
    <home-recommend-view :recommeds="recommeds"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './childComps/HomeSwiper.vue';
import HomeRecommendView from './childComps/HomeRecommendView.vue';
import {getHomeMultidata} from '@/network/home.js';


export default {
 name:'home',
 components:{
   NavBar,
   HomeSwiper,
  HomeRecommendView
 },
 data(){
   return {
     banners:[],
     recommeds:[]
   }
 },
 created(){
  //  1.请求多个数据。
  getHomeMultidata().then(res => {
    console.log(res);
    //  this.result = res; //这个取出全部数据，太多了
    this.banners = res.data.banner.list;
    this.recommeds = res.data.recommend.list;
  })
 }
}
</script>

<style>

</style>