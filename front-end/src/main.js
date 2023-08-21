import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import * as vueRouter from 'vue-router'
import './main.css';
import shoppingCartPage from './views/shoppingCartPage.vue'
import ProductsPage from './views/productsPage.vue'
import ProductDetailPage from './views/productDetailPage.vue'
import NotFoundPage from './views/NotFoundPage.vue'

createApp(App)
.use(vueRouter.createRouter({
  history:vueRouter.createWebHashHistory(),
  routes:[{
    path: '/cart',
    component:shoppingCartPage,
  },{
    Path: '/products',
    component:ProductsPage,
  }, {
    Path:'/products/:productId',
    component: ProductDetailPage,
  }, {
    path:'/:pathMatch(.*)*',
    component: NotFoundPage,
  }]
}))

.mount('#app')
