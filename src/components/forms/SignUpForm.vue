<script setup>
import { ref } from "vue";
import router from "@/router";
import { useStore } from "vuex";
import ContinueBtn from "@/components/buttons/ContinueBtn.vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const store = useStore();

const userEmail = ref(store.state.userData.signUpUserEmail);
const userPassword = ref(null);
const error = ref(null);
const signedUpMsg = ref(null);

function signUp() {
  firebase
    .auth()
    .createUserWithEmailAndPassword(userEmail.value, userPassword.value)
    .then(() => {
      error.value = null;
      signedUpMsg.value = "Account Created. You are being redirected to the sign in page";
      setTimeout(() => {
        router.push({ name: "SignIn" });
      }, 2000);
    })
    .catch((err) => {
      if (err) {
        error.value = err;
      }
    });
}
</script>

<template>
  <div>
    <label for="Email">Email:</label>
    <form @submit.prevent="signUp">
      <input
        type="email"
        placeholder="E-mail"
        required
        :class="classes.formInput"
        v-model="userEmail"
      />
      {{ userEmail }}
      <label for="Email">Password:</label>
      <input
        type="password"
        placeholder="Password"
        minlength="6"
        maxlength="60"
        required
        :class="classes.formInput"
        v-model="userPassword"
      />

      <p v-if="error" :class="classes.error">
        {{ error }}
      </p>
      <p v-else :class="classes.accountCreated">
        {{ signedUpMsg }}
      </p>

      <ContinueBtn>Continue</ContinueBtn>
    </form>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/forms/sign-up-form';
</style>
