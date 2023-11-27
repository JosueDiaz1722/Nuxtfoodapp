<template>
  
  <main class="container">
    <AppHeader />
    <h1>HI HOMEPAGE</h1>
    <AppRestaurantInfo :dataSource="fooddata" />
  </main>
</template>

<script setup>
import { useFoodAppStore } from "~/store/index.js";
const dataStore = useFoodAppStore();
const fooddata = dataStore.fooddata;
</script>

<style>
h1,
h2,
h3,
h4 {
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
}
</style>
