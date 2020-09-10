<template>
  <view>
    <!-- 头部 -->
    <view v-if="showHead" class="px-2 py-1 border-light-secondary" :class="getHeadClass">
      <slot name="title">
        <text class="font-md my-1" :class="titleBold ? 'font-weight-bold' : ''">{{ title }}</text>
      </slot>
    </view>
    <!-- 内容 -->
    <view class="line-h-0" :class="getBodyClass">
      <image v-if="cover" style="width: 100%; height: 300rpx;" :src="cover" mode="widthFix" lazy-load />
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
    cover: String,
    // 标题是否加粗
    titleBold: {
      type: Boolean,
      default: true,
    },
    // 是否显示下边线
    headBorderBottom: {
      type: Boolean,
      default: true,
    },
    // 是否给内容加padding
    bodyPadding: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getHeadClass() {
      return {
        'border-bottom': this.headBorderBottom,
      }
    },
    getBodyClass() {
      return {
        'px-2': this.bodyPadding,
      }
    },
  },
}
</script>

<style scoped></style>
