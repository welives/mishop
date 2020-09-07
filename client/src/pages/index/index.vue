<template>
  <view class="position-relative">
    <!-- 顶部选项卡 开始 -->
    <scroll-view
      class="scroll-row border-bottom border-light-secondary"
      style="height: 80rpx;"
      scroll-x
      :scroll-into-view="scrollTabInto"
      scroll-with-animation
    >
      <view
        class="scroll-row-item px-3 py-1"
        :id="'tab_' + item.id"
        :class="tabIndex === index ? 'text-main font' : ''"
        v-for="(item, index) in tabBars"
        :key="index"
        @click.stop="changeTab(index)"
      >
        <text class="pb-2" :class="tabIndex === index ? 'border-bottom border-main' : ''" style="border-width: 5rpx;">{{
          item.name
        }}</text>
      </view>
    </scroll-view>
    <!-- 顶部选项卡 结束 -->

    <!-- 滑块内容区 开始 -->
    <swiper :current="tabIndex" :duration="300" :style="'height: ' + scrollHeight + 'px;'" @change="changeSwiper">
      <swiper-item v-for="(item, index) in dataList" :key="index">
        <scroll-view class="animated fadeIn" style="height: 100%;" scroll-y @scrolltolower="loadMore(index)">
          <block v-for="(list, idx) in item.list" :key="idx">
            <!-- 轮播图 -->
            <template v-if="list.type === 'carousel' && list.data.length">
              <carousel style="height: 300rpx;" :carousel="list.data" />
            </template>
            <!-- 分类 -->
            <template v-if="list.type === 'cate' && list.data.length">
              <view class="flex flex-wrap p-2">
                <block v-for="(cate, cateIndex) in list.data" :key="cateIndex">
                  <cate-list :cate="cate" :index="cateIndex" />
                </block>
              </view>
              <view class="divider" />
            </template>
            <!-- 三图广告位 -->
            <template v-if="list.type === 'threeAd'">
              <three-ad :threeAd="list.data" />
              <view class="divider" />
            </template>
            <!-- 大图广告位 -->
            <!-- <card title="每日精选" :bodyCover="$conf.ossUrl + '/demo4.jpg'" /> -->
            <!-- 商品列表 -->
            <template v-if="list.type === 'goodsList' && list.data.length">
              {{ list.data.length }}
              <view class="flex flex-wrap justify-between">
                <block v-for="(goods, goodsIndex) in list.data" :key="goodsIndex">
                  <goods-list :goods="goods" :index="goodsIndex" />
                </block>
              </view>
              <load-more :loadText="list.data.length > limit ? load.text[list.load] : load.text[2]"></load-more>
            </template>
          </block>
        </scroll-view>
      </swiper-item>
    </swiper>
    <!-- 滑块内容区 结束 -->
  </view>
</template>

<script>
// 测试数据
import demo from './data.js'

import carousel from '@/components/common/carousel'
import cateList from '@/components/common/cate-list'
import threeAd from '@/components/index/three-ad'
import card from '@/components/common/card'
import goodsList from '@/components/common/goods-list'
import loadMore from '@/components/common/load-more'
import common from '@/common/mixins/common'
export default {
  components: {
    carousel,
    cateList,
    threeAd,
    card,
    goodsList,
    loadMore,
  },
  mixins: [common],
  data() {
    return {
      scrollHeight: 600,
      scrollTabInto: '',
      tabIndex: 0,
      tabBars: [],
      dataList: [],
    }
  },
  onLoad() {
    const res = uni.getSystemInfoSync()
    this.scrollHeight = res.windowHeight - uni.upx2px(80)
    this.__init()
  },
  onPullDownRefresh() {
    setTimeout(() => {
      uni.stopPullDownRefresh()
    }, 500)
  },
  methods: {
    // 初始化数据
    __init() {
      // 获取选项卡数据
      this.tabBars = demo.tabBars.map((v) => {
        return { ...v }
      })
      // 根据选项卡生成页面数据
      this.dataList = this.tabBars.map((item, index) => {
        let list = []
        // 获取首屏数据
        if (index === 0) {
          // 设置首屏的上拉状态
          // this.load.type = demo.goodsList.length > 10 ? 0 : 2
          list = [
            {
              type: 'carousel',
              data: demo.carousel.map((v) => {
                return { ...v }
              }),
            },
            {
              type: 'cate',
              data: demo.cateList.map((v) => {
                return { ...v }
              }),
            },
            {
              type: 'threeAd',
              data: { ...demo.threeAd },
            },
            {
              type: 'goodsList',
              data: demo.goodsList.map((v) => {
                return { ...v }
              }),
              load: this.load.type,
            },
          ]
        }
        return {
          ...item,
          list,
        }
      })
    },
    // 切换选项卡
    changeTab(index) {
      if (this.tabIndex === index) return
      this.load.type = 0
      this.tabIndex = index
      // 滚动到指定选项卡位置
      this.scrollTabInto = 'tab_' + this.tabBars[index].id
      this.addData(index)
    },
    // swiper组件左右切换
    changeSwiper(e) {
      this.changeTab(e.detail.current)
    },
    // 加载数据
    addData(index) {
      if (this.dataList[index].list.length) return
      // 设置当前tab页的上拉状态
      // this.load.type = demo.goodsList.length > 10 ? 0 : 2
      let list = [
        {
          type: 'carousel',
          data: demo.carousel.map((v) => {
            return { ...v }
          }),
        },
        {
          type: 'cate',
          data: demo.cateList.map((v) => {
            return { ...v }
          }),
        },
        {
          type: 'threeAd',
          data: { ...demo.threeAd },
        },
        {
          type: 'goodsList',
          data: demo.goodsList.map((v) => {
            return { ...v }
          }),
          load: this.load.type,
        },
      ]
      this.dataList[index].list = list
    },
    // 上拉加载更多
    loadMore(index) {
      let goodsIndex = this.dataList[index].list.findIndex((v) => v.type === 'goodsList')
      let list = this.dataList[index].list[goodsIndex]
      if (list.load !== 2) {
        if (list.load === 1) return
        setTimeout(() => {
          list.load = 1
          list.data = [...list.data, ...list.data]
          list.load = 0
        }, 500)
      }
    },
  },
}
</script>

<style></style>
