<template>
  <div class="LogoWrapper">
    <nuxt-link to="/">
      <img :src="require('@/assets/Logo.png')">
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
    margin : 0 10px 0 10px
  }
</style>
