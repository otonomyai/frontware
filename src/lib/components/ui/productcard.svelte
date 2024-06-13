<script lang="ts">
  import Button from "$lib/components/ui/button.svelte";
  import type { ProductData } from "$lib/apis/product";
  import { cart } from "$lib/store/localStorageStore";
  import { goto } from "$app/navigation";

  export let productData: { data: ProductData };

  function addToCart(product: ProductData) {
    cart.update((items: ProductData[]) => {
      const existingProduct = items.find((item) => item._id === product._id);
      if (existingProduct) {
        existingProduct.stock += 1;
      } else {
        items.push({ ...product, stock: 1 });
      }
      return items;
    });

    goto("/summary");
  }
</script>

<div class="product">
  {#if productData?.data}
    <img src={productData.data.images[0]} alt={productData.data.name} class="product-image" />
    <div class="productinfo">
      <div class="productname">{productData.data.name}</div>
      <div class="flex justify-between items-start w-full">
        <div class="productdesc">
          {productData.data.description}
        </div>
        <div class="leftinstock">
          <strong>{productData.data.stock} left</strong>
        </div>
      </div>
    </div>
    <div class="text-2xl text-gray-800 mt-8">
      ${productData.data.price}
    </div>
    <Button text="ADD TO CART" callback={() => addToCart(productData.data)} />
  {/if}
</div>

<style>
  .product {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 35px;
    background-color: transparent;
    position: relative;
    padding: 0 1rem;
    width: 100%;
    max-width: 600px;
  }

  .leftinstock {
    background-color: rgb(255, 210, 210);
    font-family: "Minecraft", Arial, sans-serif;
    color: #d95f5f;
    padding: 10px;
    border-radius: 7px;
  }

  .productname {
    font-family: "Minecraft", Arial, sans-serif;
    font-size: 2rem;
    margin-top: 10px;
  }

  .productdesc {
    font-family: "Minecraft", Arial, sans-serif;
    margin-top: 5px;
    width: 100%;
    font-size: 1.25rem;
    color: #7f7d7d;
  }

  .productinfo {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
  }

  .product img {
    width: 100%;
    border-radius: 51px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 768px) {
    .product {
      position: absolute;
      right: 40px;
      top: 80px;
      width: 600px;
    }

    .productname {
      font-size: 3rem;
    }

    .productdesc {
      width: 400px;
      font-size: 1.5rem;
    }
  }
</style>
