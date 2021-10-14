<template>
    <section class="container pb-4 mb-md-3">
    <Listaenventa />
  </section>
</template>

<script>
import Listaenventa from "@/components/Listaenventa.vue";

export default {
  name: "Listapropiedades",
  components: {
    Listaenventa,
  },
};
</script>
<style scoped>
strong {
  color: #280176;
}
.btn-mio {
  color: white;
  background-color: #2acc71;
  text-decoration: none;
  font-weight: 100;
  border: #2acc78;
}
</style>
