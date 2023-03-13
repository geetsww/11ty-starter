const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");
module.exports = (eleventyConfig) =>{
  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.addPassthroughCopy({"public":"/"});
  return{
    dir:{
      input:'src'
    }
  }
}