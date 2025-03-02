module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "automatic" }],
      "nativewind/babel",
    ],
    plugins: [["module:react-native-dotenv"]],
  };
};
