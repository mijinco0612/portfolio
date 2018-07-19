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
        <h1 class="imc display-3 mb-3">WORKS</h1>
      </v-layout>
    </v-parallax>


    <div class="summary">
    <h3>携わったプロジェクトの掲載歴</h3>
    </div>
    <v-layout row>
      <v-flex xs12>
        <v-card flat>

          <v-list two-line subheader>

            <v-list-tile
              v-for="item in items"
              :key="item.title"
              avatar
              :href="item.url"
              target="_blank"
            >
              <v-list-tile-avatar>
                <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
              </v-list-tile-avatar>

              <v-list-tile-content class="listContent">
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>



          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { icon: 'fa-newspaper', iconClass: 'accent lighten-1 white--text', title: '日本経済新聞電子版 : マルチデバイスの訪問介護向け記録サービス', subtitle: '2018.1.23' , url: 'https://www.nikkei.com/article/DGXMZO25979170S8A120C1000000/'},
          { icon: 'fa-newspaper', iconClass: 'accent lighten-1 white--text', title: '日経デジタルヘルス : マルチデバイスの訪問介護向け記録サービス', subtitle: '2018.1.22' , url: 'https://tech.nikkeibp.co.jp/dm/atcl/news/16/012110523/'},
          { icon: 'fa-newspaper', iconClass: 'accent lighten-1 white--text', title: 'VentureTimes : サービス付き高齢者住宅向け経営支援サービス', subtitle: '2015.11.19' , url: 'https://prtimes.jp/main/html/rd/p/000000020.000013298.html'},
          { icon: 'fa-newspaper', iconClass: 'accent lighten-1 white--text', title: 'PRTIMES : サービス付き高齢者住宅向け経営支援サービス', subtitle: '2015.11.16' , url: 'https://prtimes.jp/main/html/rd/p/000000020.000013298.html'},
        ],
        items2: [
          { icon: 'assignment', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' },
          { icon: 'call_to_action', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014' }
        ]
      }
    }
  }
</script>

<style scoped>

  .container {
    min-height: 80vh;
    font-family: 'Lato', 'Noto Sans Japanese' !important;
  }

  .imc {
    font-family: 'Lato' !important;
    font-weight: lighter;
    text-shadow: 2px 2px 2px #222;
  }

  .listContent {
    font-family: 'Lato', 'Noto Sans Japanese' !important;
    font-weight:normal;
    color:#5B5B5B ;
  }

  .summary{
    margin-top:50px;
    margin-bottom: 50px;
  }
  .summary h3{
    font-weight:normal;
    color:#5B5B5B;
  }

</style>
