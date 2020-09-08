<template>
  <view>
    <!-- 头部 -->
    <view v-if="showHead" class="px-2 py-1">
      <slot name="head">
        <text class="font-md font-weight-bold my-1">{{ title }}</text>
      </slot>
    </view>
    <!-- 内容 -->
    <view class="line-h">
      <image v-if="bodyCover" style="width: 100%; height: 300rpx;" :src="bodyCover" mode="aspectFill" lazy-load />
      <slot />
    </view>
  </view>
</template>

<script>
export default {
  props: {
    // 是否显示头部
    showHead: {
      type: Boolean,
      default: true,
    },
    // 头部标题
    title: String,
    // 封面图
    bodyCover: String,
  },
}
</script>

<style scoped></style>
