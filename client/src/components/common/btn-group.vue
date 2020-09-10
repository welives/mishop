<template>
  <view class="flex my-2">
    <block v-for="(item, index) in label.list" :key="index">
      <view class="flex-fill px-2" @click.stop="$emit('update:index', index)">
        <view class="text-center py rounded" :class="label.index === index ? 'btn-active' : 'bg-light'">{{
          item.text
        }}</view>
      </view>
    </block>
  </view>
</template>

<script>
export default {
  props: {
    label: Object,
  },
}
</script>

<style scoped>
.btn-active {
  color: #fd6801;
  border: 1rpx solid #fd6801;
  background-color: #fce0d5 !important;
}
</style>
