<template>
<div class="iconList">
  <v-btn flat icon href="https://github.com/mijinco0612" target="_blank">
    <v-icon>fab fa-github fa-2x</v-icon>
  </v-btn>
  <v-btn flat icon href="https://www.facebook.com/takamichi.tatsumoto" target="_blank">
    <v-icon>fab fa-facebook-square fa-2x</v-icon>
  </v-btn>
  <v-btn flat icon href="https://qiita.com/mijinco0612" target="_blank">
    <v-icon >fa fa-square fa-stack-2x </v-icon>
    <v-icon style="color:#fff">fa fa-search fa-stack-2x fa-inverse fa-2x </v-icon>
  </v-btn>
</div>
</template>

<style scoped>
  .iconList {
    padding-right: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .iconList a{
    color: #5B5B5B;
    font-family: 'Lato' !important;
  }
</style>
