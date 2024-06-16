<script lang="ts">
  import Icon from "@iconify/svelte";
  import Productcard from "$lib/components/ui/productcard.svelte";
  import Header from "$lib/components/ui/header.svelte";
  import Physicsball from "$lib/components/ui/physicsball.svelte";
  import { useQuery } from "@sveltestack/svelte-query";
  import { getProduct } from "$lib/apis/product";
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import type { ProductData, ProductResponse } from "$lib/apis/product";

  const productId = "665b2ea351c9fe7ffcc15efc";

  const productData = useQuery(["product", productId], () =>
    getProduct(productId)
  );

  const isMobile = writable(false);

  onMount(() => {
    const checkMobile = () => {
      isMobile.set(window.innerWidth < 768); // Adjust this value based on your responsive breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  });
</script>

<div class="header">
  <Header action={() => {}}>
    <Icon
      icon="pepicons-pencil:cart"
      width="48"
      height="48"
      class="cart-icon"
    />
  </Header>
</div>

<div class="container">
  <div class="left">
    {#if !$isMobile}
      <Physicsball />
    {/if}
  </div>
  <div class="product">
    {#if $productData?.data?.data?._id}
      <Productcard productData={$productData?.data} />
    {/if}
  </div>
</div>

<style>
  body {
    font-family: Arial, sans-serif;
    background-color: rgb(255, 254, 250);
    margin: 0;
    padding: 0;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem 2rem;
    box-sizing: border-box;
    margin-top: 10px;
  }

  .cart-icon {
    cursor: pointer;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: calc(100vh - 70px); /* Adjusting height to accommodate header */
    padding: 2rem;
    box-sizing: border-box;
  }

  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    position: relative;
  }

  .product {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 50%;
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      padding: 1rem;
    }

    .left, .product {
      width: 100%;
    }

    .product {
      align-items: center;
    }
  }
</style>
