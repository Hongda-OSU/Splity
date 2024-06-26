import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const logger = (config) => (set, get, api) =>
  config(
    (args) => {
      if (process.env.NODE_ENV === "development") {
        console.log("prevState:", get());
      }
      set(args);
      if (process.env.NODE_ENV === "development") {
        console.log("nextState:", get());
      }
    },
    get,
    api
  );

export const useMyStore = create(
  logger(
    persist(
      (set) => ({
        billCreator: {
          bill_id: "",
          password: "",
          resume_code: "",
          bill_creator: "",
          bill_total: "",
          total_members: "",
          bill_description: "",
          ttl: "",
        },
        billPayer: {
          bill_id: "",
          bill_creator: "",
          bill_payer: "",
          bill_description: "",
          bill_amount: "",
        },
        setBillCreator: (billCreator) =>
          set((state) => ({
            billCreator: { ...state.billCreator, ...billCreator },
          })),
        setBillPayer: (billPayer) =>
          set((state) => ({
            billPayer: { ...state.billPayer, ...billPayer },
          })),
      }),
      {
        name: "splity-storage",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
