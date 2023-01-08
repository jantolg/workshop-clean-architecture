<template>
  <Main msg="Welcome to Your Vue.js + TypeScript App"/>
  <ProductList :on-select-product="handleAddToCart"/>
  <p v-if="basketService">Items on basket: {{basket.items.length}}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Main from './components/Main.vue'
import ProductList from '@/components/ProductList.vue'
import { Product } from '@domain/models/product.model'
import { basketService } from '@/services/basket.service'
import { Basket } from '@domain/models/basket.model'

type DataProps = {
  basket: Basket|null;
}

export default defineComponent({
  name: 'App',
  components: {
    Main,
    ProductList
  },
  methods: {
    handleAddToCart (product: Product) {
      this.basket = basketService.addProductToBasket(product, this.basket)
    }
  },
  data (): DataProps {
    return {
      basket: null
    }
  },
  mounted () {
    this.basket = null
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
