<template>
  <div id="app">
    <v-app>
      <page-header :path="publicPath"></page-header>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    PageHeader
  },
  data () {
    return {
      publicPath: process.env.BASE_URL,
    }
  }
}
</script>

<style>
@import './TDB_DRIEE_CSS.css';

.v-application {
  position: relative;
  font-family:'Montserrat', sans-serif;
  line-height: 1;
}

.body {
  width: 100%;
  margin: 0;
  padding-left: 0;
  padding-right: 0;
}

*, *::before, *::after {
  box-sizing: content-box;
}

</style>
