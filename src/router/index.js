import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routeGuard = (to, from, next) => {
  let isAuthenticated = false;
  if (sessionStorage.getItem("username")) {
    isAuthenticated = true;
  }

  if (isAuthenticated) {
    next();
  } else {
    next("/");
  }
};

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/propiedades",
    name: "Propiedades",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/Propiedades.vue");
    },
  },
  {
    path: "/agentes",
    name: "Agentes",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/Agentes.vue");
    },
  },
  {
    path: "/donaciones",
    name: "Donaciones",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/Donaciones.vue");
    },
   // beforeEnter: routeGuard,
  },
  {
    path: "/login",
    name: "Login",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/Login.vue");
    },
  },
  {
    path: "/registro",
    name: "Registro",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/Registro.vue");
    },
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/Contacto.vue");
    },
  },
  {
    path: "/listapropiedades",
    name: "Listapropiedades",
    component: function () {
      return import(
        /* webpackChunkName: "about" */ "../views/Listapropiedades.vue"
      );
    },
  },
  {
    path: "/detalles",
    name: "Detalles",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/Detalles.vue");
    },
  },
  {
    path: "/lista",
    name: "Lista",
    component: function () {
      return import(
        /* webpackChunkName: "about" */ "../views/Publicarpropiedad.vue"
      );
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
