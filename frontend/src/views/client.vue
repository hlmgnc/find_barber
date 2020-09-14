<template lang="pug">
  .client
    h1 CLIENTS
    div(v-for="client in clients" :client="client")
      router-link(:to="`/clients/${client._id}`") {{ client.name }}
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  name: 'Client',
  data() {
    return {
      clients: []
    }
  },
  async created() {
      this.clients = await this.fetchClients()
      const clientsRequest = await axios.get('/api/clients')
      this.clients = clientsRequest.data 
  },
  methods: {
    ...mapActions(['fetchClients'])
  }

};
</script>
