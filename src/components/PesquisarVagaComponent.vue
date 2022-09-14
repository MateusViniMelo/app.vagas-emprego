<template>
    <div class="h-100 p-5 bg-white border rounded-3 mt-5">
        <h2>Pesquisar Vagas</h2>
        <form @submit.prevent="pesquisarVaga()">
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label>Título da vaga</label>
                        <input type="text" class="form-control" placeholder="Pesquise por palavras chaves, por exemplo 'PHP', 'Pleno', 'Analista'" v-model="formPesquisar.titulo">
                        <small class="form-text text-muted">Informe palavras que estejam relacionadas com o título da vaga que você procura</small>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <button class="btn btn-outline-dark m-2" type="submit">Buscar</button>
                    <button class="btn btn-outline-primary m-2" type="submit" @click="getVagas()">Buscar tudo</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import {mapActions} from "vuex"
export default {
    name: "PesquisarVagaComponent",
    data: () => ({
        formPesquisar: {
            titulo:""
        }
    }),
    methods: {
        ...mapActions(["getVagasFiltradas","getVagas"]),

        pesquisarVaga(){
            this.getVagasFiltradas(this.formPesquisar.titulo)
        }
    }
}
</script>

<style>

</style>