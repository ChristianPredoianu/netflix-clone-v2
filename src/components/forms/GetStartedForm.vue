<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import router from "@/router";

import GetStartedBtn from "@/components/buttons/GetStartedBtn.vue";

const store = useStore();
const email = ref("");

function goToSignupHandler() {
  router.push({ name: "SignupStep1" });
  store.dispatch("SET_SIGN_UP_USER_EMAIL", email.value);
}
</script>
<template>
  <div :class="classes.formContainer">
    <form :class="classes.getStartedForm" @submit.prevent="goToSignupHandler">
      <input
        type="email"
        :class="classes.getStartedInput"
        placeholder="E-mail"
        required
        v-model="email"
      />
      <GetStartedBtn />

      {{ email }}
    </form>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/forms/get-started-form';
</style>
