<template>
  <section class="container">
    <div>
      <div class="iCatch"><img src="~/assets/main.png"/></div>
      <div class="links">
        <nuxt-link tag="li" to="/works">
          <a>works</a>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>


export default {
  components: {

  }
}
</script>

<style scoped>
.container {
  min-height:50vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Lato', 'Noto Sans Japanese';
}
.iCatch{
  width:100%;
  background-color: #fff;
  text-align: right;
}
  .iCatch img {
    max-width: 960px;
    max-height: 270px;
    opacity: initial;
  }

</style>
