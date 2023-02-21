import { createRouter, createWebHistory } from "vue-router";

import BlogPage from "@/components/pages/BlogPage.vue";
import ResumePage from "@/components/pages/ResumePage.vue";
import ErrorPage from "@/components/pages/ErrorPage.vue";

const routes = [
	{
		path: "/",
		name: "main",
		redirect: { name: "blog" },
		// component: () => import("@/components/views/MapView.vue"),
	},
	{
		path: "/blog",
		name: "blog",
		component: BlogPage,
	},
	{
		path: "/resume",
		name: "resume",
		component: ResumePage,
	},
	{
		path: "/:pathMatch(.*)*",
		name: "error",
		component: ErrorPage,
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: routes,
});

router.beforeEach((to, from, next) => {
	next(!to.redirectedFrom && to.name === "error" ? { path: to.path } : null);
});

export default router;
