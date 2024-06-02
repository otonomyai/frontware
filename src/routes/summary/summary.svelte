<script lang="ts">
  import Button from "$lib/components/ui/button.svelte";
</script>

<div class="w-full bg-gray-100 rounded-md p-4 flex flex-col gap-8">
  <div class="flex flex-col gap-5">
    <span class="flex flex-col gap-4">
      <span class="flex justify-between">
        <h3 class="text-2xl">Subtotal</h3>
        <p class="text-lg">$300</p>
      </span>
      <span class="flex justify-between">
        <h3 class="text-2xl">delivery</h3>
        <p class="text-lg">$20</p>
      </span>
      <span class="flex justify-between">
        <h3 class="text-2xl">Tax</h3>
        <p class="text-lg">$10</p>
      </span>
    </span>
    <span class="flex justify-between">
      <h2 class="text-3xl">Total</h2>
      <p class="text-lg">$400</p>
    </span>
  </div>
  <div class="flex flex-col gap-3 justify-center items-center">
    <Button text="Checkout" callback={() => {}} />
    <p class="text-lg text-gray-400">Secure Checkout</p>
  </div>
</div>
