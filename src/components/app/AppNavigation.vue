<script setup>
import { inject } from "vue";

import AppNavigationProfile from "./appNavigation/AppNavigationProfile.vue";
import AppNavigationMenuList from "./appNavigation/AppNavigationMenuList.vue";
import AppNavigationSocialMediaButtons from "./appNavigation/AppNavigationSocialMediaButtons.vue";
import AppNavigationCopyright from "./appNavigation/AppNavigationCopyright.vue";

const drawer = inject("drawer");
</script>

<template>
	<v-navigation-drawer v-model="drawer" temporary :width="300" :elevation="7">
		<AppNavigationProfile />
		<AppNavigationMenuList />
		<v-divider />
		<AppNavigationSocialMediaButtons />
		<AppNavigationCopyright />
	</v-navigation-drawer>
</template>

<style scoped>
.app-navigation {
	z-index: 1;
}
</style>
