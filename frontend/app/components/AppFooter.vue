<script setup lang="ts">
const { footer } = useAppConfig()
</script>

<template>
	<UFooter>
		<template #left>
      {{ footer.credits }}
    </template>
	</UFooter>
</template>
