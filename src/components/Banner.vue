<template>
  <div class="px-lg-5 gradiente">
    <div class="d-lg-flex justify-content-between align-items-center ps-lg-4">
      <img
        class="d-block order-lg-2 me-lg-n5 flex-shrink-0"
        src="imagenes/casas.jpg"
        alt="New House"
      />
      <div
        class="position-relative mx-auto me-lg-n5 py-5 px-4 mb-lg-5 order-lg-1"
        style="max-width: 42rem; z-index: 10"
      >
        <div class="pb-lg-5 mb-lg-5 text-center text-lg-start text-lg-nowrap">
          <h3 class="h2 text-light fw-light pb-1 from-start">
            Nueva propiedad!
          </h3>
          <h2 class="text-light display-5 from-start delay-1">
            Casa ultramoderna
          </h2>
          <p class="fs-lg text-light pb-3 from-start delay-2">
            6 cuartos, Sala -Comedor, Piscina, Salón social &amp; mucho más...
          </p>
          <div class="d-table scale-up delay-4 mx-auto mx-lg-0">
            <a class="btn btn-primary" href="shop-grid-ls.html"
              >Comprala ya!<i class="ci-arrow-right ms-2 me-n1"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
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
h3,
h2 {
  color: #280176;
}
</style>
