<template>
  <ul class="iconList">
    <li>
      <v-btn flat icon>
        <v-icon>fab fa-github fa-2x</v-icon>
      </v-btn>
    </li>
    <li>
      <v-btn flat icon>
        <v-icon>fab fa-facebook-square fa-2x</v-icon>
      </v-btn>
    </li>
    <li>
      <v-btn flat icon>
        <v-icon>fab fa-twitter fa-2x</v-icon>
      </v-btn>
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
    color: #333;
  }
</style>
