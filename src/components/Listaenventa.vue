<template>
  <section class="container pb-4 mb-md-3">
    <div class="row g-0 border rounded flex mb-4 shadow-sm h-md-250">
      <div class="col-auto d-none d-lg-block">
        <svg
          class="bd-placeholder-img"
          width="200"
          height="250"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>casa</title>
          <rect width="100%" height="100%" fill="#55595c" />
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">Fotocasa</text>
        </svg>
      </div>
      <div class="col p-4 d-flex flex-column position-static">
        <h5>Casa</h5>
        <h4 class="mb-0">Santa Ana</h4>
        <div class="mb-1 text-muted">29 de Septiembre del 2021</div>
        <p class="card-text mb-auto">Caracteristicas:</p>
        <h3 class="mb-0">$280'000.000</h3>
        <router-link to="/detalles" class="stretched-link"
          >Ver más ...</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Listaenventa",
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
  color: #280176;
}
</style>
