<template>
  <div class="db-img-block">
    <v-card width="200" height="200" ma="4" rounded="circle" class="d-flex align-center" style="overflow: auto" color="orange" border="none" light>
      <v-img contain width="80" height="80" :src="`${path}${data.img}`"></v-img>
      <v-item-group centered display="inline-flex" style="align-self: center; text-align: center">
        <v-card-title>{{ data.chiffre }}</v-card-title>
        <v-card-subtitle>{{ data.motClé }}</v-card-subtitle>
        <v-card-text v-if="data.texte">{{ data.texte }}</v-card-text>
      </v-item-group>
    </v-card>
  </div>
</template>

<script>

export default {
  name: 'DataImgBlock',
  components: {
  },
  props: {
      path: String,
      data: Object,
      img: String
  },
  data() {
    return {
	}
  }
}
</script>


<style>
  .db-img-block {
    opacity: 0.3;
  }
</style>