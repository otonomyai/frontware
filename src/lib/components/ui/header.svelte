<script>
  export let action;
</script>

<div class="flex w-full justify-between items-center">
  <span class="flex flex-col">
    <h1 class="text-2xl md:text-6xl text-primary">kino-tekina</h1>
    <p class="text-lg md:text-4xl text-secondary">functional stuff</p>
  </span>
  <div class="flex items-center">
    <slot />
  </div>
</div>
