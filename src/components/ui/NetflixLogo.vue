<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter(),
  store = useStore();

const currentUser = computed(() => store.state.userData.currentUser);

function navigateHome() {
  !currentUser.value.id ? router.push({ name: "Home" }) : router.push({ name: "Browse" });
}
</script>

<template>
  <img
    src="@/assets/images/netclone.png"
    :class="classes.netflixLogo"
    alt="Netclone logo"
    @click="navigateHome"
  />
</template>

<style lang="scss" module="classes">
@use '@/sass/components/ui/netflix-logo';
</style>
