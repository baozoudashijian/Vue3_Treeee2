<script setup>
import {ref} from "vue";
import Tree from './tree.vue'
import  json from './tree.json'

const items = ref(json)

const updateCheckedItems = (checkedItems) => {
    // console.log(checkedItems)
}
const onCheck = ({item, change}) => {
  // console.log(item, change)
}


</script>

<template>
  <tree
    :items="items"
    @update:checkedItems="updateCheckedItems"
    @on-check="onCheck"
  />
</template>

<style scoped>

</style>
