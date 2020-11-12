<template>
  <div id="section-home">
    <h2>Baromètre de la</h2>
    <h1 style="grand-titre">Transition énergétique en Île-de-France</h1>
    <p>
      <router-link to="/tableau-de-bord">Accéder au tableau</router-link>
    </p>
    <DataContainer :path="`${path}${img_page}`"></DataContainer>
  </div>
</template>

<script>
import DataContainer from "./DataContainer.vue"

export default {
  name: 'SectionHome',
  components: {
    DataContainer: DataContainer,
  },
  props: {
    path: String,
  },
  data () {
    return {
      img_page: "sectionHomeImg",
    }
  }
}
</script>

<style>
</style>
