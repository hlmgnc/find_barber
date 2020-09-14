import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    async fetchClient(store, id){
      const clientRequest = await axios.get(`/api/clients/${id}`)
      return clientRequest.data 
    },
    async fetchClients(store) {
      const clientRequest = await axios.get(`/api/clients`)
      return clientRequest.data 
    }
  },
  modules: {}
});
