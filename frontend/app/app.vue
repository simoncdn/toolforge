<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('content'))

provide('navigation', navigation)
</script>

<template>
	<UApp>
		<UMain class="relative min-h-screen">
			<AppHeader class="sticky top-0 inset-x-0" />
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
			<AppFooter class="absolute bottom-0 inset-x-0" />
		</UMain>
	</UApp>
</template>
