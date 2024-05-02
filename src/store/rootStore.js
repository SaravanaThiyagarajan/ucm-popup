import { defineStore } from "pinia";
import httpService from "../service/HttpService";
export const useRootStore = defineStore("rootStore", {
  state: () => ({
    isLoading: true,
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
        const config = {
          headers: { Authorization: `Bearer ${this.token}` },
        };

        let response = await httpService.get("client-products",config);

        if (response.status == 200) {
          this.products = response.data.data;
        }
        setInterval(() => {
          this.isLoading = false;
        }, 5000);
      } catch (error) {
        this.isLoading = false;
        console.log("Error on api request", error);
      }
    },
  },
});
