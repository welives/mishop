<template>
  <view
    class="position-absolute flex flex-column align-center justify-center"
    style="top: 0; left: 0; right: 0; bottom: 0;"
  >
    <image style="width: 250rpx;" :src="image" mode="widthFix" />
    <view class="py-3 text-light-muted font-md">{{ msg }}</view>
  </view>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: 'http://qfjny782p.hn-bkt.clouddn.com/demo/no_pay.png',
    },
    msg: {
      type: String,
      default: '什么都没有',
    },
  },
}
</script>

<style scoped></style>
