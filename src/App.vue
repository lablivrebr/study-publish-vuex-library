<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content style="background: darkolivegreen;">
      <communication-service-notificacao-badge token="token"></communication-service-notificacao-badge>
      <communication-service-status></communication-service-status>
      <communication-service-chat></communication-service-chat>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data () {
    return {
        token: localStorage.getItem('token'),
      //
    }
  },
  mounted() {
      this.token = '';
  },
}
</script>
