import { useFoodAppStore } from "~/store";

export default defineNuxtPlugin({
    async setup (nuxtApp) {
        const { getFoodData, fooddata } = useFoodAppStore();

        getFoodData()
      // this is the equivalent of a normal functional plugin
    },
  })