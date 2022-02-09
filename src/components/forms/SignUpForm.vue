<script setup>
import ContinueBtn from '@/components/buttons/ContinueBtn.vue';
function signUp() {
  console.log('Signing up..');
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
      />
      <label for="Email">Password:</label>
      <input
        type="password"
        placeholder="Password"
        minlength="6"
        maxlength="60"
        required
        :class="classes.formInput"
      />
      <ContinueBtn>Continue</ContinueBtn>
    </form>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/forms/sign-up-form';
</style>
