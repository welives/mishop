<template>
  <view class="p-2 flex flex-column line-h">
    <text class="font-md">{{ detail.title }}</text>
    <text class="font-sm text-light-muted mb-3">{{ detail.desc }}</text>
    <price class="line-h" :sales="detail.sales" salesFont="font-lg" salesUnitFont="font" />
  </view>
</template>

<script>
import price from '@/components/common/price'
export default {
  components: {
    price,
  },
  props: ['detail'],
}
</script>

<style scoped></style>
