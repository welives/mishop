<template>
  <view>
    <swiper indicator-dots autoplay :interval="3000" circular indicator-active-color="#fd6801" :style="imageStyle">
      <swiper-item v-for="(item, index) in carousel" :key="index">
        <image class="w-100" :style="imageStyle" :src="item.src" lazy-load @click.stop="onClick" />
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
export default {
  props: {
    carousel: [Array, Object],
    height: {
      type: [Number, String],
      default: 300,
    },
  },
  computed: {
    imageStyle() {
      return `height: ${this.height}rpx;`
    },
  },
  methods: {
    onClick() {
      console.log('点击了轮播图')
    },
  },
}
</script>

<style scoped></style>
