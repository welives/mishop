<template>
  <view class="px-2 py-1">
    <view class="rounded bg-light border border-light-secondary">
      <uni-list-item class="pl-2">
        <view class="flex align-center">
          <text class="mr-2 text-muted">已选</text>
          <text class="font">火焰红 64GB 标配</text>
        </view>
      </uni-list-item>
      <uni-list-item class="pl-2">
        <view class="flex align-center">
          <text class="text-muted">配送</text>
          <text class="mx-2 font">北京 东城区</text>
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
</template>

<script>
import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item'
export default {
  components: {
    uniListItem,
  },
}
</script>

<style scoped></style>
