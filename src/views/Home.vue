<template>
  <div>
    <h1>Products</h1>
    <ProductList :products="products" />
  </div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'Browse',
  components: {
    ProductList
  },
  data() {
    return {
      country: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.products;
    }
  },
  methods: {
  }
}
</script>
<style scoped>
h1 {
	margin-top:20px;
}
</style>