<template>
    <div class="container">
        <input type="checkbox" v-model="checkAll" />全选/不全选
        <p v-for="item, index in list" :key="index">
            <input type="checkbox" v-model="item.checked" @click="(e) => itemClick(e, item)" />{{ item.label }}
        </p>
    </div>
</template>
<script setup lang="ts">
import { computed, reactive, toRefs } from 'vue';
let state = reactive({
    list: [{ label: "张无忌", value: 1, checked: false }, { label: "张翠山", value: 2, checked: false }, { label: "张三丰", value: 3, checked: false }],
})

let { list } = toRefs(state)
const itemClick = (e, item) => {
    item.checked = e.target.checked
}
//将checkAll定义成计算属性
let checkAll = computed({
    get() {
        let flag = list.value.map((item) => {
            if (item.checked == false) {
                return false
            } else {
                return true
            }

        })
        return !flag.includes(false)
    },

    set(newVal) {
        if (newVal) {
            list.value.map((value, _index, _array) => {
                value.checked = true
            })
        } else {
            list.value.map((value, _index, _array) => {
                value.checked = false
            })
        }
    }
})

</script>