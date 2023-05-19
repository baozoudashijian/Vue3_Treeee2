<script setup>
import {ref} from "vue";
import TreeItem from "./tree-item.vue";

const props = defineProps(['items'])
</script>

<template>
  <ul id="explorer">
    <li
        v-for="treeViewItem in items"
        :key="treeViewItem.id"
        :id="treeViewItem.id"
        draggable
    >
      <tree-item
        :item="treeViewItem"
      ></tree-item>
      <div v-if="treeViewItem.children?.length > 0">
        <tree
          :items="treeViewItem.children"
        />
      </div>

    </li>
  </ul>
</template>
