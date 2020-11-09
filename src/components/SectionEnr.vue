<template>
    <div id="section-enr">
        <h1 id="page_02" class="grand-titre">{{data.nom}}</h1>
        <DataContainer :path="`${path}${img_page}`" :data="data" v-bind:intro="false"></DataContainer>
        <div class="separateur"></div>
    </div>
</template>

<script>
import DataContainer from "./DataContainer.vue"

export default {
  name: 'SectionEnr',
  components: {
    DataContainer: DataContainer,
  },
  props: {
    path: String,
    data: Object
  },
  data () {
    return {
      img_page: "sectionEnrImg",
    }
  }
}
</script>

<style>

</style>
