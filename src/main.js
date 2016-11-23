import Vue from 'vue';
import VueResouce from 'vue-resource';
import App from './App';

Vue.use(VueResouce);

/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
