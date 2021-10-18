<template>
  <section class="container pb-4 mb-md-3">
    <Busquedas />
    <div class="p-4 p-md-5 mb-4 text-white rounded bg-light">
      <div class="col-md-6 px-0">
        <h1 class="display-4">
          Esta son las propiedades disponibles en: Bogotá
        </h1>
        <strong class="text-black fw-bold">contacta un agente!</strong>
      </div>
    </div>
    <Listaenventa />
  </section>
</template>

<script>
import Listaenventa from "@/components/Listaenventa.vue";
import Busquedas from "@/components/Busquedas.vue";

export default {
  name: "Listapropiedades",
  components: {
    Busquedas,
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
