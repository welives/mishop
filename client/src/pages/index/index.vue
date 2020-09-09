<template>
  <view class="position-relative">
    <!-- 顶部选项卡 开始 -->
    <scroll-view
      class="scroll-row border-bottom border-light-secondary"
      style="height: 80rpx;"
      scroll-x
      scroll-with-animation
      :scroll-into-view="scrollTabInto"
      :show-scrollbar="false"
    >
      <view
        class="scroll-row-item px-3 py-1"
        :id="'tab_' + index"
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
      <swiper-item v-for="(list, listIndex) in dataList" :key="listIndex">
        <scroll-view
          class="animated fadeIn"
          style="height: 100%;"
          scroll-y
          :show-scrollbar="false"
          @scrolltolower="loadMore(listIndex)"
        >
          <block v-for="(item, index) in list.data" :key="index">
            <!-- 轮播图 -->
            <template v-if="item.type === 'carousel' && item.data.length">
              <carousel :carousel="item.data" />
            </template>
            <!-- 分类 -->
            <template v-if="item.type === 'cate' && item.data.length">
              <view class="flex flex-wrap p-2">
                <block v-for="(cate, cateIndex) in item.data" :key="cateIndex">
                  <cate-list :cate="cate" :index="cateIndex" />
                </block>
              </view>
              <view class="divider" />
            </template>
            <!-- 三图广告位 -->
            <template v-if="item.type === 'threeAd'">
              <three-ad :threeAd="item.data" />
              <view class="divider" />
            </template>
            <!-- 大图广告位 -->
            <template v-if="item.type === 'bigAd'">
              <card :title="item.data.title" :bodyCover="item.data.cover" />
            </template>
            <!-- 商品列表 -->
            <template v-if="item.type === 'goodsList' && item.data.length">
              <view class="flex flex-wrap justify-between">
                <block v-for="(goods, goodsIndex) in item.data" :key="goodsIndex">
                  <goods-list :goods="goods" :index="goodsIndex" />
                </block>
              </view>
              <load-more :loadText="loading[loading.type]"></load-more>
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
export default {
  components: {
    carousel,
    cateList,
    threeAd,
    card,
    goodsList,
    loadMore,
  },
  data() {
    return {
      scrollHeight: 600,
      scrollTabInto: '',
      tabIndex: 0,
      tabBars: [],
      dataList: [],
    }
  },
  computed: {
    loading() {
      return this.dataList[this.tabIndex].loading
    },
  },
  onLoad() {
    const res = uni.getSystemInfoSync()
    this.scrollHeight = res.windowHeight - uni.upx2px(80)
    this.__init()
  },
  // 下拉刷新事件
  onPullDownRefresh() {
    setTimeout(() => {
      this.__init()
      this.loadData()
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
        let data = []
        // 获取首屏数据
        if (index === 0) {
          data = [
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
              type: 'bigAd',
              data: { ...demo.bigAd },
            },
            {
              type: 'goodsList',
              data: demo.goodsList.map((v) => {
                return { ...v }
              }),
            },
          ]
        }
        return {
          ...item,
          data,
          loading: {
            type: 'ready',
            ready: '上拉加载更多',
            doing: '加载中...',
            done: '真的一滴都没有了',
          },
        }
      })
    },
    // 切换选项卡
    changeTab(index) {
      if (this.tabIndex === index) return
      this.tabIndex = index
      // 滚动到指定选项卡位置
      this.scrollTabInto = 'tab_' + index
      this.loadData()
    },
    // swiper组件左右切换
    changeSwiper(e) {
      this.changeTab(e.detail.current)
    },
    // 加载专题页数据
    loadData() {
      let index = this.tabIndex
      if (this.dataList[index].data.length) return
      let data = [
        {
          type: 'carousel',
          data: demo.carousel.map((v) => {
            return { ...v }
          }),
        },
        {
          type: 'cate',
          data: demo.cateList.filter((v, i) => {
            if (i < 5) {
              return { ...v }
            }
          }),
        },
        {
          type: 'bigAd',
          data: { title: '热卖爆品' },
        },
        {
          type: 'goodsList',
          data: demo.goodsList.map((v) => {
            return { ...v }
          }),
        },
      ]
      this.dataList[index].data = [...this.dataList[index].data, ...data]
    },
    // 上拉加载更多
    loadMore(index) {
      if (this.loading.type !== 'done') {
        if (this.loading.type === 'doing') return
        let goodsIndex = this.dataList[index].data.findIndex((v) => v.type === 'goodsList')
        let goodsList = this.dataList[index].data[goodsIndex]
        this.loading.type = 'doing'
        setTimeout(() => {
          goodsList.data = [...goodsList.data, ...goodsList.data]
          // 模拟数据超过20条时不能再加载
          this.loading.type = goodsList.data.length > 20 ? 'done' : 'ready'
        }, 1500)
      }
    },
  },
}
</script>

<style scoped></style>
