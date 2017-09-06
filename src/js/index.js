//resources
require("../manifest.json");
//require("../icons/128.png");
//require("../icons/48.png");

//styles
require("normalize.css");
require("milligram");
require("simplemde/dist/simplemde.min.css");

import Vue from 'vue';

//components
import App from './components/App.vue';
import Editor from './components/Editor.vue';

//define components
Vue.component('editor', Editor);

new Vue({
  el: 'body',
  render: h => h(App)
});
