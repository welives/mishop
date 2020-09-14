import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import address from './modules/address'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    address,
  },
})
