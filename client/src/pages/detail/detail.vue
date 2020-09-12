<template>
  <view>
    <!-- 商品详情大图 -->
    <carousel :carousel="carousel" height="600" />
    <!-- 基础详情 -->
    <base-info :detail="detail" />
    <!-- 滚动商品特性 -->
    <scroll-attrs :baseAttrs="baseAttrs" />
    <!-- 属性选择 -->
    <view class="px-2 py-1">
      <view class="rounded bg-light border border-light-secondary">
        <uni-list-item class="pl-2">
          <view class="flex align-center">
            <text class="mr-2 text-muted">已选</text>
            <text class="font-md">火焰红 64GB 标配</text>
          </view>
        </uni-list-item>
        <uni-list-item class="pl-2">
          <view class="flex align-center">
            <text class="text-muted">配送</text>
            <text class="mx-2 font-md">北京 东城区</text>
            <text class="text-main">有现货</text>
          </view>
        </uni-list-item>
        <uni-list-item class="pl-2">
          <view class="flex text-muted">
            <view class="flex align-center mr-2">
              <text class="iconfont icon-iconfontxuanzhong4 font text-main mr-1"></text>
              小米自营
            </view>
            <view class="flex align-center mr-2">
              <text class="iconfont icon-iconfontxuanzhong4 font text-main mr-1"></text>
              小米发货
            </view>
            <view class="flex align-center mr-2">
              <text class="iconfont icon-iconfontxuanzhong4 font text-main mr-1"></text>
              七天无理由退货
            </view>
          </view>
        </uni-list-item>
      </view>
    </view>
    <!-- 横向滚动评论 -->
    <scroll-comments :comments="comments" />
    <!-- 商品详情 -->
    <view>
      <u-parse className="uparse" :content="context" @preview="preview" @navigate="navigate"></u-parse>
    </view>
    <!-- 热门推荐 -->
    <card title="热门推荐" :headBorderBottom="false" :titleBold="false">
      <view class="flex flex-wrap justify-between">
        <block v-for="(goods, index) in goodsList" :key="index">
          <goods-list :goods="goods" :index="index" />
        </block>
      </view>
    </card>
    <!-- 底部操作条 -->
    <bottom-btn />
  </view>
</template>

<script>
import demo from './demo'
import carousel from '@/components/common/carousel'
import baseInfo from '@/components/detail/base-info'
import scrollAttrs from '@/components/detail/scroll-attrs'
import scrollComments from '@/components/detail/scroll-comments'
import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item'
import uParse from '@/components/uni-ui/u-parse/u-parse'
import card from '@/components/common/card'
import goodsList from '@/components/index/goods-list'
import bottomBtn from '@/components/detail/bottom-btn'
export default {
  components: {
    carousel,
    baseInfo,
    scrollAttrs,
    scrollComments,
    uniListItem,
    uParse,
    card,
    goodsList,
    bottomBtn,
  },
  data() {
    return {
      carousel: [],
      detail: {},
      baseAttrs: [],
      comments: [],
      context: '',
      goodsList: [],
    }
  },
  onLoad() {
    this.__init()
  },
  methods: {
    __init() {
      this.carousel = demo.carousel.map((v) => {
        return { ...v }
      })
      this.detail = { ...demo.detail }
      this.baseAttrs = demo.baseAttrs.map((v) => {
        return { ...v }
      })
      this.comments = demo.comments.map((v) => {
        return { ...v }
      })
      this.goodsList = demo.goodsList.map((v) => {
        return { ...v }
      })
      this.context = demo.context
    },
    navigate(href, $event) {
      console.log('href: ' + href)
    },
    preview(src, $event) {
      console.log('src: ' + src)
    },
  },
}
</script>

<style scoped>
>>> .uparse .p {
  padding: 0 !important;
}
>>> .uparse view,
>>> .uparse uni-view {
  line-height: 0 !important;
}
</style>
