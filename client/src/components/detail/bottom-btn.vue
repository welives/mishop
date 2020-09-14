<template>
  <view>
    <view class="fixed-bottom bg-white" style="height: 100rpx;">
      <view class="flex" style="height: 100%;">
        <view class="flex-fill flex">
          <view
            class="flex-fill flex align-center flex-column line-h"
            hover-class="bg-hover-light"
            @click.stop="addCollect"
          >
            <text class="iconfont icon-xihuan text-light-muted"></text>
            收藏
          </view>
          <view
            class="flex-fill flex align-center flex-column line-h"
            hover-class="bg-hover-light"
            @click.stop="openCart"
          >
            <text class="iconfont icon-gouwuche text-light-muted"></text>
            购物车
          </view>
        </view>
        <view
          class="flex-fill flex align-center justify-center bg-main text-white font-md"
          hover-class="bg-hover-main"
          style="height: 100%"
          @click.stop="$emit('add-cart')"
          >加入购物车</view
        >
      </view>
    </view>
    <view style="height: 100rpx;"></view>
  </view>
</template>

<script>
export default {
  methods: {
    addCollect() {
      console.log('加入收藏')
      this.$emit('collect')
    },
    openCart() {
      uni.switchTab({
        url: '/pages/cart/cart',
      })
    },
    addCart() {
      console.log('加入购物车')
      this.$emit('cart')
    },
  },
}
</script>

<style scoped></style>
