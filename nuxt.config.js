export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  colorMode: {
    classSuffix: "",
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Yatachi code , développeur web ",
    htmlAttrs: {
      lang: "fr",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Yatachi code est un développeur web qui a trouve la voie de sa passion assez rapidement et qui partage son code tous les jours.",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-png", href: "/favicon.png" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/app.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // "~/plugins/back-to-top.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/sitemap",
  ],
  sitemap: {
    hostname: "https://yatachi-code.org",
    gzip: true,
    route: ["/about", "/projects", "/contact"],
    sitemaps: [
      {
        path: "/sitemap-about.xml",
        routes: ["/about"],
        gzip: true,
        priority: 0.9,
      },
      {
        path: "/sitemap-contact.xml",
        routes: ["/contact"],
        gzip: true,
        priority: 0.7,
      },
      {
        path: "/sitemap-index.xml",
        routes: ["/"],
        gzip: true,
        priority: 1.0,
      },
      {
        path: "/projects/sitemap-index.xml",
        routes: ["/projects"],
        gzip: true,
        priority: 0.8,
      },
    ],
  },
  vue: {
    config: {
      productionTip: false,
      devtools: true,
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
