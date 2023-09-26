<script lang="ts">
  import { writable } from "svelte/store";
  import { FileButton, ProgressBar } from "@skeletonlabs/skeleton";
  import { characterDefaults } from "$lib/characterDefaults";

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
</script>

<section class="[ stack-sm ]">
  <div class="[ flex justify-between content-center ]">
    <label class="[ label ][ w-40 ]">
      <span class="[ h3 ]">Hit Points</span>

      <div class="[ flex items-center gap-4 ]">
        <input
          class="[ input variant-form-material ][ hp-input ]"
          type="number"
          bind:value={$character_state.hit_points.current}
          placeholder={`${$character_state.hit_points.max ?? 10}`}
          min={0}
          max={$character_state.hit_points.max}
        />
        /
        <input
          class="[ input variant-form-material ][ hp-input ]"
          type="number"
          bind:value={$character_state.hit_points.max}
          placeholder={`${$character_state.hit_points.max ?? 10}`}
          min={0}
        />
      </div>
    </label>
    <label class="label">
      <span>Temp</span>
      <div>
        <input
          class="[ input variant-form-material ][ hp-input ]"
          type="number"
          bind:value={$character_state.hit_points.temp}
          placeholder={`${$character_state.hit_points.max ?? 10}`}
          min={0}
          max={$character_state.hit_points.max}
        />
      </div>
    </label>
  </div>
  <div>
    <ProgressBar
      label="Temporary Energy"
      meter="bg-primary-400-500-token"
      value={$character_state.hit_points.temp}
      max={$character_state.hit_points.max}
    />
    <ProgressBar
      label="Energy"
      track="bg-primary-50-900-token"
      height="h-4"
      value={$character_state.hit_points.current}
      max={$character_state.hit_points.max}
    />
  </div>
</section>
