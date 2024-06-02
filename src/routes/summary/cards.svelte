<script lang="ts">
  import type { ProductData } from "$lib/apis/product";

  export let item: ProductData;

  let count = 0;

  function increment() {
    count += 1;
  }

  function decrement() {
    if (count > 0) {
      count -= 1;
    }
  }
</script>

<div class="w-full card p-4 gap-6 rounded-md flex">
  <div class="mb-4">
    <div class="h-44 w-56">
      <img src={item.images[0]} class="h-full w-full rounded-md" alt="#" />
    </div>
  </div>
  <div class="flex items-center flex-col gap-4">
    <h3 class="text-3xl">{item.name}</h3>
    <div class="flex gap-4 items-center">
      <button
        class="flex items-center justify-center text-black text-4xl w-12 h-12 bg-gray-400"
        on:click={decrement}>-</button
      >
      <span class="count text-4xl">{count}</span>
      <button
        class="flex items-center justify-center text-black text-4xl w-12 h-12 bg-gray-400"
        on:click={increment}>+</button
      >
    </div>
    <span
      class="bg-orange-500 flex w-full items-center justify-between rounded-md px-4 py-1"
    >
      <h3 class="text-white text-lg">Total</h3>
      <p class="text-white text-lg">${item.price}</p>
    </span>
  </div>
</div>

<style>
  .card {
    background: #f7f7f7;
  }

  .count {
    width: 2rem;
    text-align: center;
  }
</style>
