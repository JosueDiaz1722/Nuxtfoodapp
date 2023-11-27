<template>
  <div class="container restaurant">
    <div class="restaurantheading">
      <h1>Restaurants</h1>
      <AppSelect @selected="selectedRestaurant = $event" />
    </div>
    <AppRestaurantInfo :dataSource="filteredRestaurants" />
  </div>
</template>

<script setup>
import { useFoodAppStore } from "~/store/index.js";
const dataStore = useFoodAppStore();
const fooddata = dataStore.fooddata;
const selectedRestaurant = ref("");
const filteredRestaurants = computed(() => {
  if (selectedRestaurant.value != "") {
    return fooddata.filter((el) => {
      let name = el.name.toLowerCase();
      return name.includes(selectedRestaurant.value);
    });
  }
  return fooddata;
});
</script>

<style lang="scss" scoped></style>
