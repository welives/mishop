import $conf from '@/common/config'
export default {
  namespaced: true,
  state: {
    dataList: [
      {
        checked: true,
        id: 1,
        title: '商品标题1',
        cover: `${$conf.ossUrl}/phone/1.jpg`,
        spec: [
          {
            title: '颜色',
            index: 0,
            list: [{ text: '火焰红' }, { text: '炭黑' }, { text: '冰川蓝' }],
          },
          {
            title: '容量',
            index: 0,
            list: [{ text: '64GB' }, { text: '128GB' }],
          },
          {
            title: '套餐',
            index: 0,
            list: [{ text: '标配' }, { text: '套餐一' }, { text: '套餐二' }],
          },
        ],
        price: 996,
        num: 1,
        buy_min: 1,
        stock: 999,
      },
      {
        checked: false,
        id: 2,
        title: '商品标题2',
        cover: `${$conf.ossUrl}/phone/2.jpg`,
        spec: [
          {
            title: '颜色',
            index: 0,
            list: [{ text: '火焰红' }, { text: '炭黑' }, { text: '冰川蓝' }],
          },
          {
            title: '容量',
            index: 0,
            list: [{ text: '64GB' }, { text: '128GB' }],
          },
          {
            title: '套餐',
            index: 0,
            list: [{ text: '标配' }, { text: '套餐一' }, { text: '套餐二' }],
          },
        ],
        price: 997,
        num: 1,
        buy_min: 1,
        stock: 999,
      },
      {
        checked: false,
        id: 3,
        title: '商品标题3',
        cover: `${$conf.ossUrl}/phone/3.jpg`,
        spec: [
          {
            title: '颜色',
            index: 0,
            list: [{ text: '火焰红' }, { text: '炭黑' }, { text: '冰川蓝' }],
          },
          {
            title: '容量',
            index: 0,
            list: [{ text: '64GB' }, { text: '128GB' }],
          },
          {
            title: '套餐',
            index: 0,
            list: [{ text: '标配' }, { text: '套餐一' }, { text: '套餐二' }],
          },
        ],
        price: 715,
        num: 1,
        buy_min: 1,
        stock: 999,
      },
    ],
    // 选中列表(存放选中的id)
    selectedList: [],
    // 记录当前弹框所操作数据的index
    popupIndex: -1,
  },
  getters: {
    // 判断是否全选
    checkedAll(state) {
      return state.dataList.length === state.selectedList.length
    },
    // 计算总价
    totalPrice(state) {
      let total = 0
      state.dataList.forEach((v) => {
        if (state.selectedList.indexOf(v.id) > -1) {
          total += v.price * v.num
        }
      })
      return total
    },
    // 购物车为空时禁用全选
    disableSelectAll(state) {
      return state.dataList.length === 0
    },
    // 当前弹框拿到的数据
    popupData(state) {
      return state.popupIndex > -1 ? state.dataList[state.popupIndex] : {}
    },
  },
  mutations: {
    initSelected(state) {
      state.dataList.map((v) => {
        if (v.checked) {
          state.selectedList.indexOf(v.id) === -1 && state.selectedList.push(v.id)
        }
      })
    },
    // 选择/取消选中某个商品
    selectItem(state, index) {
      let id = state.dataList[index].id
      let i = state.selectedList.indexOf(id)
      // 取消选中
      if (i > -1) {
        state.dataList[index].checked = false
        return state.selectedList.splice(i, 1)
      }
      // 选中
      state.dataList[index].checked = true
      return state.selectedList.push(id)
    },
    // 滑动删除单个商品
    delItem(state, index) {
      let id = state.dataList[index].id
      let i = state.selectedList.indexOf(id)
      i > -1 && state.selectedList.splice(i, 1)
      setTimeout(() => {
        state.dataList.splice(index, 1)
      }, 0)
    },
    // 全选
    selectAll(state) {
      state.selectedList = state.dataList.map((v) => {
        v.checked = true
        return v.id
      })
    },
    // 取消全选
    unSelectAll(state) {
      state.dataList.forEach((v) => {
        v.checked = false
      })
      state.selectedList = []
    },
    // 删除选中的商品
    delGoods(state) {
      state.dataList = state.dataList.filter((v) => {
        return state.selectedList.indexOf(v.id) === -1
      })
    },
    // 初始化弹框的index
    initPopupIndex(state, index) {
      state.popupIndex = index
    },
    // 将商品加入购物车
    addGoodsToCart(state, goods) {
      state.dataList.unshift(goods)
    },
  },
  actions: {
    // 执行全选||取消全选
    doSelect({ state, commit, getters }) {
      getters.checkedAll ? commit('unSelectAll') : commit('selectAll')
    },
    // 执行批量删除
    doDelGoods({ commit }) {
      uni.showModal({
        content: '是否要删除选中的商品？',
        success: (res) => {
          if (res.confirm) {
            commit('delGoods')
          }
        },
      })
    },
  },
}
