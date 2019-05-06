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
      <communication-service-notificacao-badge ></communication-service-notificacao-badge>
      <communication-service-status :communicationToken="token"></communication-service-status>
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
        token: localStorage.getItem('communication_token'),
      //
    }
  },
  mounted() {
      this.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsdW1lbi1qd3QiLCJzdWIiOjIwLCJ1c2VyIjp7InVzZXJfaWQiOjIwLCJuYW1lIjoiVmluaWNpdXMgRmVpdG9zYSBkYSBTaWx2YSIsImVtYWlsIjoidmluaWNpdXNmZXNpbEBnbWFpbC5jb20iLCJzaXN0ZW1hcyI6W3sic2lzdGVtYV9pZCI6MTQsImRlc2NyaWNhbyI6InNhbGljIiwiaXNfYXRpdm8iOnRydWUsImNyZWF0ZWRfYXQiOiIyMDEzLTEwLTA4IDE4OjI2OjI0IiwidXBkYXRlZF9hdCI6IjIwMTktMDItMjIgMjE6MDU6NTAiLCJ1cmwiOiJodHRwOlwvXC9zYWxpYy5jdWx0dXJhLmdvdi5iciIsInVzdWFyaW9faGFzX3Npc3RlbWEiOnsidXN1YXJpb19pZCI6MjAsInNpc3RlbWFfaWQiOjE0fX0seyJzaXN0ZW1hX2lkIjoxMywiZGVzY3JpY2FvIjoiTGVybyBsZXJvb28iLCJpc19hdGl2byI6dHJ1ZSwiY3JlYXRlZF9hdCI6IjE5OTMtMTEtMDYgMTA6MDc6MDQiLCJ1cGRhdGVkX2F0IjpudWxsLCJ1cmwiOm51bGwsInVzdWFyaW9faGFzX3Npc3RlbWEiOnsidXN1YXJpb19pZCI6MjAsInNpc3RlbWFfaWQiOjEzfX0seyJzaXN0ZW1hX2lkIjoyMiwiZGVzY3JpY2FvIjoiSXNhaWFzIFdvbGYiLCJpc19hdGl2byI6ZmFsc2UsImNyZWF0ZWRfYXQiOiIxOTkxLTA5LTE0IDE3OjQ0OjE0IiwidXBkYXRlZF9hdCI6bnVsbCwidXJsIjpudWxsLCJ1c3VhcmlvX2hhc19zaXN0ZW1hIjp7InVzdWFyaW9faWQiOjIwLCJzaXN0ZW1hX2lkIjoyMn19LHsic2lzdGVtYV9pZCI6MywiZGVzY3JpY2FvIjoidWJlciBlYXRzIiwiaXNfYXRpdm8iOnRydWUsImNyZWF0ZWRfYXQiOiIyMDE3LTAzLTAyIDAzOjIxOjA5IiwidXBkYXRlZF9hdCI6IjIwMTktMDItMjUgMTk6MDM6MjEiLCJ1cmwiOiJnbG9iby5jb20iLCJ1c3VhcmlvX2hhc19zaXN0ZW1hIjp7InVzdWFyaW9faWQiOjIwLCJzaXN0ZW1hX2lkIjozfX1dLCJpc19hZG1pbiI6dHJ1ZX0sImlhdCI6MTU1NzE3MjQ2MSwiZXhwIjoxNTU3MTc2MDYxfQ.wKRrUr0XTYDz4TAOsBMZpY_Cg0Q56inYxZHWfcOUyV8';
  },
}
</script>
