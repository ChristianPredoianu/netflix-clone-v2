<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { onClickOutside } from "@vueuse/core";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import NetflixLogo from "@/components/ui/NetflixLogo.vue";

const store = useStore(),
  router = useRouter(),
  emit = defineEmits(["search"]);

const userProfiles = computed(() => store.state.userProfiles.userProfiles),
  currentProfile = computed(() => store.state.userProfiles.clickedProfile);

const isNavOpen = ref(true),
  isSearchOpen = ref(false),
  isProfilesDropdownOpen = ref(false),
  mobileView = ref(true),
  clickOutsideRef = ref(null),
  searchTerm = ref(null);

function toggleNavLinks() {
  isNavOpen.value = !isNavOpen.value;
}

function toggleSearch() {
  isSearchOpen.value = !isSearchOpen.value;
  searchTerm.value = null;
  emit("search", searchTerm.value);
}

function emitSearch() {
  emit("search", searchTerm.value);
}

function toggleProfilesDropdown() {
  isProfilesDropdownOpen.value = !isProfilesDropdownOpen.value;
}

function goToBrowseWithSelectedProfile(selectedProfile) {
  store.dispatch("SET_CLICKED_PROFILE", selectedProfile);
  router.push({ name: "LoadingProfile" });
}

function signOut() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      router.push({ name: "SignIn" });
      store.dispatch("RESET_CURRENT_USER");
    });
}

onClickOutside(clickOutsideRef, () => {
  isSearchOpen.value = false;
  isProfilesDropdownOpen.value = false;
  searchTerm.value = null;
  emit("search", searchTerm.value);
});

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
            <router-link
              :to="{ name: 'Browse' }"
              :active-class="classes.active"
              :class="classes.navLinksItem"
              >Home</router-link
            >
            <router-link
              :to="{ name: 'Movies' }"
              :active-class="classes.active"
              :class="classes.navLinksItem"
              >Movies</router-link
            >
            <router-link
              :to="{ name: 'Popular' }"
              :active-class="classes.active"
              :class="classes.navLinksItem"
              >Popular</router-link
            >
            <router-link
              :to="{ name: 'MyList' }"
              :active-class="classes.active"
              :class="classes.navLinksItem"
              >My list</router-link
            >
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
          icon="search"
          :class="classes.navRightIconSearch"
          @click="toggleSearch"
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
            <p :class="classes.signOut" @click="signOut">Sign Out</p>
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
