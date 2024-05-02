import Vue from "vue";
import { createPinia, PiniaVuePlugin } from "pinia";
import App from "./App.vue";
import { useRootStore } from "./store/rootStore";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/main.css";
Vue.use(PiniaVuePlugin);
const pinia = createPinia();

window.addEventListener("message", async (e) => {
  const rootStore = useRootStore();
  let { action } = e.data.data;
  if (action == "show") {
    rootStore.show();
  }

  if (action == "hide") {
    rootStore.hide();
  }

  if (action == "loaded") {
    rootStore.setToken(e.data.data.token);
    window.parent.postMessage({ type: "ucm-loaded" }, "*");
  }

  if (action == "init") {
    rootStore.fetchProductList();
  }
});

new Vue({
  render: (h) => h(App),
  pinia,
}).$mount("#app");
