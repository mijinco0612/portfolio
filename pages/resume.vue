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
        <h1 class="imc display-2 mb-3">RESUME</h1>
      </v-layout>
    </v-parallax>


    <div class ="summary">
      <h3>Summary</h3>
      <p>専修学校卒業後、SEOマーケティングコンサルタントを経験。後にフリーランスのwebデザイナに転身。<br>
        現職 (株)エス・エム・エスに業務委託エンジニアとして参画した後、直雇用される。<br>
        当初は運用保守エンジニアとして従事。<br>
        その後、新規開発プロジェクトのチーム長を拝命。管轄する組織規模は最大時で17名。<br>
        現在は、配下メンバーに権限委譲を行ないつつ、直接管理するチーム数を減らしている。<br>
        担当領域は、チーム立ち上げ・業務分析・要件定義・開発・リリース・運用まで一気通貫で経験がある。
      </p>
    </div>
    <h3>Carrier history</h3>
    <timeline></timeline>

  </section>
</template>

<script>
  import Timeline from '~/components/ResumeTimeline.vue'


  export default {
    components: {
      Timeline
    },
    data: () => ({
      show: false
    })
  }
</script>

<style scoped>
  .container{
    font-family: 'Lato', 'Noto Sans Japanese';
    color:#5B5B5B ;
  }

  .summary{
    margin-top: 40px;
  }
  .summary p{
    padding: 5px 5px 5px 47px;
  }


  .imc {
    font-family: 'Lato' !important;
    font-weight: lighter;
    text-shadow: 2px 2px 2px #222;
  }
</style>
