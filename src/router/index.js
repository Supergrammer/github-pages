import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "main",
		redirect: { name: "blog" },
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: routes,
});

export default router;
