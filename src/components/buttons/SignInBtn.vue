<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function goToSignIn() {
  router.push({ name: "SignIn" });
}
</script>

<template>
  <button :class="classes.logInBtn" @click="goToSignIn">
    <slot></slot>
  </button>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/buttons/sign-in-btn';
</style>
