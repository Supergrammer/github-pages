import { createRouter, createWebHistory } from "vue-router";

import BlogView from "@/components/views/BlogView.vue"

const routes = [
    {
        path: "/",
        redirect: { name: "blog-view" }
        // component: () => import("@/components/views/MapView.vue"),
    },
    {
        path: "/blog",
        name: "blog-view",
        component: BlogView,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
});

export default router;
