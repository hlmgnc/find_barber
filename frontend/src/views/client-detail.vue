<template lang="pug">
  .barber
    h1 BOOKINGS
    ClientCard(:client="client" v-if="client")
</template>

<script>
import ClientCard from '@/components/client-card.vue'
import { mapActions } from 'vuex'

export default {
  name: "ClientDetail",
  components: { ClientCard },
  data() {
    return {
      client: null
    }
  },
  async created() {
    this.clients = await this.fetchClient(this.$route.params.id) 
  },
  methods: {
    ...mapActions(['fetchClient'])
  }

};
</script>
