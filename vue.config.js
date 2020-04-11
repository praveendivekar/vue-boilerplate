// Overwrites the options provided in @vue/cli-services/lib/options.js
module.exports = {
  publicPath: "/",
  lintOnSave: "error",
  css: {
    loaderOptions: {
      sass: {
        implementation: require("sass"),
      },
    },
  },
};
