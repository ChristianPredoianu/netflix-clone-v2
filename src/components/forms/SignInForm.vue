<script setup>
import ContinueBtn from '@/components//buttons/ContinueBtn.vue';
function signIn() {
  console.log('signing in...');
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
      />
      <label for="password" :class="classes.label">Password:</label>
      <input
        type="password"
        placeholder="Password"
        minlength="6"
        maxlength="60"
        required
        :class="classes.formInput"
        v-model="classes.password"
      />
      <ContinueBtn>Sign In</ContinueBtn>
      <div :class="classes.signUpNow">
        <p :class="classes.signUpParagraph">
          New to Netclone?
          <router-link to="/" tag="span"
            ><span :class="classes.signUpSpan"> Sign up now.</span></router-link
          >
        </p>
        <h1 :class="classes.signUpError">Error goes here</h1>
      </div>
    </form>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/forms/sign-in-form';
</style>
