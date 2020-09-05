<template>
  <view class="flex justify-between">
    <!-- 左 -->
    <image
      style="width: 374rpx; height: 530rpx;"
      :src="threeAd.left.src"
      mode="aspectFill"
      lazy-load
      @click.stop="onClick(threeAd.left)"
    />
    <!-- 右 -->
    <view class="flex flex-column">
      <image
        class="flex-shrink-0"
        style="width: 374rpx; height: 263rpx"
        :src="threeAd.rightTop.src"
        mode="aspectFill"
        lazy-load
        @click.stop="onClick(threeAd.rightTop)"
      />
      <view class="flex-fill"></view>
      <image
        class="flex-shrink-0"
        style="width: 373rpx; height: 263rpx;"
        :src="threeAd.rightBottom.src"
        mode="aspectFill"
        lazy-load
        @click.stop="onClick(threeAd.rightBottom)"
      />
    </view>
  </view>
</template>

<script>
export default {
  props: {
    threeAd: Object,
  },
  methods: {
    onClick(obj) {
      console.log(obj.src)
    },
  },
}
</script>

<style scoped></style>
