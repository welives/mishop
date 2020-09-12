<template>
  <swiper :style="getStyle" indicator-dots autoplay :interval="3000" circular indicator-active-color="#fd6801">
    <swiper-item v-for="(image, index) in carousel" :key="index">
      <image style="width: 750rpx;" :style="getStyle" :src="image.src" lazy-load @click.stop="onClick(index)" />
    </swiper-item>
  </swiper>
</template>

<script>
export default {
  props: {
    carousel: Array,
    height: {
      type: [Number, String],
      default: 300,
    },
    preview: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {}
  },
  computed: {
    getStyle() {
      return `height:${this.height}rpx`
    },
    getUrls() {
      return this.carousel.map((v) => v.src)
    },
  },
  methods: {
    onClick(index) {
      if (this.preview) {
        return uni.previewImage({
          current: index,
          urls: this.getUrls,
          indicator: 'default',
        })
      }
    },
  },
}
</script>

<style scoped></style>
