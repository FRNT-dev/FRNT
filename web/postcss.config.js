const postcssImport = require("postcss-import");
const postcssNested = require("postcss-nested");
const postcssSimpleVars = require("postcss-simple-vars");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: [postcssImport(), postcssNested(), postcssSimpleVars(), postcssPresetEnv()],
};
