import Vue from 'vue'
import App from './App.vue'
import CommentsOverlay from './plugins/overlaycomments'

Vue.use(CommentsOverlay)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
