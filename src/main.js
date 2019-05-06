import Vue from 'vue'
import Vuex from 'vuex'
import './plugins/vuetify'
import ComunicationWebapp from '@vinnyfs89/comunication-webapp/src/index'
import App from './App.vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  }
});

Vue.use(ComunicationWebapp, { store });

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
