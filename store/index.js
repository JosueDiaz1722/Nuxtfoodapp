import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

export const useFoodAppStore = defineStore({
  id: "foodApp-store",
  state: () => {
    return {
      fooddata: [],
      cart: [],
    };
  },
  actions: {
    async getFoodData() {
      if (this.fooddata.lenght) return;
      try {
        await useFetch(
          "https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants",
          {
            headers: {
              "X-API-KEY": process.env.AWS_API_KEY ?? "",
              "Content-Type": "application/json",
            },
          }
        ).then((res) => {
          this.fooddata = res.data.value;
        });
      } catch (error) {
        console.log("ERROR");
        console.log(error);
      }
    },
    addToCart(formOutput) {
      formOutput.id = uuidv4();
      this.cart.push(formOutput);
    },
  },
  getters: {
    totalPrice: (state) => {
      return state.cart.reduce((ac, next) => ac + +next.combinedPrice, 0);
    },
    cartCount: (state) => {
      return state.cart.reduce((ac, next)=> ac + +next.count,0);
    }
  },
});
