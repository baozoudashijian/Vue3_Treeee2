<template>
  <input type="file" ref="fileRef" multiple>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import * as qiniu from 'qiniu-js'

const fileRef = ref(null)

onMounted(() => {
  console.log(fileRef.value, '213');
  fileRef.value.onchange = function (e) {
    const files = e.target.files
    console.log(files, '文件');
    const token = 'sqvDEgyWUgcGp9ksMg8pmuDwp2xxzvKOwYT43R_Y:hpQcBmRfhZhia4qPtyaql7bVrMI=:eyJzY29wZSI6Im11c2ljLTE2My1vdXRkb29ycyIsImRlYWRsaW5lIjoxNjg0OTE4MDMzfQ=='
    Array.from(files).map((file, index) => {
      const observable = qiniu.upload(files[index], files[index].name, token)
      observable.subscribe(function next(res: any) {
            console.log(res, 'next')
          }, function error(err) {

          }, function complete(res) {
            console.log(res);
          }
      )
    })

  }
})
</script>

<style scoped>

</style>