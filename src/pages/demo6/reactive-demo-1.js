let value;

const reactive = (obj) => {
    value = obj.a

    Object.defineProperty(obj, "a", {
        get: () => {
            return value
        },
        set: (val) => {
            value = val
            fn()
        }
    })
    return obj
}

// 测试
let obj = reactive({ a: 1 })
let fn = () => {
    console.log(obj.a)
}
fn()
obj.a = 2
