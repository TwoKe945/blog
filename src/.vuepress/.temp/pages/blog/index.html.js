export const data = JSON.parse("{\"key\":\"v-145ac574\",\"path\":\"/blog/\",\"title\":\"博客主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"Blog\",\"icon\":\"home\",\"title\":\"博客主页\",\"bgImage\":\"/background.jpg\",\"heroText\":\"TwoKeの博客\",\"heroFullScreen\":true,\"projects\":[{\"name\":\"B站\",\"link\":\"https://www.bilibili.com/\",\"desc\":\"让我增长知识的小破站\",\"icon\":\"link\"},{\"name\":\"DockerHub\",\"link\":\"https://hub.docker.com/\",\"desc\":\"Docker镜像官方下载网站\",\"icon\":\"link\"},{\"name\":\"Maven仓库\",\"link\":\"https://mvnrepository.com/\",\"desc\":\"Jar包的搜索及下载地址\",\"icon\":\"link\"},{\"name\":\"Npm\",\"link\":\"https://www.npmjs.com/\",\"desc\":\"Npm包的搜索及下载地址\",\"icon\":\"link\"}],\"description\":\"\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/blog/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"TwoKeの博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"博客主页\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0.32,\"words\":96},\"autoDesc\":true,\"filePathRelative\":\"blog/README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
