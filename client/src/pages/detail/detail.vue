<template>
  <view>
    <!-- 商品详情大图 -->
    <carousel :carousel="carousel" height="600" />
    <!-- 基础详情 -->
    <base-info :detail="detail" />
    <!-- 滚动商品特性 -->
    <scroll-attrs :baseAttrs="baseAttrs" />
    <!-- 属性选择 -->
    <attr-select />
    <!-- 横向滚动评论 -->
    <scroll-comments :comments="comments" />
    <!-- 商品详情 -->
    <u-parse className="uparse" :content="context" @preview="preview" @navigate="navigate"></u-parse>
    <!-- 热门推荐 -->
    <card title="热门推荐" :headBorderBottom="false" :titleBold="false">
      <goods-list :goodsList="goodsList" />
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
import attrSelect from '@/components/detail/attr-select'
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
    attrSelect,
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
