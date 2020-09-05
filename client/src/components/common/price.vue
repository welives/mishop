<template>
  <view class="flex text-main font-md">
    <text v-if="isSales" class="font-small" style="align-self: flex-start;">￥</text><slot />
    <text v-if="price" class="ml-2 font-sm text-light-muted text-through" style="align-self: flex-end;"
      >￥{{ price }}</text
    >
  </view>
</template>

<script>
export default {
  props: {
    isSales: {
      type: Boolean,
      default: true,
    },
    price: [Number, String],
  },
}
</script>

<style scoped></style>
