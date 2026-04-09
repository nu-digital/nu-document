import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "src",

  base: "/NewDocs/",
  lang: "ja-JP",
  title: "MetaDocs",
  description: "meta-docsへようこそ",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    sidebar: [
      {
        text: "入門",
        items: [{ text: "はじめに", link: "/Introduction" }],
      },
      {
        text: "基本",
        items: [
          { text: "CLI", link: "/basic/cli" },
          { text: "VSCode", link: "/basic/vscode" },
          { text: "Git", link: "/basic/git" },
          { text: "Github", link: "/basic/github" },
        ],
      },
      {
        text: "システム系",
        items: [
          { text: "Unity", link: "/system/unity" },
          { text: "VCC", link: "/system/vcc" },
          { text: "C#", link: "/system/cs" },
          { text: "Udon", link: "/system/udon" },
        ],
      },
      {
        text: "デザイン系",
        items: [],
      },
      {
        text: "サウンド系",
        items: [],
      },
      {
        text: "プロジェクト系",
        items: [
          { text: "企画", link: "/project/planning" },
          { text: "制作進行", link: "/project/production" },
        ],
      },
      {
        text: "ドキュメント編集法",
        items: [
          { text: "環境構築", link: "/document/setup" },
          { text: "編集方法", link: "/document/edit" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/yurarara23/NewDocs" },
    ],
  },
});
