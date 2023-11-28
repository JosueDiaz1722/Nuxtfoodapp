<template>
  <main class="container cart">
    <h2>Your Cart</h2>
    <section v-if="dataStore.cart.length != 0">
        <table>
      <thead>
        <th>Item</th>
        <th>Add Ons</th>
        <th>Amount</th>
        <th>Total Price</th>
      </thead>
      <tbody>
        <tr v-for="item in dataStore.cart" :key="item.id">
          <td>
            {{ item.item }}
            <span v-if="item.options">- {{ item.options }}</span>
          </td>
          <td>
            <span v-for="addon in item.addOns" :key="addon" class="comma">
              {{ addon }}
            </span>
          </td>
          <td>{{ item.count }}</td>
          <td>{{ item.combinedPrice }}</td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td class="total">Total: ${{ totalPrice.toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>
    </section>
    <AppEmptyCart v-else />
  </main>
</template>

<script setup>
import { useFoodAppStore } from "@/store/index";
const dataStore = useFoodAppStore();
const { totalPrice } = storeToRefs(dataStore);
</script>

<style lang="scss" scoped></style>
