import $time from '../js/time'
export default {
  data() {
    return {
      page: 1, // 当前分页
      limit: 10, // 每页显示数据条数
      limits: [5, 7, 10, 13, 15], // 可选的每页显示数据条数
      tabDbClick: false, // true 表示双击
    }
  },
  filters: {
    // 格式化时间戳
    formatTime(value) {
      return $time.getTime(value)
    },
  },
  methods: {
    // 返回上一页
    back(step = 1) {
      uni.navigateBack({
        delta: step,
      })
    },
    // 跳转到指定页面
    navigateTo(path, query = '') {
      if (!path) return
      uni.navigateTo({
        url: query ? `/pages/${path}/${path}?${query}` : `/pages/${path}/${path}`,
      })
    },
    // 手动执行刷新
    doRefresh() {
      // tab 点击时执行，此处直接接收单击事件
      if (this.tabDbClick) {
        // 这里就是模拟的双击事件，可以写类似数据刷新相关处理
        uni.startPullDownRefresh()
      }
      this.tabDbClick = true
      setTimeout(() => {
        this.tabDbClick = false // 200ms 内没有第二次点击，就当作单击
      }, 200)
    },
  },
}
