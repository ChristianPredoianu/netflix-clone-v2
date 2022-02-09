<script setup>
import NetflixLogo from '@/components/ui/NetflixLogo.vue';
import SignInForm from '@/components/forms/SignInForm.vue';
</script>

<template>
  <div :class="classes.signIn">
    <div :class="classes.overlay"></div>
    <div class="container">
      <header :class="classes.header">
        <nav>
          <NetflixLogo />
        </nav>
      </header>

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
