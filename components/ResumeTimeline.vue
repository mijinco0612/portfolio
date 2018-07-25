<template>
  <timeline class="container">

    <section v-for="item in items" :key="item.organization">
      <timeline-title bg-color="#76D2CA" class="title">{{item.organization}}</timeline-title>

      <timeline-item v-for=" career in item.careers" :key="career.period">
        <label>{{career.period}} </label>
        <div>
          <h4>{{career.headline}}</h4>
          <p>{{career.detail}}</p>
          <div class="text-xs chipsWrapper">
            <v-chip v-for="constitution in career.constitutions" :key="constitution">{{constitution}}</v-chip>
          </div>
        </div>
      </timeline-item>
    </section>

  </timeline>
</template>

<script>
  import {Timeline, TimelineItem, TimelineTitle} from 'vue-cute-timeline'

  export default {
    components: {
      Timeline,
      TimelineItem,
      TimelineTitle
    },
    data: () => ({
      items: [
        {
          organization: '株式会社エス・エム・エス/プロダクト開発部',
          careers: [
            {
              period: '2017.02 ~ ',
              headline: '訪問介護従事者向け スマートフォン用 webアプリケーション開発プロジェクト',
              detail: '訪問介護事業者用スマートフォン向けWebサービス開発チームのリーダーを担当。\n' +
              '        複数のチーム長を兼務することで、マネジメントの比重が高くなりつつあったため、育成したメンバーのスキルセットや志向に併せてチームを再編成し、安定期に入ったサービス群を管轄から手放しメンバーに委任することを決定。\n' +
              '        立場上はチームリードではあるが、１開発メンバーとして業務分析・要件定義・アーキテクチャ構成・開発・テスト・運用までをおこなう。\n' +
              '        チーム運用時の課題であったメンバー間のスキルセットの違いによって担当できるストーリーに偏りができることを是正するために、スキルセットが揃ったメンバーを選出、このメンバーで開発→テストまでのイテレーション開発を行うこととした。結果的にメンバー間での工程待ちや、スキルセットの違いによるコミュニケーションロスなどが減り、開発メンバーの負荷の偏りなどが著しく減らすことができた。\n' +
              '        安定期に入ったサービスを一任されたメンバーたちは、落ち着いて業務を運用しつつ学習ができるように、現プロジェクトのPRには参加してもらい、意見交換や質疑応答を行うことで、全体の技術の底上げを図った。\n'
              , constitutions: ['5parson', 'PHP', 'JS(ES6)', 'SQL', 'Spring Boot', 'Vue.js', 'MySQl', 'AWS']
            },
            {
              period: '2017.08 ~ 2017.08',
              headline: '株式会社キャスター 求人サイト「REWORK」制作 (個人プロジェクト)',
              detail: ' 個人のプロジェクトとして株式会社キャスターの求人サイト制作に参画、同社CTO並びにプロダクトマネージャーと連携をとりつつコンテンツ制作。\n' +
              '      Wordpressのテンプレートのカスタマイズ、導入等を担当。'
              , constitutions: ['4parson', 'JS(ES5)', 'SQL', 'WordPress', 'JQuery', 'MySQl', 'SAKURA']
            },
            {
              period: '2016.06 ~ 2017.01',
              headline: '介護事業経営者向けアプリケーション BIツール開発チームリーダー（兼務）',
              detail: '介護事業者向け経営支援ソフトをWebサービスとして提供する開発グループの主に大規模事業所向けの経営指標を集約するBIツールの新規開発を行うチームのリーダーを担当。 チーム立ち上げ、アーキテクチャ構築、プロジェクトマネジメント、開発、運用保守を行った。\n' +
              '      チームの規模は約5名  アーキテクチャは Spring Boot MyBatis MySQL Angular1.5 TypeScript1.8\n' +
              '      （この時、管轄チームのメンバー総数が１７名になる）'
              ,
              constitutions: ['17 parson*', 'Java8', 'TypeScript', 'JS(ES6)', 'SQL', 'Spring Boot', 'AngularJs', 'MySQl', 'onPremises']
            },
            {
              period: '2015.12 ~ 2017.04',
              headline: '労務向けアプリケーション 勤怠・給与計算チーム チームリーダー （兼務）',
              detail: '介護事業者向け経営支援ソフトをWebサービスとして提供する開発グループの1つの機能である勤怠管理・給与計算 機能の第二期開発を行うチームのリーダーを担当。チーム立ち上げ、メンバー育成 プロジェクトマネジメント、コードレビュー、運用保守を行った。\n' +
              '      チームの規模は約5名 アーキテクチャはSAStruts S2JDBC MySQL Velocity JQuery'
              , constitutions: ['12 parson*', 'Java6', 'JS(ES5)', 'SQL', 'SAStruts', 'JQuery', 'MySQl', 'onPremises']
            },
            {
              period: '2015.07 ~ 2017.04',
              headline: 'サービス付き高齢者住宅経営者向けアプリケーション 開発チームリーダー（兼務）',
              detail: '介護事業者向け経営支援ソフトをWebサービスとして提供する開発グループの1つの機能であるサービス付き高齢者住宅向け機能の開発を行うチームのリーダーを担当。 プロジェクトマネジメント、開発、運用保守を行った。\n' +
              '      チームの規模は5-8名 SAStrutus S2JDBC MySQL Velocity AngularJs(1.5)'
              ,
              constitutions: ['8 parson', 'Java6', 'JS(ES5)', 'SQL', 'SAStruts', 'JQuery', 'AngularJs', 'MySQl', 'Redis', 'onPremises']
            },
            {
              period: '2014.07 ~ 2015.07',
              headline: '介護事業者向けアプリケーション コールセンター スーパーバイザ（繁忙期のみ）',
              detail: '介護事業者向け経営支援ソフトをWebサービスとして提供する開発グループの運用チームに業務委託エンジニアとして参画するかたわら\n' +
              '      繁忙期（毎月の第一週）に子会社コールセンターへスーパーバイザとして出向、カスタマーサポートメンバーの業務・技術的サポートと指導を実施していた。\n'
              , constitutions: ['20 + call staff', 'SQL', 'MySQl', 'onPremises']
            },
            {
              period: '2014.02 ~ 2015.07',
              headline: '介護事業者向けアプリケーション 運用チームメンバー',
              detail: '介護事業者向け経営支援ソフトをWebサービスとして提供する開発グループの運用チームに業務委託エンジニアとして参画\n' +
              '      アプリケーション監視、データパッチ、バグフィックス、素材制作などに従事した。'
              , constitutions: ['Photoshop', 'Java6', 'JS(ES5)', 'SpringMVC', 'JQuery', 'SQL', 'MySQl', 'onPremises']
            }

          ]
        },
        {
          organization: 'トリガーワークス/代表 ',
          careers: [
            {
              period: '2010.02 ~ 2014.01',
              headline: '広告媒体制作',
              detail: 'フリーランスのweb及びDTPデザイナとして中小事業者の紙・web媒体の広報物などを制作\n' +
              '      （Photoshop Illustrator wordpress等）'
              , constitutions: ['Photoshop', 'Illustrator', 'JS(ES5)', 'SQL', 'WordPress', 'MySQl']
            }
          ]
        },
        {
          organization: '株式会社アンサー/コンテンツ事業部',
          careers: [
            {
              period: '2007.04 ~ 2009.01',
              headline: 'SEOコンサルティング担当',
              detail: '      SEOコンサルティング担当となり、webコンテンツの診断やマークアップなどをおこなう。\n' +
              '      2007年のTokyo game show のビジネスデイで今後のネットワークゲームのキーワード推移予測について調査及びサブコンサルタントとして登壇。'
              ,
              constitutions: ['SEO', 'Photoshop', 'Illustrator', 'JS', 'XHTML', 'SQL', 'WordPress', 'MovableType', 'MySQl']
            }
          ]
        }
      ]
    })
  }
