<template>
  <section class="container">
    <v-parallax
      height="150"
      :src="require('@/assets/texture/resume.png')"
    >
      <v-layout
        align-center
        column
        justify-center
      >
        <h1 class="imc display-3 mb-3">RESUME</h1>
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
      <p>
        個人のプロジェクトとして<br>
        株式会社キャスター 求人サイト「REWORK」の制作に携わる。<br>
        同社CTOとプロジェクトマネージャーと協議を行いつつコンテンツを制作・リリースを行った。
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
    color:#5B5B5B ;  font-family: 'Lato', 'Noto Sans Japanese';

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
    text-shadow: 1px 1px 2px #333;
  }
</style>
