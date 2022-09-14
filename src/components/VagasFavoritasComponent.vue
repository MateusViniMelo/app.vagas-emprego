<template>
    <div>
        

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel">Vagas Favoritadas</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div class="offcanvas-body">
                
                <ul class="list-group">
                    <li class="list-group-item" v-for="vagaFavorita in vagasFavoritas" :key="vagaFavorita.id">{{vagaFavorita.titulo}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from "vuex"
export default {
    name: "VagasFavoritas",
    computed:{
        vagasFavoritas(){
            return this.$store.state.vagas.filter(function(vaga){
                return vaga.favorita == true
            })
        }
    },
    methods: {
        ...mapActions(["getVagasFavoritas"])
    },
    created(){
        this.getVagasFavoritas()
    }
    
}
</script>

<style scoped>
    
</style>