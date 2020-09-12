<template>
  <view @click.stop="onClick">
    <image class="rounded-lg" style="width: 373rpx; height: 300rpx;" :src="goods.cover" mode="aspectFill" lazy-load />
    <view class="flex flex-column desc">
      <text class="font-md">{{ goods.title }}</text>
      <text class="font-sm text-light-muted text-my-1">{{ goods.desc }}</text>
      <price :price="goods.price" :sales="goods.sales" />
    </view>
  </view>
</template>

<script>
import price from '@/components/common/price'
export default {
  components: {
    price,
  },
  props: {
    goods: Object,
    index: Number,
  },
  methods: {
    onClick() {
      uni.navigateTo({
        url: '../../pages/detail/detail',
      })
    },
  },
}
</script>

<style scoped>
.desc {
  padding-left: 20rpx;
  padding-right: 20rpx;
  /* #ifdef APP-PLUS-NVUE */
  padding-top: 20rpx;
  padding-bottom: 20rpx;
  /* #endif */
}
/* #ifdef APP-PLUS-NVUE */
.text-my-1 {
  margin: 10rpx 0;
}
/* #endif */
</style>
