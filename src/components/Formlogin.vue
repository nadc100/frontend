<template>
<div>
 <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show">  
      <b-form-group id="input-group-1" label="Email address:" label-for="input-1" description="We'll never share your email with anyone else.">
      <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter email" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
      <b-form-input id="input-2" v-model="form.name" placeholder="Enter name" required></b-form-input>
      </b-form-group>
      <b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
      </b-form-group>
    </b-form>
  </div>
</template>
<script>
export default {
name: "Formlogin",
    data() {
      return {
        form: {
        username: '',
        password: '',
         },
         show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.username = ''
        this.form.password = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }

