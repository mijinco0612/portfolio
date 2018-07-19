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
            </v-card-media>
            <v-card-text>
              <div>
                <span>氏名 : 辰本 貴通 </span><br>
                <span>職種 : ソフトウェアエンジニア</span><br>
                <span>趣味 : 筋トレ・料理</span><br><br>
                <p>
                  Vue.js / Nuxt.js / Spring Boot / MySQLを使うことが多いです。<br>
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
              <span class="headline">SKILL SET</span>
            </v-card-title>
            <v-card-text>
              <div class="text-xm">
                <v-chip color="red" text-color="white">Java6-8</v-chip>
                <v-chip color="red" text-color="white">JS(ES5-6)</v-chip>
                <v-chip color="red" text-color="white">PHP</v-chip>
                <v-chip color="red" text-color="white">SQL</v-chip>
                <v-chip color="red" text-color="white">shell script</v-chip>
              </div>
              <div class="text-xm">
                <v-chip color="green" text-color="white">Spring Boot</v-chip>
                <v-chip color="green" text-color="white">Nuxt.js</v-chip>
                <v-chip color="green" text-color="white">Vue.js</v-chip>
                <v-chip color="green" text-color="white">SAStruts</v-chip>
                <v-chip color="green" text-color="white">AngularJs</v-chip>
                <v-chip color="green" text-color="white">JQuery</v-chip>
                <v-chip color="green" text-color="white">WordPress</v-chip>
              </div>
              <div class="text-xm">
                <v-chip color="orange" text-color="white">MySQL</v-chip>
                <v-chip color="orange" text-color="white">Redis</v-chip>
                <v-chip color="orange" text-color="white">Apache</v-chip>
                <v-chip color="orange" text-color="white">GlassFish</v-chip>
                <v-chip color="orange" text-color="white">Tomcat</v-chip>
              </div>
              <div class="text-xm">
                <v-chip color="teal" text-color="white">Github</v-chip>
                <v-chip color="teal" text-color="white">circleci</v-chip>
                <v-chip color="teal" text-color="white">TravisCI</v-chip>
              </div>
              <div class="text-xm">
                <v-chip color="purple" text-color="white">AWS</v-chip>
                <v-chip color="purple" text-color="white">ELB</v-chip>
                <v-chip color="purple" text-color="white">EC2</v-chip>
                <v-chip color="purple" text-color="white">Aurora</v-chip>
                <v-chip color="purple" text-color="white">ElastiCache</v-chip>
              </div>
              <div class="text-xm">
                <v-chip color="pink" text-color="white">JIRA</v-chip>
                <v-chip color="pink" text-color="white">Redmine</v-chip>
                <v-chip color="pink" text-color="white">Trac</v-chip>
              </div>
              <div class="text-xm">
                <v-chip color="indigo" text-color="white">Photoshop</v-chip>
                <v-chip color="indigo" text-color="white">Illustrator</v-chip>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>

  </section>
</template>

<script>
  import SocialButtons from '~/components/SocialButtons.vue'
  import NuxtLoading from "../.nuxt/components/nuxt-loading";

  export default {
    components: {
      NuxtLoading,
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
