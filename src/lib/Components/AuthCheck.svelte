<script lang="ts">
  import { user } from "$lib/firebase";
  import TypeText from "./TypeText.svelte";
</script>

{#if $user}
  <slot />
{:else}
  <TypeText
    inputText="// !! NOT_AUTHORIZED ::  you must log in to view this content"
  />
{/if}
