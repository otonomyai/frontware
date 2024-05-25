<script>
  import Button from "$lib/components/ui/button.svelte";
  // Placeholder data for the product
  let product = {
    name: "inflated pot kit ",
    price: "$0.00",
    description: "3d printed inflated pot with soft textures",
    imageUrl: "/circle 1.png",
    stockleft: 15,
  };
</script>

<div class="product">
  <img src={product.imageUrl} alt={product.name} />
  <div class="productinfo">
    <div class="productname">{product.name}</div>
    <div class="productdesc">
      {product.description}
    </div>

    <div class="leftinstock">
      <strong>
        {product.stockleft} left
      </strong>
    </div>
  </div>
  <Button text="ADD TO CART" />
</div>

<style>
  .product {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 35px;
    background-color: transparent;

    /* border: red dashed 1px; */
    position: absolute;
    right: 40px;
    top: 80px;
    width: 600px;
  }

  .leftinstock {
    position: absolute;
    background-color: rgb(255, 210, 210);
    font-family: "Minecraft", Arial, sans-serif;
    color: #d95f5f;

    height: 15px;
    padding: 10px;
    border-radius: 7px;

    width: 50px;
    bottom: 150px;
    right: 30px;
  }

  .productname {
    font-family: "Minecraft", Arial, sans-serif;
    font-size: 50px;
    margin-top: 10px;
  }

  .productdesc {
    font-family: "Minecraft", Arial, sans-serif;
    margin-top: 5px;
    width: 400px;

    font-size: 25px;
    color: #7f7d7d;
  }

  .productinfo {
    flex-direction: column;
    align-items: start;
    width: 100%;
  }

  .product img {
    max-width: 600px;

    border-radius: 51px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
</style>
