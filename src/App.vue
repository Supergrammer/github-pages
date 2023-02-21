<script setup>
import AppHeader from "./components/app/AppHeader.vue";
import AppNavigation from "./components/app/AppNavigation.vue";
</script>

<template>
	<v-app full-height>
		<div class="app-background" />
		<AppHeader />
		<AppNavigation />

		<v-container class="app-content">
			<RouterView />
		</v-container>
	</v-app>
</template>

<style scoped>
.app-background {
	position: fixed;

	background-image: url("@/assets/images/appBackground.jpg");

	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	width: 100%;
	height: 100%;
	opacity: 0.75;

	filter: blur(5px) grayscale(100%);
	transition: filter 0.5s;
}

.app-background:hover {
	filter: none;
}

.app-content {
	width: 75%;

	padding: 0;
	padding-top: 64px;
}
</style>
