<template>
  <view class="flex p-2 border-bottom border-light-secondary animated fadeIn">
    <image class="flex-shrink-0 mr-2" style="width: 250rpx;" :src="goods.cover" mode="widthFix" />
    <view class="flex-fill flex flex-column px-1 line-h">
      <text class="font-md font-weight-bold">{{ goods.title }}</text>
      <text class="font-sm text-light-muted mb-auto">{{ goods.desc }}</text>
      <price class="line-h" :sales="goods.sales" />
      <view class="text-light-muted line-h">
        <text class="mr-2">{{ goods.comment_count }} 条评论</text>
        <text>{{ goods.praise_count }} 满意</text>
      </view>
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
