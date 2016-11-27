Vue.use(Vuex);

module.exports = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: function (state) {
      state.count++;
    },
    decrement: function (state) {
      state.count--;
    }
  }
})

