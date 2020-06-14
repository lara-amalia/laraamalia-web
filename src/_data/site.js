module.exports = {
  buildTime: new Date(),
  baseUrl:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8080"
      : "https://www.laraamalia.at",
  name: "Lara Amalia",
  twitter: "@lara_amalia",
  en: {
    metaTitle: "Lara Amalia. Web developer & musician.",
    metaDescription:
      "Hello, my name is Lara Amalia. I’m a web developer by day and a musician by night.",
  },
  de: {
    metaTitle: "Lara Amalia. Web Entwicklerin & Musikerin.",
    metaDescription:
      "Hallo, ich bin Lara Amalia. Ich bin Web Entwicklerin am Tag und Musikerin bei Nacht.",
  },
};
