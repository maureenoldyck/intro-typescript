const path = require('path');

module.exports = {
    entry: "./src/script.ts",
    output: {
      filename: "script.js",
      path: path.resolve(__dirname, 'public')
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: ["*", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
        { test: /\.tsx?$/, loader: "ts-loader", include:[path.resolve(__dirname, "src")] },
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        { test: /\.js$/, loader: "source-map-loader" },
      ],
    },
    // Other options...
  };