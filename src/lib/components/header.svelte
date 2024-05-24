<script>
    import Icon from '@iconify/svelte';
   
  import Productcard from '$lib/components/productcard.svelte';
 
  </script>


<div class="header">
    <div>
        <div class="logo">kino-tekina</div>
        <div class="tagline">functional stuff</div>

    </div>
   
  </div>


  <style>


   @font-face {
    font-family: 'Minecraft';
    src: url('/fonts/Minecraft.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }


     
     .logo {

      font-family: 'Minecraft', Arial, sans-serif;
      font-size: 2rem;
      font-weight: bold;
      color: #333;
    }
  
    .tagline {
        font-family: 'Minecraft', Arial, sans-serif;
      font-size: 1.2rem;
      color: #7a7a7a;
      
    }
  </style>