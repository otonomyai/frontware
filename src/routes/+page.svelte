<script>
  import Icon from "@iconify/svelte";
  import Productcard from "$lib/components/ui/productcard.svelte";
  import Header from "$lib/components/ui/header.svelte";
  import Physicsball from "$lib/components/ui/physicsball.svelte";
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
    <Physicsball />
  </div>
  <div class="product">
    <Productcard />
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

  .svg-placeholder {
    width: 200px;
    height: 200px;
    background-color: #ff613f;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }

  .svg-placeholder div {
    width: 100px;
    height: 100px;
    background-color: #1e375c;
    border-radius: 50%;
  }
</style>
