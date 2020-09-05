<template>
  <swiper indicator-dots autoplay :interval="3000" circular indicator-active-color="#fd6801">
    <block v-for="(item, index) in carousel" :key="index">
      <swiper-item>
        <image style="width: 100%; height: 100%;" :src="item.src" mode="aspectFill" lazy-load @click.stop="onClick" />
      </swiper-item>
    </block>
  </swiper>
</template>

<script>
export default {
  props: {
    carousel: Array,
  },
  methods: {
    onClick() {
      console.log('点击了轮播图')
    },
  },
}
</script>

<style scoped></style>
