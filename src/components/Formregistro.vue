<template>
  <form
    class="needs-validation"
    novalidate
    id="form"
    v-on:submit.prevent="addUser"
  >
    <div class="row g-3">
      <div class="col-sm-6">
        <label for="firstName" class="form-label">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="newuserName"
          v-model="newUser.name"
          placeholder="nombre"
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
          id="newuserLastName"
          v-model="newUser.lastname"
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
            v-model="newUser.username"
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
          v-model="newUser.email"
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
          v-model="newUser.address"
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
          v-model="newUser.address2"
          placeholder="Apartamento"
        />
      </div>

      <div class="col-md-5">
        <label for="country" class="form-label">País</label>
        <select
          class="form-select"
          id="country"
          required
          v-model="newUser.country"
        >
          <option value="">País..</option>
          <option>Colombia</option>
          <option>Otro</option>
        </select>
        <div class="invalid-feedback">Please select a valid country.</div>
      </div>

      <div class="col-md-4">
        <label for="state" class="form-label">Dpto</label>
        <select class="form-select" id="state" required v-model="newUser.state">
          <option value="">Dpto...</option>
          <option>Antioquia</option>
        </select>
        <div class="invalid-feedback">Departamento válido.</div>
      </div>

      <div class="col-md-3">
        <label for="zip" class="form-label">Código postal</label>
        <input
          type="text"
          class="form-control"
          id="codigoPostal"
          placeholder="còdio de correo"
          v-model="newUser.codigoPostal"
          required
        />
        <div class="invalid-feedback">Código postal se requiere.</div>
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
      value="Add User"
    >
      Registro
    </button>
  </form>
</template>
<script>
export default {
  name: "Formregistro",
  props: {
    newUser: {
      name: String,
      lastname: String,
      username: String,
      email: String,
      address: String,
      address2: String,
      country: String,
      state: String,
      codigoPostal: String,
    },
  },
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
