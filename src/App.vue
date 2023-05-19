<script setup>
import {ref} from "vue";
import Tree from './tree.vue'
import  json from './tree.json'

const items = ref(json)

</script>

<template>
  <tree
    :items="items"
  />
</template>

<style scoped>

</style>
