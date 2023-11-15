<template>
  <section class="restauranteinfo">
    <div v-for="store in fooddata" :key="store.id">
      <h2>{{ store.name }}</h2>
      <p>Delivery Time {{ store.deliveryTime }}</p>
      <p>Rating {{ store.rating }}</p>
      <p v-if="store.freeDelivery" class="label">
        <span>Free Delivery</span>
      </p>
    </div>
  </section>
</template>

<script>
import { useFoodAppStore } from "~/store";

const fooddata = useFoodAppStore();

export default {};
</script>

<style lang="scss" scoped></style>
