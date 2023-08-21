<script setup>
import{ cartItems } from '../temp-data';

</script>

<template>
  <h1>Shopping Cart </h1>
  <div v-if="cartItems.length > 0">
  <div
     class="Product-container"
    v-for="Product in cartItems"
    :key="Product.id"
    >
    <img class="product-image" :src="Product.imageName"/>
    <div class="details-wrap"> 
      <h3>{{ Product.name }}</h3>
      <p> {{ Product.price }}</p>
    </div>
    <button class="remove-button">Remove cart</button>
    </div>
    <button class="checkout-button">Proceed to checkout</button>
  </div>
  <div v-if="cartItems.length === 0">
  you current have no items in your cart!
  </div>
</template>