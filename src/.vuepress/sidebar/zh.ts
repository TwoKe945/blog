import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/utils": [
    {
      text: "Git",
      collapsible: true,
      prefix: "/utils/git/",
      children: [
        "自动部署GiteePages.md",
        "Git常用指令.md",
        "Merge与Rebase的区别.md"
      ]
    }
  ],
  "/codenotes": [
    {
      text: "Canvas",
      collapsible: true,
      prefix: "/codenotes/canvas/",
      children: [
        "初步认识Canvas.md",
        "绘制基本图形.md"
      ]
    }
  ],
});
