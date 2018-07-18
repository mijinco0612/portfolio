<template>
  <section class="container">
    <div>

      <v-parallax
        height="300"
        :src="require('@/assets/mac.jpeg')"
      >
        <v-layout
          align-center
          column
          justify-center
        >
          <h1 class="imc display-2 mb-3">PORTFOLIO</h1>
          <h2 class="imc subheading">web developer : Takamichi Tatsumoto</h2>
        </v-layout>
      </v-parallax>

      <div class="eyeCatch">
        <h3>Contents</h3>
      </div>


      <v-container grid-list-md>
        <v-layout row wrap>

          <v-flex d-flex xs4>
            <v-card flat hover href="resume">
              <v-card-title primary-title>
                <span  class="headline">RESUME</span>
              </v-card-title>

              <v-card-media
                :src="require('@/assets/texture/note.png')"
                height="200px">
                <v-container fill-height fluid pa-2>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>

                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
              <v-card-text>
                職務略歴と現在までの職歴<br>
                の詳細を掲載しています。
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex d-flex xs4>
            <v-card flat hover href="works">
              <v-card-title primary-title>
              <span class="headline">WORKS</span>
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
                現在までに携わったプロジェクトの中でメディアに掲載されたものを紹介しています。
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex d-flex xs4>
            <v-card flat hover href="about">
              <v-card-title primary-title>
              <span class="headline">ABOUT</span>
              </v-card-title>
              <v-card-media
                :src="require('@/assets/texture/newspaper.jpg')"
                height="200px">

                <v-container fill-height fluid pa-2>
                  <v-layout fill-height>
                    <v-flex xs12 align-center flexbox>
                    </v-flex>
                  </v-layout>
                </v-container>
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

</script>

<style scoped>
.container {
  min-height: 70vh;
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

.imc {
  font-family: 'Lato' !important;
  font-weight: lighter;
  text-shadow: 2px 2px 2px #222;
}

.headline {
  font-family: 'Lato' !important;
  font-weight: lighter;
  color: #5B5B5B;
  text-shadow: 1px 1px 2px #222;
  margin: auto;
  }


</style>
