import Vue from 'vue';
import VueRouter from 'vue-router';
import vueResource from 'vue-resource';
import App from './app.vue';

Vue.use(VueRouter);
Vue.use(vueResource);

// 开启debug模式
Vue.config.debug = true;

import Vindex from './views/index.vue'
import Vorder from './views/order/index.vue'
import Vuser from './views/user/index.vue'

const router = new VueRouter({
    routes: [
        { path: '', component:  Vindex},
        { path: '/index', component:  Vindex},
        { path: '/order', component:  Vorder},
        { path: '/user', component:  Vuser}
    ]
})

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app")
