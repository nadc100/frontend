<template>
  <section class="container pb-1 mb-md-3 buscar">
    <input
      class="form-control form-control w-33"
      type="text"
      placeholder="Ciudad"
      aria-label="Search"
    />
    <input
      class="form-control form-control w-33"
      type="text"
      placeholder="Estrato"
      aria-label="Search"
    />
    <input
      class="form-control form-control w-33"
      type="text"
      placeholder="Precio"
      aria-label="Search"
    />
  </section>
</template>

<script>
export default {
  name: "Busquedas",
  props: {
    title: String,
  },
  components: {},
  computed: {},
};
</script>

<style scoped>
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

.buscar {
  width: 100%;
  margin: auto;
  display: flex;
  padding: 0rem;
  gap: 1rem;
}
</style>
