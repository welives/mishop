<template>
  <view class="px-2 py-1">
    <scroll-view scroll-x class="scroll-row">
      <block v-for="(item, index) in comments" :key="index">
        <view class="scroll-row-item rounded bg-light mr-2 p-2" style="width: 620rpx; height: 380rpx;">
          <!-- 评论头部 -->
          <view class="flex align-center justify-between">
            <view class="flex align-center">
              <image class="rounded-circle mr-2" style="width: 70rpx; height: 70rpx;" :src="item.avatar" />
              <view class="flex flex-column line-h">
                <text>{{ item.username }}</text>
                <text class="text-light-muted font-sm">{{ item.created_at }}</text>
              </view>
            </view>
            <view class="text-light-muted">
              <text class="iconfont icon-dianzan mr-1"></text>
              {{ item.praise_count }}
            </view>
          </view>
          <!-- 评论内容 -->
          <view class="font-md my-2">{{ item.content }}</view>
          <!-- 评论图片 -->
          <view class="flex justify-center">
            <block v-for="(image, idx) in item.imageList" :key="idx">
              <image class="rounded mr-2" style="width: 150rpx; height: 150rpx;" :src="image" mode="aspectFill" />
            </block>
          </view>
        </view>
      </block>
    </scroll-view>
    <view class="flex align-center justify-center py-2 text-primary" hover-class="bg-hover-light">
      更多评论<text class="ml-1 iconfont icon-you"></text>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    comments: Array,
  },
}
</script>

<style scoped></style>
