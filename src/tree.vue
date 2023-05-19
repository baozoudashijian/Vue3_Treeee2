<script setup>
import {ref, useAttrs, computed} from "vue";
import TreeItem from "./tree-item.vue";
import {useGraph} from "./hooks/graph.ts";

const props = defineProps(['items', 'treeState'])
const emits = defineEmits(['update:checkedItems', 'onCheck'])
const parent = computed(() => {
  // console.log(useAttrs(), 'useattr')
  return useAttrs().parent
})


const treeState = ref()
// 第一次初始化，然后每一次都是向下传递，所有item点击都会有反应
// 如果是每次都初始化，只有最后哪一个会有效果
if(props.treeState != null) {
  treeState.value = props.treeState
}else{
  treeState.value = useGraph(
      (checkedItems) => emits('update:checkedItems', checkedItems),
      (eventArguments) => emits('onCheck', eventArguments)
  )
}
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
          :treeState="treeState"
          :parent="parent"
      />
      <div class="node-child hide">
        <div v-if="treeViewItem.children?.length > 0">
          <tree
              :items="treeViewItem.children"
              :treeState="treeState"
              :parent="treeViewItem"
          />
        </div>
      </div>

    </li>
  </ul>
</template>
<style scoped>
.hide {
  display: none;
}
</style>
