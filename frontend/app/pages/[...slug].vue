<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import { findPageHeadline } from '@nuxt/content/utils'

const route = useRoute()
const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

const { data: page } = await useAsyncData(route.path, () => queryCollection('content').path(route.path).first())
if (!page.value) {
	throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
	title: page.value?.title,
	description: page.value?.description
})

const headline = computed(() => findPageHeadline(navigation?.value, page.value?.path))
</script>

<template>
	<UPage v-if="page" class="h-full">
		<UPageHeader v-bind="page" :title="page?.title" :description="page?.description" :headline="headline" />
		<UPageBody>
			<ContentRenderer
        v-if="page"
        :value="page"
      />
		</UPageBody>
	</UPage>
</template>
