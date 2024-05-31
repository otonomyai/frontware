<script>
  import { supabase } from "$lib/utils/supbase";

  const signInWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: "http://localhost:5173/oauth",
        },
      });
      if (error) {
        console.error("Error during sign-in:", error.message);
      } else {
        console.log("Sign-in successful");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="flex justify-center items-center" on:click={signInWithGoogle}>
  <button> Log in with google </button>
</div>
