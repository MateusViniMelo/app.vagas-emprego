import { createStore } from 'vuex'
import axios from "axios"
axios.defaults.baseURL = process.env.VUE_APP_API_VAGAS

export default createStore({
  state: {
    vagas: [],
    vagasFavoritas: [],
    modalidades: [],
    tipos: []
  },
  getters: {
  },
  mutations: {
    insertVagas(state,payload){
      state.vagas = payload
    },
    insertVagasFavoritas(state,payload){
      state.vagasFavoritas = payload
    },
    insertModalidades(state,payload){
      state.modalidades = payload
    },
    insertTipos(state,payload){
      state.tipos = payload
    },
    vagasFiltradas(state,payload){
      state.vagas = state.vagas.filter(vaga => vaga.titulo.toLowerCase().includes(payload.toLowerCase()))
    }
  },
  actions: {
    async getVagas({commit}){
      await axios.get("/api/vaga")
        .then(response =>{
          commit("insertVagas",response.data.vagas)
          commit("insertVagasFavoritas")
        })
    },
    async setVagas(state, payload){
      await axios.post("/api/vaga",payload)
    },
    async getTipos({commit}){
      await axios.get("/api/tipo")
        .then(response =>{
          commit("insertTipos",response.data.tipos)
        })
    },
    async getModalidades({commit}){
      await axios.get("/api/modalidade")
        .then(response =>{
          commit("insertModalidades",response.data.modalidades)
        })
    },
    async getVagasFavoritas({commit}){
      await axios.get("/api/vaga/favorita")
        .then(response =>{
          commit("insertVagasFavoritas",response.data)
        })
    },
    getVagasFiltradas({commit}, payload){
      commit("vagasFiltradas",payload)
    }
    
  },
  modules: {
  }
})
