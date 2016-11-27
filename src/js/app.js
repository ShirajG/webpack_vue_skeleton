require('bootstrap-loader');
require('../scss/app.scss');
var Hello = require('./vue/components/Hello.vue');

Vue.use(Vuex);

MyApplication = {};
MyApplication.store = new Vuex.Store({
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

window.onload = function() {
  new Vue({
    el: "#app",
    render: function(createElement) {
      return createElement(Hello);
    }
  });
}
