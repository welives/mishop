<template>
  <view>
    <!-- 顶部选项卡 开始 -->
    <view
      class="bg-white flex align-center font-md text-muted border-top border-light-secondary"
      style="height: 80rpx;"
    >
      <block v-for="(tab, index) in tabBars" :key="index">
        <view
          class="flex-fill flex align-center justify-center border-bottom"
          style="height: 100%;"
          :class="tabIndex === index ? 'text-main border-main' : 'border-light'"
          @click.stop="tabIndex = index"
          >{{ tab.text }}</view
        >
      </block>
    </view>
    <view class="divider"></view>
    <!-- 顶部选项卡 结束 -->

    <!-- 订单列表 开始 -->
    <block v-for="(order, index) in dataList" :key="index">
      <view v-if="tabIndex === index" class="position-relative animated fadeIn faster" style="min-height: 400rpx;">
        <template v-if="order.data.length">
          <scroll-view style="height: 500px;" scroll-y>
            <block v-for="(item, idx) in order.data" :key="idx">
              <order-list :order="item" :index="idx" />
              <view class="divider"></view>
            </block>
          </scroll-view>
        </template>
        <template v-else>
          <no-data :msg="order.msg" :image="order.cover"></no-data>
        </template>
      </view>
    </block>
    <!-- 订单列表 结束 -->

    <!-- 推荐 -->
    <view class="text-center text-main font-md font-weight-bold mt-3">猜你喜欢</view>
    <view class="flex align-center justify-center text-light-muted mb-3">
      <view class="flex-fill" style="height: 1rpx; background-color: #ddd;"></view>
      <view class="mx-4">实时推荐你的爱</view>
      <view class="flex-fill" style="height: 1rpx; background-color: #ddd;"></view>
    </view>
    <view class="bg-white">
      <hot-list :goodsList="hotList" />
    </view>
  </view>
</template>

<script>
import demo from './demo'
import hotList from '@/components/index/goods-list'
import noData from '@/components/common/no-data'
import orderList from '@/components/order/order-list'
export default {
  components: {
    hotList,
    noData,
    orderList,
  },
  data() {
    return {
      tabIndex: 0,
      tabBars: [],
      hotList: [],
      dataList: [],
    }
  },
  onLoad() {
    this.__init()
  },
  methods: {
    __init() {
      this.tabBars = demo.tabBars.map((v) => {
        return { ...v }
      })
      this.dataList = this.tabBars.map((item, index) => {
        let data = []
        if (item.type === 'all') {
          data = demo.dataList.map((v) => {
            return { ...v }
          })
        } else if (item.type === 'paying') {
          data = demo.dataList.filter((v) => v.status === '待付款')
        } else if (item.type === 'receiving') {
          data = demo.dataList.filter((v) => v.status === '已发货')
        } else if (item.type === 'comment') {
          data = demo.dataList.filter((v) => v.status === '待评价')
        }
        return {
          ...item,
          data,
        }
      })
      this.hotList = demo.hotList.map((v) => {
        return { ...v }
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
