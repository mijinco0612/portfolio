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
        <h1 class="imc display-2 mb-3">ABOUT</h1>
      </v-layout>
    </v-parallax>

    <v-divider></v-divider>


    <v-container
      fluid
      grid-list-md
    >
      <v-layout row wrap>

        <v-flex xs4>
          <v-card tile>
            <v-card-media
              :src="require('@/assets/avatar.jpg')"
              height="200px"
            >
              <v-container
                fill-height
                fluid
                pa-2
              >
                <v-layout fill-height>
                  <v-flex align-end flexbox>

                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-media>
          </v-card>
        </v-flex>


        <v-flex xs8>
          <v-card flat tile>
            <v-card-text>
              <div class="textContents">
                <span>氏名 : 辰本 貴通 </span><br>
                <span>職種 : ソフトウェアエンジニア</span><br>
                <span>趣味 : 筋トレ・料理</span><br><br>
                <p>
                  WEBアプリケーションエンジニアをしています。Vue.js、Nuxt.js、Spring Bootを使うことが多いです。<br>
                  荒涼とした世界で生きていくのは辛いのでHRTをとっても大切にしています。<br>
                </p>
              </div>
              <social-buttons></social-buttons>
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
    }
  }
</script>

<style scoped>
  .container {
    min-height: 70vh;
    font-family: 'Lato', 'Noto Sans Japanese' !important;
    color: #5B5B5B;
  }

  .textContents {
    color: #5B5B5B;
  }

  .imc {
    font-family: 'Lato' !important;
    font-weight: lighter;
    text-shadow: 2px 2px 2px #222;
  }
</style>
