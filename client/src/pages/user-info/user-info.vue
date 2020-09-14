<template>
  <view>
    <view class="divider"></view>
    <view class="bg-white">
      <uni-list-item class="border-bottom border-light" title="头像" :showArrow="false">
        <view slot="right" class="flex align-center pr-2">
          <image
            class="rounded-circle border border-light"
            style="width: 90rpx; height: 90rpx;"
            src="http://qfjny782p.hn-bkt.clouddn.com/demo/default.jpg"
          />
        </view>
      </uni-list-item>
      <uni-list-item class="border-bottom border-light" title="姓名">
        <view slot="right">煎蛋</view>
      </uni-list-item>
      <uni-list-item class="border-bottom border-light" title="性别"></uni-list-item>
      <uni-list-item class="border-bottom border-light" title="生日"></uni-list-item>
    </view>
    <view class="divider"></view>
    <view class="bg-white">
      <uni-list-item class="border-bottom border-light" title="修改密码"></uni-list-item>
      <uni-list-item class="border-bottom border-light" title="密保手机"></uni-list-item>
    </view>
  </view>
</template>

<script>
import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item'
export default {
  components: {
    uniListItem,
  },
  data() {
    return {}
  },
  methods: {},
  computed: {},
}
</script>

<style scoped>
page {
  background-color: #f8f8f8;
}
</style>
