import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/demo1",
        name: "demo1",
        component: () => import("../pages/demo1/demo1.vue"),
    },
    {
        path: "/demo2",
        name: "demo2",
        component: () => import("../pages/demo2/demo2.vue"),
    },
    {
        path: "/:catchAll(.*)",
        redirect: "/error"
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
