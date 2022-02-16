<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import ContinueBtn from '@/components//buttons/ContinueBtn.vue';

const store = useStore();

const userEmail = ref(null);
const userPassword = ref(null);
const error = computed(() => store.state.auth.error);
const accountMessage = computed(() => store.state.auth.accountMessage);

onMounted(() => {
  store.commit('setAccountMessage', null);
  store.commit('setError', null);
});

function signIn() {
  store.dispatch('signUserIn', {
    email: userEmail.value,
    password: userPassword.value,
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
            {{ accountMessage }}
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/forms/sign-in-form';
</style>
