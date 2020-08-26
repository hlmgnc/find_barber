<template lang="pug">
  .home
    h1 CLIENTS
    client-card(v-for="client in clients" :client="client")
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import ClientCard from '@/components/client-card.vue'

export default {
  name: "Home",
  components: {
    ClientCard
  },
  data() {
    return {
      clients: []
    }
  },
  async created() {
      const clientsRequest = await axios.get('/api/clients')
      this.clients = clientsRequest.data 
  },

};
</script>
