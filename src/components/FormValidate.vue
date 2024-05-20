<template>
  <div class="container">
    <form
      action=""
      class="card col-sm-6 col-md-6 col-sm-12 px-4 mt-5 mx-auto shadow"
      @submit.prevent="go"
    >
      <h4 class="text-center mt-3">Sign-up form Validate</h4>
      <div>
        <label for="" class="my-2">Name</label>
        <input
          type="text"
          placeholder="Name"
          class="form-control"
          v-model="v$.name.$model"
          name="name"
          id=""
        />
        <div v-for="error in v$.name.$errors" :key="error">
          <small class="text-danger">{{ error.$message }}</small>
        </div>

        <label for="" class="my-2">Email</label>
        <input
          type=""
          placeholder="Email"
          class="form-control"
          v-model="v$.email.$model"
          name="Email"
          id=""
        />
        <div v-for="error in v$.email.$errors" :key="error">
          <small class="text-sm text-danger">{{ error.$message }}</small>
        </div>

        <label for="" class="my-2">Password</label>
        <input
          type="text"
          placeholder="Password"
          class="form-control"
          v-model="v$.password.$model"
          name="Password"
          id=""
        />
        <div v-for="error in v$.password.$errors" :key="error">
          <small class="text-sm text-danger">{{ error.$message }}</small>
        </div>

        <div>
          <button class="btn btn-primary w-100 mt-3 mb-3">Sign up</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
// export default {

import { computed, onMounted, ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, maxLength, email } from "@vuelidate/validators";

// const form = ref({
//   name: "",
//   email: "",
//   password: "",
// });

const name = ref("");
const userEmail = ref("");
const password = ref("");

const rules = computed(() => ({
  name: { required, min: minLength(5), max: maxLength(10) },
  email: { required },
  password: { required, min: minLength(5), max: maxLength(10) },
}));

const v$ = useVuelidate(rules, { name, userEmail, password });

const go = () => {
  console.log(v$);
};
// }
</script>
<style></style>
