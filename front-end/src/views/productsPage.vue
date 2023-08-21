<script setup>
import { products } from '../temp-data'
</script>

<template>
  <h1>Products</h1>

<div class="grid-wrap">
  <div 
  class="product-item"
  v-for="product in products "
  :key="product.id"
  >
   <img :src="product.imageName"/> 
   <h3 class="product-name">{{ product.name }}</h3> 
<p class="product-price" >{{ product.price }}</p> 

<router-link :to="'/products/' + product.id">
  <button>view detail</button>
</router-link>


  </div>
</div>
</template>