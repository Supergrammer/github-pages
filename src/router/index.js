import { createRouter, createWebHistory } from "vue-router";

import BlogView from "@/components/views/BlogView.vue"

import Error from "@/components/views/Error.vue"

const routes = [
    {
        path: "/",
        redirect: { name: "blog-view" },
        // component: () => import("@/components/views/MapView.vue"),
    },
    {
        path: "/blog",
        name: "blog-view",
        component: BlogView,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: Error,
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
});

router.beforeEach((to, from, next) => {
    next(!to.redirectedFrom && to.name === "not-found"
        ? { path: to.path }
        : null);
})

export default router;
