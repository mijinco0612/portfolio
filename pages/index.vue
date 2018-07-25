<template>
  <section class="container">
    <div>

      <v-parallax
        height="250"
        :src="require('@/assets/mac.jpeg')"
      >
        <v-layout
          align-center
          column
          justify-center
        >
          <h1 class="imc display-3 mb-3">PORTFOLIO</h1>
        </v-layout>
      </v-parallax>

      <div class="eyeCatch ">
        <h3 class="display-2">CONTENTS</h3>
      </div>

      <ContentCards></ContentCards>

    </div>
  </section>
</template>

<script>
  import ContentCards from '~/components/ContentCards.vue'
  export default {

    components: {
      ContentCards
    }
  }
</script>

<style scoped>

.container {
  min-height: 60vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.eyeCatch {
  margin: 50px 0 20px 0;
}

.eyeCatch h3 {
  font-family: 'Lato' !important;
  font-weight: lighter;
}

.imc {
  font-family: 'Lato' !important;
  font-weight: lighter;
  text-shadow: 2px 2px 2px #222;
}

</style>
