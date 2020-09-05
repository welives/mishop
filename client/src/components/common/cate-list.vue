<template>
  <view class="flex-column flex align-center justify-center my-1" style="width: 20%;" @click.stop="onClick">
    <image style="width: 60rpx; height: 60rpx;" :src="cate.src" mode="" />
    <text class="font-sm text-muted">{{ cate.name }}</text>
  </view>
</template>

<script>
export default {
  props: {
    cate: Object,
    index: Number,
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

<style scoped></style>
