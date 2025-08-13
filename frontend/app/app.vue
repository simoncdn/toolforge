<script setup lang="ts">
const result = await fetch("http://localhost:8080/api/health")
const data = await result.json()

const { header } = useAppConfig()
</script>

<template>
	<UApp>
		<UHeader :ui="{ center: 'flex-1' }">
			<UContentSearchButton v-if="header?.search" :collapsed="false" class="w-full" />
			<template #title>
				Toolforge
			</template>
			<template #right>
				<UColorModeButton />
				<template v-if="header?.links">
					<UButton
v-for="(link, index) of header.links" :key="index"
						v-bind="{ color: 'neutral', variant: 'ghost', ...link }" />
				</template>
			</template>
		</UHeader>

		<UMain>
			<NuxtLayout>
				<NuxtPage />
				<pre>{{ JSON.stringify(data, null, 2) }}</pre>
			</NuxtLayout>
		</UMain>

		<UFooter />
	</UApp>
</template>
