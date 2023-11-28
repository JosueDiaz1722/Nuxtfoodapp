<template>
  <nav>
    <ul>
      <li><NuxtLink exact to="/"><AppLogo/></NuxtLink></li>
      <li><NuxtLink exact to="/restaurant">Restaurants</NuxtLink></li>
    </ul>
    <div class="smallnum" v-if="cartCount > 0"> {{ cartCount }}</div>
    <NuxtLink exact to="/cart">Cart</NuxtLink>
  </nav>
</template>

<script setup>
import { useFoodAppStore } from "@/store/index";
const { cartCount } = storeToRefs(useFoodAppStore());
</script>

<style lang="scss"></style>
