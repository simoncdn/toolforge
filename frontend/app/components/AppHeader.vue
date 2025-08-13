<script setup lang="ts">
const { header } = useAppConfig()
</script>

<template>
	<UHeader :ui="{ center: 'flex-1' }">
		<template #title>
			<UIcon name="i-lucide-anvil" class="my-auto" />
			Toolforge
		</template>

		<UContentSearchButton v-if="header?.search" :collapsed="false" class="w-full" />

		<template #right>
			<UColorModeButton />
			<template v-if="header?.links">
				<UButton
v-for="(link, index) of header.links" :key="index"
					v-bind="{ color: 'neutral', variant: 'ghost', ...link }" />
			</template>
		</template>
	</UHeader>
</template>
