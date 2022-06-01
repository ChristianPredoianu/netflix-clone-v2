<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import 'firebase/compat/auth';
import ContinueBtn from '@/components/buttons/ContinueBtn.vue';

const store = useStore();

const router = useRouter();

const userEmail = ref(store.state.userData.signUpUserEmail),
  userPassword = ref(null),
  error = ref(null),
  signedUpMsg = ref(null);

function signUp() {
  const auth = getAuth();

  createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value)
    .then(() => {
      error.value = null;
      signedUpMsg.value =
        'Account Created. You are being redirected to the sign in page';

      setTimeout(() => {
        router.push({ name: 'SignIn' });
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
  <label for="Email">Email:</label>
  <form @submit.prevent="signUp">
    <input
      type="email"
      placeholder="E-mail"
      required
      :class="classes.formInput"
      v-model="userEmail"
    />
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
</template>

<style lang="scss" module="classes">
@use '@/sass/components/forms/sign-up-form';
</style>
