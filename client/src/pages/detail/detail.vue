<template>
  <view>
    <!-- 商品详情大图 -->
    <carousel :carousel="carousel" height="600" />
    <!-- 基础详情 -->
    <base-info :detail="detail" />
    <!-- 滚动商品特性 -->
    <scroll-attrs :baseAttrs="baseAttrs" />
    <!-- 属性选择 -->
    <attr-select @click="onClick" />
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
    <!-- 弹出框 -->
    <view @touchmove.stop.prevent="() => {}">
      <common-popup ref="popup" @hide="hidePopup">
        <!-- 商品规格 -->
        <template v-if="popupType === 'spec'">
          <view class="flex align-center" style="height: 275rpx;">
            <image
              class="rounded border"
              style="width: 180rpx; height: 180rpx;"
              src="http://qfjny782p.hn-bkt.clouddn.com/demo/cate_01.png"
              mode="widthFix"
            />
            <view class="pl-2">
              <price sales="3369" salesFont="font-lg" salesUnitFont="font" />
              <text>火焰红 64GB 标配</text>
            </view>
          </view>
          <scroll-view class="w-100" scroll-y style="height: 660rpx;">
            <block v-for="(spec, index) in specList" :key="index">
              <card :title="spec.title" :titleBold="false" :headBorderBottom="false">
                <btn-group :label="spec" :index.sync="spec.index"></btn-group>
              </card>
            </block>
            <view class="flex align-center justify-between pt-3 mt-3 border-top border-light-secondary">
              <text>购买数量</text>
              <uni-number-box
                class="flex justify-end"
                :min="1"
                :value="detail.num"
                @change="detail.num = $event"
              ></uni-number-box>
            </view>
          </scroll-view>
          <view
            class="bg-main text-white font-md text-center"
            hover-class="bg-hover-main"
            style="height: 100rpx; line-height: 100rpx; margin: 0 -30rpx;"
            @click.stop="hidePopup"
            >加入购物车</view
          >
        </template>
        <!-- 配送信息 -->
        <template v-else-if="popupType === 'express'">
          <view
            class="flex justify-center font-md font-weight-bold border-bottom border-light-secondary"
            style="height: 100rpx; line-height: 100rpx;"
            >收货地址</view
          >
          <scroll-view class="w-100" scroll-y style="height: 835rpx;">
            <uni-list-item v-for="(item, index) in 10" :key="index">
              <view class="font-weight-bold"><text class="iconfont icon-dingwei mr-1"></text>煎蛋</view>
              <view class="font text-light-muted">广西南宁市</view>
            </uni-list-item>
          </scroll-view>
          <view
            class="bg-main text-white font-md text-center"
            hover-class="bg-hover-main"
            style="height: 100rpx; line-height: 100rpx; margin: 0 -30rpx;"
            @click.stop="hidePopup"
            >选择新地址</view
          >
        </template>
        <template v-else-if="popupType === 'service'">
          <view
            class="flex justify-center font-md font-weight-bold border-bottom border-light-secondary"
            style="height: 100rpx; line-height: 100rpx;"
            >服务说明</view
          >
          <scroll-view class="w-100" scroll-y style="height: 835rpx;">
            <view class="flex flex-column">
              <view class="py-2 border-bottom border-light-secondary"
                ><text class="iconfont icon-iconfontxuanzhong4 text-main mr-2"></text>仿米自营</view
              >
              <view class="flex py-2 border-bottom border-light-secondary">
                <text class="iconfont icon-iconfontxuanzhong4 text-main mr-2"></text>
                <view class="flex-fill">
                  <view>仿米发货</view>
                  <view class="font-sm text-light-muted">发什么货？跑路了</view>
                </view>
              </view>
              <view class="py-2 border-bottom border-light-secondary"
                ><text class="iconfont icon-iconfontxuanzhong4 text-main mr-2"></text>七天无理由退货？说说而已</view
              >
              <view class="flex py-2 border-bottom border-light-secondary">
                <text class="iconfont icon-iconfontxuanzhong4 text-main mr-2"></text>
                <view class="flex-fill">
                  <view>运费说明</view>
                  <view class="font-sm text-light-muted">不管满多少，就是不包邮</view>
                  <view class="font-sm text-light-muted">特殊产品也不例外</view>
                </view>
              </view>
            </view>
          </scroll-view>
          <view
            class="bg-main text-white font-md text-center"
            hover-class="bg-hover-main"
            style="height: 100rpx; line-height: 100rpx; margin: 0 -30rpx;"
            @click.stop="hidePopup"
            >确定</view
          >
        </template>
      </common-popup>
    </view>
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
import commonPopup from '@/components/common/common-popup'
import price from '@/components/common/price'
import btnGroup from '@/components/common/btn-group'
import uniNumberBox from '@/components/uni-ui/uni-number-box/uni-number-box'
import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item'
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
    commonPopup,
    price,
    btnGroup,
    uniNumberBox,
    uniListItem,
  },
  data() {
    return {
      carousel: [],
      detail: {},
      baseAttrs: [],
      comments: [],
      context: '',
      goodsList: [],
      specList: [],
      popupType: '',
    }
  },
  onLoad() {
    this.__init()
  },
  onBackPress() {
    if (this.popupType !== '') {
      this.hidePopup()
      return true
    }
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
      this.specList = demo.specList.map((v) => {
        return { ...v }
      })
    },
    navigate(href, $event) {
      console.log('href: ' + href)
    },
    preview(src, $event) {
      console.log('src: ' + src)
    },
    onClick(e) {
      this.popupType = e
      this.$refs.popup.show()
    },
    hidePopup() {
      this.popupType = ''
      this.$refs.popup.hide()
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
