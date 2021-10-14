<template>
  <section class="container pb-4 mb-md-3">
    <div class="container my-5">
      <div
        class="
          row
          p-4
          pb-0
          pe-lg-0
          pt-lg-5
          align-items-center
          rounded-3
          border
          shadow-lg
        "
      >
        <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 class="display-4 fw-bold lh-1">apartamentos</h1>
          <strong>Apartamentos en planos o usados en todos los estratos</strong>
          <div
            class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"
          >
            <router-link to="/listapropiedades"
              ><button
                type="button"
                class="btn btn-primary btn-mio px-4 me-md-2 fw-bold"
              >
                Comprar
              </button></router-link
            >
            <router-link to="/registro"
              ><button
                type="button"
                class="btn btn-primary btn-mio px-4 me-md-2 fw-bold"
              >
                Vender
              </button></router-link
            >
          </div>
        </div>
        <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img
            class="rounded-lg-3"
            src="imagenes/apartamentos.jpg"
            alt=""
            width="720"
          />
        </div>
      </div>
    </div>

    <div class="b-example-divider"></div>

    <div class="container my-5">
      <div
        class="
          row
          p-4
          pb-0
          pe-lg-0
          pt-lg-5
          align-items-center
          rounded-3
          border
          shadow-lg
        "
      >
        <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 class="display-4 fw-bold lh-1">fincas</h1>
          <strong
            >Fincas de recreo en todas las zonas de descanzo del país</strong
          >
          <div
            class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"
          >
            <router-link to="/listapropiedades"
              ><button
                type="button"
                class="btn btn-primary btn-mio px-4 me-md-2 fw-bold"
              >
                Comprar
              </button></router-link
            >
            <router-link to="/registro"
              ><button
                type="button"
                class="btn btn-primary btn-mio px-4 me-md-2 fw-bold"
              >
                Vender
              </button></router-link
            >
          </div>
        </div>
        <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img
            class="rounded-lg-3"
            src="imagenes/fincas.jpg"
            alt=""
            width="720"
          />
        </div>
      </div>
    </div>
    <div class="b-example-divider"></div>

    <div class="container my-5">
      <div
        class="
          row
          p-4
          pb-0
          pe-lg-0
          pt-lg-5
          align-items-center
          rounded-3
          border
          shadow-lg
        "
      >
        <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 class="display-4 fw-bold lh-1">casas</h1>
          <strong>Casas en todos los estratos y de todos los precios</strong>
          <div
            class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"
          >
            <router-link to="/listapropiedades"
              ><button
                type="button"
                class="btn btn-primary btn-mio px-4 me-md-2 fw-bold"
              >
                Comprar
              </button></router-link
            >
            <router-link to="/registro"
              ><button
                type="button"
                class="btn btn-primary btn-mio px-4 me-md-2 fw-bold"
              >
                Vender
              </button></router-link
            >
          </div>
        </div>
        <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img
            class="rounded-lg-3"
            src="imagenes/house1.jpg"
            alt=""
            width="720"
          />
        </div>
      </div>
    </div>
    <Instructions />
  </section>
</template>

<script>
import Instructions from "@/components/Instructions.vue";

export default {
  name: "Propiedades",
  components: {
    Instructions,
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
