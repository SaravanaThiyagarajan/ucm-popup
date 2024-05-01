import { defineStore } from "pinia";
export const useRootStore = defineStore("rootStore", {
  state: () => ({
    isLoading: true,
    products: [],
  }),
  getters: {
    productCount: (state) => state.products.length,
  },
  actions: {
    async fetchProductList() {
      this.isLoading = true;
      setTimeout(() => {
        this.products = [
          { name: "test porduct", logo: "hhh" },
          { name: "Hoe", logo: "hhh" },
          { name: "Commns", logo: "hhh" },
          { name: "Pos 1", logo: "hhh" },
          { name: "Pos 3", logo: "hhh" },
          { name: "Pos 4", logo: "hhh" },
          { name: "Pos 8", logo: "hhh" },
        ];
        this.isLoading = false;
      }, 5000);
    },
  },
});
