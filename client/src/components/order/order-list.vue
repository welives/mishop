<template>
  <view class="bg-white">
    <!-- 头部 -->
    <view class="flex align-center justify-between p-2 border-bottom border-light-secondary">
      <text class="text-light-muted">{{ order.created_at }}</text>
      <text class="text-main">{{ order.status }}</text>
    </view>
    <!-- 中间 -->
    <view class="px-2">
      <block v-for="(item, idx) in order.goods" :key="idx">
        <view class="flex align-center p-2 border-bottom border-light-secondary">
          <image
            class="rounded flex-shrink-0"
            style="width: 150rpx; height: 150rpx;"
            :src="item.cover"
            mode="widthFix"
          />
          <view class="flex-fill flex justify-between ml-2">
            <view class="flex flex-column">
              <text class="font-md">{{ item.title }}</text>
              <text class="text-light-muted">{{ item.attr }}</text>
            </view>
            <view class="flex flex-column text-light-muted text-right">
              <text>￥{{ item.price.toFixed(2) }}</text>
              <text>x{{ item.num }}</text>
            </view>
          </view>
        </view>
      </block>
    </view>
    <!-- 底部 -->
    <view class="flex align-center justify-end px-2">
      <view class="py-2">共{{ order.goods.length }}件商品，合计：￥{{ getTotalPrice }}</view>
    </view>
    <view class="flex align-center justify-end px-2 pb-2 text-muted">
      <view class="px-2 py border rounded" hover-class="bg-light">查看物流</view>
      <view class="ml-2 px-2 py border rounded" hover-class="bg-light">确认收货</view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    order: Object,
    index: Number,
  },
  computed: {
    getTotalPrice() {
      let total = 0
      this.order.goods.map((v) => {
        total += v.price * v.num
      })
      return total.toFixed(2)
    },
  },
}
</script>

<style scoped></style>
