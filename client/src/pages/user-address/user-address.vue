<template>
  <view>
    <uni-swipe-action class="w-100 bg-white">
      <block v-for="(item, index) in addrList" :key="index">
        <uni-swipe-action-item class="w-100" :options="options" @click="swipeClick($event, index)">
          <uni-list-item class="border-bottom border-light w-100" @click="choose(item)">
            <view class="text-secondary">
              <view class="flex align-center">
                <text class="text-main">{{ item.name }}</text>
                <text class="mx-1">{{ item.phone | hidePhone }}</text>
                <text v-if="item.isDefault" class="text-main">[默认]</text>
              </view>
              <view>{{ item.location }}</view>
              <view>{{ item.street }}</view>
            </view>
          </uni-list-item>
        </uni-swipe-action-item>
      </block>
    </uni-swipe-action>
  </view>
</template>

<script>
import { mapState } from 'vuex'
import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item'
import uniSwipeAction from '@/components/uni-ui/uni-swipe-action/uni-swipe-action'
import uniSwipeActionItem from '@/components/uni-ui/uni-swipe-action-item/uni-swipe-action-item'
export default {
  components: {
    uniListItem,
    uniSwipeAction,
    uniSwipeActionItem,
  },
  filters: {
    hidePhone(value) {
      let reg = /^(\d{3})\d*(\d{2})$/
      return value.replace(reg, `$1****$2`)
    },
  },
  data() {
    return {
      isChoose: false,
      options: [
        {
          text: '编辑',
          style: {
            backgroundColor: '#007bff',
          },
        },
        {
          text: '删除',
          style: {
            backgroundColor: '#dc3545',
          },
        },
      ],
    }
  },
  computed: {
    ...mapState({
      addrList: (state) => state.address.addrList,
    }),
  },
  onLoad(e) {
    e.type === 'choose' && (this.isChoose = true)
  },
  onNavigationBarButtonTap() {
    uni.navigateTo({
      url: '../user-address-edit/user-address-edit',
    })
  },
  methods: {
    swipeClick(e, index) {
      switch (e.index) {
        case 0:
          let obj = JSON.stringify({
            index,
            address: this.addrList[index],
          })
          uni.navigateTo({
            url: '../user-address-edit/user-address-edit?data=' + encodeURIComponent(obj),
          })
          break
        case 1:
          uni.showModal({
            content: '要删除该收货地址吗？',
            success: (res) => {
              if (res.confirm) {
                setTimeout(() => {
                  this.$store.commit('address/delAddress', index)
                }, 0)
                uni.showToast({
                  title: '删除成功',
                  icon: 'none',
                })
              }
            },
          })
          break
      }
    },
    choose(addr) {
      if (!this.isChoose) return
      uni.$emit('chooseAddr', addr)
      uni.navigateBack({
        delta: 1,
      })
    },
  },
}
</script>

<style scoped></style>
