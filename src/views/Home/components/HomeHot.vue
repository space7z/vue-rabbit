<script setup>
import HomePanel from './HomePanel.vue'
import { ref, onMounted } from 'vue'
import { findHotAPI } from '@/apis/home'

const hotList = ref([])

const getNewList = async () => {
  const res = await findHotAPI()
  console.log(res);
  hotList.value = res.result
}

onMounted(() => {
  getNewList()
})


</script>

<template>
  <HomePanel title="人气推荐" subTitle="人气推荐 好多商品">
    <ul class="goods-list">
      <li v-for="item in hotList" :key="item.id">
        <RouterLink to="/">
          <img v-img-lazy="item.picture" alt="">
          <p class="name">{{item.title}}</p>
          <p class="desc">{{item.alt}}</p>
        </RouterLink>
      </li>
    </ul>
  </HomePanel>
</template>

<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .price {
      color: $priceColor;
    }
  }
}
</style>