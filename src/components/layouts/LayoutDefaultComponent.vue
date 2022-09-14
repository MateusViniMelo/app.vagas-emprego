<template>
    <header class="p-3 text-bg-dark">
        <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none me-3">
            
            <i class="bi bi-person-workspace fs-1 text-primary" ></i>
            </a>

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><RouterLink :to="{name: 'home'}" class="nav-link px-2 text-secondary">Home</RouterLink></li>
                <li><RouterLink :to="{name: 'publicar-vaga'}" class="nav-link px-2 text-secondary">Publicar Vaga</RouterLink></li>
            
            </ul>

           

            <div class="text-end">
                
                <button type="button" class="btn btn-danger" @click="getVagasFavoritas" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> Vagas Favoritas </button>
            </div>
        </div>
        </div>
    </header>
</template>

<script>
    import {mapActions} from "vuex"
export default {
    name: "LayoutDefaultComponent",
    methods:{
        ...mapActions(["getVagasFavoritas"])
    }
}
</script>

<style>
.router-link-exact-active{
    color:white !important;
    text-decoration: underline !important;
}
</style>