<template>
  <section class="restaurantinfo">
    <div v-for="store in props.dataSource" :key="store.id">
      <h2>{{ store.name }}</h2>
      <p>Delivery Time {{ store.deliveryTime }}</p>
      <p>Rating {{ store.rating }}</p>
      <p v-if="store.freeDelivery" class="label">
        <span>Free Delivery</span>
      </p>
      <div class="row">
        <div
          v-for="menuitem in store.menu"
          :key="menuitem.id"
          class="items"
          :style="`background: url(${menuitem.img}) no-repeat center center`"
        >
          <div class="iteminfo">
            <div>
              <h4>{{ menuitem.item }}</h4>
              <p>{{ priceFormating(menuitem.price) }}</p>
            </div>
            <NuxtLink exact :to='`/items/${menuitem.id}`'>
              <button class="ghost">View Item</button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  dataSource: {
    type: [Array, Object],
  },
});
function priceFormating(item) {
  return "$" + item.toFixed(2);
}
</script>

<style lang="scss" scoped></style>
