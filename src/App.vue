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

#app {
  position: relative;
}

.body {
  width: 100%;
  margin: 0;
  padding-left: 0;
  padding-right: 0;
  font-family:'Montserrat', sans-serif;
}

*, *::before, *::after {
  box-sizing: content-box;
}

</style>
