<template>
  <div v-if="isOpen && isPopupLoaded">
    <LoaderCard v-if="isLoading" />
    <NoProductCard v-if="!isLoading && !productCount" />
    <ProductCard v-if="!isLoading && productCount" />
  </div>
</template>
<script>
import ProductCard from "./components/ProductCard.vue";
import LoaderCard from "./components/LoaderCard.vue";
import NoProductCard from "./components/NoProductCard.vue";
import { mapState, mapActions } from "pinia";
import { useRootStore } from "./store/rootStore";
export default {
  components: { ProductCard, LoaderCard, NoProductCard },
  computed: {
    ...mapState(useRootStore, ["isLoading", "isOpen","isPopupLoaded","productCount"]),
  },
  methods: {
    ...mapActions(useRootStore, ["fetchProductList"]),
  }
};
</script>
<style scoped></style>
