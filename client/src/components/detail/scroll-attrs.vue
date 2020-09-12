<template>
  <scroll-view class="scroll-row" scroll-x>
    <block v-for="(item, index) in baseAttrs" :key="index">
      <view class="scroll-row-item" style="width: 170rpx; height: 110rpx;">
        <view class="flex flex-column align-center justify-center" style="line-height: 1.2;">
          <text class="iconfont" :class="item.icon"></text>
          <text>{{ item.title }}</text>
          <text class="font-sm text-light-muted">{{ item.desc }}</text>
        </view>
      </view>
    </block>
  </scroll-view>
</template>

<script>
export default {
  props: ['baseAttrs'],
}
</script>

<style scoped></style>
