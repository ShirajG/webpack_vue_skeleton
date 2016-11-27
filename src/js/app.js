require('bootstrap-loader');
require('../scss/app.scss');
require('expose?AppVeuxStore!./vue/store.js');

var index = require('./vue/components/index.vue');

window.onload = function() {
  new Vue({
    el: "#app",
    render: function(createElement) {
      return createElement(index);
    }
  });
}
