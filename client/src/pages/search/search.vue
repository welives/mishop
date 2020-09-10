<template>
  <view>
    <template v-if="dataList.length === 0">
      <card
        title="热门搜索"
        cover="http://qfjny782p.hn-bkt.clouddn.com/demo/search-banner.png"
        :headBorderBottom="false"
      />
      <!-- 多色按钮 -->
      <view class="p-1">
        <block v-for="(item, index) in hotSearch" :key="index">
          <color-tag :tag="item" />
        </block>
      </view>
      <!-- 常用分类 -->
      <card title="常用分类" :headBorderBottom="false" :bodyPadding="true">
        <block v-for="(item, index) in hotCate" :key="index">
          <color-tag :tag="item" :color="false" />
        </block>
      </card>
      <!-- 搜索记录 -->
      <card title="搜索记录" :headBorderBottom="false" :bodyPadding="true">
        <uni-list-item title="小米" :showArrow="false"></uni-list-item>
        <uni-list-item title="小米8 屏幕指纹版" :showArrow="false"></uni-list-item>
      </card>
    </template>
    <template v-else>
      <!-- 筛选条件 开始 -->
      <view class="flex border-top border-bottom border-light-secondary text-muted" style="height: 100rpx;">
        <block v-for="(item, index) in filtrate.list" :key="index">
          <view class="flex-fill flex align-center justify-center font-md" @click.stop="filtrateChange(index)">
            <text :class="filtrate.index === index ? 'text-main' : ''">{{ item.text }}</text>
            <view class="flex flex-column">
              <text
                class="iconfont icon-paixu-shengxu"
                :class="item.sort === 'asc' ? 'text-main' : ''"
                style="line-height: 0.1;"
              ></text>
              <text
                class="iconfont icon-paixu-jiangxu"
                :class="item.sort === 'desc' ? 'text-main' : ''"
                style="line-height: 0.1;"
              ></text>
            </view>
          </view>
        </block>
        <view class="flex-fill flex align-center justify-center font-md" @click.stop="openDrawer">
          <text class="text-main">筛选</text>
        </view>
      </view>
      <!-- 筛选条件 开始 -->

      <!-- 搜索结果列表 开始 -->
      <block v-for="(data, index) in dataList" :key="index">
        <goods-list :goods="data" :index="index" />
      </block>
      <!-- 搜索结果列表 结束 -->

      <!-- 抽屉 开始 -->
      <uni-drawer ref="drawer" mode="right">
        <card title="服务" :headBorderBottom="false" :titleBold="false">
          <!-- 这里使用.sync修饰符同步更新父组件, 具体参考 https://cn.vuejs.org/v2/guide/components-custom-events.html#sync-%E4%BF%AE%E9%A5%B0%E7%AC%A6 -->
          <btn-group :label="labelService" :index.sync="labelService.index" />
        </card>
        <card title="分类" :headBorderBottom="false" :titleBold="false">
          <btn-group :label="labelCate" :index.sync="labelCate.index" />
        </card>
        <!-- 底部按钮 -->
        <view class="flex justify-center fixed-bottom">
          <view class="flex-fill text-center py-2 bg-light" hover-class="bg-hover-light">重置</view>
          <view class="flex-fill text-center py-2 bg-main text-white" hover-class="bg-hover-main">确定</view>
        </view>
      </uni-drawer>
      <!-- 抽屉 结束 -->
    </template>
  </view>
</template>

<script>
import demo from './data'
import card from '@/components/common/card'
import colorTag from '@/components/search/color-tag'
import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item'
import uniDrawer from '@/components/uni-ui/uni-drawer/uni-drawer'
import btnGroup from '@/components/common/btn-group'
import goodsList from '@/components/common/goods-list'
export default {
  components: {
    card,
    colorTag,
    uniListItem,
    uniDrawer,
    btnGroup,
    goodsList,
  },
  data() {
    return {
      keyword: '',
      hotSearch: demo.hotSearch,
      hotCate: demo.hotCate,
      filtrate: demo.filtrate,
      labelService: demo.labelService,
      labelCate: demo.labelCate,
      dataList: demo.dataList,
    }
  },
  // 原生标题栏按钮点击事件
  onNavigationBarButtonTap() {
    this.search()
  },
  // 原生标题栏搜索输入框输入内容变化事件
  onNavigationBarSearchInputChanged(e) {
    if (e.text) {
      this.keyword = e.text
    } else {
      this.dataList = []
    }
  },
  // 原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发
  onNavigationBarSearchInputConfirmed(e) {
    this.search()
  },
  methods: {
    // 搜索事件
    search() {
      if (!this.keyword) {
        return uni.showToast({
          title: '请输入关键字',
          icon: 'none',
          position: 'top',
        })
      }
      // 收起键盘
      uni.hideKeyboard()
      this.dataList.push({ test: 123 })
    },
    // 修改过滤条件
    filtrateChange(index) {
      // 当前点击的还是同一个过滤条件
      if (this.filtrate.index === index) {
        let item = this.filtrate.list[index]
        return (item.sort = item.sort === 'asc' ? 'desc' : 'asc')
      }
      // 当前点击的是不同的过滤条件
      this.filtrate.index = index
      this.filtrate.list.forEach((v, i) => {
        if (index === i) {
          v.sort = 'asc'
        } else {
          v.sort = ''
        }
      })
    },
    // 打开抽屉
    openDrawer() {
      this.$refs.drawer.open()
    },
  },
}
</script>

<style scoped>
.btn-active {
  color: #fd6801;
  border: 1rpx solid #fd6801;
  background-color: #fce0d5 !important;
}
</style>
