<template>
  <div>
    <button :class="classes.logInBtn">
      <slot></slot>
    </button>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/buttons/sign-in-btn';
</style>
