# Lara Amalia. Official website.

This website is build with [11ty](https://www.11ty.dev), a simple static site generator.

For deployment [Netlify](https://www.netlify.com) is used.

The site can be found on (www.laraamalia.at)[https://www.laraamalia.at].

## Development

Run `npm run dev` to start a development server.

The site is running on `http://localhost:8080`.

## Content

The markdown files defining the overall page structure are located directly in `src` (German version) and `src/en` (English version).

All texts and translations can be found in `src/_i18n` and used in `src/_data`.

## Templates

Template files are placed in `src/_includes/layouts` and `src/_includes/partials`. For templating [Nunjucks](https://mozilla.github.io/nunjucks/) is used.
