<template>
  <tab-bar>
      <tab-bar-item path='/home'>
        <img slot='item-icon' src="~assets/img/home.png" alt="">
        <img slot='item-icon-active' src="~assets/img/home_active.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/cart'>
      <img slot="item-icon" src="~assets/img/gouwu.png" alt="">
      <img slot="item-icon-active" src="~assets/img/gouwu_active.png" alt="">
      <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <img slot="item-icon" src="~assets/img/dianpu.png" alt="">
      <img slot="item-icon-active" src="~assets/img/dianpu_active.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='profile'>
        <img slot="item-icon" src="~assets/img/ziliao.png" alt="">
      <img slot="item-icon-active" src="~assets/img/ziliao_active.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabber/Tabbar.vue'
import TabBarItem from 'components/common/tabber/TabbarItem.vue'
export default {
 components:{
    TabBar,
    TabBarItem
  }
}

</script>

<style>

</style>