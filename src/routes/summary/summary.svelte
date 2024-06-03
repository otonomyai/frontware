<script lang="ts">
  import { addOrder } from "$lib/apis/order";
  import Button from "$lib/components/ui/button.svelte";
  import { cart, user } from "$lib/store/localStorageStore";
  import type { Session } from "@supabase/supabase-js";
  import { useMutation } from "@sveltestack/svelte-query";

  export let cartItems;

  let userData = $user;

  interface OrderVariables {
    totalAmount: number;
  }

  const mutation = useMutation(
    async ({ totalAmount }: OrderVariables) => {
      return addOrder({
        user: userData._id,
        items: cartItems.map((v: any) => {
          return { product: v._id, quantity: 1, price: v.price };
        }),
        totalAmount,
      });
    },
    {
      onSuccess: (data) => {
        // You can handle the success response here
        console.log("Order successful:", data);
      },
    }
  );
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
    <Button
      text="Checkout"
      callback={() => {
        $mutation.mutate({ totalAmount: 400 });
      }}
    />
    <p class="text-lg text-gray-400">Secure Checkout</p>
  </div>
</div>
