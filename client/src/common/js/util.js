export default {
  // 监听网络
  onNetwork() {
    let func = (res) => {
      if (res.networkType === 'none') {
        uni.showToast({
          title: '没网还行调戏我？',
          icon: 'none',
        })
      }
    }
    uni.getNetworkType({
      success: func,
    })
    uni.onNetworkStatusChange(func)
  },
  onVerCheck() {
    // #ifdef APP-PLUS
    plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {
      uni.request({
        url: 'http://www.example.com/update/',
        data: {
          version: widgetInfo.version,
          name: widgetInfo.name,
        },
        success: (result) => {
          var data = result.data
          if (data.update && data.wgtUrl) {
            uni.downloadFile({
              url: data.wgtUrl,
              success: (downloadResult) => {
                if (downloadResult.statusCode === 200) {
                  plus.runtime.install(
                    downloadResult.tempFilePath,
                    {
                      force: false,
                    },
                    function() {
                      console.log('install success...')
                      plus.runtime.restart()
                    },
                    function(e) {
                      console.error('install fail...')
                    },
                  )
                }
              },
            })
          }
        },
      })
    })
    // #endif
  },
}
