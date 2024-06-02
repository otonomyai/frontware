<script>
  export let data;
  $: ({ supabase } = data);

  const signInWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: "http://localhost:5173/oauth",
        },
      });
      if (error) console.error(error);
    } catch (err) {
      console.error(err);
    }
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="flex justify-center items-center" on:click={signInWithGoogle}>
  <button> Log in with google </button>
</div>
