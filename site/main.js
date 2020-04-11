
import Vue from 'vue'
import App from './App.vue'
import YlwVue from '@'

Vue.use(YlwVue)
new Vue({
  el: '#app',
  render: h => h(App)
})