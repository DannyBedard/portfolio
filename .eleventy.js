module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/res/");
  eleventyConfig.addWatchTarget("./src/css/");

  return {
    dir: {
      input: "src",
      output: "docs",
    },
  };
};