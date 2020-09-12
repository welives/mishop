<template>
  <view class="cate-container border-light-secondary">
    <view
      class="cate-item"
      :style="getWidth"
      v-for="(cate, index) in cateList"
      :key="index"
      @click.stop="onClick(cate)"
    >
      <image style="width: 60rpx; height: 60rpx;" :src="cate.src" mode="" />
      <!-- #ifdef APP-PLUS-NVUE -->
      <text class="font-sm text-muted" style="margin-top: 10rpx;">{{ cate.name }}</text>
      <!-- #endif -->
      <!-- #ifndef APP-PLUS-NVUE -->
      <text class="font-sm text-muted">{{ cate.name }}</text>
      <!-- #endif -->
    </view>
  </view>
</template>

<script>
export default {
  props: {
    cateList: Array,
  },
  computed: {
    getWidth() {
      let width = `width: 20%;`
      // #ifdef APP-PLUS-NVUE
      width = `width: ${710 / 5}rpx;`
      // #endif
      return width
    },
  },
  methods: {
    onClick(cate) {
      uni.showToast({
        title: '点击了' + cate.name,
        icon: 'none',
      })
    },
  },
}
</script>

<style scoped>
.cate-container {
  /* #ifndef APP-PLUS-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20rpx;
}
.cate-item {
  /* #ifndef APP-PLUS-NVUE */
  display: flex;
  /* #endif */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10rpx;
  margin-bottom: 10rpx;
}
</style>
