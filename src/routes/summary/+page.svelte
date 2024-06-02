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

  // Optionally, use the store directly to get the initial value
  const initialCartItems = get(cart);
</script>

<div class="max-w-[1280px] mx-auto flex py-5 px-4 gap-8 md:p-10 flex-col">
  <Header action={() => {}}>
    <div class="flex gap-2 items-end">
      <Icon
        icon="pepicons-pencil:cart"
        width="38"
        height="38"
        class="cart-icon"
      />
      <p class="text-lg md:text-2xl text-primary">Checkout</p>
    </div>
  </Header>

  <div class="flex gap-6">
    <div class="flex flex-col gap-4 w-8/12">
      {#each initialCartItems as item, index}
        <Cards {item} />
      {/each}
    </div>
    <div class="w-4/12">
      <Summary {session} />
    </div>
  </div>
</div>
