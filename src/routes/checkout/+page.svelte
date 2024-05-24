<script>
  import Button from "$lib/components/button.svelte";
</script>

<div class="flex p-10 flex-col gap-9">
  <div class="flex w-full justify-between items-center">
    <span class="flex flex-col">
      <h1 class="text-6xl text-primary">kino-tekina</h1>
      <p class="text-4xl text-secondary">functional stuff</p>
    </span>
    <p class="text-7xl text-primary">Checkout</p>
  </div>

  <div class="flex flex-col w-9/12 gap-10">
    <div class="flex flex-col gap-4 w-full">
      <h3 class="text-4xl text-textDGray">Your Details</h3>
      <div class="flex flex-col w-full gap-5">
        <div class="flex gap-4 w-full">
          <span class="flex flex-col w-full gap-1">
            <h4 class="text-textLGray">First Name</h4>
            <input class="h-14 w-full rounded-[12px] bg-bgInputGray" />
          </span>
          <span class="flex flex-col w-full gap-1">
            <h4 class="text-textLGray">Last Name</h4>
            <input class="h-14 w-full rounded-[12px] bg-bgInputGray" />
          </span>
        </div>
        <div class="flex gap-4 w-full">
          <span class="flex flex-col w-full gap-1">
            <h4 class="text-textLGray">First Name</h4>
            <input class="h-14 rounded-[12px] w-full bg-bgInputGray" />
          </span>
          <span class="flex flex-col w-full gap-1">
            <h4 class="text-textLGray">Last Name</h4>
            <input class="h-14 rounded-[12px] v bg-bgInputGray" />
          </span>
        </div>
        <div class="flex gap-4 w-full">
          <span class="flex flex-col w-full gap-1">
            <h4 class="text-textLGray">First Name</h4>
            <input class="h-14 rounded-[12px] w-full bg-bgInputGray" />
          </span>
          <span class="flex flex-col w-full gap-1">
            <h4 class="text-textLGray">Last Name</h4>
            <input class="h-14 rounded-[12px] v bg-bgInputGray" />
          </span>
        </div>
        <div class="flex gap-4 w-full">
          <span class="flex flex-col w-full gap-1">
            <h4 class="text-textLGray">First Name</h4>
            <input class="h-14 rounded-[12px] w-full bg-bgInputGray" />
          </span>
          <span class="flex flex-col w-full gap-1">
            <h4 class="text-textLGray">Last Name</h4>
            <input class="h-14 rounded-[12px] v bg-bgInputGray" />
          </span>
        </div>
      </div>
    </div>
    <Button text="Place order & pay" />
  </div>
</div>
