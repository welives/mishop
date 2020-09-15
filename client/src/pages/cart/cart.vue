<template>
  <view>
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
      <uni-swipe-action class="w-100 bg-white">
        <block v-for="(item, index) in dataList" :key="index">
          <uni-swipe-action-item class="w-100" :options="options" @click="swipeClick($event, index)">
            <goods-list :goods="item" :index="index" :isEdit="isEdit" @spec-change="specChange" />
          </uni-swipe-action-item>
        </block>
      </uni-swipe-action>
    </template>

    <!-- 热门推荐 -->
    <view class="text-center text-main font-md font-weight-bold mt-3">为你推荐</view>
    <view class="flex align-center justify-center text-light-muted mb-3">
      <view class="flex-fill" style="height: 1rpx; background-color: #ddd;"></view>
      <view class="mx-4">买的人还买了</view>
      <view class="flex-fill" style="height: 1rpx; background-color: #ddd;"></view>
    </view>
    <view class="bg-white">
      <hot-list :goodsList="hotList" />
    </view>

    <!-- 合计 -->
    <view
      class="fixed-bottom flex align-center bg-white"
      style="height: 100rpx;"
      :style="'bottom:' + windowBottom + 'px;'"
    >
      <label class="flex align-center justify-center flex-shrink-0" style="width: 100rpx;" @click.stop="doSelect">
        <radio :color="disableSelectAll ? '#ccc' : '#fd6801'" :checked="checkedAll" :disabled="disableSelectAll" />
      </label>
      <template v-if="!isEdit">
        <view class="flex-fill flex align-center justify-center">
          <text class="font-md">合计：</text>
          <price :sales="totalPrice" salesUnitFont="font" />
        </view>
        <view
          class="flex-fill text-center bg-main text-white font-md"
          hover-class="bg-hover-main"
          style="height: 100rpx; line-height: 100rpx;"
          @click.stop="orderConfirm"
          >结算</view
        >
      </template>
      <template v-else>
        <view
          class="flex-fill text-center bg-main text-white font-md"
          hover-class="bg-hover-main"
          style="height: 100rpx; line-height: 100rpx;"
          >移入收藏</view
        >
        <view
          class="flex-fill text-center text-white font-md"
          :class="disableSelectAll ? 'bg-disabled-main' : 'bg-danger'"
          :hover-class="disableSelectAll ? '' : 'bg-hover-danger'"
          style="height: 100rpx; line-height: 100rpx;"
          @click.stop="doDelGoods"
          >删除</view
        >
      </template>
    </view>
    <view class="bg-white" style="height: 100rpx;"></view>

    <!-- 自定义弹框 -->
    <common-popup ref="popup" @hide="hidePopup">
      <view class="flex align-center" style="height: 275rpx;">
        <image class="rounded border" style="width: 180rpx; height: 180rpx;" :src="popupData.cover" mode="widthFix" />
        <view class="pl-2">
          <price sales="3369" salesFont="font-lg" salesUnitFont="font" />
          <text>{{ popupData.spec | getSpecText }}</text>
        </view>
      </view>
      <scroll-view class="w-100" scroll-y style="height: 660rpx;">
        <block v-for="(spec, index) in popupData.spec" :key="index">
          <card :title="spec.title" :titleBold="false" :headBorderBottom="false">
            <btn-group :label="spec" :index.sync="spec.index"></btn-group>
          </card>
        </block>
        <view class="flex align-center justify-between pt-3 mt-3 border-top border-light-secondary">
          <text>购买数量</text>
          <uni-number-box
            class="flex justify-end"
            :value="popupData.num > popupData.buy_min ? popupData.num : popupData.buy_min"
            :min="popupData.buy_min"
            :max="popupData.stock"
            @change="popupData.num = $event"
          ></uni-number-box>
        </view>
      </scroll-view>
      <view
        class="bg-main text-white font-md text-center"
        hover-class="bg-hover-main"
        style="height: 100rpx; line-height: 100rpx; margin: 0 -30rpx;"
        @click.stop="hidePopup"
        >确定</view
      >
    </common-popup>
  </view>
</template>

<script>
import demo from './demo'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import price from '@/components/common/price'
import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar'
import uniSwipeAction from '@/components/uni-ui/uni-swipe-action/uni-swipe-action'
import uniSwipeActionItem from '@/components/uni-ui/uni-swipe-action-item/uni-swipe-action-item'
import goodsList from '@/components/cart/goods-list'
import hotList from '@/components/index/goods-list'
import commonPopup from '@/components/common/common-popup'
import card from '@/components/common/card'
import btnGroup from '@/components/common/btn-group'
import uniNumberBox from '@/components/uni-ui/uni-number-box/uni-number-box'
export default {
  components: {
    price,
    uniNavBar,
    uniSwipeAction,
    uniSwipeActionItem,
    uniNumberBox,
    goodsList,
    hotList,
    commonPopup,
    card,
    btnGroup,
  },
  data() {
    return {
      windowBottom: 0,
      isEdit: false,
      options: [
        {
          text: '移入收藏',
          style: {
            backgroundColor: 'rgb(241,159,65)',
          },
        },
        {
          text: '删除',
          style: {
            backgroundColor: 'rgb(255,58,49)',
          },
        },
      ],
      hotList: [],
    }
  },
  computed: {
    ...mapState({
      dataList: (state) => state.cart.dataList,
    }),
    ...mapGetters('cart', ['checkedAll', 'totalPrice', 'disableSelectAll', 'popupData']),
  },
  filters: {
    getSpecText(spec) {
      return spec
        ? spec
            .map((v) => {
              return v.list[v.index].text
            })
            .join(' ')
        : ''
    },
  },
  onLoad() {
    const res = uni.getSystemInfoSync()
    this.windowBottom = res.windowBottom
    this.__init()
  },
  onShow() {
    this.initSelected()
  },
  onHide() {
    this.isEdit = false
  },
  onUnload() {
    this.isEdit = false
  },
  methods: {
    ...mapMutations('cart', ['delItem', 'initPopupIndex', 'initSelected']),
    ...mapActions('cart', ['doSelect', 'doDelGoods']),
    __init() {
      this.hotList = demo.hotList.map((v) => {
        return { ...v }
      })
    },
    // 滑块点击事件
    swipeClick(e, index) {
      switch (e.content.text) {
        case '删除':
          this.delItem(index)
          break
        case '移入收藏':
          uni.showToast({
            title: '移入收藏',
            icon: 'none',
          })
          break
      }
    },
    specChange(e) {
      if (!this.isEdit) return
      this.$refs.popup.show()
      this.initPopupIndex(e)
    },
    hidePopup() {
      this.$refs.popup.hide()
      this.initPopupIndex(-1)
    },
    orderConfirm() {
      uni.navigateTo({
        url: '../order-confirm/order-confirm',
      })
    },
  },
}
</script>

<style scoped>
page {
  background-color: #f8f8f8;
}
</style>
