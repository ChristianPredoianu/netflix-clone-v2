<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import LogoNav from "@/components/navs/LogoNav.vue";

const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    router.push({ name: "Browse" });
  }, 2000);
});
</script>

<template>
  <LogoNav />
  <main :class="classes.main">
    <div :class="classes.loader"></div>
  </main>
</template>

<style lang="scss" module="classes">
@use '@/sass/views/loading-profile';
</style>
