const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // ✅ YAML/YML támogatás global data fájlokhoz
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));
  eleventyConfig.addDataExtension("yml", (contents) => yaml.load(contents));

  // Rendezés: legfrissebb start legyen elöl (desc)
  eleventyConfig.addFilter("sortByStartDesc", (arr) => {
    if (!Array.isArray(arr)) return arr;

    const toTime = (v) => {
      if (!v) return 0;
      const t = Date.parse(v);
      return Number.isFinite(t) ? t : 0;
    };

    return [...arr].sort((a, b) => toTime(b?.start) - toTime(a?.start));
  });

  return {
    dir: { input: "src", output: "_site" }
  };
};
