import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "TwoKeの博客",
      description: "TwoKeの博客",
    }
  },

  theme,

  shouldPrefetch: false,
});
