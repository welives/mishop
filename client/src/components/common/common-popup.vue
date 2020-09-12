<template>
  <view class="_popup" :class="popupClass">
    <view class="_mask" @click.stop="$emit('hide')"></view>
    <view class="_body">
      <slot />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      popupClass: 'none',
    }
  },
  methods: {
    show() {
      this.popupClass = 'show'
    },
    hide() {
      this.popupClass = 'hide'
      setTimeout(() => {
        this.popupClass = 'none'
      }, 200)
    },
  },
}
</script>

<style scoped>
._popup,
._mask {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
}
._popup {
  z-index: 2000;
  display: none;
}
._mask {
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.4);
}
._popup ._body {
  position: fixed;
  bottom: -1035rpx;
  width: 100%;
  height: 1035rpx;
  padding: 0 30rpx;
  border-radius: 25rpx 25rpx 0 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  z-index: 2002;
}
._popup.show {
  display: block;
}
.show ._mask {
  animation: showPopupMask 0.2s linear both;
}
.show ._body {
  animation: showPopupBody 0.2s linear both;
}
._popup.hide {
  display: block;
}
.hide ._mask {
  animation: hidePopupMask 0.2s linear both;
}
.hide ._body {
  animation: hidePopupBody 0.2s linear both;
}
._popup.none {
  display: none;
}
@keyframes showPopupMask {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes hidePopupMask {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes showPopupBody {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}
@keyframes hidePopupBody {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
