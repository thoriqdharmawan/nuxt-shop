<template>
  <div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
      <div v-for="p in products">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
//  fetch the products
const { data: products } = await useFetch('https://fakestoreapi.com/products')

useHead({
  title: "Nuxt Shop | Merch",
  meta: [
    { name: 'description', content: 'Nuxt 3 Merch' }
  ]
})

definePageMeta({
  layout: "products",
})
</script>