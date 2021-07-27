import Vue from 'vue'
import { VueEmotion } from '@egoist/vue-emotion'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {App} from './App'

library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueEmotion)
Vue.config.productionTip = false

new Vue({
  // eslint-disable-next-line arrow-parens
  render: (h) => h(App),
}).$mount('#app')
