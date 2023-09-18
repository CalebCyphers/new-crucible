<script lang="ts">
  import { page } from "$app/stores";
  import TypeText from "$lib/Components/TypeText.svelte";
  import type { PageData } from "../me/$types";

  export let data: PageData;
</script>

<TypeText inputText={$page.url.pathname} />
