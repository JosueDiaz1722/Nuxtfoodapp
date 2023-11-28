// store/filters.ts
import { defineStore } from "pinia";

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
              "Content-Type": "application/json"
            },
          }
        ).then( (res) => {
          this.fooddata = res.data.value
        });
      } catch (error) {
        console.log("ERROR")
        console.log(error);
      }
    },
    async addToCart(formOutput){
      this.cart.push(formOutput)
    }
  },
  //   getters: {
  //     filtersList: (state) => state.filtersList,
  //   },
});
