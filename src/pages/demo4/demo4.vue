<template></template>
<script setups>
const target = {
  name: 'Alice',
  age: 25
};

const proxy = new Proxy(target, {
  get(obj, prop) {
    console.log(`获取属性：${prop}`);
    return obj[prop];
  },
  set(obj, prop, value) {
    console.log(`设置属性：${prop} = ${value}`);
    obj[prop] = value;
  }
});

console.log(proxy.name); // 输出："获取属性：name" 和 "Alice"
proxy.age = 30; // 输出："设置属性：age = 30"

</script>