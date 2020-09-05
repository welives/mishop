<template>
  <view style="width: 373rpx;">
    <image class="w-100" style="height: 300rpx;" :src="goods.cover" mode="aspectFill" lazy-load />
    <view class="flex flex-column px-2">
      <text class="font-md">{{ goods.title }}</text>
      <text class="font-sm text-light-muted">{{ goods.desc }}</text>
      <price :price="goods.price">{{ goods.sales }}</price>
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
}
</script>

<style scoped></style>
