import Vue from 'vue'
import Vuex from 'vuex'
import './plugins/vuetify'
import ComunicationWebapp from '@vinnyfs89/communication-webapp'
import App from './App.vue'
import Router from 'vue-router';

Vue.use(Vuex)
Vue.use(Router);

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  }
});
Vue.use(ComunicationWebapp, { store });

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    // routes: ,
});


// Vue.use(new VueSocketIO({
//     debug: false,
//     connection: $socket,
//     vuex: {
//         store,
//         actionPrefix: 'Socket_',
//         mutationPrefix: 'Socket_',
//     },
// }));

Vue.config.productionTip = false;

new Vue({
  store,
    router,
  render: h => h(App),
}).$mount('#app')
