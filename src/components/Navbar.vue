<template>
  <header class="p-3 mb-3 border-bottom">
    <div class="container">
      <div
        class="
          d-flex
          flex-wrap
          align-items-center
          justify-content-center justify-content-lg-start
        "
      >
        <ul
          class="
            nav
            col-12 col-lg-auto
            me-lg-auto
            mt-4
            justify-content-center
            mb-md-0
          "
        >
          <img
            src="imagenes/logo.png"
            alt="log"
            width="30"
            height="30"
            class="rounded-circle"
          />
          <li>
            <h5>
              <router-link
                to="/"
                class="nav-link px-2 link-dark"
                style="color: #2ecc71"
                >Mobiliaria-IN</router-link
              >
            </h5>
          </li>
          <li>
            <router-link to="/propiedades" class="nav-link px-2 link-dark"
              >Propiedades</router-link
            >
          </li>
          <li>
            <router-link to="/agentes" class="nav-link px-2 link-dark"
              >Agentes</router-link
            >
          </li>
          <li>
            <router-link to="/donaciones" class="nav-link px-2 link-dark"
              >Donaciones</router-link
            >
          </li>
          <li>
            <router-link to="/lista" class="nav-link px-2 link-dark"
              >lista de propiedades</router-link
            >
          </li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input
            type="search"
            class="form-control"
            placeholder="Buscar..."
            aria-label="Search"
          />
        </form>

        <div class="dropdown text-end">
          <router-link
            to="#"
            class="d-block link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
          </router-link>
          <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
            <li>
              <router-link to="" class="dropdown-item"
                >Buscar por ciudad</router-link
              >
            </li>
            <li>
              <router-link to="" class="dropdown-item"
                >Buscar por estrato</router-link
              >
            </li>
            <li>
              <router-link to="" class="dropdown-item"
                >Buscar por precio</router-link
              >
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <router-link to="" class="dropdown-item">Salir</router-link>
            </li>
          </ul>
        </div>
        <div class="text-end">
          <router-link to="/login"
            ><button type="button" class="btn btn-mio bg-opacity-50">
              Login
            </button></router-link
          >
          <router-link to="/registro"
            ><button type="button" class="btn btn-mio bg-opacity-50">
              Registro
            </button></router-link
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Urbanist:wght@100;500&display=swap");

ul li {
  font-family: "Urbanist", sans-serif;
  color: #2ecc71;
}

.btn-mio {
  color: white;
  background-color: #2acc71;
  text-decoration: none;
  font-weight: 100;
  border: #2acc78 solid 1px;
  padding-left: 1em;
}
</style>
