<script lang="ts">
  import HealthSection from "../../lib/Components/HealthSection.svelte";

  import { writable } from "svelte/store";
  import { FileButton, ProgressBar } from "@skeletonlabs/skeleton";
  import { characterDefaults } from "$lib/characterDefaults";
  import { stat_traits } from "$lib/statTraits";
  import { lancerBonds } from "$lib/lancerBonds";

  const character_state = writable(characterDefaults);
  let files: FileList;
  $: conditions = $character_state.conditions
    ? Object.entries($character_state.conditions)
    : [];
  $: characterSkills = $character_state.skills
    ? Object.entries($character_state.skills)
    : [];

  function scoreToModifier(
    score: number,
    proficiency?: number | undefined,
    fancy?: boolean | undefined
  ) {
    let numericModifier = Math.floor((score - 10) / 2);
    if (proficiency) {
      numericModifier = numericModifier + proficiency;
    }
    if (fancy) {
      const styledModifier =
        numericModifier >= 0 ? "+" + numericModifier : numericModifier;
      return styledModifier;
    }
    return numericModifier;
  }

  function downloadCharacterJSON() {
    const blob = new Blob([JSON.stringify($character_state, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${$character_state.name || "character"}.json`;
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
      character_state.set(parsedCharacter);
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
    console.log($character_state);
  }

  function assignUniqueIDs(arr: object[]) {
    return arr.map((obj, index) => ({
      ...obj,
      id: `${Date.now()}-${index}-${Math.random().toString(36).substr(2, 9)}`,
    }));
  }

  const getScore = (scoreName: any) => {
    let result;
    switch (scoreName) {
      case "str":
        result = $character_state.ability_scores.str;
        break;
      case "dex":
        result = $character_state.ability_scores.dex;
        break;
      case "con":
        result = $character_state.ability_scores.con;
        break;
      case "int":
        result = $character_state.ability_scores.int;
        break;
      case "wis":
        result = $character_state.ability_scores.wis;
        break;
      case "cha":
        result = $character_state.ability_scores.cha;
        break;
    }
    return result;
  };

  let selectedTrait = {};
  let selectedBond = {};

  const onTraitSelectChange = (e: Event) => {
    selectedTrait = stat_traits.filter(
      (trait) => trait.name === e.target.value
    )[0];
  };
  const onBondSelectChange = (e: Event) => {
    selectedBond = lancerBonds.filter(
      (trait) => trait.name === e.target.value
    )[0];
  };
</script>

<main class="[ stack ]">
  <div class="[ flex gap-4 ]">
    <FileButton
      name="files"
      button="btn variant-outline-primary"
      bind:files
      on:change={onChangeHandler}>Upload Character JSON</FileButton
    >
    <button
      class="[ btn variant-outline-primary max-w-fit ]"
      on:click={downloadCharacterJSON}>Download Character JSON</button
    >
  </div>

  <form class="[ stack ]" on:submit|preventDefault={submitCharacter}>
    <label>
      Character Name:
      <input
        bind:value={$character_state.name}
        type="text"
        placeholder="Enter Character Name"
      />
    </label>
  </form>

  <div class="[ stack ]">
    <HealthSection />
    <section class="[ stack-sm ]">
      <div>
        <span class="[ flex justify-between content-center ][ h3 ]">
          <p>Traits</p>
        </span>
        <hr />
      </div>
      <div class="[ stack-sm ]">
        <select
          class="select"
          size="8"
          value="1"
          on:change={onTraitSelectChange}
        >
          {#each assignUniqueIDs(stat_traits) as statTrait}
            <option id={statTrait.id} value={statTrait.name}
              >{statTrait.name}</option
            >
          {/each}
        </select>
      </div>

      <!-- TRAIT DISPLAY CARD -->

      {#if selectedTrait.name}
        <div class="card">
          <header class="card-header h3">{selectedTrait.name}</header>
          <section class="p-4 stack-sm">
            <p>{selectedTrait.description}</p>
            <div>
              {`${selectedTrait.item.name} (${
                selectedTrait.item.description
              }), ${selectedTrait.stat} ${
                selectedTrait.adjustment > 0
                  ? `+${selectedTrait.adjustment}`
                  : selectedTrait.adjustment
              }`}
            </div>
          </section>
        </div>
      {/if}
    </section>

    <!-- BONDS -->

    <section class="[ stack-sm ]">
      <div>
        <span class="[ flex justify-between content-center ][ h3 ]">
          <p>Bonds</p>
        </span>
        <hr />
      </div>
      <div class="[ stack-sm ]">
        <select
          class="select"
          size="8"
          value="1"
          on:change={onBondSelectChange}
        >
          {#each assignUniqueIDs(lancerBonds) as bond}
            <option id={bond.id} value={bond.name}>{bond.name}</option>
          {/each}
        </select>
      </div>

      <!-- TRAIT DISPLAY CARD -->

      {#if selectedBond.name}
        <div class="card box-sm">
          <header class="card-header h1">{selectedBond.name}</header>
          <hr />
          <section class="p-4 stack-sm">
            <h4 class="h2">Major Ideals</h4>
            <hr />
            <ul>
              {#each selectedBond.majorIdeals as ideal}
                <li>
                  <span>{">"}</span>
                  <span class="flex-auto">{ideal}</span>
                </li>
              {/each}
            </ul>
            <h4 class="h2">Minor Ideals</h4>
            <hr />
            <ul>
              {#each selectedBond.minorIdeals as ideal}
                <li>
                  <span>{">"}</span>
                  <span class="flex-auto">{ideal}</span>
                </li>
              {/each}
            </ul>
            <h4 class="h3">Bond Powers</h4>
            <hr />
            <ul class="stack">
              {#each selectedBond.bondPowers as power}
                <li class="card box-sm variant-outline-primary stack-sm">
                  <strong>{power.name}</strong>
                  {#if power.uses}
                    <p>({power.uses})</p>
                  {/if}
                  <p>{power.description}</p>
                </li>
              {/each}
            </ul>
          </section>
          <footer class="card-footer">
            <!-- You can customize the footer content here -->
          </footer>
        </div>
      {/if}
    </section>
  </div>
  <br />
  <button type="submit" class="[ btn variant-outline-primary ]"
    >Console.log(Character)</button
  >
  <br />
</main>
