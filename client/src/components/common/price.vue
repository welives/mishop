<template>
  <view class="flex">
    <text v-if="isSales" class="text-main" :class="salesUnitFont" style="align-self: flex-start;">{{ currency }}</text>
    <slot>
      <text v-if="sales" class="text-main" :class="salesFont">{{ sales }}</text>
    </slot>
    <text v-if="price" class="ml-2 text-light-muted text-through" :class="pricefont" style="align-self: flex-end;"
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
    salesFont: {
      type: String,
      default: 'font-md',
    },
    salesUnitFont: {
      type: String,
      default: 'font-sm',
    },
    pricefont: {
      type: String,
      default: 'font-sm',
    },
  },
}
</script>

<style scoped></style>
