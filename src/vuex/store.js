import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  //private 不公开
  mutations: {
    add(state, amount) {
      state.count = state.count + amount
    }
  },
  //通过 dispatch 进行 set 
  actions: {
    setCounterValue ({commit}, count) {
      commit('add', count);
    }
  },
  //获取
  getters: {
    getCounterValue: (state) => {
      return state.count
    }
  }
});
