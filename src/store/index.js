import Vue from 'vue'
import Vuex from 'vuex'
import categories from './modules/categories';
import jokes from './modules/jokes';
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    categories,
    jokes
  }
})
