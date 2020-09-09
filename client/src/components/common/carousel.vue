<template>
  <view @click.stop="onClick">
    <image style="width: 750rpx; height: 300rpx;" :src="carousel.src" lazy-load />
  </view>
</template>

<script>
export default {
  props: {
    carousel: Object,
    index: Number,
  },
  methods: {
    onClick() {
      console.log('点击了轮播图')
    },
  },
}
</script>

<style scoped></style>
