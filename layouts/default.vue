<template>
  <v-app style = "background-color: #fff;">
    <v-container grid-list-sm>
      <v-layout row wrap>
        <v-flex d-flex xs12 order-xs5>
          <v-layout column>
            <v-flex d-flex>
              <NavigationButtons></NavigationButtons>
            </v-flex>


            <v-flex d-flex>
              <nuxt></nuxt>
            </v-flex>


            <v-flex d-flex>
              <small class="footerText">©2018 Takamichi Tatsumoto. All
                rights reserved.</small>
            </v-flex>
          </v-layout>
        </v-flex>


        <v-flex d-flex xs12 sm7>
          <v-layout row wrap>
            <v-flex d-flex>

              <Logo></Logo>

            </v-flex>
          </v-layout>
        </v-flex>


        <v-flex d-flex xs12 sm5>
          <SocialButtons></SocialButtons>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
  import NavigationButtons from '~/components/NavigationButtons.vue'
  import Logo from '~/components/Logo.vue'
  import SocialButtons from '~/components/SocialButtons.vue'

  export default {
    components: {
      NavigationButtons,
      Logo,
      SocialButtons
    }
  }
</script>

<style>
html {
  font-family: 'Lato', 'Noto Sans Japanese';
  font-size: 14px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.footerText {
  text-align: right;
  color: #666;
  font-family: 'Lato', 'Noto Sans Japanese';
}
</style>
