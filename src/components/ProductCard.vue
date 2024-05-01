<template>
  <div class="up-container d-flex flex-column justify-content-start">
    <!-- header -->
    <Header />
    <!-- body  -->
    <ProductList :productList="products" />
    <!-- footer  -->
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import ProductList from "./ProductList.vue";
import Footer from "./Footer.vue";
import { mapState } from "pinia";
import { useRootStore } from "../store/rootStore";
export default {
    components: { Header, ProductList, Footer },
    data() {
    return {
      
    };
  },
  computed: {
    ...mapState(useRootStore, ["products"]),
  },
}
</script>

<style>

</style>