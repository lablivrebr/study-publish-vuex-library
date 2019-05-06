import Vue from 'vue'
import Vuex from 'vuex'
import './plugins/vuetify'
import ComunicationWebapp from '@vinnyfs89/comunication-webapp/src/index'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io';
import $socket from '@vinnyfs89/comunication-webapp/src/modules/websocket/_auxiliares/socket-client-instance';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  }
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
  render: h => h(App),
}).$mount('#app')
