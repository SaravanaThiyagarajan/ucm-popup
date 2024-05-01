<template>
  <div class="up-container d-flex flex-column justify-content-start">
    <!-- header -->
    <Header />
    <!-- body  -->
    <div
      class="d-flex flex-column justify-content-center align-item-center align-self-center"
    >
      <img
        src="../assets/icons/zero-no-products.png"
        class="up-zerono-products"
      />
      <div class="up-line"></div>
      <div class="up-no-products-text mx-auto">
        Check our products custom-built for your business needs.
      </div>
      <div class="d-flex justify-content-center mt-2">
        <a
          class="px-1"
          href="https://uplandsoftware.com/products/"
          target="_blank"
        >
          See More Products</a
        >
        <img
          src="../assets/icons/components-icon-launch.png"
          class="footer-icon mt-1"
        />
      </div>
    </div>

    <!-- footer  -->
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
    components: { Header },
};
</script>

<style></style>
