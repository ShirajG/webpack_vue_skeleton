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
  },
  actions: {
    incrementCount: function (context) {
      context.commit('increment')
    },
    decrementCount: function (context) {
      context.commit('decrement')
    },
    random: function (context) {
      //  Disable buttons
      //  Make ASYNC request
      //  On success, show new value, re-enable
      //  On error, show error modal
    }
  },
  getters: {

  }
})

