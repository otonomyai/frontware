<script lang="ts">
  import { page } from "$app/stores";
  import Header from "$lib/components/ui/header.svelte";

  import { ValidationError } from "yup";

  import * as yup from "yup";

  export const checkoutSchema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup
      .string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone is required"),
    country: yup.string().required("Country is required"),
    city: yup.string().required("City is required"),
    zipcode: yup.string().required("Zipcode is required"),
    address: yup.string().required("Address is required"),
    addressLine2: yup.string().notRequired(),
  });
  let id = $page.params.id;

  // Initial form data
  let formData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    zipcode: "",
    address: "",
    addressLine2: "",
  };

  // Reactive state for errors
  let errors: Record<string, string> = {};

  // Validate inputs using yup
  async function validate() {
    try {
      await checkoutSchema.validate(formData, { abortEarly: false });
      return true;
    } catch (err) {
      if (err instanceof ValidationError) {
        err.inner.forEach((error) => {
          if (error.path) {
            errors[error.path] = error.message;
          }
        });
      }
      return false;
    }
  }

  // Handle form submission
  async function handleSubmit() {
    // Clear previous errors
    errors = {};

    const isValid = await validate();
    if (isValid) {
      console.log("Form data:", formData);
      // Place order logic here
    } else {
      console.log("Validation failed", errors);
    }
  }
</script>

<div class="max-w-[1280px] mx-auto flex py-5 px-4 md:p-10 flex-col gap-9">
  <Header action={() => {}}>
    <p class="text-lg md:text-4xl text-primary">Checkout</p>
  </Header>

  <form on:submit|preventDefault={handleSubmit}>
    <div class="flex flex-col w-full md:w-9/12 gap-6 md:gap-10">
      <div class="flex flex-col gap-4 w-full">
        <h3 class="text-base md:text-4xl text-textDGray">Your Details</h3>
        <div class="flex flex-col w-full gap-5">
          <div class="flex flex-col md:flex-row gap-4 w-full">
            <span class="flex flex-col w-full gap-1">
              <h4 class="text-textLGray">First Name</h4>
              <input
                class="w-full px-4 py-4 text-lg rounded-[12px] bg-bgInputGray"
                bind:value={formData.firstName}
              />
              {#if errors.firstName}
                <p class="text-red-500">{errors.firstName}</p>
              {/if}
            </span>
            <span class="flex flex-col w-full gap-1">
              <h4 class="text-textLGray">Last Name</h4>
              <input
                class="w-full px-4 py-4 text-lg rounded-[12px] bg-bgInputGray"
                bind:value={formData.lastName}
              />
              {#if errors.lastName}
                <p class="text-red-500">{errors.lastName}</p>
              {/if}
            </span>
          </div>
          <div class="flex flex-col md:flex-row gap-4 w-full">
            <span class="flex flex-col w-full gap-1">
              <h4 class="text-textLGray">Email</h4>
              <input
                class="w-full px-4 py-4 text-lg rounded-[12px] bg-bgInputGray"
                bind:value={formData.email}
              />
              {#if errors.email}
                <p class="text-red-500">{errors.email}</p>
              {/if}
            </span>
            <span class="flex flex-col w-full gap-1">
              <h4 class="text-textLGray">Phone</h4>
              <input
                class="w-full px-4 py-4 text-lg rounded-[12px] bg-bgInputGray"
                bind:value={formData.phone}
              />
              {#if errors.phone}
                <p class="text-red-500">{errors.phone}</p>
              {/if}
            </span>
          </div>
          <div class="flex flex-col md:flex-row gap-4 w-full">
            <div class="flex w-full gap-2">
              <span class="flex flex-col w-full gap-1">
                <h4 class="text-textLGray">Country</h4>
                <input
                  class="w-full px-4 py-4 text-lg rounded-[12px] bg-bgInputGray"
                  bind:value={formData.country}
                />
                {#if errors.country}
                  <p class="text-red-500">{errors.country}</p>
                {/if}
              </span>
              <span class="flex flex-col w-full gap-1">
                <h4 class="text-textLGray">City</h4>
                <input
                  class="w-full px-4 py-4 text-lg rounded-[12px] bg-bgInputGray"
                  bind:value={formData.city}
                />
                {#if errors.city}
                  <p class="text-red-500">{errors.city}</p>
                {/if}
              </span>
            </div>
            <span class="flex flex-col w-full gap-1">
              <h4 class="text-textLGray">Zipcode</h4>
              <input
                class="w-full px-4 py-4 text-lg rounded-[12px] bg-bgInputGray"
                bind:value={formData.zipcode}
              />
              {#if errors.zipcode}
                <p class="text-red-500">{errors.zipcode}</p>
              {/if}
            </span>
          </div>
          <div class="flex flex-col md:flex-row gap-4 w-full">
            <span class="flex flex-col w-full gap-1">
              <h4 class="text-textLGray">Address</h4>
              <input
                class="w-full px-4 py-4 text-lg rounded-[12px] bg-bgInputGray"
                bind:value={formData.address}
              />
              {#if errors.address}
                <p class="text-red-500">{errors.address}</p>
              {/if}
            </span>
            <span class="flex flex-col w-full gap-1">
              <h4 class="text-textLGray">Address line-2</h4>
              <input
                class="w-full px-4 py-4 text-lg rounded-[12px] bg-bgInputGray"
                bind:value={formData.addressLine2}
              />
            </span>
          </div>
        </div>
      </div>
      <button type="submit">Place order & pay</button>
    </div>
  </form>
</div>
