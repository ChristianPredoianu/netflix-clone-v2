<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import router from '@/router';
import ContinueBtn from '@/components/buttons/ContinueBtn.vue';
import { s } from '../../../dist/assets/vendor.71f932d3';

const store = useStore();

const userEmail = ref(store.state.forms.email);
const userPassword = ref(null);
const error = computed(() => store.getters.getError);

function signUp() {
  store.dispatch('signUserUp', {
    email: userEmail.value,
    password: userPassword.value,
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
      <!--  We could also set a custom message in vuex if error and display the custom message -->
      <p v-if="error" :class="classes.error">
        {{ error ? error : 'Account created' }}
      </p>

      <ContinueBtn>Continue</ContinueBtn>
    </form>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/forms/sign-up-form';
</style>
