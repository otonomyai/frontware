<script>
  import Header from "$lib/components/ui/header.svelte";
  import Icon from "@iconify/svelte";
  import Cards from "./cards.svelte";
  import Summary from "./summary.svelte";
  import { cart } from "$lib/store/localStorageStore";
  import { get } from "svelte/store";

  export let data;

  $: ({ session } = data);

  const items = Array(4).fill({});

  // Use the $ prefix to access the store value reactively
  let cartItems = $cart;
</script>

<div class="max-w-[1280px] mx-auto flex flex-col py-5 px-4 gap-8 md:p-10">
  <Header action={() => {}}>
    <div class="flex gap-2 items-end">
      <Icon
        icon="pepicons-pencil:cart"
        class="cart-icon"
        width="38"
        height="38"
      />
      <p class="hidden md:block text-lg md:text-2xl text-primary">Checkout</p>
    </div>
  </Header>

  <div class="flex flex-col gap-6 md:flex-row">
    <div class="flex flex-col gap-4 w-full md:w-8/12">
      {#each cartItems as item, index}
        <Cards {item} />
      {/each}
    </div>
    <div class="w-full md:w-4/12">
      <Summary {cartItems} />
    </div>
  </div>
</div>
