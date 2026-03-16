import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: [
        "installation-and-usage",
        "configuration",
        "cli-reference",
      ],
    },
    {
      type: "category",
      label: "Guides",
      collapsed: false,
      items: [
        "deployment",
        "scheduling",
        "development",
      ],
    },
    {
      type: "category",
      label: "Reference",
      collapsed: false,
      items: [
        "api-reference",
        "architecture",
        "processes",
      ],
    },
  ],
};

export default sidebars;
