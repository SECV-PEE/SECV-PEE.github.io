<template>
  <v-app-bar class="header-appbar" color="#e5edf5ff" style="position: sticky" fixed dense hide-on-scroll scroll-target="#scroll-bar">
    <v-tabs centered>
      <v-tab class="text-center" @click="$vuetify.goTo('#section-intro', options)">Chiffres Clés</v-tab>
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
      <v-tab class="text-center">Liens Utiles</v-tab>
      <v-tab class="text-center">Nous Contacter</v-tab>
    </v-tabs>
    <v-sheet
      id="scroll-bar"
      class="overflow-y-auto"
      max-height="600"
    >
    </v-sheet>
  </v-app-bar>
</template>

<style>

  .header-appbar {
    justify-content: space-evenly;
    align-items: center;
    justify-items: center;
    width: 100%;

  }

</style>