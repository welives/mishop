<template>
  <view>
    <!-- 头部 -->
    <view class="position-relative flex align-center" style="height: 320rpx;">
      <text
        class="iconfont icon-xiaoxi position-absolute text-white"
        style="font-size: 50rpx;top: 35rpx;right: 20rpx; z-index: 100;"
      ></text>
      <image style="width:100%;height:320rpx;" src="http://qfjny782p.hn-bkt.clouddn.com/demo/bg.jpg" />
      <view class="position-absolute left-0 right-0 flex align-center" style="bottom:50rpx;">
        <image
          style="width: 140rpx; height: 140rpx; border: 5rpx solid #f8f9fa;"
          class="rounded-circle ml-4"
          src="http://qfjny782p.hn-bkt.clouddn.com/demo/default.jpg"
          mode=""
        />
        <view class="ml-2 text-white font-md">测试昵称</view>
        <view
          class="ml-auto px-3 flex align-center justify-center"
          style="height:70rpx; background-color:#ffd43f; color:#cc4a00; border-top-left-radius:40rpx; border-bottom-left-radius:40rpx; align-self: flex-end;"
        >
          <text class="iconfont icon-huangguan font-md"></text>
          <text class="ml-1">会员积分 1.99</text>
        </view>
      </view>
    </view>

    <!-- 图标快捷入口 -->
    <card>
      <view slot="title" class="flex align-center justify-between py-1">
        <text class="font-md font-weight-bold text-muted">我的订单</text>
        <view class="text-light-muted">
          <text class="mr-1 font-sm">全部订单</text>
          <text class="iconfont icon-you font-sm"></text>
        </view>
      </view>
      <view class="flex align-center">
        <view class="flex-fill flex align-center flex-column line-h py-2" hover-class="bg-hover-light">
          <text class="iconfont icon-wallet_icon"></text>
          <text>待付款</text>
        </view>
        <view class="flex-fill flex align-center flex-column line-h py-2" hover-class="bg-hover-light">
          <text class="iconfont icon-daishouhuo"></text>
          <text>待收货</text>
        </view>
        <view class="flex-fill flex align-center flex-column line-h py-2" hover-class="bg-hover-light">
          <text class="iconfont icon-pinglun1"></text>
          <text>待评价</text>
        </view>
        <view class="flex-fill flex align-center flex-column line-h py-2" hover-class="bg-hover-light">
          <text class="iconfont icon-buoumaotubiao46"></text>
          <text>退换修</text>
        </view>
      </view>
    </card>
    <view class="divider"></view>
    <card :showHead="false" :headBorderBottom="false" cover="http://qfjny782p.hn-bkt.clouddn.com/demo/demo4.jpg"></card>
    <block v-for="(item, index) in listItem" :key="index">
      <uni-list-item :title="item.title" :showExtraIcon="true">
        <view slot="icon">
          <text class="iconfont" :class="[item.icon, item.color]"></text>
        </view>
      </uni-list-item>
      <view v-if="index === listItem.length - 2" class="divider"></view>
    </block>
  </view>
</template>

<script>
import card from '@/components/common/card'
import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item'
export default {
  components: {
    card,
    uniListItem,
  },
  data() {
    return {
      listItem: [
        {
          title: '仿米会员',
          icon: 'icon-VIP',
          color: 'text-warning',
        },
        {
          title: '会员中心',
          icon: 'icon-huangguan',
          color: 'text-warning',
        },
        {
          title: '服务中心',
          icon: 'icon-service',
          color: 'text-danger',
        },
        {
          title: '仿米之家',
          icon: 'icon-home',
          color: 'text-main',
        },
        {
          title: '更多功能',
          icon: 'icon-gengduo',
          color: 'text-success',
        },
        {
          title: '更多设置',
          icon: 'icon-icon_set_up',
          color: 'text-secondary',
        },
      ],
    }
  },
  computed: {},
  methods: {},
}
</script>

<style scoped></style>
