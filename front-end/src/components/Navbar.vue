<template>
<div class="nav-bar">
  <router-link to="/products" class="product-link">
  <div class="logo-wrap">
      <img :src="logo" />
    </div>
  </router-link>
  <router-link to="/cart" class="cart-link">
  <button> shopping cart</button>
  </router-link>
</div>
</template>

<script>
 import logo from '@/assets/logo-hexagon.svg';
 
export default {
  name:"Navbar",
  data(){
    return{
      logo,
    }
  }

}

</script>