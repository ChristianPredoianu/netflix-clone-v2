<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { onClickOutside } from "@vueuse/core";
import NetflixLogo from "@/components/ui/NetflixLogo.vue";

const isNavOpen = ref(true);
const isSearchOpen = ref(false);
const isProfilesDropdownOpen = ref(false);
const mobileView = ref(true);

const searchInputRef = ref(null);
const profilesDropdownRef = ref(null);

function toggleNavLinks() {
  isNavOpen.value = !isNavOpen.value;
  console.log(isNavOpen.value);
}

function toggleSearch() {
  isSearchOpen.value = !isSearchOpen.value;
}

onClickOutside(searchInputRef, () => (isSearchOpen.value = false));
onClickOutside(profilesDropdownRef, () => (isProfilesDropdownOpen.value = false));

//if widow width <= 1024px mobileView=true & nav should close else keep nav open
function handleView() {
  mobileView.value = window.innerWidth <= 1024;
  mobileView.value ? (isNavOpen.value = false) : (isNavOpen.value = true);
}

onMounted(() => {
  handleView();
  window.addEventListener("resize", handleView);
});

//Remove eventlistner when component unmounts
onUnmounted(() => {
  window.removeEventListener("resize", handleView);
});
</script>

<template>
  <header :class="classes.header">
    <nav :class="classes.nav">
      <div :class="classes.navLeft">
        <NetflixLogo />

        <button :class="classes.browseBtn" @click="toggleNavLinks" v-if="mobileView">
          Browse <span> <font-awesome-icon icon="angle-down" /></span>
        </button>
        <ul :class="classes.navLinks" v-if="isNavOpen">
          <li :class="classes.navLinksItem">Home</li>
          <li :class="classes.navLinksItem">Movies</li>
          <li :class="classes.navLinksItem">Popular</li>
          <li :class="classes.navLinksItem">My list</li>
        </ul>
      </div>
      <div :class="classes.navRight" ref="searchInputRef">
        <input
          type="text"
          name="search"
          size="10"
          :class="classes.searchInput"
          v-if="isSearchOpen"
        />
        <font-awesome-icon
          icon="search"
          :class="classes.navRightIcon"
          @click="toggleSearch"
        />
        <font-awesome-icon icon="smile" :class="classes.navRightIcon" />
      </div>
    </nav>
  </header>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/navs/responsive-nav';
</style>
