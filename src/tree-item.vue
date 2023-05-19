<script setup>
import {ref} from "vue";

const props = defineProps(['item'])
const chevron = ref < HTMLSpanElement > (null);
const toggleExpand = (e) => {
  chevron.value?.classList.toggle("rotate-90");
  const element = document.getElementById(props.item.id).getElementsByClassName('node-child')

  if(!element || !element[0]) return
  element[0].classList.toggle('hide')
}
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
    <span>{{ item.name }}</span>
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