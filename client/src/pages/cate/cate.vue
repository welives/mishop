<template>
  <view class="flex" @touchmove.stop.prevent="() => {}">
    <scroll-view
      class="border-right border-light-secondary"
      style="flex: 1.2;"
      :style="'height: ' + scrollHeight + 'px;'"
      scroll-y
      scroll-with-animation
      :scroll-into-view="scrollCateInto"
    >
      <block v-for="(cate, index) in cateList" :key="index">
        <view
          :id="'cate_' + index"
          class="py border-bottom border-light-secondary"
          hover-class="bg-light"
          @click.stop="cateChange(index)"
        >
          <view class="text-center py-1 font" :class="cateIndex === index ? 'cate-active' : 'text-muted'">{{
            cate.text
          }}</view>
        </view>
      </block>
    </scroll-view>
    <swiper
      :current="cateIndex"
      style="flex: 3.8;"
      :style="'height: ' + scrollHeight + 'px;'"
      vertical
      @change="swiperChange"
    >
      <swiper-item v-for="(sub, index) in subCate" :key="index">
        <scroll-view class="w-100" style="height: 100%;" scroll-y>
          <view class="flex flex-wrap mx-2 py-1">
            <block v-for="(item, idx) in sub.list" :key="idx">
              <view class="flex-column flex align-center py-2" style="width: 33.33%;">
                <image style="width: 120rpx; height: 120rpx;" :src="item.cover" />
                <view class="mt-1">{{ item.text }}</view>
              </view>
            </block>
          </view>
        </scroll-view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
import demo from './demo'
export default {
  components: {},
  data() {
    return {
      scrollHeight: 600,
      scrollCateInto: '',
      cateIndex: 0,
      cateList: [],
      subCate: [],
    }
  },
  onLoad() {
    const res = uni.getSystemInfoSync()
    this.scrollHeight = res.windowHeight
    this.__init()
  },
  methods: {
    __init() {
      this.cateList = demo.cateList.map((v) => {
        return { ...v }
      })
      this.subCate = this.cateList.map((item) => {
        let list = demo.subCate.map((v, i) => {
          return {
            cover: v.cover,
            text: item.text + '_' + (i + 1),
          }
        })
        let i = 0
        while (i < Math.ceil(Math.random() * 3)) {
          list = [...list, ...list]
          i++
        }
        return { list }
      })
    },
    cateChange(index) {
      if (this.cateIndex === index) return
      this.cateIndex = index
      this.scrollCateInto = 'cate_' + index
    },
    swiperChange(e) {
      this.cateChange(e.detail.current)
    },
  },
}
</script>

<style scoped>
.cate-active {
  color: #fd6801;
  border-left: 6rpx solid #fd6801;
}
</style>
