<template>
  <div
    class="
      position-relative
      overflow-hidden
      p-3 p-md-5
      m-md-3
      text-center
      gradiente
    "
  >
    <div class="col-md-5 p-lg-5 mx-auto my-5">
      <h1 class="display-4 fw-normal">Registrate y Publica tu Propiedad</h1>
      <p class="lead fw-normal">Nosotros la venderemos al mejor precio</p>
      <a class="btn btn-outline-secondary" href="#">Registro</a>
    </div>
    <div class="product-device shadow-sm d-none d-md-block"></div>
    <div
      class="product-device product-device-2 shadow-sm d-none d-md-block"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Publicity",
};
</script>

<style scoped>
.gradiente {
  background-image: radial-gradient(
    circle at 12.5% 12.5%,
    #b4ff9d 0,
    #9aff9d 16.67%,
    #78fd9a 33.33%,
    #47f096 50%,
    #00e393 66.67%,
    #00d994 83.33%,
    #00d29a 100%
  );
}
h1 {
  color: #280176;
}
</style>
