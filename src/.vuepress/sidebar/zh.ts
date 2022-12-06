import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/utils": [
    {
      text: "Git",
      icon: "git",
      collapsible: true,
      prefix: "/utils/git/",
      children: [
        "Git常用指令.md",
        "自动部署GiteePages.md"
      ]
    }
  ],
});
