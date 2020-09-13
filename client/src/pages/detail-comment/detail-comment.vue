<template>
  <view>
    <view class="p-2">
      <view class="flex align-center justify-between py-2 border-bottom border-light-secondary">
        <text class="text-muted">用户评价（3425）</text>
        <text class="text-main">93.8%<text class="text-muted ml-1">满意</text></text>
      </view>
      <view class="flex flex-wrap pt-2" style="margin-right: -20rpx; margin-bottom: -20rpx;">
        <view
          class="px-2 py mr-2 mb-2 rounded cate-item"
          :class="cateIndex === index ? 'active' : ''"
          v-for="(item, index) in cateList"
          :key="index"
          @click.stop="cateIndex = index"
        >
          {{ item.text }}
        </view>
      </view>
    </view>
    <view class="divider"></view>
    <view class="p-2 flex align-start border-bottom border-light-secondary">
      <image
        class="rounded-circle flex-shrink-0"
        style="width:90rpx;height: 90rpx;"
        src="http://qfjny782p.hn-bkt.clouddn.com/demo/default.jpg"
        mode="widthFix"
      />
      <view class="pl-2 flex-fill">
        <view class="flex align-center">
          <text class="text-primary font-weight-bold">昵称</text>
          <view class="iconfont icon-service text-main ml-auto">
            <text class="ml-1 font-sm">超爱</text>
          </view>
        </view>
        <view class="line-h">
          整个2019-20年，宇宙学的上空有一大团铅云。最近几年，宇宙学家一直对宇宙过快的膨胀速度怀有疑虑。但一直安慰自己，那可能是仪器精度的问题。
        </view>
        <view class="flex flex-wrap">
          <block v-for="(item, index) in 10" :key="index">
            <view class="p flex align-center justify-center">
              <image
                style="width: 100rpx;height: 100rpx;"
                src="http://qfjny782p.hn-bkt.clouddn.com/demo/cate_08.png"
                mode="widthFix"
              />
            </view>
          </block>
        </view>
        <view class="flex align-center text-light-muted">
          <text>2020-09-13</text>
          <view class="flex ml-auto">
            <text class="mr-1">123</text>
            <text class="iconfont icon-dianzan text-muted"></text>
          </view>
          <view class="flex ml-3">
            <text class="mr-1">321</text>
            <text class="iconfont icon-pinglun1 text-muted"></text>
          </view>
        </view>
        <!-- 客服回复 -->
        <view class="bg-light rounded p-2">
          <text class="text-main">卖家回复：</text>
          <text>人们选择打字是因为相信打电话会比较尴尬，但那其实是存在于想象中的错误认知</text>
          <view class="d-inline-block text-light-muted line-h font-sm ml-2">
            <text class="iconfont icon-dianzan"></text>
            <text class="ml-1">123</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      cateIndex: 0,
      cateList: [
        { text: '全部' },
        { text: '有图' },
        { text: '非常喜欢' },
        { text: '拍照好' },
        { text: '手感很棒' },
        { text: '效果好' },
        { text: '性能很棒' },
      ],
    }
  },
  methods: {},
  computed: {},
  watch: {},
}
</script>

<style scoped>
.cate-item {
  color: #7b6d6c;
  background-color: #ffebec;
  border-color: #f4e0e1;
}
.cate-item.active {
  color: #fff;
  background-color: #fd6801;
  border-color: #de7232;
}
</style>
