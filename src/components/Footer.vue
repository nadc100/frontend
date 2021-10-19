<template>
  <footer class="container pb-4 mb-md-3">
    <div class="row">
      <div class="col-2">
        <h5>Apartamentos</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <router-link to="/" class="nav-link p-0 text-muted"
              >Bogotá</router-link
            >
          </li>
          <li class="nav-item mb-2">
            <router-link to="/" class="nav-link p-0 text-muted"
              >Medellín</router-link
            >
          </li>
          <li class="nav-item mb-2">
            <router-link to="/" class="nav-link p-0 text-muted"
              >Cali</router-link
            >
          </li>
          <li class="nav-item mb-2">
            <router-link to="/" class="nav-link p-0 text-muted"
              >Barranquilla</router-link
            >
          </li>
          <li class="nav-item mb-2">
            <router-link to="/" class="nav-link p-0 text-muted"
              >Bucaramanga</router-link
            >
          </li>
          <li class="nav-item mb-2">
            <router-link to="/" class="nav-link p-0 text-muted"
              >Villavicencio</router-link
            >
          </li>
        </ul>
      </div>

      <div class="col-2">
        <h5>Fincas</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <router-link to="/" class="nav-link p-0 text-muted"
              >Bogotá</router-link
            >
          </li>
          <li class="nav-item mb-2">
            <router-link to="/" class="nav-link p-0 text-muted"
              >Medellín</router-link
            >
          </li>
          <li class="nav-item mb-2">
            <router-link to="/" class="nav-link p-0 text-muted"
              >Cali</router-link
            >
          </li>
          <li class="nav-item mb-2">
            <router-link to="/" class="nav-link p-0 text-muted"
              >Barranquilla</router-link
            >
          </li>
          <li class="nav-item mb-2">
            <router-link to="/" class="nav-link p-0 text-muted"
              >Bucaramanga</router-link
            >
          </li>
          <li class="nav-item mb-2">
            <router-link to="/" class="nav-link p-0 text-muted"
              >Villavicencio</router-link
            >
          </li>
        </ul>
      </div>

      <div class="col-2">
        <h5>Casas</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <router-link to="/" class="nav-link p-0 text-muted"
              >Bogotá</router-link
            >
          </li>
          <li class="nav-item mb-2">
            <router-link to="/" class="nav-link p-0 text-muted"
              >Medellín</router-link
            >
          </li>
          <li class="nav-item mb-2">
            <router-link to="/" class="nav-link p-0 text-muted"
              >Cali</router-link
            >
          </li>
          <li class="nav-item mb-2">
            <router-link to="/" class="nav-link p-0 text-muted"
              >Barranquilla</router-link
            >
          </li>
          <li class="nav-item mb-2">
            <router-link to="/" class="nav-link p-0 text-muted"
              >Bucaramanga</router-link
            >
          </li>
          <li class="nav-item mb-2">
            <router-link to="/" class="nav-link p-0 text-muted"
              >Villavicencio</router-link
            >
          </li>
        </ul>
      </div>

      <div class="col-4">
        <form class="container-fluid">
          <h5>Quieres saber las novedades de este mes?</h5>
          <p>
            Subcribete para recibir el boletín con las mejores oportunidades de
            inversión en finza raiz
          </p>
          <div class="d-flex w-100 gap-2">
            <label for="newsletter1" class="visually-hidden"
              >Email address</label
            >
            <input
              id="correo"
              type="text"
              class="form-control"
              placeholder="correo"
              v-model="correoNew"
              @keyup.enter="crearCorreo()"
            />
            <button
              class="btn btn-primary"
              type="button"
              @click="crearCorreo()"
            >
              Subscribirse
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="d-flex justify-content-between py-4 my-4 border-top">
      <p>Mobiliaria-IN © 2021 Todos los derechos reservados</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3">
          <a class="link-dark" href="#"
            ><svg class="bi" width="24" height="24">
              <use xlink:href="#twitter"></use></svg
          ></a>
        </li>
        <li class="ms-3">
          <a class="link-dark" href="#"
            ><svg class="bi" width="24" height="24">
              <use xlink:href="#instagram"></use></svg
          ></a>
        </li>
        <li class="ms-3">
          <a class="link-dark" href="#"
            ><svg class="bi" width="24" height="24">
              <use xlink:href="#facebook"></use></svg
          ></a>
        </li>
      </ul>
    </div>
  </footer>
</template>
<script>
import httpClient from "../controllers/httpClient";

export default {
  name: "Footer",
  props: {
    correoNew: String,
  },
  data() {
    this.correoNew;
  },
  methods: {
    crearCorreo() {
      httpClient.post("/correo", this.correoNew);
    },
  },
};
</script>

<style scoped>
footer {
  border-bottom: solid #2ecc71 1px;
  padding: 3em;
}
</style>
