<template>
  <div
      class="d-flex flex-column justify-content-start align-items-start up-card-body up-scroll"
    >
      <template v-for="(product, index) in productList">
        <div :key="`${index}-product`">
          <div
            class="d-flex justify-content-start align-items-center up-card-item"
          >
            <img :src="product.product_information[0].logo" class="up-product-logo" />

            <div class="up-card-item-text py-2">{{ product.product_information[0].name }}</div>
          </div>
          <div class="line"></div>
        </div>
      </template>
    </div>
</template>

<script>
export default {
    props:{
        productList : Array
    }
}
</script>

<style>

</style>