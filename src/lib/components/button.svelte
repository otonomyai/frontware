<script>
  export let text = "ADD TO CART";
</script>

<style>
  :root {
    --primary: #1E375C;
    --primary-dark: #AABCD6;
  }

  * {
    box-sizing: border-box;
  }

  .spacer{
    height: 20px;
  }

  .button {
    background: var(--primary);
    border: 0;
    border-radius: 10px;
    box-shadow: 0 6px 0 var(--primary-dark), 0 5px 15px -4px #ffffff;
    color: #fff;
    cursor: pointer;
    font-family: 'Minecraft', Arial, sans-serif;
    font-size: 20px;
    font-weight: 800;
    height: 60px;
    padding: 5px;
    text-transform: uppercase;
    transition: box-shadow 0.2s ease-in-out, margin-top 0.2s ease-in-out, opacity 0.1s ease-in-out;
    width: 600px;

   
  }

  .button:hover,
  .button:focus {
    opacity: 0.9;
    outline: 0;
  }

  .button:active {
    box-shadow: none;
    margin-top: 6px;
  }
</style>


<div class="spacer"></div>


  <button class="button">{text}</button>

