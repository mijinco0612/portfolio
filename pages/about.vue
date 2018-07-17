<template>
  <section class="container">
    <div>
      <h1 class="title">
        About
      </h1>
      <div class="links">
        <router-link tag="li" to="/">
          <a>Top</a>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}



</style>
