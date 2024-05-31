<script>
  import { QueryClientProvider, QueryClient } from "@sveltestack/svelte-query";

  // style
  import "../App.css";

  // Create a client
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // default: true
      },
    },
  });
</script>

<QueryClientProvider client={queryClient}>
  <div class="app__warpper">
    <slot />
  </div>
</QueryClientProvider>
