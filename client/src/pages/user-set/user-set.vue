<template>
  <view>
    <block v-for="(item, index) in listItem" :key="index">
      <card :title="item.title" :titleBold="false" :headBorderBottom="false">
        <uni-list-item
          class="border-bottom border-light"
          :title="list.title"
          v-for="(list, idx) in item.list"
          :key="idx"
          @click="navigateTo(list.path)"
        ></uni-list-item>
      </card>
    </block>
    <view class="p-3">
      <button class="bg-white">退出登入</button>
    </view>
  </view>
</template>

<script>
import common from '@/common/mixins/common'
import card from '@/components/common/card'
import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item'
export default {
  components: {
    card,
    uniListItem,
  },
  mixins: [common],
  data() {
    return {
      listItem: [
        {
          title: '账号管理',
          list: [
            {
              title: '个人资料',
              path: 'user-info',
            },
            {
              title: '收货地址',
              path: 'user-address',
            },
          ],
        },
        {
          title: '关于',
          list: [
            {
              title: '关于商城',
              path: '',
            },
            {
              title: '意见反馈',
              path: '',
            },
            {
              title: '协议规则',
              path: '',
            },
            {
              title: '资质证件',
              path: '',
            },
            {
              title: '用户协议',
              path: '',
            },
            {
              title: '隐私政策',
              path: '',
            },
          ],
        },
      ],
    }
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
