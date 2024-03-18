<script setup>
	import { ref } from "vue";

	import twColors from "../../shared/tw-colors.json";
	import twColorsPalette from "../../shared/tw-colors-palette.json";

	//data
	const colors = twColors;
	const colorsPalette = twColorsPalette;
	const badgeSize = ref("badge");
	const badgeHover = ref("");

	const badgeSizes = [
		"badge-none",
		"badge-sm",
		"badge",
		"badge-md",
		"badge-lg",
		"badge-xl",
		"badge-2xl",
		"badge-3xl",
		"badge-full",
	];

	//methods
	const copyText = async (text) => {
		await navigator.clipboard.writeText(text);
		alert(`"${text}" copied to clipboard`);
	};
</script>
<template>
	<section>
		<div class="head">
			<small>FILTERS: </small>

			<div
				v-for="(size, i) in badgeSizes"
				:key="`${i}_${size}`"
			>
				<input
					type="radio"
					:id="`${i}_${size}`"
					:value="size"
					v-model="badgeSize"
				/>
				<label :for="`${i}_${size}`">{{ size }}</label>
			</div>
		</div>
		<div class="content">
			<div class="colors">
				<span
					v-for="(color, i) in colors"
					:key="`${i}_${color}`"
					@mouseover="badgeHover = color"
					:class="badgeHover == color ? 'bg-zinc-700' : null"
				>
					{{ color }}
				</span>
			</div>
			<div class="badges">
				<div
					v-for="(color, i) in colors"
					:key="`${i}_${color}`"
					@mouseover="badgeHover = color"
					:class="badgeHover == color ? 'bg-zinc-700' : null"
				>
					<button
						v-for="(shade, j) in colorsPalette"
						:key="`${j}_${shade}`"
						:class="`${badgeSize} badge-${color.toLowerCase()}-${shade}`"
						:title="`${badgeSize} badge-${color.toLowerCase()}-${shade}`"
						@click="copyText(`${badgeSize} badge-${color.toLowerCase()}-${shade}`)"
					>
						{{ badgeSize !== "badge-full" ? shade : shade[0] }}
					</button>
				</div>
			</div>
		</div>
		<blockquote>npm i @kembec/tailwindcss-badge-plugin</blockquote>
	</section>
</template>

<style lang="postcss" scoped>
	section {
		@apply py-16 mx-auto lg:max-w-fit;
	}

	.content {
		@apply flex flex-nowrap border border-zinc-700 border-dashed mx-auto w-full mb-10;
	}

	.colors,
	.badges {
		@apply flex flex-col divide-y divide-zinc-700 divide-dashed;
	}

	.colors > *,
	.badges > * {
		@apply h-12;
	}

	.colors {
		@apply border-r border-zinc-700 border-dashed;
	}
	.colors > span {
		@apply px-5 lg:px-10 flex items-center font-semibold tracking-wide transition-all;
	}

	.badges {
		@apply flex flex-1;
	}
	.badges > div {
		@apply flex space-x-3 justify-around px-5 transition-all;
	}
	.badges > div > button {
		@apply my-auto transition-all;
	}

	.head {
		@apply flex flex-nowrap justify-between items-center border-t border-x border-dashed border-zinc-700 bg-zinc-800 py-3 px-4 rounded-t-lg drop-shadow-md;
	}
	.head > small {
		@apply text-zinc-400 pr-5;
	}
	.head > div {
		@apply text-xs flex flex-nowrap space-x-1 px-2 text-nowrap;
	}

	.head,
	.content {
		@apply max-w-full overflow-x-auto;
	}

	input {
		@apply accent-neutral-950;
	}
</style>
