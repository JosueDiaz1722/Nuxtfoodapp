<template>
  <div class="content">
    <AppMenu />
    <slot />
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from "~/components/AppFooter.vue";
import AppMenu from "~/components/AppMenu.vue";
</script>

<style lang="scss" scoped></style>
