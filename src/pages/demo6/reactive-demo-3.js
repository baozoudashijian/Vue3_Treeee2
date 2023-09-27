const isObj = (_) => _ && typeof _ === "object"
const proxyDeps = new WeakMap();
let runner = undefined

export const makeProxy = (target) => {
    proxyDeps.set(target, [])

    return new Proxy(target, {
        get: (target, key) => {
            const deps = proxyDeps.get(target) || {}

            if(typeof runner === 'function') {
                if(!deps[key]) {
                    deps[key] = []
                }
                deps[key].push(runner)
                proxyDeps.set(target, deps)
            }
            return target[key]
        },
        set: (target, key, value) => {
            const deps = proxyDeps.get(target) || {}
            const oldValue = target[key]

            target[key] = value

            if(oldValue !== target[key]) {
                (deps[key] || []).forEach((dep) => {
                    dep()
                })
            }
            return true
        }
    })
}

export const reactive = (target) => {
    if(!isObj(target)) {
        throw Error("只支持对象、数组")
    }
    Object.entries(target).forEach(([key, value]) => {
        if(isObj(value)) {
            target[key] = reactive(value)
        }
    })
    return makeProxy(target)
}
export const reactiveRunner = (fn) => {
    runner = fn;
    fn()
    runner = undefined
}
const count = reactive({value: 1})
function print1() {
    console.log("print1", count.value)
}

reactiveRunner(print1)
count.value = 2