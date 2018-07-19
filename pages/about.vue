<template>
  <section class="container">
    <v-parallax
      height="150"
      :src="require('@/assets/mac.jpeg')"
    >
      <v-layout
        align-center
        column
        justify-center
      >
        <h1 class="imc display-3 mb-3">ABOUT</h1>
      </v-layout>
    </v-parallax>

    <v-divider></v-divider>





    <v-container grid-list-xl>
      <v-layout v-bind="binding">

        <v-flex xs4>
          <v-card>
            <v-card-title primary-title>
              <span  class="headline">PROFILE</span>
            </v-card-title>

            <v-card-media
              :src="require('@/assets/avatar.jpg')"
              height="200px">
              <v-container fill-height fluid pa-2>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>

                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-media>
            <v-card-text>
              <div>
                <span>氏名 : 辰本 貴通 </span><br>
                <span>職種 : ソフトウェアエンジニア</span><br>
                <span>趣味 : 筋トレ・料理</span><br><br>
                <p>
                  Vue.js Nuxt.js Spring Boot MySQLを使うことが多いです。<br>
                  荒涼とした世界で生きていくのは辛いのでHRTをとっても大切にしています。
                </p>
              </div>
            </v-card-text>
            <social-buttons></social-buttons>
          </v-card>
        </v-flex>

        <v-flex xs8>
          <v-card>
            <v-card-title primary-title>
              <span class="headline">SKILL CHART</span>
            </v-card-title>
            <v-card-media
              :src="require('@/assets/texture/wall.jpeg')"
              height="200px">
              <v-container fill-height fluid pa-2>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>

                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-media>
            <v-card-text>
              *雰囲気です。
            </v-card-text>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>


  </section>
</template>

<script>
  import SocialButtons from '~/components/SocialButtons.vue'

  export default {
    components: {
      SocialButtons
    },
    computed: {
      binding() {
        const binding = {}
        if (this.$vuetify.breakpoint.smAndDown) binding.column = true;
        return binding
      }
    }
  }
</script>

<style scoped>
  .container {
    min-height: 70vh;
    font-family: 'Lato', 'Noto Sans Japanese' !important;
    color: #5B5B5B;
  }

  .v-card__text {
    color: #5B5B5B;
    font-family: 'Lato', 'Noto Sans Japanese' !important;
    color: #5B5B5B;
  }

  .imc {
    font-family: 'Lato' !important;
    font-weight: lighter;
    text-shadow: 2px 2px 2px #222;
  }

  .headline {
    font-family: 'Lato' !important;
    font-weight: lighter;
    color: #222;
    margin: auto;
  }
</style>
