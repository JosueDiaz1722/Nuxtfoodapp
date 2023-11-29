<template>
  <main class="container">
    <section
      class="image"
      :style="`background: url(/${currentItem.img}) no-repeat center center`"
    ></section>

    <section class="details">
      <h1>{{ currentItem.item }}</h1>

      <h3>Price: ${{ currentItem.price.toFixed(2) }}</h3>

      <div class="quantity">
        <input type="number" min="1" v-model="count" />
        <button @click="addToCart()" class="primary">
          Add to Cart - ${{ combinedPrice }}
        </button>
      </div>

      <fieldset v-if="currentItem.options">
        <legend>
          <h3>Options</h3>
        </legend>
        <div v-for="option in currentItem.options" :key="option">
          <input
            type="radio"
            name="option"
            :id="option"
            :value="option"
            v-model= "$v.itemOptions.required"
          />
          <label :for="option">{{ option }}</label>
        </div>
      </fieldset>

      <fieldset v-if="currentItem.addOns">
        <legend>
          <h3>Add Ons</h3>
        </legend>
        <div v-for="addon in currentItem.addOns" :key="addon">
          <input
            type="checkbox"
            name="addon"
            :id="addon"
            :value="addon"
            v-model="$v.itemAddons.required"
          />
          <label :for="addon">{{ addon }}</label>
        </div>
      </fieldset>

      <AppToast v-if="cartSubmitted"
        >Order submitted <br />
        Check out more <NuxtLink to="/restaurant">restaurants</NuxtLink>
      </AppToast>
      <AppToast v-if="errors"
        >Plese select options and <br />
        addons before continuing
      </AppToast>
    </section>

    <section class="options">
      <h3>Description</h3>
      <p>{{ currentItem.description }}</p>
    </section>
  </main>
</template>

<script setup>
import { useFoodAppStore } from "~/store/index.js";
import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
const route = useRoute();
const id = route.params.id;
const dataStore = useFoodAppStore();
const fooddata = dataStore.fooddata;
const count = ref(1);
const itemOptions = ref("");
const itemAddons = ref([]);
const itemSizeAndCost = [];
const cartSubmitted = ref(false);
const errors = ref(false);

const rules =computed(() => (
  {
    itemAddons: {
      required,
    },
    itemOptions: {
      required
    }
  }
));

const $v = ref(useValidate(rules,{itemAddons, itemOptions}))

const currentItem = computed(() => {
  let result;
  for (let i = 0; i < fooddata.length; i++) {
    for (let j = 0; j < fooddata[i].menu.length; j++) {
      if (fooddata[i].menu[j].id === id) {
        result = fooddata[i].menu[j];
        break;
      }
    }
  }
  return result;
});

const combinedPrice = computed(() => {
  let total = count.value * currentItem.value.price;
  return total.toFixed(2);
});

const addToCart = () => {
  let formOutput = {
    item: currentItem.value.item,
    count: count,
    options: itemOptions,
    addOns: itemAddons,
    combinedPrice: combinedPrice,
  };
  let addOnError = $v.value.itemAddons.$invalid;
  let optionError = currentItem.value.options ? $v.value.itemOptions.$invalid : false;

  if(addOnError || optionError ){
    errors.value = true;
  }else{
    errors.value = false;
    cartSubmitted.value = true;
    dataStore.addToCart(formOutput)
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 1000px;
  margin: 100px auto;
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-template-rows: 400px 1fr;
  grid-column-gap: 60px;
  grid-row-gap: 60px;
  line-height: 2;
}

.image {
  grid-area: 1 / 1 / 2 / 2;
  background-size: cover;
}
.details {
  grid-area: 1 / 2 / 2 / 3;
  position: relative;
}
.options {
  grid-area: 2 / 1 / 3 / 2;
}
</style>
