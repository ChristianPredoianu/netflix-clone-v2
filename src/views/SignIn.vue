<script setup>
import LogoNav from '@/components/navs/LogoNav.vue';
import SignInForm from '@/components/forms/SignInForm.vue';
</script>

<template>
  <div :class="classes.signIn">
    <div :class="classes.overlay"></div>
    <div class="container">
      <LogoNav />
      <main :class="classes.main">
        <div :class="classes.signInForm">
          <SignInForm />
        </div>
      </main>
    </div>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/views/sign-in';
</style>
