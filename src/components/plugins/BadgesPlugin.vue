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
		<h3>
			<a href="https://www.npmjs.com/package/@kembec/tailwindcss-badge-plugin">
				@kembec/tailwindcss-badge-plugin
			</a>
		</h3>
		<div class="sizes">
			<button
				:class="size === badgeSize ? 'on' : null"
				v-for="(size, i) in badgeSizes"
				:key="`${i}_{size}`"
				@click="badgeSize = size"
			>
				{{ size }}
			</button>
		</div>
		<div class="content">
			<div class="colors">
				<span
					v-for="(color, i) in colors"
					:key="`${i}_${color}`"
					@mouseover="badgeHover = color"
					:class="badgeHover == color ? 'bg-white/5' : null"
				>
					{{ color }}
				</span>
			</div>
			<div class="badges">
				<div
					v-for="(color, i) in colors"
					:key="`${i}_${color}`"
					@mouseover="badgeHover = color"
					:class="badgeHover == color ? 'bg-white/5' : null"
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
		<div class="resources">
			<h4>Resources:</h4>
			<slot />
		</div>
	</section>
</template>

<style lang="postcss" scoped>
.content {
	@apply flex flex-nowrap mt-5 border border-slate-800 border-dashed mx-auto max-w-full;
}

.colors,
.badges {
	@apply flex flex-col divide-y divide-slate-800 divide-dashed;
}

.colors > *,
.badges > * {
	@apply h-12;
}

.colors {
	@apply border-r border-slate-800 border-dashed;
}
.colors > span {
	@apply px-5 lg:px-10 flex items-center font-semibold tracking-wide transition-all;
}

.badges {
	@apply flex overflow-x-auto w-full;
}
.badges > div {
	@apply flex space-x-3 px-5 transition-all;
}
.badges > div > button {
	@apply my-auto transition-all;
}

.sizes {
	@apply flex flex-wrap justify-center gap-2 mt-5 text-xs lg:h-6;
}
.sizes > .on {
	@apply text-base transition-all border-b border-sky-500;
}

.resources {
	@apply mx-auto flex flex-nowrap mt-10 gap-5 py-3 px-5 rounded-lg border-2 border-slate-400 border-dashed items-center drop-shadow;
}
</style>
