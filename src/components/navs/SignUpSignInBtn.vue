<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToSignIn() {
  router.push({ name: 'SignIn' });
}
</script>

<template>
  <p :class="classes.signInBtn" @click="goToSignIn">Sign In</p>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/navs/sign-in-btn';
</style>
