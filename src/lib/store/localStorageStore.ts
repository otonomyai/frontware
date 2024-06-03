import { writable } from "svelte/store";

function createLocalStorageStore(key: string, startValue: any) {
  // Check if running in the browser
  const isBrowser = typeof window !== "undefined";

  // Get the stored value from localStorage if available
  const storedValue = isBrowser ? localStorage.getItem(key) : null;
  const store = writable(storedValue ? JSON.parse(storedValue) : startValue);

  // Update localStorage whenever the store value changes
  if (isBrowser) {
    store.subscribe((value) => {
      localStorage.setItem(key, JSON.stringify(value));
    });
  }

  return store;
}

export const cart = createLocalStorageStore("cart", []);
export const user = createLocalStorageStore("user", {});
