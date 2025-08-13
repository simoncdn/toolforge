<script setup lang="ts">
const navigation = ref([
	{
		title: 'Development tools',
		icon: 'i-lucide-anvil',
		path: '#development-tools',
		children: [
			{
				title: 'Kanban',
				path: '#kanban',
				active: true
			},
			{
				title: 'Kanban',
				path: '#kanban',
			},
			{
				title: 'Kanban',
				path: '#kanban',
			},
		]
	},
])
</script>

<template>
	<UContainer>
		<UPage>
			<template #left>
				<UPageAside>
					<UContentNavigation :navigation="navigation" color="success" highlight />
				</UPageAside>
			</template>
			<slot />
		</UPage>
	</UContainer>
</template>
