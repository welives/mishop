export default {
  namespaced: true,
  state: {
    addrList: [
      {
        id: 1,
        name: '煎蛋',
        phone: '13978697922',
        location: '广西壮族自治区-南宁市-江南区',
        street: 'xxx街道 xxx号',
        isDefault: true,
      },
      {
        id: 2,
        name: '绿师',
        phone: '13912341234',
        location: '北京市-市辖区-东城区',
        street: 'xxx街道 xxx号',
        isDefault: false,
      },
    ],
  },
  getters: {
    getDefaultAddr(state) {
      return state.addrList.filter((v) => v.isDefault)
    },
  },
  mutations: {
    createAddress(state, addr) {
      if (addr.isDefault) {
        state.addrList.forEach((v) => {
          v.isDefault = false
        })
      }
      state.addrList.push(addr)
    },
    delAddress(state, index) {
      if (state.addrList[index].isDefault) {
        state.addrList.splice(index, 1)
        state.addrList.length && (state.addrList[0].isDefault = true)
      } else {
        state.addrList.splice(index, 1)
      }
    },
    updateAddress(state, { index, addr }) {
      if (addr.isDefault) {
        state.addrList.forEach((v) => {
          v.isDefault = false
        })
      }
      for (let key in addr) {
        state.addrList[index][key] = addr[key]
      }
    },
  },
  actions: {},
}
