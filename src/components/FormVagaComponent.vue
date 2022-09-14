<template>
    <div class="card">
        <div class="card-body">
            <form @submit.prevent="cadastrarVaga()" >
        <div class="container py-4">
            <div class="row">
            <div class="col">
                <h4>Apresente a sua vaga para milhares de profissionais e de graça</h4>
                
            </div>
            </div>

            <div class="row mt-3">
            <div class="col">
                <label class="form-label">Título da Vaga</label>
                <input type="text" :class="errors.titulo ?`form-control is-invalid` : `form-control`" v-model="formVaga.titulo">
                <div class="invalid-feedback" v-if="errors.titulo">
                    {{errors.titulo[0]}}
                </div>
                <div class="form-text">Por exemplo: Programador JavaScript e VueJS.</div>
                
            </div>
            </div>

            <div class="row mt-3">
            <div class="col">
                <label class="form-label">Descrição</label>
                <textarea type="text" :class="errors.descricao ?`form-control is-invalid` : `form-control`" v-model="formVaga.descricao"></textarea>
                <div class="invalid-feedback" v-if="errors.descricao">
                    {{errors.descricao[0]}}
                </div>
                <div class="form-text">Informe os detalhes da vaga.</div>
            </div>
            </div>

            <div class="row mt-3">
            <div class="col">
                <label class="form-label">Salário</label>
                <input type="number" :class="errors.salario ?`form-control is-invalid` : `form-control`" v-model="formVaga.salario">
                <div class="invalid-feedback" v-if="errors.salario">
                    {{errors.salario[0]}}
                </div>
                <div class="form-text">Informe o salário.</div>
            </div>

            <div class="col">
                <label class="form-label">Modalidade</label>
                <select :class="errors.modalidade_id ?`form-select is-invalid` : `form-select`" v-model="formVaga.modalidade_id">
                <option value="" disabled>--Selecione</option>
                <option :value="modalidade.id" v-for="modalidade in modalidades" :key="modalidade.id">{{modalidade.nome}}</option>
                
                </select>
                <div class="invalid-feedback" v-if="errors.modalidade_id">
                    {{errors.modalidade_id[0]}}
                </div>
                <div class="form-text">Informe onde as atividades serão realizadas.</div>
            </div>

            <div class="col">
                <label class="form-label">Tipo</label>
                <select :class="errors.tipo_id ?`form-select is-invalid` : `form-select`" v-model="formVaga.tipo_id">
                <option value="" disabled>--Selecione</option>
                <option :value="tipo.id" v-for="tipo in tipos" :key="tipo.id">{{tipo.nome}}</option>
                
                </select>
                <div class="invalid-feedback" v-if="errors.tipo_id">
                    {{errors.tipo_id[0]}}
                </div>
                <div class="form-text">Informe o tipo de contratação.</div>
                
            </div>
            </div>

            <div class="row justify-content-center mt-2">
                <div class="col-12">
                    <AlertComponent v-if="alerta" :alerta="alerta"></AlertComponent>
                </div>
            <div class="col text-center">
                <button type="submit" class="btn btn-primary">Cadastrar</button>
            </div>
            </div>

        </div>
    </form>
        </div>
    </div>
</template>

<script>
import {mapActions} from "vuex"
import AlertComponent from "./AlertComponent.vue"
export default {
    name: "FormVagaComponent",
    data: () => ({
        formVaga: {
            titulo: "",
            descricao: "",
            tipo_id: "",
            modalidade_id: "",
            salario: "",
        },
        alerta: {},
        errors: {}
    }),
    computed: {
        tipos() {
            return this.$store.state.tipos;
        },
        modalidades() {
            return this.$store.state.modalidades;
        }
    },
    methods: {
        ...mapActions(["getModalidades", "getTipos", "setVagas"]),
        cadastrarVaga() {
            this.setVagas(this.formVaga)
                .then(() => {
                this.alerta = {
                    tipo: "success",
                    mensagem: "Cadastro realizado com sucesso"
                };
                this.errors = {};
                this.formVaga = {}
            })
                .catch(error => {
                this.errors = error.response.data.errors;
            });
        }
    },
    created() {
        this.getModalidades();
        this.getTipos();
    },
    components: { AlertComponent }
}
</script>

<style>

</style>