<script setup>
import {ref} from "vue";

const props = defineProps(['item'])
</script>

<template>
  <div>
  {{item.name}}
  </div>
</template>
