// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import icon from "astro-icon";
import starlightImageZoom from "starlight-image-zoom";

import { sidebar } from "./src/sidebar.mjs";

export default defineConfig({
  integrations: [
    starlight({
      title: "Marble Documentation",
      logo: {
        src: "./src/assets/logo.png",
        alt: "Marble",
        replacesTitle: true,
      },
      favicon: "/favicon.png",
      customCss: ["./src/styles/theme.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/checkmarble/marble",
        },
      ],
      components: {
        SocialIcons: "./src/components/SocialIcons.astro",
      },
      sidebar,
      plugins: [starlightImageZoom()],
    }),
    icon(),
  ],
});
