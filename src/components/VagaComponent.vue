<template>
    <div class="card mb-5">
        
        <div class="card-body">
            <h5 class="card-title">
                <span class="float-end">
                            <i :class="vaga.favorita ? `bi bi-heart-fill favorita text-danger fs-5` : `bi bi-heart favorita fs-5`" @click="mudarStatusVaga(vaga)" v-if="!loading.favoritaVagaisLoading"></i>
                            <div class="spinner-grow spinner-grow-sm text-danger" role="status" v-if="loading.favoritaVagaisLoading">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </span>
                {{ vaga.titulo }}
               
            </h5> 
            <p>{{ vaga.descricao }}</p>
        
        </div>
        <div class="card-footer">
        <small class="text-muted">Salário: R$ {{ vaga.salario.replace(".",",") }} | Modalidade: {{ vaga.modalidade.nome }} | Tipo: {{ vaga.tipo.nome }} | <span v-if="vaga.created_at">Publicação: {{ new Date(vaga.created_at).toLocaleString('nl-NL')}}</span></small>
        </div>
    </div>
</template>

<script>
    

export default {
    name: "VagaComponent",
    data: () => ({
        loading: {
            favoritaVagaisLoading: false
        }

    }),
    props: {
        vaga: Object
    },
    methods:{
        async mudarStatusVaga(vaga){
            this.loading.favoritaVagaisLoading = true
            
            await this.axios.get(`api/vaga-mudar-status/${vaga.id}`)
                .then(() => {vaga.favorita = !vaga.favorita})
                .finally(() => {this.loading.favoritaVagaisLoading = false})
        }
    }
}
</script>

<style>
    .favorita{
        cursor:pointer;
    }
    .favorita:hover{
        color:red;
    }
</style>