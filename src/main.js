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
  if (e.data.action == "show") {
    rootStore.show();
  }

  if (e.data.action == "hide") {
    rootStore.hide();
  } 

  if(e.data.action=="init-token"){
    rootStore.setToken(e.data.token)
  }
});

new Vue({
  render: (h) => h(App),
  pinia,
}).$mount("#app");
