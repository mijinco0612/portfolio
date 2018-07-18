<template>
  <div class="LogoWrapper">
    <nuxt-link to="/">
      <img :src="require('@/assets/Logo.svg')">
    </nuxt-link>
  </div>
</template>

<style scoped>
  .LogoWrapper {
    height: 150px;
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
  }
</style>
