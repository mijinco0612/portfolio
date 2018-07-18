<template>
  <ul class="iconList">
    <li>
      <nuxt-link to="/">
        <v-btn flat>
          Top
        </v-btn>
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="resume">
        <v-btn flat>
          Resume
        </v-btn>
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="works">
        <v-btn flat>
          Works
        </v-btn>
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="about">
        <v-btn flat >
          About
        </v-btn>
      </nuxt-link>
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
    margin-left: 20px;

  }

  ul.iconList li {
    display: inline-block;
    text-align: right;
    color: #333 !important;
  }


  ul.iconList li a{
    text-decoration:none;
    font-family: 'Lato', 'Noto Sans Japanese';
  }

</style>
