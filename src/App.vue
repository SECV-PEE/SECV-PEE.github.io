<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container fluid>
          <router-view/>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      publicPath: process.env.BASE_URL,
    }
  }
}
</script>

<style>
@import "./TDB_DRIEE_CSS.css";
</style>
