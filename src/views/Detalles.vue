<template>
  <section class="container pb-4 mb-md-3">
    <Busquedas />
    <div class="p-4 p-md-5 mb-4 text-white rounded bg-light">
      <div class="col-md-6 px-0">
        <h1 class="display-4">Estas será tu casa en Bogotá</h1>
        <strong class="text-black fw-bold">llamanos para ir a visitarla</strong>
      </div>
    </div>
    <Detail />
  </section>
</template>

<script>
import Busquedas from "@/components/Busquedas.vue";
import Detail from "@/components/Detail.vue";

export default {
  name: "Detalles",
  components: {
    Busquedas,
    Detail,
  },
};
</script>
<style scoped></style>
