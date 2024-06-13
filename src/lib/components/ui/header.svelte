<script>
  export let action;
</script>

<div class="flex flex-wrap w-full justify-between items-center p-4">
  <div class="flex flex-col">
    <h1 class="text-2xl md:text-4xl lg:text-6xl text-primary">kino-tekina</h1>
    <p class="text-lg md:text-2xl lg:text-4xl text-secondary">functional stuff</p>
  </div>
  <div class="flex items-center mt-4 md:mt-0">
    <slot />
  </div>
</div>
