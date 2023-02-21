<script setup>
import { inject, ref } from "vue";

const theme = inject("theme");

const socialMediaItems = ref([
	{
		title: "Github",
		icon: "fab fa-github",
		color: "#171515",
		href: "https://github.com/Supergrammer",
	},
	{
		title: "LinkedIn",
		icon: "fab fa-linkedin",
		color: "#0072B1",
		href: "https://www.linkedin.com/in/supergrammer",
	},
	{
		title: "StackOverflow",
		icon: "fab fa-stack-overflow",
		color: "#EF8236",
		href: "https://stackoverflow.com/users/16271518/supergrammer",
	},
]);

const openNewTab = href => {
	window.open(href, "_blank");
};
</script>

<template>
	<div class="py-3 d-flex justify-center">
		<v-btn
			v-for="(item, index) in socialMediaItems"
			:key="index"
			flat
			icon
			color="transparent"
			class="mx-1"
			@click="openNewTab(item.href)"
		>
			<v-tooltip
				:text="item.title"
				activator="parent"
				location="bottom"
				class="font-weight-bold"
			/>
			<v-icon :icon="item.icon" :size="35" :color="theme === 'dark' ? 'white' : item.color" />
		</v-btn>
	</div>
</template>

<style scoped></style>
