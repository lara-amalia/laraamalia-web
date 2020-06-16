module.exports = {
  buildTime: new Date(),
  baseUrl: process.env.BASE_URL || "https://www.laraamalia.at",
  name: "Lara Amalia",
  twitter: "@lara_amalia",
  en: {
    homePath: "/en/",
    alternateLangPathPrefix: "",
    alternateLang: "de",
    basePath: (path) => `${path.substring(3)}`,
    langNav: (path) => `<a href="${path.substring(3)}">DE</a> / <span>EN</span>`,
    metaTitle: "Lara Amalia. Web developer & musician.",
    metaDescription:
      "Hello, my name is Lara Amalia. I’m a web developer by day and a musician by night.",
  },
  de: {
    homePath: "/",
    alternateLangPathPrefix: "/en",
    alternateLang: "en",
    basePath: (path) => path,
    langNav: (path) => `<span>DE</span> / <a href="/en${path}">EN</a>`,
    metaTitle: "Lara Amalia. Web Entwicklerin & Musikerin.",
    metaDescription:
      "Hallo, ich bin Lara Amalia. Ich bin Web Entwicklerin am Tag und Musikerin bei Nacht.",
  },
};
