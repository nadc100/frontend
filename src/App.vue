<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Urbanist:wght@100;500&display=swap");

body {
  font-family: "Urbanist", sans-serif;
}
h1,
h2,
h4,
h5 {
  font-family: "Urbanist", sans-serif;
  font-weight: 500;
  color: #2ecc71;
}

h3 {
  font-family: "Urbanist", sans-serif;
  font-weight: 500;
  color: gold;
}
</style>
