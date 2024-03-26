const { join } = require("path");

module.exports = {
  funcName: "t",
  // entry: join(__dirname, "./src/"),
  // fileRegExp: /\.(vue|ts)$/,
  input: "src/**/*.{js,ts,vue,tsx}",
  output: {
    path: join(__dirname, "./src/locales/")
  },
  translator: "googlex",
  googlexConfig: {
    from: "zh-CN",
    to: ["zh-CN"],
    codeLocaleMap: {
      "zh-CN": "zh"
    },
    proxy: "http://127.0.0.1:10809"
  }
};
