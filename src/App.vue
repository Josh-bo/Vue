<script setup>
import HelloWorld from "./components/FormComponent.vue";
import OptionsComponent from "./components/OptionsComponent.vue";
import FormValidate from "./components/FormValidate.vue";

const user = {
  id: "123",
  name: "Joshua",
};
</script>

<template>
  <!-- <HelloWorld /> -->
  <!-- <OptionsComponent /> -->
  <!-- <FormValidate /> -->

  <div class="bg-dark d-flex justify-content-between p-3 text-light">
    <div class="fw-bold fs-3">VUE</div>
    <div class="d-flex gap-3 mt-3 text-end">
      <div>
        <router-link :to="{ name: 'home' }" class="">Go to Home</router-link>
      </div>

      <div>
        <router-link :to="{ name: 'about' }" class="">Go to About</router-link>
      </div>

      <div>
        <router-link :to="{ name: 'uss' }" class="">Go to About Us</router-link>
      </div>

      <div>
        <router-link :to="{ name: 'company' }" class=""
          >Go to About Our Company</router-link
        >
      </div>

      <div>
        <router-link :to="`/user/${user.name}`" class=""
          >Go to User</router-link
        >
      </div>
    </div>
  </div>
  <router-view />
</template>

<style scoped></style>
