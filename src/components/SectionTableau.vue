<template>
  <div id="section-tableau" class="tableau_de_bord">
    <SectionIntro :path="publicPath"></SectionIntro>
    <SectionConso :path="publicPath" :data=SectionsJSON.conso></SectionConso>
    <SectionEmiss :path="publicPath" :data=SectionsJSON.ges></SectionEmiss>
    <SectionPreca :path="publicPath" :data=SectionsJSON.preca></SectionPreca>
    <SectionBatiment :path="publicPath" :data=SectionsJSON.bati></SectionBatiment>
    <SectionMobilite :path="publicPath" :data=SectionsJSON.mobilite></SectionMobilite>
    <SectionChaleur :path="publicPath" :data=SectionsJSON.chaleur></SectionChaleur>
    <SectionEnr :path="publicPath" :data=SectionsJSON.enr></SectionEnr>
  </div>
</template>

<script>
import SectionIntro from "@/components/SectionIntro.vue"
import SectionConso from "@/components/SectionConso.vue"
import SectionEmiss from "@/components/SectionEmiss.vue"
import SectionPreca from "@/components/SectionPreca.vue"
import SectionBatiment from "@/components/SectionBatiment.vue"
import SectionMobilite from "@/components/SectionMobilite.vue"
import SectionChaleur from "@/components/SectionChaleur.vue"
import SectionEnr from "@/components/SectionEnr.vue"

import SectionsJSON from '@/components/sections.json';

export default {
  name: 'SectionTableau',
  components: {
    SectionIntro: SectionIntro,
    SectionConso: SectionConso,
    SectionEmiss: SectionEmiss,
    SectionPreca: SectionPreca,
    SectionBatiment: SectionBatiment,
    SectionMobilite: SectionMobilite,
    SectionChaleur: SectionChaleur,
    SectionEnr: SectionEnr
  },
  data () {
    return {
      publicPath: process.env.BASE_URL,
      SectionsJSON: SectionsJSON
    }
  }
}
</script>

<style>

.tableau_de_bord {
  padding-right: 6em;
  padding-left: 6em;
}

</style>