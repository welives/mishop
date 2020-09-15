<template>
  <view>
    <view class="flex align-center p-2 border-bottom border-light bg-white">
      <text class="text-muted mr-1 flex-shrink-0">收货人：</text>
      <input
        type="text"
        class="px-1 flex-fill rounded"
        style="height: 60rpx;"
        placeholder="请填写收货人姓名"
        placeholder-class="text-light-muted"
        v-model="address.name"
      />
    </view>
    <view class="flex align-center p-2 border-bottom border-light bg-white">
      <text class="text-muted mr-1 flex-shrink-0">手机号码：</text>
      <input
        type="text"
        class="px-1 flex-fill rounded"
        style="height: 60rpx;"
        placeholder="请输入手机号码"
        placeholder-class="text-light-muted"
        v-model="address.phone"
      />
    </view>
    <view class="divider"></view>
    <view class="flex align-center p-2 border-bottom border-light bg-white">
      <text class="text-muted mr-1 flex-shrink-0">所在地区：</text>
      <input
        type="text"
        class="px-1 flex-fill rounded"
        style="height: 60rpx;"
        placeholder="请选择所在城市"
        placeholder-class="text-light-muted"
        disabled
        v-model="address.location"
        @click="openSimpleAddress"
      />
    </view>
    <view class="flex align-center p-2 border-bottom border-light bg-white">
      <text class="text-muted mr-1 flex-shrink-0">详细地址：</text>
      <input
        type="text"
        class="px-1 flex-fill rounded"
        style="height: 60rpx;"
        placeholder="请填写详细地址"
        v-model="address.street"
        placeholder-class="text-light-muted"
      />
    </view>
    <view class="divider"></view>
    <view class="flex align-center justify-between p-2 border-bottom border-light bg-white">
      <text class="text-muted mr-1">设为默认地址</text>
      <switch :checked="address.isDefault" color="#fd6801" @change="address.isDefault = $event.detail.value" />
    </view>
    <view class="p-3">
      <button type="" class="bg-main text-white" hover-class="bg-hover-main" @click.stop="submit">保存</button>
    </view>
    <simple-address ref="simpleAddress" confirmColor="#007AFF" @onConfirm="setLocation"></simple-address>
  </view>
</template>

<script>
import simpleAddress from '@/components/uni-ui/simple-address/simple-address'
export default {
  components: {
    simpleAddress,
  },
  data() {
    return {
      isEdit: false,
      index: -1,
      address: {
        name: '',
        phone: '',
        location: '',
        street: '',
        isDefault: false,
      },
    }
  },
  onLoad(e) {
    if (e.data) {
      this.isEdit = true
      let data = JSON.parse(decodeURIComponent(e.data))
      this.address = data.address
      this.index = data.index
      uni.setNavigationBarTitle({
        title: '修改收货地址',
      })
    }
  },
  onBackPress() {
    if (this.$refs.simpleAddress.showPopup) {
      this.$refs.simpleAddress.close()
      return true
    }
  },
  onUnload() {
    if (this.$refs.simpleAddress.showPopup) {
      this.$refs.simpleAddress.close()
    }
    this.isEdit = false
  },
  methods: {
    setLocation(e) {
      this.address.location = e.label
    },
    // 打开三级地址联动组件
    openSimpleAddress() {
      this.$refs.simpleAddress.open()
    },
    submit() {
      if (this.isEdit) {
        this.$store.commit('address/updateAddress', { index: this.index, addr: this.address })
      } else {
        this.$store.commit('address/createAddress', this.address)
      }
      uni.showToast({
        title: this.isEdit ? '修改成功' : '添加成功',
        icon: 'none',
      })
      uni.navigateBack({
        delta: 1,
      })
    },
  },
}
</script>

<style scoped>
page {
  background-color: #f8f8f8;
}
</style>
