<script lang="ts">
  import { addUser } from "$lib/apis/user";
  import { useMutation } from "@sveltestack/svelte-query";
  import { onMount } from "svelte";
  import type { Session } from "@supabase/supabase-js";
  import { supabase } from "$lib/utils/supbase";

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

  const getSession = async () => {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      console.error("Error getting session:", error);
      return;
    }

    if (typeof window !== "undefined" && data.session?.access_token) {
      localStorage.setItem("token", data.session.access_token);
    }

    // Trigger the.session.access_token);
    $mutation.mutate({ session: data.session });
  };

  onMount(() => {
    getSession();
  });
</script>
