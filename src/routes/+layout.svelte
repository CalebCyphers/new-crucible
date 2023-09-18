<script lang="ts">
  import "../app.postcss";
  import { AppShell, AppRail, AppRailAnchor } from "@skeletonlabs/skeleton";
  import { page } from "$app/stores";

  // Icons
  import RocketIcon from "~icons/radix-icons/rocket";
  import FramePersonIcon from "~icons/material-symbols/frame-person-outline";
  import DiceIcon from "~icons/mdi/dice-multiple-outline";

  // Highlight JS
  import hljs from "highlight.js";
  import "highlight.js/styles/github-dark.css";
  import { storeHighlightJs } from "@skeletonlabs/skeleton";
  storeHighlightJs.set(hljs);

  // Floating UI for Popups
  import {
    computePosition,
    autoUpdate,
    flip,
    shift,
    offset,
    arrow,
  } from "@floating-ui/dom";
  import { storePopup } from "@skeletonlabs/skeleton";
  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

  // Initialize Modal, Toast, and Drawer stores
  import { initializeStores } from "@skeletonlabs/skeleton";
  initializeStores();
</script>

<AppShell>
  <svelte:fragment slot="sidebarLeft">
    <AppRail>
      <AppRailAnchor href="/" selected={$page.url.pathname === "/"}>
        <svelte:fragment slot="lead">
          <i class={"[ icon ]"}><RocketIcon /></i>
        </svelte:fragment>
        <span>Crew</span>
      </AppRailAnchor>
      <AppRailAnchor href="/me" selected={$page.url.pathname === "/me"}>
        <svelte:fragment slot="lead">
          <i class={"[ icon ]"}><FramePersonIcon /></i>
        </svelte:fragment>
        <span>Me</span></AppRailAnchor
      >
      <AppRailAnchor href="/docs" selected={$page.url.pathname === "/docs"}
        ><svelte:fragment slot="lead">
          <i class={"[ icon ]"}><DiceIcon /></i>
        </svelte:fragment>
        <span>Rules</span></AppRailAnchor
      >
    </AppRail>
  </svelte:fragment>

  <div class="[ box center ][ !py-0 ]">
    <nav class="[ p-4 flex justify-end ]">
      <a
        class="[ header-anchor ]"
        href="https://www.owlbear.rodeo/room/gaHEZ-CfigpU/TheCrucible"
        target="_blank"
        rel="noreferrer"
      >
        <span>Owlbear Rodeo</span>
        <span>&rarr;</span>
      </a>
    </nav>
    <slot />
  </div>
</AppShell>

<style lang="postcss">
  .header-anchor {
    @apply no-underline;
    @apply text-surface-500 dark:text-surface-400;
    @apply hover:text-surface-900 hover:dark:text-surface-50;
  }

  .icon {
    font-size: var(--step-xl);
  }
</style>
