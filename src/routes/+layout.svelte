<script>
  import { QueryClientProvider, QueryClient } from "@sveltestack/svelte-query";

  // style
  import "../App.css";
  import { onMount } from "svelte";
  import { goto, invalidate } from "$app/navigation";

  export let data;

  $: ({ session, supabase } = data);

  // Create a client
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // default: true
      },
    },
  });

  onMount(() => {
    const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
      // if (!newSession) {
      //   /**
      //    * Queue this as a task so the navigation won't prevent the
      //    * triggering function from completing
      //    */
      //   setTimeout(() => {
      //     goto("/login", { invalidateAll: true });
      //   });
      // }
      if (newSession?.expires_at !== session?.expires_at) {
        invalidate("supabase:auth");
      }
    });

    return () => data.subscription.unsubscribe();
  });
</script>

<QueryClientProvider client={queryClient}>
  <div class="app__warpper">
    <slot />
  </div>
</QueryClientProvider>
