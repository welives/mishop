<script>
export default {
  onLaunch: function() {
    console.log('App Launch')
  },
  onShow: function() {
    console.log('App Show')
  },
  onHide: function() {
    console.log('App Hide')
  },
}
</script>

<style>
/* #ifndef APP-PLUS-NVUE */
/* 引入官方样式库 */
@import url(./common/css/uni.css);
/* 引入animate动画库 */
@import url(./common/css/animate.min.css);
/* 引入自定义图标库 */
@import url(./common/css/iconfont.css);
/* #endif */

/* 引入第三方UI样式库 */
@import url(./common/css/free.css);
/* 引入项目自定义全局样式库 */
@import url(./common/css/common.css);
</style>
