<template>
  <view>
    <view
      class="bg-main text-white flex align-center justify-between px-2"
      hover-class="bg-hover-main"
      style="height: 200rpx; margin-top: -20rpx;"
      @click.stop="openAddrList"
    >
      <template v-if="address">
        <view class="flex-fill px-2">
          <view class="flex align-center">
            <text class="mr-2 font-md font-weight-bold">{{ address.name }} {{ address.phone }}</text>
            <text v-if="address.isDefault" class="border border-white rounded font-sm px-2 py">默认</text>
          </view>
          <view style="opacity: 0.9;">{{ address.location }} {{ address.street }}</view>
        </view>
      </template>
      <template v-else>
        <view class="flex-fill px-2 font-md">请选择收货地址</view>
      </template>
      <view class="flex-shrink-0 iconfont icon-you font-md text-light-white"></view>
    </view>

    <view style="margin-top: -25rpx; border-top-left-radius:25rpx; border-top-right-radius:25rpx; overflow: hidden;">
      <view class="bg-white">
        <uni-list-item class="border-bottom border-light-secondary" style="margin-right: -20rpx;">
          <view class="flex align-center">
            <block v-for="(item, index) in 3" :key="index">
              <image
                class="rounded mr-1 border border-light"
                style="width: 80rpx; height: 80rpx;"
                src="http://qfjny782p.hn-bkt.clouddn.com/demo/default.jpg"
                mode="widthFix"
              />
            </block>
          </view>
          <view slot="right">共3件</view>
        </uni-list-item>
        <uni-list-item class="border-bottom border-light-secondary" title="商品总价" :showArrow="false">
          <view slot="right">￥20.00</view>
        </uni-list-item>
        <uni-list-item class="border-bottom border-light-secondary" title="运费" :showArrow="false">
          <view slot="right">包邮</view>
        </uni-list-item>
        <uni-list-item
          class="border-bottom border-light-secondary"
          style="margin-right: -20rpx;"
          title="优惠卷"
          rightText="无可用"
        ></uni-list-item>
        <uni-list-item class="border-bottom border-light-secondary" :showArrow="false">
          <view class="text-main">小计</view>
          <view slot="right" class="text-main">￥20.00</view>
        </uni-list-item>
        <view class="divider"></view>
        <uni-list-item class="border-bottom border-light-secondary" title="发票">
          <view slot="right">电子发票-个人</view>
        </uni-list-item>
      </view>
    </view>

    <view class="fixed-bottom bg-white flex align-center justify-end px-2" style="height: 100rpx;">
      <text class="font-md">合计：</text>
      <text class="text-main">￥20.00</text>
      <view class="ml-3 px-4 py-1 bg-main text-white" hover-class="bg-hover-main" style="border-radius: 35rpx;"
        >去付款</view
      >
    </view>
    <view class="bg-white" style="height: 100rpx;"></view>
  </view>
</template>

<script>
import { mapGetters } from 'vuex'
import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item'
export default {
  components: {
    uniListItem,
  },
  data() {
    return {
      address: false,
    }
  },
  computed: {
    ...mapGetters('address', ['getDefaultAddr']),
  },
  onLoad() {
    if (this.getDefaultAddr.length) {
      this.address = this.getDefaultAddr[0]
    }
    uni.$on('chooseAddr', (res) => {
      this.address = { ...res }
    })
  },
  onUnload() {
    uni.$off('chooseAddr', () => {})
  },
  methods: {
    openAddrList() {
      uni.navigateTo({
        url: '../user-address/user-address?type=choose',
      })
    },
  },
}
</script>

<style scoped>
page {
  background-color: #f5f5f5;
}
</style>
