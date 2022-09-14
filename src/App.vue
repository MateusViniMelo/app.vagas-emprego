<template>
  <div>
    <LayoutDefaultComponent></LayoutDefaultComponent>
    <VagasFavoritasComponent></VagasFavoritasComponent>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>

  import LayoutDefaultComponent from "@/components/layouts/LayoutDefaultComponent.vue";
  import VagasFavoritasComponent from "./components/VagasFavoritasComponent.vue";
  export default {
    components: { LayoutDefaultComponent, VagasFavoritasComponent }
}
</script>
<style>

</style>
