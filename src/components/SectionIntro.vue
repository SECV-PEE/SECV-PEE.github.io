<template>
  <div id="section-intro">
    <img id="logo-pref" :src="`${path}${img_page}/logo_prif.png`" width="185" height="150" alt="logo">
    <div class="separateur"></div>
    <h1 class="grand-titre">BILAN ÉNERGÉTIQUE DE L'ÎLE-DE-FRANCE</h1>    
    <h2 >CHIFFRES CLÉS</h2>
    <h3 >Version provisoire - septembre 2020</h3>

  <!-- SUBSECTION 1 -->
    <div class="separateur">
      <h2 >Profil énergétique francilien</h2>
      <p>Passez le curseur sur les chiffres pour en savoir plus.</p>
      <div class="header">
        <div id="info-logo">
          <img :src="`${path}${img_page}/info.png`" width="24" height="20" alt="">
        </div>
        <p>Connaissiez-vous ces unités énergétiques?</p>
        <img class="img-unite" :src="`${path}${img_page}/info-unite.png`" width="660" height="220" alt="unite">
      </div>
    </div>
    <template v-for="container in SectionIntroJSON.sub1">
      <DataContainer :key="container.name" :path="`${path}${img_page}`" :data="container" intro=true></DataContainer>
    </template>
  <div class="separateur"></div>

  <!-- SUBSECTION 2 -->
    <h2 >Priorités d'action</h2>
    <template v-for="container in SectionIntroJSON.sub2">
      <DataContainer :key="container.name" :path="`${path}${img_page}`" :data="container" intro=true></DataContainer>
    </template>
  </div>
</template>

<script>
import DataContainer from "./DataContainer.vue"

import SectionIntroJSON from './sectionIntro.json';

export default {
  name: 'SectionIntro',
  components: {
    DataContainer: DataContainer
  },
  props: {
    path: String
  },
  data () {
    return {
      SectionIntroJSON: SectionIntroJSON,
      img_page: "sectionIntroImg",
    }
  },
}
</script>

<style>
</style>
