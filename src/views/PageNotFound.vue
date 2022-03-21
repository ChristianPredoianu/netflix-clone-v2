<script setup>
import { useRouter } from "vue-router";
import LogoNav from "@/components/navs/LogoNav.vue";

const router = useRouter();

function goHome() {
  router.push({ name: "Browse" });
}
</script>

<template>
  <LogoNav />

  <main :class="classes.main">
    <div :class="classes.overlay"></div>
    <div class="container">
      <div :class="classes.infoWrapper">
        <h1 :class="classes.primaryHeading">Have you ended up wrong?</h1>
        <h2 :class="classes.secondaryHeading">
          We can't find the page you are looking for. Explore our starting page.
        </h2>
        <button @click="goHome" :class="classes.backBtn">Netclone Home</button>
      </div>
    </div>
  </main>
</template>

<style lang="scss" module="classes">
@use '@/sass/views/page-not-found';
</style>