</script>

<style scoped>

  .title {
    color: #5B5B5B !important;
  }

  .chipsWrapper {
    padding-top: 10px;
  }

  #cd-timeline {
    position: relative;
    padding: 2em 0;
    margin-top: 2em;
    margin-bottom: 2em;
  }

  #cd-timeline::before {
    content: '';
    position: absolute;
    top: 0;
    left: 18px;
    height: 100%;
    width: 4px;
    background: #d7e4ed;
  }

  .cd-timeline-block {
    position: relative;
    margin: 2em 0;
  }

  .cd-timeline-block:after {
    content: "";
    display: table;
    clear: both;
  }

  .cd-timeline-block:first-child {
    margin-top: 0;
  }

  .cd-timeline-block:last-child {
    margin-bottom: 0;
  }

  @media only screen and (min-width: 1170px) {
    .cd-timeline-block:nth-child(even) .cd-timeline-content {
      float: right;
    }

    .cd-timeline-block:nth-child(even) .cd-timeline-content::before {
      top: 24px;
      left: auto;
      right: 100%;
      border-color: transparent;
      border-right-color: white;
    }

    .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-read-more {
      float: right;
    }

    .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-date {
      left: auto;
      right: 122%;
      text-align: right;
    }
  }

  .timeline-item label {
    display: block;
    margin-bottom: 5px;
  }

  .timeline-item div {
    font-family: 'Lato', 'Noto Sans Japanese' !important;
    color: #5B5B5B;
  }
</style>
