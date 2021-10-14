<template>
  <section class="container pb-4 mb-md-3">
    <Busquedas />
    <Homemain />
    <Banner />
    <Calltoaction />
    <Instructions />
  </section>
</template>

<script>
import Busquedas from "@/components/Busquedas.vue";
import Banner from "@/components/Banner.vue";
import Homemain from "@/components/Homemain.vue";
import Calltoaction from "@/components/Calltoaction.vue";
import Instructions from "@/components/Instructions.vue";

export default {
  name: "Home",
  components: {
    Busquedas,
    Homemain,
    Banner,
    Calltoaction,
    Instructions,
  },
};
</script>

<style scoped></style>
