<template>
  <div>
    <label :for="select">What {{ select }} do you want?</label>
    <select
      @input="$emit('selected', $event.target.value)"
      :id="select"
      :name="select"
    >
      <option value="">--- Please select a {{ select }}</option>
      <option v-for="option in selectOptions" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script setup>
const props = defineProps({
  select: {
    type: String,
    default: "cuisine",
  },
  selectOptions: {
    type: Array,
    default: () => ["tacos", "pizza", "dim sum"],
  },
});
</script>

<style lang="scss" scoped></style>
