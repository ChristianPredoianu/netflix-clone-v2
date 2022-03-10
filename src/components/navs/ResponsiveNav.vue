<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
import { onClickOutside } from "@vueuse/core";
import NetflixLogo from "@/components/ui/NetflixLogo.vue";

const store = useStore();

const userProfiles = computed(() => store.state.userProfiles.userProfiles),
  currentProfile = computed(() => store.state.userProfiles.clickedProfile);

const isNavOpen = ref(true),
  isSearchOpen = ref(false),
  isProfilesDropdownOpen = ref(false),
  mobileView = ref(true),
  searchInputRef = ref(null);

function toggleNavLinks() {
  isNavOpen.value = !isNavOpen.value;
}

function toggleSearch() {
  isSearchOpen.value = !isSearchOpen.value;
}

function toggleProfilesDropdown() {
  isProfilesDropdownOpen.value = !isProfilesDropdownOpen.value;
}

function closeProfilesDropdown() {
  isProfilesDropdownOpen.value = false;
}

onClickOutside(searchInputRef, () => (isSearchOpen.value = false));

//if widow width <= 1024px mobileView=true & nav should close else keep nav open
function handleView() {
  mobileView.value = window.innerWidth <= 1024;
  mobileView.value ? (isNavOpen.value = false) : (isNavOpen.value = true);
}

onMounted(() => {
  handleView();
  window.addEventListener("resize", handleView);
});

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
          Browse
          <span> <font-awesome-icon icon="angle-down" /></span>
        </button>
        <Transition name="slide-down" mode="out-in">
          <ul :class="classes.navLinks" v-if="isNavOpen">
            <li :class="classes.navLinksItem">Home</li>
            <li :class="classes.navLinksItem">Movies</li>
            <li :class="classes.navLinksItem">Popular</li>
            <li :class="classes.navLinksItem">My list</li>
          </ul>
        </Transition>
      </div>
      <div :class="classes.navRight" ref="searchInputRef">
        <Transition name="slide" mode="out-in">
          <input
            type="text"
            name="search"
            placeholder="Title"
            size="10"
            :class="classes.searchInput"
            v-if="isSearchOpen"
        /></Transition>
        <font-awesome-icon
          icon="search"
          :class="classes.navRightIconSearch"
          @click="toggleSearch"
        />
        <font-awesome-icon
          :icon="currentProfile.icon"
          :class="classes.navRightIcon"
          @click="toggleProfilesDropdown"
          @mouseenter="toggleProfilesDropdown"
          @mouseleave="closeProfilesDropdown"
        />
        <Transition name="slide-down" mode="out-in">
          <div
            :class="classes.profilesDropdown"
            v-if="isProfilesDropdownOpen"
            @mouseenter="() => (isProfilesDropdownOpen = true)"
          >
            <p>Profiles</p>
            <div
              :class="classes.dropdownProfile"
              v-for="profile in userProfiles"
              :key="profile.id"
            >
              <font-awesome-icon
                :icon="profile.icon"
                :class="classes.dropdownProfileIcon"
              />
              <p :class="classes.dropdownProfileName">{{ profile.name }}</p>
            </div>
          </div>
        </Transition>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/navs/responsive-nav';
</style>

<style lang="scss" scoped>
@use '@/sass/animations/animations';
</style>
