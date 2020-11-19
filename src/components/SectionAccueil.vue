<template>
  <div id="section-accueil" class="section-accueil">
    <!-- SUBSECTION 1 -->
    <h2 class="title-accueil">Le profil énergétique de l'Île-de-France en 5 chiffres, c'est...</h2>
    <v-item-group class="chiffres-accueil">
      <v-row centered class="mx-auto">
        <template v-for="block in SectionsJSON.accueil.up">
          <DataImgBlock :key="block.name" :path="`${path}${img_page}/`" :data="block" :img="block.img"></DataImgBlock>
          <v-spacer :key="block.name"></v-spacer>
        </template>
      </v-row>
      <v-spacer></v-spacer>
      <v-row centered class="mx-auto">
        <template v-for="block in SectionsJSON.accueil.down">
          <DataImgBlock :key="block.name" :path="`${path}${img_page}/`" :data="block" :img="block.img"></DataImgBlock>
          <v-spacer :key="block.name"></v-spacer>
        </template>
      </v-row>
    </v-item-group>
  </div>
</template>

<script>
import DataImgBlock from "./DataImgBlock.vue"

import SectionsJSON from './sections.json';

export default {
  name: 'SectionAccueil',
  components: {
    DataImgBlock
  },
  props: {
    path: String
  },
  data () {
    return {
      SectionsJSON: SectionsJSON,
      img_page: "sectionAccueilImg",
    }
  },
}
</script>

<style>
.section-accueil {
  margin-top: 4em;
  justify-items: center;
}

.title-accueil {
  text-align: center;
  margin-top: 2em;
  margin-bottom: 2em;
}

.chiffres-accueil {
  margin: auto;
  padding-left: 2em;
  padding-right: 2em;
  align-self: center;
  justify-content: space-evenly;
}
</style>

