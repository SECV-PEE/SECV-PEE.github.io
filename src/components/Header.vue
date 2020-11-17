<template>
  <div id="website-title" class="header-title">
    <img id="logo_FDR" :src="`${path}logo_FDR.png`" width="185" height="150" alt="logo">
    <div class="title">
      <h2>Baromètre de la</h2>
      <h1>Transition énergétique en Île-de-France</h1>
    </div>
    <img id="logo-pref" :src="`${path}logo_prif.png`" width="185" height="150" alt="logo">
    <v-app-bar class="header-appbar" color="#e5edf5ff" fixed dense hide-on-scroll scroll-target="#scroll-bar">
      <v-tab @click="$vuetify.goTo('#section-intro', options)">Chiffres Clés</v-tab>
      <v-tab class="text-center">
        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ on, attrs }">
            <v-tab v-bind="attrs" v-on="on">Bilans thématiques</v-tab>
          </template>
          <v-list>
            <v-list-item-group>
              <v-list-item @click="$vuetify.goTo('#section-conso', options)">Consommations énergétiques</v-list-item>
              <v-list-item @click="$vuetify.goTo('#section-emiss', options)">Émissions de GES</v-list-item>
              <v-list-item @click="$vuetify.goTo('#section-emiss', options)">Qualité de l'air</v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </v-tab>
      <v-tab class="text-center">
        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ on, attrs }">
            <v-tab v-bind="attrs" v-on="on">Bilans Sectoriels</v-tab>
          </template>
          <v-list>
            <v-list-item-group>
              <v-list-item @click="$vuetify.goTo('#section-batiment', options)">Rénovation énergétique</v-list-item>
              <v-list-item @click="$vuetify.goTo('#section-preca', options)">Précarité énergétique</v-list-item>
              <v-list-item @click="$vuetify.goTo('#section-mobilite', options)">Transports</v-list-item>
              <v-list-item @click="$vuetify.goTo('#section-chaleur', options)">Chaleur Renouvelable</v-list-item>
              <v-list-item @click="$vuetify.goTo('#section-enr', options)">Autres ENR</v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </v-tab>
      <v-tab>Liens Utiles</v-tab>
      <v-tab>Nous Contacter</v-tab>
      <v-sheet
        id="scroll-bar"
        class="overflow-y-auto"
        max-height="600"
      >
      </v-sheet>
    </v-app-bar>
  </div>
</template>

<script>

export default {
  name: 'PageHeader',
  props: {
    path: String,
  },
  computed: {
    options () {
      return {
        duration: 1000,
        offset: +40,
        easing: 'easeInOutQuad',
      }
    }
   }
}
</script>

<style>

  .header-title {
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .header-title .title {
    margin-top: 1em;
  }

  .header-appbar {
    justify-content: space-evenly;
    align-items: center;
    justify-items: center;
  }

</style>