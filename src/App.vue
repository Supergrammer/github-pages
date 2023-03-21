<script setup></script>

<template>
	<v-app class="app-background"> </v-app>
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
	/* opacity: 0.75; */

	/* filter: blur(5px) grayscale(100%); */
	transition: filter 0.5s;
}
.app-background:hover {
	filter: none;
}
</style>
