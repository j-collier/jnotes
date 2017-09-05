//resources
require("../manifest.json");
require("../icons/128.png");
require("../icons/48.png");

//styles

import Vue from 'vue';

//components
import App from './components/App.vue';

//define components

new Vue({
  el: 'body',
  render: h => h(App)
});
