const path = require("path");

/**
 * Combining dev and prod config since it's a simple setup.
 * Any more complex then using distinct configs and webpack-merge
 * would be clearer.
 */
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  mode: isProd ? "production" : "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: isProd ? null : { contentBase: "./dist" }
};
