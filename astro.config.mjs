import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://tailwind.kembec.com",
	integrations: [tailwind(), vue()],
});
