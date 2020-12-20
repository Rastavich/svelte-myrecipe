// svelte.config.js
const preprocess = require("svelte-preprocess");
const cheerio = require("cheerio");

module.exports = {
  preprocess: preprocess(),
  cheerio: cheerio(),
  // ...other svelte options could go here
};
