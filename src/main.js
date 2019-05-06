import Vue from 'vue'
import Vuex from 'vuex'
import './plugins/vuetify'
import ComunicationWebapp from '@vinnyfs89/comunication-webapp'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io';
import $socket from '@vinnyfs89/comunication-webapp/src/modules/websocket/_auxiliares/socket-client-instance';
import Router from 'vue-router';

Vue.use(Vuex)
Vue.use(Router);

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  }
});

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    // routes: ,
});

Vue.use(ComunicationWebapp, { store });

Vue.use(new VueSocketIO({
    debug: false,
    connection: $socket,
    vuex: {
        store,
        actionPrefix: 'Socket_',
        mutationPrefix: 'Socket_',
    },
}));

Vue.config.productionTip = false;

new Vue({
  store,
    router,
  render: h => h(App),
}).$mount('#app')
