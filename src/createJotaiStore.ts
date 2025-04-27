import { createStore } from "jotai";
import type { InitialValues } from ".";

export const createJotaiStore = (initialValues: InitialValues = []) => {
  const store = createStore();
  for (const [atom, value] of initialValues) {
    store.set(atom, value);
  }
  return store;
};
