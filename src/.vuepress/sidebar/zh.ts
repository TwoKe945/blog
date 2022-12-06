import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/utils": [
    {
      text: "Git",
      icon: "git",
      collapsible: true,
      prefix: "/utils/git/",
      children: [
        "自动部署GiteePages.md",
        "Git常用指令.md",
        "Merge与Rebase的区别.md"
      ]
    }
  ],
});
