<template>
  <div>
    <PesquisarVagaComponent></PesquisarVagaComponent>
    <div class="row mt-4">
      <div class="col-12">
        <div class="d-flex justify-content-center mt-5" v-if="loading.vagasIsLoading">
          <div class="spinner-border loading"  role="status" >
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
      
      <div class="col-12 col-md-6 col-lg-4 col-xxl-4" v-for="vaga in vagas" :key="vaga.id">
        <VagaComponent  :vaga="vaga"></VagaComponent>
      </div>
    </div>
  </div>
</template>

<script>


import PesquisarVagaComponent from '@/components/PesquisarVagaComponent.vue';
import VagaComponent from '@/components/VagaComponent.vue';
import {mapActions} from "vuex"


export default {
  name: 'HomeView',
  components: {
    PesquisarVagaComponent,
    VagaComponent
},
  data: () => ({
    
    loading:{
      vagasIsLoading: false
    }
  }),
  computed:{
    vagas(){
      return this.$store.state.vagas
    }
  },
  methods:{
    ...mapActions(["getVagas"])
  },
  created(){
    this.getVagas()
  }
}
</script>
<style>
  .loading{
    width: 5rem; 
    height: 5rem;
  }
</style>
