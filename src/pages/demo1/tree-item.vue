<script setup>
import { onMounted, ref, watch} from "vue";
import {notifyParentOfSelection, cascadeStateToDescendants} from "../../hooks/traversal.ts";

const props = defineProps(['item', 'treeState', 'parent'])
const chevron = ref(null);
const checkbox = ref();

const toggleExpand = (e) => {
  chevron.value?.classList.toggle("rotate-90");
  const element = document.getElementById(props.item.id).getElementsByClassName('node-child')

  if(!element || !element[0]) return
  element[0].classList.toggle('hide')
}
const updateCheckState = () => {
  props.item.checkedStatus = checkbox.value?.checked == true ? 'true' : 'false'
  props.treeState.emitItemCheckedChange(props.item)
  notifyParentOfSelection(props.item, props.treeState)
  cascadeStateToDescendants(props.item, props.treeState)
}
watch(
    () => props.item.checkedStatus,
    () => {
      if (props.item.checkedStatus == 'indeterminate') {
        checkbox.value.indeterminate = true;
      }
      else
      {
        checkbox.value.indeterminate = false;
        checkbox.value.checked = props.item.checkedStatus == true || props.item.checkedStatus == "true" ? true : false
      }
    }
);

onMounted(() => {
  props.treeState?.trackNode(props.item, props.parent)
})
</script>

<template>
  <div class="d-flex align-items-center">
    <span
        ref="chevron"
        class="chevron-right"
        :class="{'hide-chevron': !item.children || item.children.length < 1}"
        @click="toggleExpand"
    >
    </span>
    <div class="pointer">
      <input ref="checkbox" type="checkbox" @change="updateCheckState">
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>
<style scoped>
.d-flex {
  display: flex;
}

.align-items-center {
  align-items: center;
}

.pointer {
  cursor: pointer;
}

/* 隐藏箭头样式 */
.hide-chevron {
  display: none !important;
}

/* 箭头样式和动画 */
.chevron-right {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(1);
  width: 22px;
  height: 22px;
  border: 2px solid transparent;
  border-radius: 100px;
  transition: .2s;
}

.chevron-right.rotate-90::after {
  transform: rotateZ(45deg);
}

.chevron-right::after {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 7px;
  height: 7px;
  border-bottom: 2px solid;
  border-right: 2px solid;
  transform: rotate(-45deg);
  right: 6px;
  top: 5px
}
</style>