<template>
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
</template>

<style lang="scss" module="classes">
@use '@/sass/components/navs/responsive-nav-links';
</style>
