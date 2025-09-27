const { dest, src } = require("gulp");
const cleanCSS = require("gulp-clean-css");
const sassProcessor = require("gulp-sass");

// We want to be using canonical Sass, rather than node-sass
sassProcessor.compiler = require("sass");
