// i18n-setup.ts
// import { createI18n } from "vue-i18n";
// import messages from "@intlify/unplugin-vue-i18n/messages";
//
// export const i18n = createI18n({
//   locale: "zh-cn",
//   legacy: false,
//   messages,
//   globalInjection: true
// });
//
// export const $t = i18n.global.t;

// i18n.ts
import { initI18n } from "i18n-pro";
import { App } from "vue";
const { t } = initI18n({
  namespace: "i18n"
});
export default {
  install: (app: App) => {
    app.config.globalProperties.$t = t;
  }
};

export const $t = t;
