<template>
  <v-container grid-list-xl>
    <v-layout row v-bind="binding">

      <v-flex xs4 v-for="item in items" :key="item.title">
        <v-card hover :href="item.url">
          <v-card-title primary-title>
            <span class="headline">{{item.title}}</span>
          </v-card-title>

          <v-card-media
            :src="item.imagePath"
            height="200px">
          </v-card-media>
          <v-card-text>
            {{item.caption}}
          </v-card-text>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  export default {

    data: () => ({
      isHydrated: false,
      items:[
        {title:'RESUME',url:'resume',imagePath:require("@/assets/texture/resume.png"),caption:'職務経歴の略歴と詳細を掲載しています'},
        {title:'WORKS',url:'works',imagePath:require("@/assets/texture/work.png"),caption:'担当プロジェクトのメディア掲載歴です。'},
        {title:'ABOUT',url:'about',imagePath:require("@/assets/texture/about.png"),caption:'簡単な自己紹介を掲載しています。'}
      ]
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
  .v-card__text {
    font-family: 'Lato', 'Noto Sans Japanese' !important;
    color: #5B5B5B;
  }

  .headline {
    font-family: 'Lato' !important;
    font-weight: lighter;
    color: #222;
    margin: auto;
  }
</style>

