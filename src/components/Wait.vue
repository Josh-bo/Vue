<script setup>
import { ref, computed } from "vue";

const name = "Janet";
const num = ref(5);
const checkDay = ref(true);
const check = ref(true);

const students = [
  { id: 1, name: "Favour", paid: true },
  { id: 2, name: "Pelumi", paid: false },
  { id: 3, name: "Oyin", paid: false },
  { id: 4, name: "Joshua", paid: true },
  { id: 5, name: "James", paid: true },
];

const togglePaid = (id) => {
  let student = students.find((student) => student.id == id);
  console.log(student.paid);
  student.paid = !student.paid;
};

const paidStudents = computed(() => {
  return students.filter((student) => student.paid);
});
</script>

<template>
  <h4>Hello World, welcome to Vue 3</h4>
  <p>{{ num }}</p>
  <button @click="num++">Increase num</button>

  <div class="mx-auto text-center justify-content-center">
    <div v-for="(students, index) in students" :key="index">
      <p
        :id="students.paid ? 'paid' : 'notPaid'"
        class="w-25 p-3 mt-3 text-center px-2 py-1 text-light"
        @click="togglePaid(students.id)"
      >
        {{ students.name }}
      </p>
    </div>
  </div>

  <div v-if="checkDay">Today is Tuesday</div>
  <div v-if="check">Today is Wednesday</div>
  <div v-else>Today is not Wednesday</div>

  <div v-for="student in paidStudents" :key="student.id">
    <p>{{ student.name }}</p>
  </div>
</template>

<style scoped>
#paid {
  background-color: green;
}
#notPaid {
  background-color: red;
}
</style>
