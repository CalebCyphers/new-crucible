<script lang="ts">
  import { writable } from "svelte/store";
  import { FileButton, ProgressBar } from "@skeletonlabs/skeleton";
  import { characterDefaults } from "$lib/characterDefaults";

  // IDEA:
  // CHOKE checks and STRUCTURE checks??

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

    <label>
      Character Image:
      <input
        bind:value={$character_state.image.url}
        type="text"
        placeholder="Character Portrait URL"
      />
    </label>

    <form action="?/updateProfile" method="POST" enctype="multipart/form-data">
      <label class="[ relative ]" for="avatar">
        <section class="[ frame ][ portrait-container mb-4 ]">
          <img
            src={$character_state.image.url
              ? $character_state.image.url
              : "https://picsum.photos/id/184/4288/2848"}
            alt={$character_state.name}
            id="avatar-preview"
          />
        </section>
      </label>
    </form>
  </form>

  <div class="[ stack ]">
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
    <section class="[ stack-sm ]">
      <div>
        <span class="[ flex justify-between content-center ][ h3 ]">
          <p>Statistics</p>
        </span>
        <hr />
      </div>
      <section class="[ cluster ]">
        <div class="[ w-32 ]">
          <p class="[ title-small text-center ]">Armor Class</p>
          <input
            class="[ input variant-form-material ]"
            type="number"
            bind:value={$character_state.armor_class.value}
          />
        </div>
        <div class="[ w-32 ]">
          <p class="[ title-small text-center ]">Initiative</p>
          <input
            class="[ input variant-form-material ]"
            type="text"
            value={scoreToModifier(
              $character_state.ability_scores.dex,
              0,
              true
            )}
            disabled
          />
        </div>
        <div class="[ w-32 ]">
          <p class="[ title-small text-center ]">Speed</p>
          <input
            class="[ input variant-form-material ]"
            type="number"
            value={0}
          />
        </div>
        <div class="[ w-32 ]">
          <p class="[ title-small text-center ]">Pass. Percep.</p>
          <input
            class="[ input variant-form-material ]"
            type="number"
            value={scoreToModifier($character_state.ability_scores.wis)}
            disabled
          />
        </div>
        <div class="[ w-32 ]">
          <p class="[ title-small text-center ]">Proficiency</p>
          <input
            class="[ input variant-form-material ]"
            type="number"
            bind:value={$character_state.proficiency_mod}
          />
        </div>
        <div class="[ w-32 ]">
          <p class="[ title-small text-center ]">Inspiration</p>
          <input
            class="[ input variant-form-material ]"
            type="number"
            placeholder="-"
            min="0"
          />
        </div>
      </section>
    </section>
    <section class="[ stack-sm ]">
      <div>
        <span class="[ flex justify-between content-center ][ h3 ]">
          <p>Contitions</p>
        </span>
        <hr />
      </div>

      <div>
        <ul class="[ stack-sm ]">
          <label class="flex items-center space-x-2">
            <input
              class="checkbox"
              type="checkbox"
              bind:checked={$character_state.conditions.Blinded}
            />
            <p>Blinded</p>
          </label>
          <label class="flex items-center space-x-2">
            <input
              class="checkbox"
              type="checkbox"
              bind:checked={$character_state.conditions.Deafened}
            />
            <p>Deafened</p>
          </label>
          <label class="flex items-center space-x-2">
            <input
              class="checkbox"
              type="checkbox"
              bind:checked={$character_state.conditions.Exhaustion}
            />
            <p>Exhaustion</p>
          </label>
          <label class="flex items-center space-x-2">
            <input
              class="checkbox"
              type="checkbox"
              bind:checked={$character_state.conditions.Frightened}
            />
            <p>Frightened</p>
          </label>
          <label class="flex items-center space-x-2">
            <input
              class="checkbox"
              type="checkbox"
              bind:checked={$character_state.conditions.Grappled}
            />
            <p>Grappled</p>
          </label>
          <label class="flex items-center space-x-2">
            <input
              class="checkbox"
              type="checkbox"
              bind:checked={$character_state.conditions.Incapacitated}
            />
            <p>Incapacitated</p>
          </label>
          <label class="flex items-center space-x-2">
            <input
              class="checkbox"
              type="checkbox"
              bind:checked={$character_state.conditions.Invisible}
            />
            <p>Invisible</p>
          </label>
          <label class="flex items-center space-x-2">
            <input
              class="checkbox"
              type="checkbox"
              bind:checked={$character_state.conditions.Necrotic}
            />
            <p>Necrotic</p>
          </label>
          <label class="flex items-center space-x-2">
            <input
              class="checkbox"
              type="checkbox"
              bind:checked={$character_state.conditions.Paralyzed}
            />
            <p>Paralyzed</p>
          </label>
          <label class="flex items-center space-x-2">
            <input
              class="checkbox"
              type="checkbox"
              bind:checked={$character_state.conditions.Petrified}
            />
            <p>Petrified</p>
          </label>
          <label class="flex items-center space-x-2">
            <input
              class="checkbox"
              type="checkbox"
              bind:checked={$character_state.conditions.Poisoned}
            />
            <p>Poisoned</p>
          </label>
          <label class="flex items-center space-x-2">
            <input
              class="checkbox"
              type="checkbox"
              bind:checked={$character_state.conditions.Prone}
            />
            <p>Prone</p>
          </label>
          <label class="flex items-center space-x-2">
            <input
              class="checkbox"
              type="checkbox"
              bind:checked={$character_state.conditions.Restrained}
            />
            <p>Restrained</p>
          </label>
          <label class="flex items-center space-x-2">
            <input
              class="checkbox"
              type="checkbox"
              bind:checked={$character_state.conditions.Stunned}
            />
            <p>Stunned</p>
          </label>
          <label class="flex items-center space-x-2">
            <input
              class="checkbox"
              type="checkbox"
              bind:checked={$character_state.conditions.Unconscious}
            />
            <p>Unconscious</p>
          </label>
        </ul>
      </div>
    </section>

    <section class="[ stack-sm ]">
      <div>
        <span class="[ flex justify-between content-center ][ h3 ]">
          <p>Attacks</p>
        </span>
        <hr />
      </div>
      <div>
        <ul class="[ list ]">
          <li>
            <span class="[ card variant-soft-surface ][ w-full px-2 py-1 ]"
              >MELEE (STR)</span
            >
            <span
              class="[ card variant-ghost-surface ][ px-2 py-1 ][ modifier ]"
            >
              {scoreToModifier(
                $character_state.ability_scores.str,
                $character_state.proficiency_mod,
                true
              )}
            </span>
            <span class="[ card variant-ghost-surface ][ px-2 py-1 w-32 ]">
              <i class="[ fa-solid fa-d6 ]" />{scoreToModifier(
                $character_state.ability_scores.str,
                0,
                true
              )} DMG
            </span>
          </li>
          <li>
            <span class="[ card variant-soft-surface ][ w-full px-2 py-1 ]"
              >RANGED (DEX)</span
            >
            <span
              class="[ card variant-ghost-surface ][ px-2 py-1 ][ modifier ]"
            >
              {scoreToModifier(
                $character_state.ability_scores.dex,
                $character_state.proficiency_mod,
                true
              )}
            </span>
            <span class="[ card variant-ghost-surface ][ px-2 py-1 w-32 ]">
              <i class="[ fa-solid fa-d6 ]" />{scoreToModifier(
                $character_state.ability_scores.dex,
                0,
                true
              )} DMG
            </span>
          </li>
        </ul>
      </div>
    </section>
  </div>
  <div class="[ stack ]">
    <div class="[ stack-sm ]">
      <section>
        <span class="[ flex justify-between content-center ][ h3 ]">
          <p>Ability Scores</p>
          <button>
            <i class="[ fa-solid fa-plus ][ section-plus ]" />
          </button>
        </span>
        <hr />
      </section>
      <ul class="[ list ]">
        <li>
          <input
            class="[ input variant-form-material ][ w-16 ]"
            type="number"
            bind:value={$character_state.ability_scores.str}
            min="0"
          />

          <span class="[ card variant-soft-surface ][ w-full px-2 py-1 ]"
            >Strength</span
          >
          <span class="[ card variant-ghost-surface ][ px-2 py-1 ][ modifier ]">
            {scoreToModifier($character_state.ability_scores.str, 0, true)}
          </span>
        </li>
        <li>
          <input
            class="[ input variant-form-material ][ w-16 ]"
            type="number"
            bind:value={$character_state.ability_scores.dex}
            min="0"
          />
          <span class="[ card variant-soft-surface ][ w-full px-2 py-1 ]"
            >Dexterity</span
          >
          <span class="[ card variant-ghost-surface ][ px-2 py-1 ][ modifier ]">
            {scoreToModifier($character_state.ability_scores.dex, 0, true)}
          </span>
        </li>
        <li>
          <input
            class="[ input variant-form-material ][ w-16 ]"
            type="number"
            bind:value={$character_state.ability_scores.con}
            min="0"
          />
          <span class="[ card variant-soft-surface ][ w-full px-2 py-1 ]"
            >Constitution</span
          >
          <span class="[ card variant-ghost-surface ][ px-2 py-1 ][ modifier ]">
            {scoreToModifier($character_state.ability_scores.con, 0, true)}
          </span>
        </li>
        <li>
          <input
            class="[ input variant-form-material ][ w-16 ]"
            type="number"
            bind:value={$character_state.ability_scores.int}
            min="0"
          />
          <span class="[ card variant-soft-surface ][ w-full px-2 py-1 ]"
            >Intelligence</span
          >
          <span class="[ card variant-ghost-surface ][ px-2 py-1 ][ modifier ]">
            {scoreToModifier($character_state.ability_scores.int, 0, true)}
          </span>
        </li>
        <li>
          <input
            class="[ input variant-form-material ][ w-16 ]"
            type="number"
            bind:value={$character_state.ability_scores.wis}
            min="0"
          />

          <span class="[ card variant-soft-surface ][ w-full px-2 py-1 ]"
            >Wisdom</span
          >
          <span class="[ card variant-ghost-surface ][ px-2 py-1 ][ modifier ]">
            {scoreToModifier($character_state.ability_scores.wis, 0, true)}
          </span>
        </li>
        <li>
          <input
            class="[ input variant-form-material ][ w-16 ]"
            type="number"
            bind:value={$character_state.ability_scores.cha}
            min="0"
          />
          <span class="[ card variant-soft-surface ][ w-full px-2 py-1 ]"
            >Charisma</span
          >
          <span class="[ card variant-ghost-surface ][ px-2 py-1 ][ modifier ]">
            {scoreToModifier($character_state.ability_scores.cha, 0, true)}
          </span>
        </li>
      </ul>
    </div>

    <div class="[ stack-sm ]">
      <section>
        <span class="[ flex justify-between content-center ][ h3 ]">
          <p>Skills</p>
          <button>
            <i class="[ fa-solid fa-plus ][ section-plus ]" />
          </button>
        </span>
        <hr />
      </section>

      <ul class="[ list ]">
        {#each characterSkills as skill}
          <li>
            <label class="flex items-center space-x-2">
              <input
                class="checkbox"
                type="checkbox"
                bind:checked={skill[1][1]}
              />
            </label>
            <span class="[ card variant-soft-surface ][ px-2 py-1 w-full ]"
              >{skill[0]}</span
            >
          </li>
        {/each}
      </ul>
    </div>

    <div class="[ stack-sm ]">
      <section>
        <span class="[ flex justify-between content-center ][ h3 ]">
          <p>Domains</p>
          <button>
            <i class="[ fa-solid fa-plus ][ section-plus ]" />
          </button>
        </span>
        <hr />
      </section>
      <ul class="[ list ]">
        {#each Object.keys($character_state.domains) as domain}
          <li>
            <label class="flex items-center space-x-2">
              <input
                class="checkbox"
                type="checkbox"
                bind:checked={$character_state.domains[domain]}
              />
            </label>
            <span class="[ card variant-soft-surface ][ px-2 py-1 w-full ]"
              >{domain}</span
            >
          </li>
        {/each}
      </ul>
    </div>
  </div>
  <br />
  <button type="submit" class="[ btn variant-outline-primary ]"
    >Console.log(Character)</button
  >
  <br />
</main>
