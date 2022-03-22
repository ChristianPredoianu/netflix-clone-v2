<script setup>
import NetflixLogo from '@/components/ui/NetflixLogo.vue';
import SignUpSignInBtn from '@/components/navs/SignUpSignInBtn.vue';
</script>

<template>
  <div class="container">
    <header>
      <nav :class="classes.signUpNav">
        <NetflixLogo />
        <SignUpSignInBtn />
      </nav>
    </header>
  </div>
  <div :class="classes.border"></div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/navs/sign-up-nav';
</style>
