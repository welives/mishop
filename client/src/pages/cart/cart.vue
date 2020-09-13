<template>
  <view style="background-color: #f5f5f5;">
    <uni-nav-bar
      title="购物车"
      statusBar
      fixed
      :rightText="isEdit ? '完成' : '编辑'"
      @clickRight="isEdit = !isEdit"
    ></uni-nav-bar>
    <template v-if="disableSelectAll">
      <view class="flex align-center justify-center py-5 bg-white text-light-muted">
        <text class="iconfont icon-gouwuche" style="font-size: 50rpx;"></text>
        <text class="mx-2">购物车空荡荡的</text>
        <view class="px-2 py-1 border rounded text-body" hover-class="bg-light">去逛逛</view>
      </view>
    </template>

    <!-- 购物车商品列表 -->
    <template v-else>
      <view class="bg-white px-2">
        <block v-for="(item, index) in dataList" :key="index">
          <view class="flex align-center py-2 border-bottom border-light-secondary" style="height: 230rpx;">
            <label
              class="flex align-center justify-center flex-shrink-0"
              style="width: 80rpx; height: 80rpx;"
              @click.stop="selectItem(index)"
            >
              <radio color="#fd6801" :value="item.id.toString()" :checked="item.checked" />
            </label>
            <image
              class="flex-shrink-0 p-1 rounded border border-light-secondary"
              style="width: 180rpx; height: 180rpx;"
              :src="item.cover"
              mode="widthFix"
            />
            <view class="flex-fill flex flex-column pl-2" style="height: 100%">
              <view class="font-md">{{ item.title }}</view>
              <text class="text-light-muted">{{ item.spec | getSpecText }}</text>
              <view class="flex justify-between mt-auto">
                <price :sales="item.price" />
                <uni-number-box
                  :value="item.num"
                  :min="item.buy_min"
                  :max="item.stock"
                  @change="item.num = $event"
                ></uni-number-box>
              </view>
            </view>
          </view>
        </block>
      </view>
    </template>

    <!-- 合计 -->
    <view
      class="fixed-bottom flex align-center bg-white"
      style="height: 100rpx;"
      :style="'bottom:' + windowBottom + 'px;'"
    >
      <label class="flex align-center justify-center flex-shrink-0" style="width: 100rpx;" @click.stop="doSelect">
        <radio :color="disableSelectAll ? '#ccc' : '#fd6801'" :checked="checkedAll" :disabled="disableSelectAll" />
      </label>
      <view class="flex-fill flex align-center justify-center">
        <text class="font-md">合计：</text>
        <price :sales="totalPrice" salesUnitFont="font" />
      </view>
      <view class="flex-fill text-center bg-main text-white font-md" style="height: 100rpx; line-height: 100rpx;"
        >结算</view
      >
    </view>
  </view>
</template>

<script>
import demo from './demo'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar'
import price from '@/components/common/price'
import uniNumberBox from '@/components/uni-ui/uni-number-box/uni-number-box'
export default {
  components: {
    uniNavBar,
    price,
    uniNumberBox,
  },
  data() {
    return {
      windowBottom: 0,
      isEdit: false,
    }
  },
  computed: {
    ...mapState({
      dataList: (state) => state.cart.dataList,
    }),
    ...mapGetters('cart', ['checkedAll', 'totalPrice', 'disableSelectAll']),
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
  onLoad() {
    const res = uni.getSystemInfoSync()
    this.windowBottom = res.windowBottom
  },
  methods: {
    ...mapMutations('cart', ['selectItem']),
    ...mapActions('cart', ['doSelect']),
  },
}
</script>

<style scoped></style>
