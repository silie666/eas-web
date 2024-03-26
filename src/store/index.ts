import type { App } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { cloneDeep } from "@pureadmin/utils";
const store = createPinia();

export function setupStore(app: App<Element>) {
  // store.use(({ store }) => {
  //   const initialState = cloneDeep(store.$state);
  //   store.$reset = () => {
  //     store.$patch($state => {
  //       Object.assign($state, initialState);
  //     });
  //   };
  // });
  app.use(store.use(piniaPluginPersistedstate));
}

export { store };
