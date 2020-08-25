<template lang="pug">
  .home
    HelloWorld(msg="Welcome to Find Barber App")
    div(v-for="client in clients") {{ client.name }}
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from 'axios'

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {
    return {
      clients: []
    }
  },
  async created() {
      const clientsRequest = await axios.get('/api/clients')
      this.clients = clientsRequest.data 
  }
};
</script>
