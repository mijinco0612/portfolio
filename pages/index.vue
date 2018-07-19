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

      <div class="eyeCatch">
        <h3>Contents</h3>
      </div>

      <v-container grid-list-xl>
        <v-layout row v-bind="binding">

          <v-flex xs4>
            <v-card  hover href="resume">
              <v-card-title primary-title>
                <span  class="headline">RESUME</span>
              </v-card-title>

              <v-card-media
                :src="require('@/assets/texture/resume.png')"
                height="200px">
              </v-card-media>
              <v-card-text>
                職務経歴の略歴と詳細を掲載しています。
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex xs4>
            <v-card  hover href="works">
              <v-card-title primary-title>
              <span class="headline">WORKS</span>
              </v-card-title>
              <v-card-media
                :src="require('@/assets/texture/work.png')"
                height="200px">
              </v-card-media>
              <v-card-text>
                担当プロジェクトのメディア掲載歴です。
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex xs4>
            <v-card  hover href="about">
              <v-card-title primary-title>
              <span class="headline">ABOUT</span>
              </v-card-title>
              <v-card-media
                :src="require('@/assets/texture/about.png')"
                height="200px">
              </v-card-media>
              <v-card-text>
                簡単な自己紹介を掲載しています。
              </v-card-text>
            </v-card>
          </v-flex>

        </v-layout>
      </v-container>

    </div>
  </section>
</template>

<script>
  export default {

    data: () => ({
      isHydrated: false
    }),

    computed: {
      binding() {
        console.log(this.isHydrated)
        const binding = {}

        if (this.$vuetify.breakpoint.smAndDown) {
          binding.column = true;
        }

        return binding
      },
      breakpoint() { // just an example, could be one specific value if that's all you need
        return this.isHydrated
          ? this.$vuetify.breakpoint
          : false
      }
    },
    mounted() {
      this.isHydrated = true
    }
  }
</script>

<style scoped>
.container {
  min-height: 65vh;
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
  font-size: 48px;

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
