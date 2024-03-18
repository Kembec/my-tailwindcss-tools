<script setup>
	const plugins = [
		{
			name: "Badge Plugin",
			image: "https://opengraph.githubassets.com/4321ac436d86ccb8c96c6e4f78fba75b98235eaad50ae24fbca2a593b523ca47/Kembec/tailwindcss-badge-plugin",
			url: "badge-plugin",
			npmjs: "https://www.npmjs.com/package/@kembec/tailwindcss-badge-plugin",
			description:
				"This Tailwind CSS plugin enables the creation of customizable badges with various corner radii and Tailwind palette colors, making them easy to integrate into projects.",
		},
	];
</script>

<template>
	<ul>
		<li
			v-for="(p, i) in plugins"
			:key="i"
		>
			<img
				:src="p.image"
				:alt="p.name"
			/>
			<div class="content">
				<h2>{{ p.name }}</h2>
				<p>{{ p.description }}</p>
			</div>
			<div class="buttons">
				<a
					:href="`/plugins/${p.url}`"
					:title="p.name"
				>
					Demo
				</a>
				<a
					:href="p.npmjs"
					:title="p.name"
				>
					Download
				</a>
			</div>
		</li>
	</ul>
</template>

<style lang="postcss" scoped>
	ul {
		@apply grid grid-cols-1 lg:grid-cols-2 gap-5 lg:max-w-[60dvw] max-w-[90dvw] mx-auto my-20 w-full;
	}
	ul > li {
		@apply flex flex-col bg-zinc-800 text-zinc-300 rounded-lg drop-shadow-md;
	}

	img {
		@apply rounded-t-lg;
	}
	.content {
		@apply flex flex-col px-5 pt-5 pb-10 space-y-5;
	}
	.buttons {
		@apply grid grid-cols-2 gap-0 border-t border-zinc-700 divide-x divide-zinc-700;
	}
	.buttons > a {
		@apply bg-zinc-800 hover:bg-zinc-700 first:rounded-bl-lg last:rounded-br-lg p-3 text-center text-zinc-100;
	}

	h2 {
		@apply text-xl;
	}
</style>
