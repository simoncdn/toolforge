<script setup lang="ts">
</script>

<template>
	<!-- <UButton label="Backlog" color="secondary" variant="subtle" trailing-icon="i-lucide-chevron-down" block /> -->
	<UPageGrid>
		<UCollapsible class="flex flex-col gap-2" default-open>
			<UButton label="Backlog" color="secondary" variant="subtle" trailing-icon="i-lucide-chevron-down" block />
			<template #content>
				<UCard variant="subtle" class="bg-secondary-50 border-secondary-400">
					<template #header>
						Task Name
					</template>
					Description
					<template #footer>
						<Placeholder class="h-8" />
					</template>
				</UCard>
			</template>
		</UCollapsible>

		<UCollapsible class="flex flex-col gap-2" default-open>
			<UButton label="In Process" color="warning" variant="subtle" trailing-icon="i-lucide-chevron-down" block />
			<template #content>
				<Placeholder class="h-48" />
			</template>
		</UCollapsible>

		<UCollapsible class="flex flex-col gap-2">
			<UButton label="Done" color="success" variant="subtle" trailing-icon="i-lucide-chevron-down" block />
			<template #content>
				<Placeholder class="h-48" />
			</template>
		</UCollapsible>

		<UCollapsible class="flex flex-col gap-2">
			<UButton label="Archives" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />

			<template #content>
				<Placeholder class="h-48" />
			</template>
		</UCollapsible>
	</UPageGrid>
</template>
