<script setup>
import AppHeaderToggleThemeButton from "@/components/app/appHeader/AppHeaderToggleThemeButton.vue";
</script>

<template>
	<v-app-bar class="app-header">
		<v-btn icon="fas fa-bars" class="mr-3" />
		<div
			v-text="'테스트 페이지'"
			class="app-header-title"
			@click="$router.push({ name: 'main' })"
		/>

		<v-spacer />

		<AppHeaderToggleThemeButton />
		<v-btn icon="fas fa-magnifying-glass" />
		<v-btn icon="fas fa-ellipsis-vertical" />
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
