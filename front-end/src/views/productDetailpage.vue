<script>
import { products } from '../temp-data';
import NotfoundPage from './NotfoundPage.vue';
export default {
  name:"ProductDetailPage",
  // data(){
  //   return{
  //     product:products.find(product => product.id === this.$route.params.productId),
  //   }
  // }, 
   computed: {
    product() {
      // We will see what `params` is shortly
      const productId = this.$route.params.productId;
      return products.find(product => product.id == productId);
    },
  },
  components:{
    NotfoundPage
  },
}
</script>

<template>
  <div v-if="product">
    <div class="img-wrap">
      <img :src="product.imageName"/>
      </div>
  <div class="product-details">
    <h1>{{ product.name }}</h1>
    <h3 class="price">{{ product.price }}</h3>
    <button class="add-to-cart">Add to cart</button>

  </div>
  </div>
  <div v-if="!product">
  <NotfoundPage/>
  </div>
</template>