<template>
  <ul class="iconList">
    <li>
      <a target="_blank" href= "https://github.com/mijinco0612">
      <v-btn flat icon>
        <v-icon>fab fa-github fa-2x</v-icon>
      </v-btn>
      </a>
    </li>
    <li>
      <a target="_blank" href= "https://www.facebook.com/takamichi.tatsumoto">
      <v-btn flat icon>
        <v-icon>fab fa-facebook-square fa-2x</v-icon>
      </v-btn>
      </a>
    </li>
    <li>
      <a target="_blank" href="https://qiita.com/mijinco0612">
      <v-btn flat icon>
        <v-icon >fa fa-square fa-stack-2x </v-icon>
        <v-icon style="color:#fff">fa fa-search fa-stack-2x fa-inverse fa-2x </v-icon>
      </v-btn>
      </a>
    </li>

  </ul>
</template>

<script>

</script>

<style scoped>
  .iconList {
    list-style: none;

    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

  }
  ul.iconList li{
    display: inline-block;
    text-align: right;

  }
  ul.iconList li i{
    color: #76D2CA;
  }

  ul.iconList li a{
    text-decoration: none;
  }

</style>
