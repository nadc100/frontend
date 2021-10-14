<template>
  <form class="needs-validation" novalidate="">
    <div class="row g-3">
      <div class="col-sm-6">
        <label for="firstName" class="form-label">Nombres</label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          placeholder=""
          value=""
          required=""
        />
        <div class="invalid-feedback">Campo obligatorio</div>
      </div>

      <div class="col-sm-6">
        <label for="lastName" class="form-label">Apellidos</label>
        <input
          type="text"
          class="form-control"
          id="lastName"
          placeholder=""
          value=""
          required=""
        />
        <div class="invalid-feedback">Valid last name is required.</div>
      </div>

      <div class="col-12">
        <label for="email" class="form-label"
          >Correo<span class="text-muted">(Optional)</span></label
        >
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="nombre@gmail.com"
        />
        <div class="invalid-feedback">Escriba su correo.</div>
      </div>

      <div class="col-12">
        <label for="address" class="form-label">Dirección</label>
        <input
          type="text"
          class="form-control"
          id="address"
          placeholder="Calle/Cra"
          required=""
        />
        <div class="invalid-feedback">Por favor escriba su dirección.</div>
      </div>

      <div class="col-12">
        <label for="address2" class="form-label"
          >Detalles Dirección<span class="text-muted">(Optional)</span></label
        >
        <input
          type="text"
          class="form-control"
          id="address2"
          placeholder="Bloque/Apto"
        />
      </div>

      <div class="col-md-5">
        <label for="country" class="form-label">País</label>
        <select class="form-select" id="country" required="">
          <option value="">Choose...</option>
          <option>United States</option>
        </select>
        <div class="invalid-feedback">Please select a valid country.</div>
      </div>

      <div class="col-md-5">
        <label for="state" class="form-label">Depto</label>
        <select class="form-select" id="state" required="">
          <option value="">Choose...</option>
          <option>California</option>
        </select>
        <div class="invalid-feedback">Please provide a valid state.</div>
      </div>

      <div class="col-md-2">
        <label for="zip" class="form-label">Código postal</label>
        <input
          type="text"
          class="form-control"
          id="zip"
          placeholder=""
          required=""
        />
        <div class="invalid-feedback">Zip code required.</div>
      </div>
    </div>
    <button
      class="w-40 btn-lg btn-mio mt-4"
      type="submit"
      style="background-color: #2ecc71"
    >
      Donar
    </button>
    <hr class="my-4" />
    <h4 class="mb-3" style="color: #280176">
      Recibiras un email con un código QR para hacer tranferencia o una cuenta
      para hacer pago por PSE
    </h4>

    <hr class="my-4" />
  </form>
</template>
<script>
export default {
  name: "Formdonation",
};
</script>

<style scoped>
.btn-mio {
  color: white;
  background-color: #2acc71;
  text-decoration: none;
  font-weight: 100;
  border: #2acc78;
}
</style>
