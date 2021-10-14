<template>
  <section class="container pb-4 mb-md-3">
    <Publicity />
    <Formregistro />
  </section>
</template>
<script>
import Formregistro from "@/components/Formregistro.vue";
import Publicity from "@/components/Publicity.vue";

export default {
  name: "Registro",
  components: {
    Formregistro,
    Publicity,
  },
};
</script>
