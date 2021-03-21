<template>
<div class="wrapper">
  <div class="products">
      <router-link class="product" v-for="product in products" :key="product.id" :to="'/product/' + product.id">
        <div class="image">
          <img :src="'/images/'+product.image">
        </div>
        <div class="info">
          <h1>{{product.name}}</h1>
          <p>{{product.desc}}</p>
          <h1>{{product.price}}</h1>
        </div>
    </router-link>
  </div>
</div>
</template>
<script>
export default {
  name: 'ProductList',
  props: {
    products: Array
  },
  methods: {
    appendCart(product) {
      this.$root.$data.cart.push(product);
    }
  }
}
</script>
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  width: 200px;
  text-decoration: none;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
}

.info {
  background: black;
  color: #000;
  padding: 10px 30px;
}

.info h1 {
  font-size: 16px;
  color: white;
  margin-bottom:0px;
}

.info h2 {
  font-size: 14px;
  color: white;
}

.info p {
  margin: 0px;
  font-size: 10px;
  color: white;
}

.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>