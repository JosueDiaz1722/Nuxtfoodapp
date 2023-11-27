<template>
  <div class="container restaurant">
    <div class="restaurantheading">
      <h1>Restaurants</h1>
      <AppSelect @selected="selectedRestaurant = $event"/>
      <pre>{{ selectedRestaurant}}</pre>
    </div>
    <AppRestaurantInfo />
  </div>
</template>

<script setup>
const selectedRestaurant = ref('')
</script>

<style lang="scss" scoped></style>
