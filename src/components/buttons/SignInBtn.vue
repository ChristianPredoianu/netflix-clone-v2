<template>
  <button :class="classes.logInBtn">
    <slot></slot>
  </button>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/buttons/sign-in-btn';
</style>
