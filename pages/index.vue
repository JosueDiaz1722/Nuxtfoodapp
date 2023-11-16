<template>
  
  <main class="container">
    <AppHeader />
    <h1>HI HOMEPAGE</h1>
    <AppRestaurantInfo />
  </main>
</template>

<script>
import AppMenu from "@/components/AppMenu.vue";
import AppHeader from "~/components/AppHeader.vue";
import AppRestaurantInfo from "~/components/AppRestaurantInfo.vue";


export default {
  name: "IndexPage",
  components: {
    AppMenu,
    AppHeader,
    AppRestaurantInfo
  },
};
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
