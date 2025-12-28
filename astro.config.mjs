import { defineConfig } from "astro/config";
import githubPages from "@astrojs/github-pages";

// https://astro.build/config
export default defineConfig({
  site: "https://gerardoegr.github.io",
  base: "/region-aysen-page",
  adapter: githubPages(),
});
