require('bootstrap-loader');
require('../scss/app.scss');
var Hello = require('./vue/components/Hello.vue');

window.onload = function() {
  new Vue({
    el: "#app",
    render: function(createElement) {
      return createElement(Hello);
    }
  });
}
