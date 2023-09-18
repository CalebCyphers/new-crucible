<script lang="ts">
  import { onMount } from "svelte";

  export let inputText = "any_input_text";
  export let typeSpeed = 30;

  let showTimecode = false;
  let phrase = ""; // text to be typed
  let typedChar = ""; // SECTION displaying typed text
  let index = 0;
  let typewriter: any; // for setInterval/clearInterval

  const typeChar = () => {
    if (index < phrase.length) {
      typedChar += phrase[index];
      index += 1;
    } else {
      stopTyping();
      return;
    }
  };

  const resetType = () => {
    typedChar = "";
    index = typedChar.length;
    const d = new Date();
    const timecode = d.toLocaleTimeString(); // -> "7:38:05 AM"

    if (showTimecode) {
      phrase = `>  ${timecode} ${inputText}`;
    } else {
      phrase = `>  ${inputText}`;
    }

    typewriter = setInterval(typeChar, typeSpeed);
  };

  const stopTyping = () => {
    clearInterval(typewriter);
  };

  onMount(() => {
    resetType();
  });
</script>

<p><code>{typedChar}</code></p>
