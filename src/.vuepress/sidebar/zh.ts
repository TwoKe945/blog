import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/utils": [
    {
      text: "Github Actions",
      icon: "github",
      collapsible: true,
      prefix: "/utils/github-actions/",
      children: [
        {
          text: '自动部署GiteePages',
          icon: 'gitee',
          link: '自动部署GiteePages.md'
        }
      ]
    }
  ],
});
