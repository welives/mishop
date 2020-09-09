<template>
  <view class="flex font-md">
    <text v-if="isSales" class="text-main font-small" style="align-self: flex-start;">{{ currency }}</text>
    <slot>
      <text v-if="sales" class="text-main">{{ sales }}</text>
    </slot>
    <text v-if="price" class="ml-2 font-sm text-light-muted text-through" style="align-self: flex-end;"
      >{{ currency }}{{ price }}</text
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
    sales: [Number, String],
    price: [Number, String],
    currency: {
      type: String,
      default: '￥',
    },
  },
}
</script>

<style scoped></style>
