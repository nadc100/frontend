<template>
  <form class="needs-validation" novalidate>
    <div class="row g-3">
      <div class="col-sm-6">
        <label for="firstName" class="form-label">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          placeholder=""
          value=""
          required
        />
        <div class="invalid-feedback">Escriba un nombre válido</div>
      </div>

      <div class="col-sm-6">
        <label for="lastName" class="form-label">Apellido</label>
        <input
          type="text"
          class="form-control"
          id="lastName"
          placeholder=""
          value=""
          required
        />
        <div class="invalid-feedback">Valid last name is required.</div>
      </div>

      <div class="col-12">
        <label for="username" class="form-label">Usuario</label>
        <div class="input-group has-validation">
          <span class="input-group-text">@</span>
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="Usuario"
            required
          />
          <div class="invalid-feedback">Your username is required.</div>
        </div>
      </div>

      <div class="col-12">
        <label for="email" class="form-label"
          >Email <span class="text-muted"></span
        ></label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="nombre@example.com"
        />
        <div class="invalid-feedback">
          Please enter a valid email address for shipping updates.
        </div>
      </div>

      <div class="col-12">
        <label for="address" class="form-label">Dirección</label>
        <input
          type="text"
          class="form-control"
          id="address"
          placeholder="Dirección actual"
          required
        />
        <div class="invalid-feedback">Please enter your shipping address.</div>
      </div>

      <div class="col-12">
        <label for="address2" class="form-label"
          >Detalle<span class="text-muted"></span
        ></label>
        <input
          type="text"
          class="form-control"
          id="address2"
          placeholder="Apartamento"
        />
      </div>

      <div class="col-md-5">
        <label for="country" class="form-label">País</label>
        <select class="form-select" id="country" required>
          <option value="">Escoja..</option>
          <option>United States</option>
        </select>
        <div class="invalid-feedback">Please select a valid country.</div>
      </div>

      <div class="col-md-4">
        <label for="state" class="form-label">Dpto</label>
        <select class="form-select" id="state" required>
          <option value="">Choose...</option>
          <option>California</option>
        </select>
        <div class="invalid-feedback">Please provide a valid state.</div>
      </div>

      <div class="col-md-3">
        <label for="zip" class="form-label">Código postal</label>
        <input
          type="text"
          class="form-control"
          id="zip"
          placeholder=""
          required
        />
        <div class="invalid-feedback">Zip code required.</div>
      </div>
    </div>

    <hr class="my-4" />

    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="same-address" />
      <label class="form-check-label" for="same-address"
        >Quiero recibir el newletter de propiedades</label
      >
    </div>
    <hr class="my-4" />
    <button
      class="w-100 btn btn-lg btn-mio"
      type="submit"
      style="background-color: #2ecc71"
    >
      Registro
    </button>
  </form>
</template>
<script>
export default {
  name: "Formregistro",
};
</script>

<style scoped>
.btn-mio {
  color: white;
  background-color: #2acc71;
  text-decoration: none;
  font-weight: 100;
  border: #2acc78 solid 1px;
}
</style>
