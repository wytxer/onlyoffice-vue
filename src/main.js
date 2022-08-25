import Vue from 'vue'
import { Button } from 'ant-design-vue'
import App from '@/app.vue'
import router from '@/router'
import OnlyofficeEditor from '@/components'
import ExCard from '@/components/ex-card'

import '@wytxer/style-utils/lib/common.less'
import 'ant-design-vue/dist/antd.less'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(OnlyofficeEditor)
Vue.use(ExCard)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
