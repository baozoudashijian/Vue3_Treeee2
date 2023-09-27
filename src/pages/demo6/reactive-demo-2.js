/**
 * 1. 支持所有属性都支持响应式
 * 2. set拦截器写死了执行fn
 * 
 */
let preObj = {}
let runner = undefined
let deps = {}

const reactive = (obj) => {
    preObj = {...obj}
    Object.keys(obj).forEach((key) => {
        Object.defineProperty(obj, key, {
            get: () => {
                if(runner) {
                    if(Array.isArray(deps[key])) {
                        deps[key].push(runner)
                    }else{
                        deps[key] = [runner]
                    }
                }
                return preObj[key]
            },
            set: (newValue) => {
                preObj[key] = newValue;
                (deps[key] || []).forEach((run) => run())
            }
        })
    })
}
const run = (fn) => {
    runner = fn
    fn()
    runner = undefined
}
// 测试
const count = {
    value1: 1,
    value2: 2
}

reactive(count)

function print1() {
    // 相当于读取了两个属性，也就是说调用了get方法
    console.log("print1", count.value1, count.value2);
}

run(print1)
console.log(preObj, runner, deps, 2)

// count.value1 = 2
// count.value2 = 3