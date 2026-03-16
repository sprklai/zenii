import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Zenii Docs",
  tagline: "Your local AI backend — private, fast, extensible",
  favicon: "img/favicon.ico",

  url: "https://docs.zenii.sprklai.com",
  baseUrl: "/",

  organizationName: "sprklai",
  projectName: "zenii",

  onBrokenLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    format: "md",
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      {
        docs: {
          path: "./docs",
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          exclude: [
            "assets/**",
            "plans/**",
            "superpowers/**",
          ],
          editUrl:
            "https://github.com/sprklai/zenii/tree/main/docs/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Zenii",
      logo: {
        alt: "Zenii Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docs",
          position: "left",
          label: "Docs",
          to: "/installation-and-usage",
        },
        {
          href: "https://zenii.sprklai.com",
          label: "Website",
          position: "right",
        },
        {
          href: "https://github.com/sprklai/zenii",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            { label: "Installation", to: "/installation-and-usage" },
            { label: "CLI Reference", to: "/cli-reference" },
            { label: "API Reference", to: "/api-reference" },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/sprklai/zenii",
            },
            {
              label: "Website",
              href: "https://zenii.sprklai.com",
            },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} SprklAI. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "toml", "rust", "json"],
    },
    mermaid: {
      theme: { light: "neutral", dark: "dark" },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
