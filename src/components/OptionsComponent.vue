<template>
  <div class="container">
    <form
      action=""
      class="card col-sm-6 col-md-6 col-sm-12 px-4 mt-5 mx-auto shadow"
      @submit.prevent="go"
    >
      <h4 class="text-center mt-3">Sign-up form</h4>
      <div>
        <label for="" class="my-2">Name</label>
        <input
          type="text"
          placeholder="Name"
          class="form-control"
          v-model="v$.form.name.$model"
          name="name"
          id=""
        />
        <div v-for="error in v$.form.name.$errors" :key="error">
          <small class="text-danger">{{ error.$message }}</small>
        </div>

        <label for="" class="my-2">Email</label>
        <input
          type=""
          placeholder="Email"
          class="form-control"
          v-model="v$.form.email.$model"
          name="Email"
          id=""
        />
        <div v-for="error in v$.form.email.$errors" :key="error">
          <small class="text-sm text-danger">{{ error.$message }}</small>
        </div>

        <label for="" class="my-2">Password</label>
        <input
          type="text"
          placeholder="Password"
          class="form-control"
          v-model="v$.form.password.$model"
          name="Password"
          id=""
        />
        <div v-for="error in v$.form.password.$errors" :key="error">
          <small class="text-sm text-danger">{{ error.$message }}</small>
        </div>

        <div>
          <button class="btn btn-primary w-100 mt-3 mb-3">Sign up</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, maxLength, email } from "@vuelidate/validators";

export default {
  setup() {
    useVuelidate();
    //This is will assist us if we want to write composition method.
    // const myName = "Bam";
    // const myName = ref("Bam");

    // const myFunction = () => {
    //   console.log(myName);
    // };

    return { v$: useVuelidate() };
  },
  // const name = "Josh"  //You can not use const in optional Component and you can not create variables without using data.
  data() {
    //Data is a function the returns an object
    return {
      name: "Joshua",
      school: "SQI",

      //User's Inputs.
      form: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  //Options API...
  //   Validation Rules.
  validations() {
    return {
      form: {
        name: { required, min: minLength(5), max: maxLength(10) },
        email: { required, email },
        password: { required, min: minLength(5), max: maxLength(10) },
      },
    };
  },

  methods: {
    go() {
      console.log(this.v$);
    },
    // getMyWallet() {
    //   console.log(this.name);
    // },
  },
};
</script>

<style></style>
