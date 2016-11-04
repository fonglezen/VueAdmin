import Vue from 'vue';
import VueRouter from 'vue-router';
import vueResource from 'vue-resource';
import App from './app.vue';

Vue.use(VueRouter);
Vue.use(vueResource);

// 开启debug模式
Vue.config.debug = true;

import Vindex from './views/BackEnd.vue'

const router = new VueRouter({
    routes: [
        { path: '', component:  Vindex},
        { path: '/index', component:  Vindex},
    ]
})

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app")
