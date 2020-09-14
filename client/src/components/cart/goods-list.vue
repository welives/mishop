<template>
  <view class="flex align-center pl-2 py-2 border-bottom border-light-secondary" style="width:100%; height: 250rpx;">
    <label
      class="flex align-center justify-center flex-shrink-0"
      style="width: 80rpx; height: 80rpx;"
      @click.stop="selectItem(index)"
    >
      <radio color="#fd6801" :value="goods.id.toString()" :checked="goods.checked" />
    </label>
    <image
      class="flex-shrink-0 p-1 rounded border border-light-secondary"
      style="width: 180rpx; height: 180rpx;"
      :src="goods.cover"
      mode="widthFix"
    />
    <view class="flex-fill flex flex-column px-2" style="height: 100%">
      <view class="font-md">{{ goods.title }}</view>
      <view
        class="flex align-center text-light-muted p-1"
        :class="isEdit ? 'bg-light rounded' : ''"
        @click.stop="$emit('spec-change', index)"
      >
        <text>{{ goods.spec | getSpecText }}</text>
        <text v-if="isEdit" class="iconfont icon-bottom ml-auto"></text>
      </view>
      <view class="flex justify-between mt-auto">
        <price :sales="goods.price" />
        <uni-number-box
          class="flex justify-end"
          :value="goods.num > goods.buy_min ? goods.num : goods.buy_min"
          :min="goods.buy_min"
          :max="goods.stock"
          @change="goods.num = $event"
        ></uni-number-box>
      </view>
    </view>
  </view>
</template>

<script>
import { mapMutations } from 'vuex'
import price from '@/components/common/price'
import uniNumberBox from '@/components/uni-ui/uni-number-box/uni-number-box'
export default {
  components: {
    price,
    uniNumberBox,
  },
  props: {
    goods: Object,
    index: Number,
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  filters: {
    getSpecText(spec) {
      return spec
        .map((v) => {
          return v.list[v.index].text
        })
        .join(' ')
    },
  },
  methods: {
    ...mapMutations('cart', ['selectItem']),
  },
}
</script>

<style scoped></style>
