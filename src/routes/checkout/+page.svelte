<script>
  import Button from "$lib/components/ui/button.svelte";
  import Header from "$lib/components/ui/header.svelte";
</script>

<div class="max-w-[1280px] mx-auto flex py-5 px-4 md:p-10 flex-col gap-9">
  <Header action={() => {}}>
    <p class="text-lg md:text-4xl text-primary">Checkout</p>
  </Header>

  <div class="flex flex-col w-full md:w-9/12 gap-6 md:gap-10">
    <div class="flex flex-col gap-4 w-full">
      <h3 class="text-base md:text-4xl text-textDGray">Your Details</h3>
      <div class="flex flex-col w-full gap-5">
        <div class="flex flex-col md:flex-row gap-4 w-full">
          <span class="flex flex-col w-full gap-1">
            <h4 class="text-textLGray">First Name</h4>
            <input
              class="w-full px-4 py-4 text-lg rounded-[12px] bg-bgInputGray"
            />
          </span>
          <span class="flex flex-col w-full gap-1">
            <h4 class="text-textLGray">Last Name</h4>
            <input
              class="w-full px-4 py-4 text-lg rounded-[12px] bg-bgInputGray"
            />
          </span>
        </div>
        <div class="flex flex-col md:flex-row gap-4 w-full">
          <span class="flex flex-col w-full gap-1">
            <h4 class="text-textLGray">Email</h4>
            <input
              class="w-full px-4 py-4 text-lg rounded-[12px] bg-bgInputGray"
            />
          </span>
          <span class="flex flex-col w-full gap-1">
            <h4 class="text-textLGray">Phone</h4>
            <input
              class="w-full px-4 py-4 text-lg rounded-[12px] bg-bgInputGray"
            />
          </span>
        </div>
        <div class="flex flex-col md:flex-row gap-4 w-full">
          <div class="flex w-full gap-2">
            <span class="flex flex-col w-full gap-1">
              <h4 class="text-textLGray">Country</h4>
              <input
                class="w-full px-4 py-4 text-lg rounded-[12px] bg-bgInputGray"
              />
            </span>
            <span class="flex flex-col w-full gap-1">
              <h4 class="text-textLGray">City</h4>
              <input
                class="w-full px-4 py-4 text-lg rounded-[12px] bg-bgInputGray"
              />
            </span>
          </div>
          <span class="flex flex-col w-full gap-1">
            <h4 class="text-textLGray">Zipcode</h4>
            <input
              class="w-full px-4 py-4 text-lg rounded-[12px] bg-bgInputGray"
            />
          </span>
        </div>
        <div class="flex flex-col md:flex-row gap-4 w-full">
          <span class="flex flex-col w-full gap-1">
            <h4 class="text-textLGray">Address</h4>
            <input
              class="w-full px-4 py-4 text-lg rounded-[12px] bg-bgInputGray"
            />
          </span>
          <span class="flex flex-col w-full gap-1">
            <h4 class="text-textLGray">Address line-2</h4>
            <input
              class="w-full px-4 py-4 text-lg rounded-[12px] bg-bgInputGray"
            />
          </span>
        </div>
      </div>
    </div>
    <Button text="Place order & pay" callback={() => {}} />
  </div>
</div>
