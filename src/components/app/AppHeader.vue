<script setup>
import { inject } from "vue";

import AppHeaderToggleThemeSwitch from "./appHeader/AppHeaderToggleThemeSwitch.vue";

const drawer = inject("drawer");
</script>

<template>
	<v-app-bar :elevation="7" class="app-header">
		<v-btn icon="fas fa-bars" class="mr-3" @click="drawer = !drawer" />
		<div
			v-text="'테스트 페이지'"
			class="app-header-title"
			@click="$router.push({ name: 'main' })"
		/>

		<v-spacer />

		<AppHeaderToggleThemeSwitch />
		<v-btn icon="fas fa-magnifying-glass" />
	</v-app-bar>
</template>

<style scoped>
.app-header {
	z-index: 1;
}

.app-header-title {
	cursor: pointer;

	font-size: 25px;
	font-weight: bold;
}
</style>
