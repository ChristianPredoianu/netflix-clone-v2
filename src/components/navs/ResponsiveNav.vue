<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { onClickOutside } from '@vueuse/core';
import { getAuth, signOut } from 'firebase/auth';
import NetflixLogo from '@/components/ui/NetflixLogo.vue';
import ResponsiveNavLinks from '@/components/navs/ResponsiveNavLinks.vue';

const store = useStore();
const router = useRouter();

const emit = defineEmits(['search']);

const userProfiles = computed(() => store.state.userProfiles.userProfiles);
const currentProfile = computed(() => store.state.userProfiles.clickedProfile);

const isNavOpen = ref(true);
const isSearchOpen = ref(false);
const isProfilesDropdownOpen = ref(false);
const mobileView = ref(true);
const clickOutsideRef = ref(null);
const searchTerm = ref(null);

function toggleNavLinks() {
  isNavOpen.value = !isNavOpen.value;
}

function openSearch() {
  isSearchOpen.value = true;
}

function closeSearch() {
  isSearchOpen.value = false;
  searchTerm.value = null;
  emit('search', searchTerm.value);
}

function emitSearch() {
  emit('search', searchTerm.value);
}

function toggleProfilesDropdown() {
  isProfilesDropdownOpen.value = !isProfilesDropdownOpen.value;
}

function goToBrowseWithSelectedProfile(selectedProfile) {
  store.dispatch('SET_CLICKED_PROFILE', selectedProfile);
  router.push({ name: 'LoadingProfile' });
}

function signOutHandler() {
  const auth = getAuth();
  signOut(auth).then(() => {
    router.push({ name: 'SignIn' });
    store.dispatch('RESET_CURRENT_USER');
  });
}

onClickOutside(clickOutsideRef, () => {
  isProfilesDropdownOpen.value = false;

  emit('search', searchTerm.value);
});

//if widow width <= 1024px mobileView=true & nav should close else keep nav open
function handleView() {
  mobileView.value = window.innerWidth <= 1024;
  mobileView.value ? (isNavOpen.value = false) : (isNavOpen.value = true);
}

onMounted(() => {
  handleView();
  window.addEventListener('resize', handleView);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleView);
});
</script>

<template>
  <header :class="classes.header">
    <nav :class="classes.nav">
      <div :class="classes.navLeft">
        <NetflixLogo />
        <button
          :class="classes.browseBtn"
          @click="toggleNavLinks"
          v-if="mobileView"
        >
          Browse
          <span> <font-awesome-icon icon="angle-down" /></span>
        </button>
        <Transition name="slide-down" mode="out-in">
          <ul :class="classes.navLinks" v-if="isNavOpen">
            <ResponsiveNavLinks />
          </ul>
        </Transition>
      </div>
      <div :class="classes.navRight" ref="clickOutsideRef">
        <Transition name="slide" mode="out-in">
          <input
            type="text"
            name="search"
            placeholder="Title"
            size="10"
            :class="classes.searchInput"
            v-if="isSearchOpen"
            v-model="searchTerm"
            @keyup="emitSearch"
        /></Transition>
        <font-awesome-icon
          v-if="!isSearchOpen"
          icon="search"
          :class="classes.navRightIconSearch"
          @click="openSearch"
        />
        <font-awesome-icon
          v-if="isSearchOpen"
          icon="times"
          :class="classes.navRightIconSearch"
          @click="closeSearch"
        />
        <font-awesome-icon
          :icon="currentProfile.icon"
          :class="classes.navRightIcon"
          @click="toggleProfilesDropdown"
        />
        <Transition name="slide-down" mode="out-in">
          <div :class="classes.profilesDropdown" v-if="isProfilesDropdownOpen">
            <p>Profiles</p>
            <div
              :class="classes.dropdownProfile"
              v-for="profile in userProfiles"
              :key="profile.id"
              @click="goToBrowseWithSelectedProfile(profile)"
            >
              <font-awesome-icon
                :icon="profile.icon"
                :class="classes.dropdownProfileIcon"
              />
              <p :class="classes.dropdownProfileName">{{ profile.name }}</p>
            </div>
            <p :class="classes.signOut" @click="signOutHandler">Sign Out</p>
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
