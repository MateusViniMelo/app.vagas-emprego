<template>
    <div :class="`alert alert-${alerta.tipo} text-center`" role="alert">
        {{alerta.mensagem}}
    </div>
</template>

<script>
export default {
    name: "AlertComponent",
    props:{
        alerta : Object
    }
}
</script>

<style>

</style>