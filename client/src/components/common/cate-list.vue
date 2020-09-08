<template>
  <view class="flex flex-column align-center justify-center my-1" :style="cateWidth" @click.stop="onClick">
    <image style="width: 60rpx; height: 60rpx;" :src="cate.src" mode="" />
    <text class="font-sm text-muted text-mt-1">{{ cate.name }}</text>
  </view>
</template>

<script>
export default {
  props: {
    cate: Object,
    index: Number,
  },
  computed: {
    cateWidth() {
      let width = `width: 20%;`
      // #ifdef APP-PLUS-NVUE
      width = `width: ${710 / 5}rpx;`
      // #endif
      return width
    },
  },
  methods: {
    onClick() {
      uni.showToast({
        title: '点击了' + this.cate.name,
        icon: 'none',
      })
    },
  },
}
</script>

<style scoped>
/* #ifdef APP-PLUS-NVUE */
.text-mt-1 {
  margin-top: 10rpx;
}
/* #endif */
</style>
