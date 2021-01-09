import Vue from 'vue'
import moment from 'vue-moment'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/elements'
import './components/ui'

Vue.use(moment)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
