<script lang="ts">
  import { writable } from "svelte/store";
  import { FileButton } from "@skeletonlabs/skeleton";

  const character = writable({
    name: "",
    key_stat: "Intelligence",
    tech_stat: "Intelligence",
    domains: {
      arcana: false,
      academia: false,
      celestial: false,
      labor: false,
      daemonic: false,
      corpro: false,
      commerce: false,
      high_society: false,
      low_society: false,
      military: false,
      nature: false,
      criminal: false,
    },
  });

  const stats = [
    "Strength",
    "Dexterity",
    "Constitution",
    "Intelligence",
    "Wisdom",
    "Charisma",
  ];

  let files: FileList;

  function downloadCharacterJSON() {
    const blob = new Blob([JSON.stringify($character, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${$character.name || "character"}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  async function onChangeHandler(e: Event): Promise<void> {
    console.log("file data:", e);
    console.log("files", files);

    const file = files[0];

    try {
      const fileContents = await readFileAsText(file);
      console.log("filecontents:", fileContents);
      const parsedCharacter = JSON.parse(fileContents);
      character.set(parsedCharacter);
      console.log("character set to:", parsedCharacter);
    } catch (error) {
      console.error("Error reading or parsing file:", error);
    }
  }

  function readFileAsText(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error);
      reader.readAsText(file);
    });
  }

  function submitCharacter() {
    console.log($character);
  }
</script>

<main class="[ stack ]">
  <FileButton name="files" bind:files on:change={onChangeHandler} />
  <button
    class="[ btn-sm variant-outline-primary max-w-xs ]"
    on:click={downloadCharacterJSON}>Download Character JSON</button
  >

  <form class="[ stack ]" on:submit|preventDefault={submitCharacter}>
    <label>
      Character Name:
      <input
        bind:value={$character.name}
        type="text"
        placeholder="Enter Character Name"
      />
    </label>

    <label>
      Primary Stat:
      <select bind:value={$character.key_stat}>
        {#each stats as stat}
          <option value={stat}>{stat}</option>
        {/each}
      </select>
    </label>

    <label>
      Tech Stat:
      <select bind:value={$character.tech_stat}>
        {#each stats as stat}
          <option value={stat}>{stat}</option>
        {/each}
      </select>
    </label>

    <fieldset>
      <legend>Domains:</legend>
      {#each Object.keys($character.domains) as domain}
        <label>
          <input type="checkbox" bind:checked={$character.domains[domain]} />
          {domain}
        </label>
      {/each}
    </fieldset>

    <button disabled={true} type="submit">Create Character</button>
  </form>
</main>
