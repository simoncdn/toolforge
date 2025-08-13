<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
	<UContainer class="pb-8">
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
