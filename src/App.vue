<script setup>
import AppHeader from "@/components/app/AppHeader.vue";
</script>

<template>
	<v-app full-height>
		<div class="app-background" />
		<AppHeader />

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

/* header {
    line-height: 1.5;
    max-height: 100vh;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;

        padding: 1rem 0;
        margin-top: 1rem;
    }
} */
</style>
