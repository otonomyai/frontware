<script lang="ts">
  import { addUser } from "$lib/apis/user";
  import { useMutation } from "@sveltestack/svelte-query";
  import { onMount } from "svelte";
  import type { Session } from "@supabase/supabase-js";

  export let data;

  $: ({ session } = data);

  // Define the mutation
  const mutation = useMutation(
    async ({ session }: { session: Session | null }) => {
      const user = session?.user;
      if (!user) throw new Error("User not found");

      const email = user.email || "";
      const fullName = user.user_metadata?.full_name || "";
      const [first_name = "", last_name = ""] = fullName.split(" ");

      return addUser({
        email,
        first_name,
        last_name,
      });
    },
    {
      onSuccess: () => {
        window.location.href = "/";
      },
    }
  );

  onMount(() => {
    if (typeof window !== "undefined" && session?.access_token) {
      localStorage.setItem("token", session?.access_token);
    }
    $mutation.mutate({ session });
  });
</script>
