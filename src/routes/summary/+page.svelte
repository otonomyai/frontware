<script>
  import Button from "$lib/components/ui/button.svelte";
  import Header from "$lib/components/ui/header.svelte";
  import Icon from "@iconify/svelte";
  import Cards from "./cards.svelte";
  import Summary from "./summary.svelte";

  const items = Array(4).fill({});
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
      {#each items as item, index}
        <Cards />
      {/each}
    </div>
    <div class="w-4/12">
      <Summary />
    </div>
  </div>
</div>
