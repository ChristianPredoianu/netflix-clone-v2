<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import ContinueBtn from "@/components//buttons/ContinueBtn.vue";

const router = useRouter();

const userEmail = ref(null),
  userPassword = ref(null),
  error = ref(null),
  signInSuccessMsg = ref(null);

function signIn() {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, userEmail.value, userPassword.value)
    .then(() => {
      error.value = null;
      signInSuccessMsg.value = "Logging in...";

      setTimeout(() => {
        router.push({ name: "Profiles" });
      }, 2000);
    })
    .catch((err) => {
      if (err) {
        error.value = err.message;
      }
    });
}
</script>

<template>
  <div>
    <form :class="classes.signInForm" @submit.prevent="signIn">
      <h1 :class="classes.signInHeading">Sign In</h1>
      <label for="email" :class="classes.label">Email:</label>
      <input
        type="email"
        placeholder="E-mail"
        required
        :class="classes.formInput"
        v-model="userEmail"
      />
      <label for="password" :class="classes.label">Password:</label>
      <input
        type="password"
        placeholder="Password"
        minlength="6"
        maxlength="60"
        required
        :class="classes.formInput"
        v-model="userPassword"
      />
      <ContinueBtn>Sign In</ContinueBtn>
      <div :class="classes.signUpNow">
        <p :class="classes.signUpParagraph">
          New to Netclone?
          <router-link to="/" tag="span"
            ><span :class="classes.signUpSpan"> Sign up now.</span></router-link
          >
        </p>
        <div :class="classes.userMessage">
          <p v-if="error" :class="classes.error">
            {{ error }}
          </p>
          <p v-else :class="classes.signedIn">
            {{ signInSuccessMsg }}
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/forms/sign-in-form';
</style>
