<template>
  <div class="about">
    <h1>Barbers Page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import ClientCard from '@/components/barber-card.vue'

export default {
  name: "About",
  components: {
    BarberCard
  },
  data() {
    return {
      barbers: []
    }
  },
  async created() {
      const barbersRequest = await axios.get('/api/barbers')
      this.barbers = barbersRequest.data 
  },

};
</script>
