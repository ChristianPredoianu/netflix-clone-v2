<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import ContinueBtn from '@/components/buttons/ContinueBtn.vue';

const store = useStore();

const userEmail = ref(store.state.auth.email);
const userPassword = ref(null);
const error = computed(() => store.state.auth.error);
const accountMessage = computed(() => store.state.auth.accountMessage);

onMounted(() => {
  store.commit('SET_ACCOUNT_MESSAGE', null);
  store.commit('SET_ERROR', null);
});

function signUp() {
  store.dispatch('SIGN_USER_UP', {
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
        {{ error }}
      </p>
      <p v-else :class="classes.accountCreated">
        {{ accountMessage }}
      </p>

      <ContinueBtn>Continue</ContinueBtn>
    </form>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/forms/sign-up-form';
</style>
