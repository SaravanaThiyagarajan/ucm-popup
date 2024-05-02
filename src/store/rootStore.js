import { defineStore } from "pinia";
import httpService from "../service/HttpService";
export const useRootStore = defineStore("rootStore", {
  state: () => ({
    isLoading: true,
    isPopupLoaded:false,
    isOpen: false,
    token: "",
    products: [],
  }),
  getters: {
    productCount: (state) => state.products.length,
  },
  actions: {
    show() {
      this.isOpen = true;
    },
    hide() {
      this.isOpen = false;
    },
    setToken(clientToken) {
      this.token = clientToken;
    },
    async fetchProductList() {
      this.isLoading = true;
      try {
        let response = await httpService.get("client-products");

        if (response.status == 200) {
          this.products = response.data.data;
        }
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.log("Error on api request", error);
      }
    },
  },
});
