<!-- <script>
  // Row counts used for saving/loading characters
  var rows_attacks = 2;
  var rows_inventory = 2;
  var rows_attunements = 3;
  var rows_spells = 2;

  function save_character() {
    console.log("Saving character...");

    var filename = ".dnd";
    if (document.getElementById("charname").value == "") {
      filename = "CharacterSheet" + filename;
    } else {
      filename = document.getElementById("charname").value + filename;
    }

    // Prepare form data for JSON format
    const formId = "charsheet";
    var url = location.href;
    const formIdentifier = `${url} ${formId}`;
    let form = document.querySelector(`#${formId}`);
    let formElements = form.elements;

    let data = { [formIdentifier]: {} };
    for (const element of formElements) {
      if (element.name.length > 0) {
        if (element.type == "checkbox") {
          var checked = $("[name='" + element.name + "']").prop("checked")
            ? "checked"
            : "unchecked";
          data[formIdentifier][element.name] = checked;
        } else {
          data[formIdentifier][element.name] = element.value;
        }
      }
    }
    data = JSON.stringify(data[formIdentifier], null, 2);
    type = "application/json";

    // Save JSON to file
    var file = new Blob([data], { type: type });
    if (window.navigator.msSaveOrOpenBlob)
      // IE10+
      window.navigator.msSaveOrOpenBlob(file, filename);
    else {
      // Others
      var a = document.createElement("a"),
        url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function () {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 0);
    }
  }

  // Protective autosave feature
  window.onbeforeunload = function () {
    if ($("[name='autosave']").prop("checked") == true) {
      save_character();
    }
  };

  // Functions for reading character from disk
  function load_character(e) {
    // Autosave character
    if ($("[name='autosave']").prop("checked") == true) {
      save_character();
    }

    // Load character
    var file = e.target.files[0];
    if (!file) {
      return;
    }
    var reader = new FileReader();
    reader.onload = function (e) {
      var contents = e.target.result;

      // Set size of dynamic tables
      var savedData = JSON.parse(contents);

      while (rows_attacks > parseInt(savedData.rows_attacks)) {
        remove_last_row("attacktable");
      }
      while (rows_attacks < parseInt(savedData.rows_attacks)) {
        add_attack();
      }

      while (rows_attunements > parseInt(savedData.rows_attunements)) {
        remove_last_row("attunementtable");
      }
      while (rows_attunements < parseInt(savedData.rows_attunements)) {
        add_attunement();
      }

      while (rows_inventory > parseInt(savedData.rows_inventory)) {
        remove_last_row("inventorytable");
      }
      while (rows_inventory < parseInt(savedData.rows_inventory)) {
        add_inventory();
      }

      while (rows_spells > parseInt(savedData.rows_spells)) {
        remove_last_row("spelltable");
      }
      while (rows_spells < parseInt(savedData.rows_spells)) {
        add_spell();
      }

      // Prepare form data for JSON format
      const formId = "charsheet";
      var url = location.href;
      const formIdentifier = `${url} ${formId}`;
      let form = document.querySelector(`#${formId}`);
      let formElements = form.elements;

      // Display file content
      savedData = JSON.parse(contents); // get and parse the saved data from localStorage
      for (const element of formElements) {
        if (element.name in savedData) {
          if (element.type == "checkbox") {
            var checked = savedData[element.name] == "checked";
            $("[name='" + element.name + "']").prop("checked", checked);
          } else {
            element.value = savedData[element.name];
          }
        }
      }
    };
    reader.readAsText(file);
  }
  document
    .getElementById("buttonload")
    .addEventListener("change", load_character, false);

  function long_rest() {
    console.log("Taking long rest...");
    /*
     *  To do on a long rest:
     *
     *  x Reset hit points to max HP
     *  x Reset hit dice to max hit dice
     *  x Reset all spell slots available to max
     *  x Reset all death saves
     *  x Remind player to reset temp HP and limited use features and items
     *
     */

    $("[name='currenthp']").val($("[name='maxhp']").val());
    $("[name='remaininghd']").val($("[name='totalhd']").val());

    $("[name='spellslots1']").val($("[name='spellslotsmax1']").val());
    $("[name='spellslots2']").val($("[name='spellslotsmax2']").val());
    $("[name='spellslots3']").val($("[name='spellslotsmax3']").val());
    $("[name='spellslots4']").val($("[name='spellslotsmax4']").val());
    $("[name='spellslots5']").val($("[name='spellslotsmax5']").val());
    $("[name='spellslots6']").val($("[name='spellslotsmax6']").val());
    $("[name='spellslots7']").val($("[name='spellslotsmax7']").val());
    $("[name='spellslots8']").val($("[name='spellslotsmax8']").val());
    $("[name='spellslots9']").val($("[name='spellslotsmax9']").val());
    $("[name='pactslots1']").val($("[name='pactslotsmax1']").val());

    $("[name='deathsuccess1']").prop("checked", false);
    $("[name='deathsuccess2']").prop("checked", false);
    $("[name='deathsuccess3']").prop("checked", false);
    $("[name='deathfail1']").prop("checked", false);
    $("[name='deathfail2']").prop("checked", false);
    $("[name='deathfail3']").prop("checked", false);

    alert(
      "Hit points, hit dice, and spell slots have been refreshed.\n\nPlease remember to reset Limited Use abilities, temporary hit points, and other effects as needed."
    );
  }

  function add_attack() {
    var tableRef = document.getElementById("attacktable");

    var row = tableRef.insertRow(tableRef.rows.length);

    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);

    cell0.innerHTML =
      "<td><input name='atkname" + rows_attacks + "' type='text'/></td>";
    cell1.innerHTML =
      "<td><input name='atkbonus" + rows_attacks + "' type='text'/></td>";
    cell2.innerHTML =
      "<td><input name='atkdamage" + rows_attacks + "' type='text'/></td>";
    cell3.innerHTML =
      "<td colspan='2'><input name='atknotes" +
      rows_attacks +
      "' type='text'/></td>";

    rows_attacks += 1;
    $("[name='rows_attacks']").val(rows_attacks);
  }

  function add_spell() {
    var tableRef = document.getElementById("spelltable");

    var row = tableRef.insertRow(tableRef.rows.length);

    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);
    var cell6 = row.insertCell(6);
    var cell7 = row.insertCell(7);
    var cell8 = row.insertCell(8);
    var cell9 = row.insertCell(9);

    cell0.innerHTML =
      "<td><input name='spellprep" + rows_spells + "' type='checkbox' /></td>";
    cell1.innerHTML =
      "<td><input name='spellname" + rows_spells + "' type='text' /></td>";
    cell2.innerHTML =
      "<td><input name='spelllevel" + rows_spells + "' type='text' /></td>";
    cell3.innerHTML =
      "<td><input name='spellsource" + rows_spells + "' type='text' /></td>";
    cell4.innerHTML =
      "<td><input name='spellattacksave" +
      rows_spells +
      "' type='text' /></td>";
    cell5.innerHTML =
      "<td><input name='spelltime" + rows_spells + "' type='text' /></td>";
    cell6.innerHTML =
      "<td><input name='spellrange" + rows_spells + "' type='text' /></td>";
    cell7.innerHTML =
      "<td><input name='spellduration" + rows_spells + "' type='text' /></td>";
    cell8.innerHTML =
      "<td><input name='spellcomponents" +
      rows_spells +
      "' type='text' /></td>";
    cell9.innerHTML =
      "<td><input name='spellnotes" + rows_spells + "' type='text' /></td>";

    rows_spells += 1;
    $("[name='rows_spells']").val(rows_spells);
  }

  function add_inventory() {
    var tableRef = document.getElementById("inventorytable");

    var row = tableRef.insertRow(tableRef.rows.length);

    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);

    cell0.innerHTML =
      "<td><input name='itemequipped" +
      rows_inventory +
      "' type='checkbox' /></td>";
    cell1.innerHTML =
      "<td><input name='itemname" + rows_inventory + "' type='text' /></td>";
    cell2.innerHTML =
      "<td><input name='itemcount" +
      rows_inventory +
      "' type='text' onchange='calc_carry_weight()' /></td>";
    cell3.innerHTML =
      "<td><input name='itemweight" +
      rows_inventory +
      "' type='text' onchange='calc_carry_weight()' /></td>";
    cell4.innerHTML =
      "<td><input name='itemvalue" + rows_inventory + "' type='text' /></td>";
    cell5.innerHTML =
      "<td><input name='itemnotes" + rows_inventory + "' type='text' /></td>";

    rows_inventory += 1;
    $("[name='rows_inventory']").val(rows_inventory);
  }

  function add_attunement() {
    var tableRef = document.getElementById("attunementtable");

    var row = tableRef.insertRow(tableRef.rows.length);

    var cell0 = row.insertCell(0);

    cell0.innerHTML =
      "<td><input name='attunement" +
      rows_attunements +
      "' type='text' /></td>";

    rows_attunements += 1;
    $("[name='rows_attunements']").val(rows_attunements);
  }

  function remove_last_row(tableId) {
    var tableRef = document.getElementById(tableId);
    var rowCount = tableRef.rows.length;
    tableRef.deleteRow(rowCount - 1);

    switch (tableId) {
      case "attacktable":
        rows_attacks -= 1;
        if (rows_attacks < 0) {
          rows_attacks = 0;
        }
        break;
      case "attunementtable":
        rows_attunements -= 1;
        if (rows_attunements < 0) {
          rows_attunements = 0;
        }
        break;
      case "inventorytable":
        rows_inventory -= 1;
        if (rows_inventory < 0) {
          rows_inventory = 0;
        }
        break;
      case "spelltable":
        rows_spells -= 1;
        if (rows_spells < 0) {
          rows_spells = 0;
        }
        break;
    }
    $("[name='rows_attacks']").val(rows_attacks);
    $("[name='rows_attunements']").val(rows_attunements);
    $("[name='rows_inventory']").val(rows_inventory);
    $("[name='rows_spells']").val(rows_spells);
  }

  function calc_carry_weight() {
    var total = 0;
    var table = document.getElementById("inventorytable");
    var trs = table.getElementsByTagName("tr");
    for (var i = 0; i < trs.length; i++) {
      var tds = trs[i].getElementsByTagName("td");

      var count_str = tds[2].getElementsByTagName("input")[0].value;
      var weight_str = tds[3].getElementsByTagName("input")[0].value;

      var count = isNaN(parseFloat(count_str)) ? 0 : parseFloat(count_str);
      var weight = isNaN(parseFloat(weight_str)) ? 0 : parseFloat(weight_str);

      console.log(count + " * " + weight + " = " + count * weight);
      total += count * weight;
    }
    document.getElementById("weightcarried").value = parseInt(total + 0.5);
  }
</script>

<form class="charsheet" id="charsheet">
  <header>
    <section>
      <button
        name="buttonsave"
        type="button"
        on:click={save_character}
        style="width:100px;margin-bottom:5px;margin-right:30px;"
        >Save Character</button
      >
      <label for="buttonload" id="loadlabel" style="text-transform:Capitalize;"
        >Load Character</label
      ><input
        name="buttonload"
        id="buttonload"
        type="file"
        style="width:200px;margin-bottom:5px;"
      />
      <button
        name="buttonrest"
        type="button"
        on:click={long_rest}
        style="width:100px;,margin-bottom:5px;margin-left:30px;"
        >Long Rest</button
      >
      <label
        for="autosave"
        style="text-transform:Capitalize;font-weight:bold;padding:0px 10px;"
        >Autosave?</label
      ><input name="autosave" id="autosave" type="checkbox" />
    </section>
  </header>
  <header>
    <section class="charname">
      <label for="charname">Character Name</label><input
        name="charname"
        id="charname"
        placeholder="Character Name"
      />
    </section>
    <section class="misc">
      <ul>
        <li>
          <label for="classlevel">Class & Level</label><input
            name="classlevel"
            placeholder="Class 1"
          />
        </li>
        <li>
          <label for="background">Background</label><input
            name="background"
            placeholder="Background"
          />
        </li>
        <li>
          <label for="playername">Player Name</label><input
            name="playername"
            placeholder="Player Name"
          />
        </li>
        <li>
          <label for="race">Race</label><input name="race" placeholder="Race" />
        </li>
        <li>
          <label for="alignment">Alignment</label><input
            name="alignment"
            placeholder="Alignment"
          />
        </li>
        <li>
          <label for="experiencepoints">Experience Points</label><input
            name="experiencepoints"
            placeholder="0"
          />
        </li>
      </ul>
    </section>
  </header>
  <main>
    <section>
      <section class="attributes">
        <div class="scores">
          <ul>
            <li>
              <div class="score">
                <label for="Strengthscore">Strength</label><input
                  name="Strengthscore"
                  placeholder="10"
                  class="stat"
                />
              </div>
              <div class="modifier">
                <input name="Strengthmod" placeholder="+0" class="statmod" />
              </div>
            </li>
            <li>
              <div class="score">
                <label for="Dexterityscore">Dexterity</label><input
                  name="Dexterityscore"
                  placeholder="10"
                  class="stat"
                />
              </div>
              <div class="modifier">
                <input name="Dexteritymod" placeholder="+0" class="statmod" />
              </div>
            </li>
            <li>
              <div class="score">
                <label for="Constitutionscore">Constitution</label><input
                  name="Constitutionscore"
                  placeholder="10"
                  class="stat"
                />
              </div>
              <div class="modifier">
                <input
                  name="Constitutionmod"
                  placeholder="+0"
                  class="statmod"
                />
              </div>
            </li>
            <li>
              <div class="score">
                <label for="Intelligencescore">Intelligence</label><input
                  name="Intelligencescore"
                  placeholder="10"
                  class="stat"
                />
              </div>
              <div class="modifier">
                <input
                  name="Intelligencemod"
                  placeholder="+0"
                  class="statmod"
                />
              </div>
            </li>
            <li>
              <div class="score">
                <label for="Wisdomscore">Wisdom</label><input
                  name="Wisdomscore"
                  placeholder="10"
                  class="stat"
                />
              </div>
              <div class="modifier">
                <input name="Wisdommod" placeholder="+0" />
              </div>
            </li>
            <li>
              <div class="score">
                <label for="Charismascore">Charisma</label><input
                  name="Charismascore"
                  placeholder="10"
                  class="stat"
                />
              </div>
              <div class="modifier">
                <input name="Charismamod" placeholder="+0" class="statmod" />
              </div>
            </li>
          </ul>
        </div>
        <div class="attr-applications">
          <div class="proficiencybonus box">
            <div class="label-container">
              <label for="inspiration">Inspiration</label>
            </div>
            <input name="inspiration" placeholder="" />
          </div>
          <div class="proficiencybonus box">
            <div class="label-container">
              <label for="proficiencybonus">Proficiency Bonus</label>
            </div>
            <input name="proficiencybonus" placeholder="+2" />
          </div>
          <div class="saves list-section box">
            <ul>
              <li>
                <label for="Strength-save">Strength</label><input
                  name="Strength-save"
                  placeholder="+0"
                  type="text"
                /><input name="Strength-save-prof" type="checkbox" />
              </li>
              <li>
                <label for="Dexterity-save">Dexterity</label><input
                  name="Dexterity-save"
                  placeholder="+0"
                  type="text"
                /><input name="Dexterity-save-prof" type="checkbox" />
              </li>
              <li>
                <label for="Constitution-save">Constitution</label><input
                  name="Constitution-save"
                  placeholder="+0"
                  type="text"
                /><input name="Constitution-save-prof" type="checkbox" />
              </li>
              <li>
                <label for="Intelligence-save">Intelligence</label><input
                  name="Intelligence-save"
                  placeholder="+0"
                  type="text"
                /><input name="Intelligence-save-prof" type="checkbox" />
              </li>
              <li>
                <label for="Wisdom-save">Wisdom</label><input
                  name="Wisdom-save"
                  placeholder="+0"
                  type="text"
                /><input name="Wisdom-save-prof" type="checkbox" />
              </li>
              <li>
                <label for="Charisma-save">Charisma</label><input
                  name="Charisma-save"
                  placeholder="+0"
                  type="text"
                /><input name="Charisma-save-prof" type="checkbox" />
              </li>
            </ul>
            <div class="label">Saving Throws</div>
          </div>
          <div class="skills list-section box">
            <ul>
              <li>
                <label for="Acrobatics"
                  >Acrobatics <span class="skill">(Dex)</span></label
                ><input name="Acrobatics" placeholder="+0" type="text" /><input
                  name="Acrobatics-prof"
                  type="checkbox"
                />
              </li>
              <li>
                <label for="Animal Handling"
                  >Animal Handling <span class="skill">(Wis)</span></label
                ><input
                  name="Animal Handling"
                  placeholder="+0"
                  type="text"
                /><input name="Animal Handling-prof" type="checkbox" />
              </li>
              <li>
                <label for="Arcana"
                  >Arcana <span class="skill">(Int)</span></label
                ><input name="Arcana" placeholder="+0" type="text" /><input
                  name="Arcana-prof"
                  type="checkbox"
                />
              </li>
              <li>
                <label for="Athletics"
                  >Athletics <span class="skill">(Str)</span></label
                ><input name="Athletics" placeholder="+0" type="text" /><input
                  name="Athletics-prof"
                  type="checkbox"
                />
              </li>
              <li>
                <label for="Deception"
                  >Deception <span class="skill">(Cha)</span></label
                ><input name="Deception" placeholder="+0" type="text" /><input
                  name="Deception-prof"
                  type="checkbox"
                />
              </li>
              <li>
                <label for="History"
                  >History <span class="skill">(Int)</span></label
                ><input name="History" placeholder="+0" type="text" /><input
                  name="History-prof"
                  type="checkbox"
                />
              </li>
              <li>
                <label for="Insight"
                  >Insight <span class="skill">(Wis)</span></label
                ><input name="Insight" placeholder="+0" type="text" /><input
                  name="Insight-prof"
                  type="checkbox"
                />
              </li>
              <li>
                <label for="Intimidation"
                  >Intimidation <span class="skill">(Cha)</span></label
                ><input
                  name="Intimidation"
                  placeholder="+0"
                  type="text"
                /><input name="Intimidation-prof" type="checkbox" />
              </li>
              <li>
                <label for="Investigation"
                  >Investigation <span class="skill">(Int)</span></label
                ><input
                  name="Investigation"
                  placeholder="+0"
                  type="text"
                /><input name="Investigation-prof" type="checkbox" />
              </li>
              <li>
                <label for="Medicine"
                  >Medicine <span class="skill">(Wis)</span></label
                ><input name="Medicine" placeholder="+0" type="text" /><input
                  name="Medicine-prof"
                  type="checkbox"
                />
              </li>
              <li>
                <label for="Nature"
                  >Nature <span class="skill">(Int)</span></label
                ><input name="Nature" placeholder="+0" type="text" /><input
                  name="Nature-prof"
                  type="checkbox"
                />
              </li>
              <li>
                <label for="Perception"
                  >Perception <span class="skill">(Wis)</span></label
                ><input name="Perception" placeholder="+0" type="text" /><input
                  name="Perception-prof"
                  type="checkbox"
                />
              </li>
              <li>
                <label for="Performance"
                  >Performance <span class="skill">(Cha)</span></label
                ><input name="Performance" placeholder="+0" type="text" /><input
                  name="Performance-prof"
                  type="checkbox"
                />
              </li>
              <li>
                <label for="Persuasion"
                  >Persuasion <span class="skill">(Cha)</span></label
                ><input name="Persuasion" placeholder="+0" type="text" /><input
                  name="Persuasion-prof"
                  type="checkbox"
                />
              </li>
              <li>
                <label for="Religion"
                  >Religion <span class="skill">(Int)</span></label
                ><input name="Religion" placeholder="+0" type="text" /><input
                  name="Religion-prof"
                  type="checkbox"
                />
              </li>
              <li>
                <label for="Sleight of Hand"
                  >Sleight of Hand <span class="skill">(Dex)</span></label
                ><input
                  name="Sleight of Hand"
                  placeholder="+0"
                  type="text"
                /><input name="Sleight of Hand-prof" type="checkbox" />
              </li>
              <li>
                <label for="Stealth"
                  >Stealth <span class="skill">(Dex)</span></label
                ><input name="Stealth" placeholder="+0" type="text" /><input
                  name="Stealth-prof"
                  type="checkbox"
                />
              </li>
              <li>
                <label for="Survival"
                  >Survival <span class="skill">(Wis)</span></label
                ><input name="Survival" placeholder="+0" type="text" /><input
                  name="Survival-prof"
                  type="checkbox"
                />
              </li>
            </ul>
            <div class="label">Skills</div>
          </div>
        </div>
      </section>
    </section>
    <section>
      <section class="combat">
        <div class="armorclass">
          <div>
            <label for="ac">Armor Class</label><input
              name="ac"
              placeholder="10"
              type="text"
            />
          </div>
        </div>
        <div class="initiative">
          <div>
            <label for="initiative">Initiative</label><input
              name="initiative"
              placeholder="+0"
              type="text"
            />
          </div>
        </div>
        <div class="speed">
          <div>
            <label for="speed">Speed</label><input
              name="speed"
              placeholder="30ft"
              type="text"
            />
          </div>
        </div>

        <!-- Copy above format for HP -->
        <div class="armorclass">
          <div>
            <label for="currenthp">Current Hit Points</label><input
              name="currenthp"
              placeholder="10"
              type="text"
            />
          </div>
        </div>
        <div class="initiative">
          <div>
            <label for="maxhp">Hit Point Maximum</label><input
              name="maxhp"
              placeholder="10"
              type="text"
            />
          </div>
        </div>
        <div class="speed">
          <div>
            <label for="temphp">Temporary Hit Points</label><input
              name="temphp"
              placeholder="0"
              type="text"
            />
          </div>
        </div>
        <div class="hitdice">
          <div>
            <div class="total">
              <label for="totalhd">Total</label><input
                name="totalhd"
                placeholder="_d__"
                type="text"
              />
            </div>
            <div class="remaining">
              <label for="remaininghd">Hit Dice</label><input
                name="remaininghd"
                type="text"
              />
            </div>
          </div>
        </div>
        <div class="deathsaves">
          <div>
            <div class="label">
              <label>Death Saves</label>
            </div>
            <div class="marks">
              <div class="deathsuccesses">
                <label>Successes</label>
                <div class="bubbles">
                  <input name="deathsuccess1" type="checkbox" />
                  <input name="deathsuccess2" type="checkbox" />
                  <input name="deathsuccess3" type="checkbox" />
                </div>
              </div>
              <div class="deathfails">
                <label>Failures</label>
                <div class="bubbles">
                  <input name="deathfail1" type="checkbox" />
                  <input name="deathfail2" type="checkbox" />
                  <input name="deathfail3" type="checkbox" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="otherprofs box textblock">
        <label for="otherprofs">Other Proficiencies and Languages</label
        ><textarea name="otherprofs"
          >=== ARMOR&#013;&#010;&#013;&#010;===
          WEAPONS&#013;&#010;&#013;&#010;=== TOOLS&#013;&#010;&#013;&#010;===
          LANGUAGES</textarea
        >
      </div>
    </section>
    <section>
      <section class="flavor">
        <div class="personality">
          <label for="defenses">Defenses & Active Conditions</label><textarea
            name="defenses"
          />
        </div>
        <div class="ideals">
          <label for="savenotes">Saving Throw Notes</label><textarea
            name="savenotes"
          />
        </div>
        <div class="bonds">
          <label for="movement">Movement Speeds</label><textarea
            name="movement"
          />
        </div>
        <div class="flaws">
          <label for="senses">Senses</label><textarea name="senses" />
        </div>
      </section>
      <div class="passive-perception box">
        <div class="label-container">
          <label for="passiveperception">Passive Wisdom (Perception)</label>
        </div>
        <input name="passiveperception" placeholder="10" />
      </div>
      <div class="passive-perception box">
        <div class="label-container">
          <label for="passiveinsight">Passive Wisdom (Insight)</label>
        </div>
        <input name="passiveinsight" placeholder="10" />
      </div>
      <div class="passive-perception box">
        <div class="label-container">
          <label for="passiveinvestigation"
            >Passive Intelligence (Investigation)</label
          >
        </div>
        <input name="passiveinvestigation" placeholder="10" />
      </div>
    </section>
  </main>

  <header>
    <section class="attacksandspellcasting">
      <div>
        <label>Attacks & Spellcasting</label>
        <table>
          <thead>
            <tr>
              <th> Name </th>
              <th> Attack Bonus </th>
              <th> Damage/Type </th>
              <th colspan="2"> Notes </th>
            </tr>
          </thead>
          <tbody id="attacktable">
            <tr>
              <td>
                <input name="atkname0" type="text" />
              </td>
              <td>
                <input name="atkbonus0" type="text" />
              </td>
              <td>
                <input name="atkdamage0" type="text" />
              </td>
              <td colspan="2">
                <input name="atknotes0" type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <input name="atkname1" type="text" />
              </td>
              <td>
                <input name="atkbonus1" type="text" />
              </td>
              <td>
                <input name="atkdamage1" type="text" />
              </td>
              <td colspan="2">
                <input name="atknotes1" type="text" />
              </td>
            </tr>
          </tbody>
        </table>
        <span>
          <button
            name="button-addattack"
            type="button"
            on:click={add_attack}
            style="width:20%;">Add New Attack</button
          >
          <button
            name="button-removeattack"
            type="button"
            on:click={() => {
              remove_last_row("attacktable");
            }}
            style="width:20%;">Remove Attack</button
          >
        </span>
        <textarea name="attacksnotes"
          >=== ACTIONS&#013;&#010;&#013;&#010;=== BONUS
          ACTIONS&#013;&#010;&#013;&#010;===
          REACTIONS&#013;&#010;&#013;&#010;=== LIMITED USE</textarea
        >
      </div>
    </section>
  </header>

  <hr class="pageborder" />

  <header>
    <section class="attacksandspellcasting" id="spellslots">
      <div>
        <label>Spell Slots</label>
        <table>
          <thead>
            <tr>
              <th>Level</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Available</td>
              <td><input name="spellslots1" type="text" placeholder="" /></td>
              <td><input name="spellslots2" type="text" placeholder="" /></td>
              <td><input name="spellslots3" type="text" placeholder="" /></td>
              <td><input name="spellslots4" type="text" placeholder="" /></td>
              <td><input name="spellslots5" type="text" placeholder="" /></td>
              <td><input name="spellslots6" type="text" placeholder="" /></td>
              <td><input name="spellslots7" type="text" placeholder="" /></td>
              <td><input name="spellslots8" type="text" placeholder="" /></td>
              <td><input name="spellslots9" type="text" placeholder="" /></td>
            </tr>
            <tr>
              <td>Maximum</td>
              <td
                ><input name="spellslotsmax1" type="text" placeholder="0" /></td
              >
              <td
                ><input name="spellslotsmax2" type="text" placeholder="0" /></td
              >
              <td
                ><input name="spellslotsmax3" type="text" placeholder="0" /></td
              >
              <td
                ><input name="spellslotsmax4" type="text" placeholder="0" /></td
              >
              <td
                ><input name="spellslotsmax5" type="text" placeholder="0" /></td
              >
              <td
                ><input name="spellslotsmax6" type="text" placeholder="0" /></td
              >
              <td
                ><input name="spellslotsmax7" type="text" placeholder="0" /></td
              >
              <td
                ><input name="spellslotsmax8" type="text" placeholder="0" /></td
              >
              <td
                ><input name="spellslotsmax9" type="text" placeholder="0" /></td
              >
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="attacksandspellcasting" id="pactslots" style="width:20%;">
      <div>
        <label>Pact Slots</label>
        <table>
          <thead>
            <tr>
              <th>Level</th>
              <th><input name="pactlevel" type="text" placeholder="" /></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Available</td>
              <td><input name="pactslots1" type="text" placeholder="" /></td>
            </tr>
            <tr>
              <td>Maximum</td>
              <td><input name="pactslotsmax1" type="text" placeholder="0" /></td
              >
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </header>

  <header>
    <section class="attacksandspellcasting" id="spells">
      <div>
        <label>Spell List</label>
        <table>
          <thead>
            <tr>
              <th> Prepared </th>
              <th> Name </th>
              <th> Level </th>
              <th> Source </th>
              <th> Attack/Save </th>
              <th> Cast Time </th>
              <th> Range/Shape </th>
              <th> Duration </th>
              <th> Components </th>
              <th> Notes </th>
            </tr>
          </thead>
          <tbody id="spelltable">
            <tr>
              <td>
                <input name="spellprep1" type="checkbox" />
              </td>
              <td>
                <input name="spellname0" type="text" />
              </td>
              <td>
                <input name="spelllevel0" type="text" />
              </td>
              <td>
                <input name="spellsource0" type="text" />
              </td>
              <td>
                <input name="spellattacksave0" type="text" />
              </td>
              <td>
                <input name="spelltime0" type="text" />
              </td>
              <td>
                <input name="spellrange0" type="text" />
              </td>
              <td>
                <input name="spellduration0" type="text" />
              </td>
              <td>
                <input name="spellcomponents0" type="text" />
              </td>
              <td>
                <input name="spellnotes0" type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <input name="spellprep1" type="checkbox" />
              </td>
              <td>
                <input name="spellname1" type="text" />
              </td>
              <td>
                <input name="spelllevel1" type="text" />
              </td>
              <td>
                <input name="spellsource1" type="text" />
              </td>
              <td>
                <input name="spellattacksave1" type="text" />
              </td>
              <td>
                <input name="spelltime1" type="text" />
              </td>
              <td>
                <input name="spellrange1" type="text" />
              </td>
              <td>
                <input name="spellduration1" type="text" />
              </td>
              <td>
                <input name="spellcomponents1" type="text" />
              </td>
              <td>
                <input name="spellnotes1" type="text" />
              </td>
            </tr>
          </tbody>
        </table>
        <span>
          <button
            name="button-addspell"
            type="button"
            on:click={add_spell}
            style="width:20%;">Add New Spell</button
          >
          <button
            name="button-removespell"
            type="button"
            on:click={() => {
              remove_last_row("spelltable");
            }}
            style="width:20%;">Remove Spell</button
          >
        </span>
        <textarea name="spellsnotes" placeholder="Additional spell notes" />
      </div>
    </section>
  </header>

  <hr class="pageborder" />

  <header>
    <section class="encumberance" id="encumberancetable" style="width:30%;">
      <div>
        <label style="order:0;padding:5px;">Encumberance</label>
        <div>
          <table>
            <tbody>
              <tr>
                <th>Weight Carried</th>
              </tr>
              <tr>
                <td
                  ><input
                    name="weightcarried"
                    id="weightcarried"
                    placeholder="0"
                    readonly
                  /></td
                >
              </tr>
              <tr>
                <th>Weight Capacity</th>
              </tr>
              <tr>
                <td><input name="weightcapacity" placeholder="0" /></td>
              </tr>
            </tbody>
          </table>
          <textarea
            name="encumberancenotes"
            placeholder="Additional encumberance notes"
            style="height:12em"
          />
        </div>
      </div>
    </section>

    <section class="currency" style="width:30%;">
      <div>
        <label style="order:0;padding:5px;">Currency</label>
        <div class="money">
          <ul>
            <li>
              <label for="pp">pp</label><input name="pp" />
            </li>
            <li>
              <label for="gp">gp</label><input name="gp" />
            </li>
            <li>
              <label for="ep">ep</label><input name="ep" />
            </li>
            <li>
              <label for="sp">sp</label><input name="sp" />
            </li>
            <li>
              <label for="cp">cp</label><input name="cp" />
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="attacksandspellcasting" id="attunement">
      <div>
        <label style="order:0;padding:5px;">Attunement</label>
        <table>
          <thead>
            <tr>
              <th>Attuned Magic Items</th>
            </tr>
          </thead>
          <tbody id="attunementtable">
            <tr><td><input name="attunement0" type="text" /></td></tr>
            <tr><td><input name="attunement1" type="text" /></td></tr>
            <tr><td><input name="attunement2" type="text" /></td></tr>
          </tbody>
        </table>
        <span>
          <button
            name="button-addattunement"
            type="button"
            on:click={add_attunement}
            style="width:45%;">Add Attunement Slot</button
          >
          <button
            name="button-removeattunement"
            type="button"
            on:click={() => {
              remove_last_row("attunementtable");
            }}
            style="width:45%;">Remove Attunement Slot</button
          >
        </span>
        <textarea
          name="attunementsnotes"
          placeholder="Additional attunement notes"
        />
      </div>
    </section>
  </header>

  <header>
    <section class="attacksandspellcasting" id="inventory">
      <div>
        <label>Inventory</label>
        <table>
          <thead>
            <tr>
              <th> Equipped </th>
              <th> Name </th>
              <th> Count </th>
              <th> Weight </th>
              <th> Value </th>
              <th> Notes </th>
            </tr>
          </thead>
          <tbody id="inventorytable">
            <tr>
              <td>
                <input name="itemequipped0" type="checkbox" />
              </td>
              <td>
                <input name="itemname0" type="text" />
              </td>
              <td>
                <input
                  name="itemcount0"
                  type="text"
                  on:change={calc_carry_weight}
                />
              </td>
              <td>
                <input
                  name="itemweight0"
                  type="text"
                  on:change={calc_carry_weight}
                />
              </td>
              <td>
                <input name="itemvalue0" type="text" />
              </td>
              <td>
                <input name="itemnotes0" type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <input name="itemequipped1" type="checkbox" />
              </td>
              <td>
                <input name="itemname1" type="text" />
              </td>
              <td>
                <input
                  name="itemcount1"
                  type="text"
                  on:change={calc_carry_weight}
                />
              </td>
              <td>
                <input
                  name="itemweight1"
                  type="text"
                  on:change={calc_carry_weight}
                />
              </td>
              <td>
                <input name="itemvalue1" type="text" />
              </td>
              <td>
                <input name="itemnotes1" type="text" />
              </td>
            </tr>
          </tbody>
        </table>
        <span>
          <button
            name="button-additem"
            type="button"
            on:click={add_inventory}
            style="width:20%;">Add New Item</button
          >
          <button
            name="button-removeitem"
            type="button"
            on:click={() => {
              remove_last_row("inventorytable");
              calc_carry_weight();
            }}
            style="width:20%;">Remove Item</button
          >
        </span>
        <textarea
          name="inventorynotes"
          placeholder="Additional inventory notes"
        />
      </div>
    </section>
  </header>

  <hr class="pageborder" />

  <main>
    <section class="features" id="feautres-left">
      <div>
        <label for="features-l">Features, Traits, & Feats</label><textarea
          name="features-l"
        />
      </div>
    </section>
    <section class="features" id="feautres-center">
      <div>
        <label for="features-c">Features, Traits, & Feats</label><textarea
          name="features-c"
        />
      </div>
    </section>
    <section class="features" id="feautres-right">
      <div>
        <label for="features-r">Features, Traits, & Feats</label><textarea
          name="features-r"
        />
      </div>
    </section>
  </main>

  <hr class="pageborder" />

  <header>
    <section class="misc" id="misc-desc">
      <ul>
        <li>
          <label for="gender">Gender</label><input
            name="gender"
            placeholder="Gender"
          />
        </li>
        <li>
          <label for="age">Age</label><input name="age" placeholder="Age" />
        </li>
        <li>
          <label for="height">Height</label><input
            name="height"
            placeholder="Height"
          />
        </li>
        <li>
          <label for="weight">Weight</label><input
            name="weight"
            placeholder="Weight"
          />
        </li>
        <li>
          <label for="faith">Faith</label><input
            name="faith"
            placeholder="Faith"
          />
        </li>
        <li>
          <label for="skin">Skin</label><input name="skin" placeholder="Skin" />
        </li>
        <li>
          <label for="eyes">Eyes</label><input name="eyes" placeholder="Eyes" />
        </li>
        <li>
          <label for="hair">Hair</label><input name="hair" placeholder="Hair" />
        </li>
      </ul>
    </section>
  </header>
  <main>
    <section class="features" id="allies-orgs-enemies">
      <div>
        <label for="organizations">Allies, Organizations, & Enemies</label
        ><textarea name="organizations"
          >=== ALLIES&#013;&#010;&#013;&#010;===
          ORGANIZATIONS&#013;&#010;&#013;&#010;=== ENEMIES</textarea
        >
      </div>
    </section>
    <section class="features" id="backstory">
      <div>
        <label for="backstory">Character Backstory</label><textarea
          name="backstory"
        />
      </div>
    </section>
    <section>
      <section class="flavor">
        <div class="personality">
          <label for="personality">Personality</label><textarea
            name="personality"
          />
        </div>
        <div class="ideals">
          <label for="ideals">Ideals</label><textarea name="ideals" />
        </div>
        <div class="bonds">
          <label for="bonds">Bonds</label><textarea name="bonds" />
        </div>
        <div class="flaws">
          <label for="flaws">Flaws</label><textarea name="flaws" />
        </div>
      </section>
    </section>
  </main>

  <hr class="pageborder" />

  <main>
    <section class="features" id="notes-left">
      <div>
        <label for="notes-l">Additional Notes</label><textarea name="notes-l" />
      </div>
    </section>
    <section class="features" id="notes-center">
      <div>
        <label for="notes-c">Additional Notes</label><textarea name="notes-c" />
      </div>
    </section>
    <section class="features" id="notes-right">
      <div>
        <label for="notes-r">Additional Notes</label><textarea name="notes-r" />
      </div>
    </section>
  </main>

  <main>
    <!-- Hidden fields for dynamic tables -->
    <input name="rows_attacks" type="hidden" value="2" />
    <input name="rows_attunements" type="hidden" value="3" />
    <input name="rows_inventory" type="hidden" value="2" />
    <input name="rows_spells" type="hidden" value="2" />
  </main>
</form>

<style>
  .red {
    background: red;
  }

  .blue {
    background: blue;
  }

  .hide {
    display: none !important;
  }

  hr.pageborder {
    border-top: 5px solid black;
  }

  button {
    text-align: center;
    border: 1px solid black;
    font-size: 10px;
    border-radius: 10px 10px 10px 10px;
    padding: 4px 6px;
    font-weight: bold;
  }

  #buttonload {
    text-align: center;
    border: 1px solid black;
    font-size: 10px;
    border-radius: 10px 10px 10px 10px;
    padding: 4px 6px;
    font-weight: bold;
  }

  textarea {
    font-size: 12px;
    text-align: left;
    width: calc(100% - 20px - 2px);
    border-radius: 10px;
    padding: 10px;
    resize: none;
    overflow: hidden;
    height: 15em;
  }

  input[type="checkbox"] {
    cursor: pointer;
  }

  div.box {
    margin-top: 10px;
  }

  form.charsheet {
    width: 800px;
    right: 0;
    left: 0;
    margin-right: auto;
    margin-left: auto;
    margin-top: 10px;
  }
  form.charsheet div.textblock {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    flex-direction: column-reverse;
    width: 100%;
    -webkit-box-align: center;
    align-items: center;
  }
  form.charsheet div.textblock label {
    text-align: center;
    border: 1px solid black;
    border-top: 0;
    font-size: 10px;
    width: calc(100% - 20px - 2px);
    border-radius: 0 0 10px 10px;
    padding: 4px 0;
    font-weight: bold;
  }
  form.charsheet div.textblock textarea {
    border: 1px solid black;
  }
  form.charsheet ul {
    margin: 0;
    padding: 0;
  }
  form.charsheet ul li {
    list-style-image: none;
    display: block;
  }
  form.charsheet ::-webkit-input-placeholder {
    color: #bbb;
  }
  form.charsheet ::-moz-placeholder {
    color: #bbb;
  }
  form.charsheet :-ms-input-placeholder {
    color: #bbb;
  }
  form.charsheet ::-ms-input-placeholder {
    color: #bbb;
  }
  form.charsheet ::placeholder {
    color: #bbb;
  }
  form.charsheet label {
    text-transform: uppercase;
    font-size: 12px;
  }
  form.charsheet header {
    display: -webkit-box;
    display: flex;
    align-content: stretch;
    -webkit-box-align: stretch;
    align-items: stretch;
  }
  form.charsheet header section.charname {
    border: 1px solid black;
    border-right: 0;
    border-radius: 10px 0 0 10px;
    padding: 5px 0;
    background-color: #ddd;
    width: 30%;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    flex-direction: column-reverse;
    bottom: 0;
    top: 0;
    margin: auto;
  }
  form.charsheet header section.charname input {
    padding: 0.5em;
    margin: 5px;
    border: 0;
  }
  form.charsheet header section.charname label {
    padding-left: 1em;
  }
  form.charsheet header section.misc {
    width: 70%;
    border: 1px solid black;
    border-radius: 10px;
    padding-left: 1em;
    padding-right: 1em;
  }
  #misc-desc {
    width: 100%;
  }
  form.charsheet header section.misc ul {
    padding: 10px 0px 5px 0px;
    display: -webkit-box;
    display: flex;
    flex-wrap: wrap;
  }
  form.charsheet header section.misc ul li {
    width: 33.33333%;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    flex-direction: column-reverse;
  }
  #misc-desc ul li {
    width: 25%;
  }
  form.charsheet header section.misc ul li label {
    margin-bottom: 5px;
  }
  form.charsheet header section.misc ul li input {
    border: 0;
    border-bottom: 1px solid #ddd;
  }
  form.charsheet main {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-top: 20px;
  }
  form.charsheet main div.label-container {
    position: relative;
    width: 100%;
    height: 18px;
    margin-top: 6px;
    border: 1px solid black;
    border-left: 0;
    text-align: center;
  }
  form.charsheet main div.label-container > label {
    position: absolute;
    left: 0;
    top: 1px;
    -webkit-transform: translate(0%, 50%);
    transform: translate(0%, 50%);
    width: 100%;
    font-size: 8px;
  }
  form.charsheet main > section {
    width: 32%;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
  }
  form.charsheet main > section section.attributes {
    width: 100%;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
  form.charsheet main > section section.attributes div.scores {
    width: 101px;
    background-color: #ddd;
    border-radius: 10px;
    padding-bottom: 5px;
  }
  form.charsheet main > section section.attributes div.scores label {
    font-size: 8px;
    font-weight: bold;
  }
  form.charsheet main > section section.attributes div.scores ul {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    justify-content: space-around;
    -webkit-box-align: center;
    align-items: center;
    height: 100%;
  }
  form.charsheet main > section section.attributes div.scores ul li {
    height: 80px;
    width: 70px;
    background-color: white;
    border: 1px solid black;
    text-align: center;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    border-radius: 10px;
  }
  form.charsheet main > section section.attributes div.scores ul li input {
    width: 100%;
    padding: 0;
    border: 0;
  }
  form.charsheet
    main
    > section
    section.attributes
    div.scores
    ul
    li
    div.score
    input {
    text-align: center;
    font-size: 40px;
    padding: 2px 0px 0px 0px;
    background: white;
  }
  form.charsheet
    main
    > section
    section.attributes
    div.scores
    ul
    li
    div.modifier {
    margin-top: 3px;
  }
  form.charsheet
    main
    > section
    section.attributes
    div.scores
    ul
    li
    div.modifier
    input {
    background: white;
    width: 30px;
    height: 20px;
    border: 1px inset black;
    border-radius: 20px;
    margin: -1px;
    text-align: center;
  }
  form.charsheet
    main
    > section
    section.attributes
    div.attr-applications
    div.inspiration {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    flex-direction: row-reverse;
    -webkit-box-pack: end;
    justify-content: flex-end;
  }
  form.charsheet
    main
    > section
    section.attributes
    div.attr-applications
    div.inspiration
    input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 1px solid black;
    padding: 15px;
    border-radius: 10px;
  }
  form.charsheet
    main
    > section
    section.attributes
    div.attr-applications
    div.proficiencybonus {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    flex-direction: row-reverse;
    -webkit-box-pack: end;
    justify-content: flex-end;
  }
  form.charsheet
    main
    > section
    section.attributes
    div.attr-applications
    div.proficiencybonus
    input {
    width: 30px;
    height: 28px;
    border: 1px solid black;
    text-align: center;
    border-radius: 10px;
  }
  form.charsheet
    main
    > section
    section.attributes
    div.attr-applications
    div.list-section {
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px 5px;
  }
  form.charsheet
    main
    > section
    section.attributes
    div.attr-applications
    div.list-section
    div.label {
    margin-top: 10px;
    margin-bottom: 2.5px;
    text-align: center;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: bold;
  }
  form.charsheet
    main
    > section
    section.attributes
    div.attr-applications
    div.list-section
    ul
    li {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  form.charsheet
    main
    > section
    section.attributes
    div.attr-applications
    div.list-section
    ul
    li
    > * {
    margin-left: 5px;
  }
  form.charsheet
    main
    > section
    section.attributes
    div.attr-applications
    div.list-section
    ul
    li
    label {
    text-transform: none;
    font-size: 8px;
    text-align: left;
    -webkit-box-ordinal-group: 4;
    order: 3;
  }
  form.charsheet
    main
    > section
    section.attributes
    div.attr-applications
    div.list-section
    ul
    li
    label
    span.skill {
    color: #bbb;
  }
  form.charsheet
    main
    > section
    section.attributes
    div.attr-applications
    div.list-section
    ul
    li
    input[type="text"] {
    width: 30px;
    font-size: 12px;
    text-align: center;
    border: 0;
    border-bottom: 1px solid black;
    -webkit-box-ordinal-group: 3;
    order: 2;
  }
  form.charsheet
    main
    > section
    section.attributes
    div.attr-applications
    div.list-section
    ul
    li
    input[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 10px;
    height: 10px;
    border: 1px solid black;
    border-radius: 10px;
    -webkit-box-ordinal-group: 2;
    order: 1;
  }
  form.charsheet
    main
    > section
    section.attributes
    div.attr-applications
    div.list-section
    ul
    li
    input[type="checkbox"]:checked {
    background-color: black;
  }
  form.charsheet main > section div.passive-perception {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    flex-direction: row-reverse;
    -webkit-box-pack: end;
    justify-content: flex-end;
  }
  form.charsheet main > section div.passive-perception input {
    width: 30px;
    height: 28px;
    text-align: center;
    border: 1px solid black;
    border-radius: 10px;
  }

  form.charsheet main > section div.otherprofs textarea {
    height: 17em;
  }
  form.charsheet main section.combat {
    background-color: #ddd;
    display: -webkit-box;
    display: flex;
    flex-wrap: wrap;
    border-radius: 10px;
  }
  form.charsheet main section.combat > div {
    overflow: hidden;
  }
  form.charsheet main section.combat > div.armorclass,
  form.charsheet main section.combat > div.initiative,
  form.charsheet main section.combat > div.speed {
    flex-basis: 33.333%;
  }
  form.charsheet main section.combat > div.armorclass > div,
  form.charsheet main section.combat > div.initiative > div,
  form.charsheet main section.combat > div.speed > div {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    flex-direction: column-reverse;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 10px;
  }
  form.charsheet main section.combat > div.armorclass > div label,
  form.charsheet main section.combat > div.initiative > div label,
  form.charsheet main section.combat > div.speed > div label {
    font-size: 8px;
    width: 50px;
    border: 1px solid black;
    border-top: 0;
    background-color: white;
    text-align: center;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 0 0 10px 10px;
  }
  form.charsheet main section.combat > div.armorclass > div input,
  form.charsheet main section.combat > div.initiative > div input,
  form.charsheet main section.combat > div.speed > div input {
    height: 70px;
    width: 70px;
    border-radius: 10px;
    border: 1px solid black;
    text-align: center;
    font-size: 30px;
  }
  form.charsheet main section.combat > div.hp {
    flex-basis: 100%;
  }
  form.charsheet main section.combat > div.hp > div.regular {
    background-color: white;
    border: 1px solid black;
    margin: 10px;
    margin-bottom: 5px;
    border-radius: 10px 10px 0 0;
  }
  form.charsheet main section.combat > div.hp > div.regular > div.max {
    display: -webkit-box;
    display: flex;
    justify-content: space-around;
    -webkit-box-align: baseline;
    align-items: baseline;
  }
  form.charsheet main section.combat > div.hp > div.regular > div.max label {
    font-size: 10px;
    text-transform: none;
    color: #bbb;
  }
  form.charsheet main section.combat > div.hp > div.regular > div.max input {
    width: 40%;
    border: 0;
    border-bottom: 1px solid #ddd;
    font-size: 12px;
    text-align: center;
  }
  form.charsheet main section.combat > div.hp > div.regular > div.current {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    flex-direction: column-reverse;
  }
  form.charsheet
    main
    section.combat
    > div.hp
    > div.regular
    > div.current
    input {
    border: 0;
    width: 100%;
    padding: 1em 0;
    font-size: 20px;
    text-align: center;
  }
  form.charsheet
    main
    section.combat
    > div.hp
    > div.regular
    > div.current
    label {
    font-size: 10px;
    padding-bottom: 5px;
    text-align: center;
    font-weight: bold;
  }
  form.charsheet main section.combat > div.hp > div.temporary {
    margin: 10px;
    margin-top: 0;
    border: 1px solid black;
    border-radius: 0 0 10px 10px;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    flex-direction: column-reverse;
    background-color: white;
  }
  form.charsheet main section.combat > div.hp > div.temporary input {
    padding: 1em 0;
    font-size: 20px;
    border: 0;
    text-align: center;
  }
  form.charsheet main section.combat > div.hp > div.temporary label {
    font-size: 10px;
    padding-bottom: 5px;
    text-align: center;
    font-weight: bold;
  }
  form.charsheet main section.combat > div.hitdice,
  form.charsheet main section.combat > div.deathsaves {
    -webkit-box-flex: 1;
    flex: 1 50%;
    height: 100px;
  }
  form.charsheet main section.combat > div.hitdice > div,
  form.charsheet main section.combat > div.deathsaves > div {
    height: 80px;
  }
  form.charsheet main section.combat > div.hitdice > div {
    background-color: white;
    margin: 10px;
    border: 1px solid black;
    border-radius: 10px;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
  }
  form.charsheet main section.combat > div.hitdice > div > div.total {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: baseline;
    align-items: baseline;
    justify-content: space-around;
    padding: 5px 0;
  }
  form.charsheet main section.combat > div.hitdice > div > div.total label {
    font-size: 10px;
    color: #bbb;
    margin: 0.25em;
    text-transform: none;
  }
  form.charsheet main section.combat > div.hitdice > div > div.total input {
    font-size: 12px;
    -webkit-box-flex: 1;
    flex-grow: 1;
    border: 0;
    border-bottom: 1px solid #ddd;
    width: 50%;
    margin-right: 0.25em;
    padding: 0 0.25em;
    text-align: center;
  }
  form.charsheet main section.combat > div.hitdice > div > div.remaining {
    -webkit-box-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    flex-direction: column-reverse;
  }
  form.charsheet main section.combat > div.hitdice > div > div.remaining label {
    text-align: center;
    padding: 2px;
    font-size: 10px;
  }
  form.charsheet main section.combat > div.hitdice > div > div.remaining input {
    text-align: center;
    border: 0;
    -webkit-box-flex: 1;
    flex: 1;
  }
  form.charsheet main section.combat > div.deathsaves > div {
    margin: 10px;
    background: white;
    border: 1px solid black;
    border-radius: 10px;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    flex-direction: column-reverse;
  }
  form.charsheet main section.combat > div.deathsaves > div > div.label {
    text-align: center;
  }
  form.charsheet main section.combat > div.deathsaves > div > div.label label {
    font-size: 10px;
  }
  form.charsheet main section.combat > div.deathsaves > div > div.marks {
    display: -webkit-box;
    display: flex;
    -webkit-box-flex: 1;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
  }
  form.charsheet
    main
    section.combat
    > div.deathsaves
    > div
    > div.marks
    div.deathsuccesses,
  form.charsheet
    main
    section.combat
    > div.deathsaves
    > div
    > div.marks
    div.deathfails {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  form.charsheet
    main
    section.combat
    > div.deathsaves
    > div
    > div.marks
    div.deathsuccesses
    label,
  form.charsheet
    main
    section.combat
    > div.deathsaves
    > div
    > div.marks
    div.deathfails
    label {
    font-size: 8px;
    text-align: right;
    -webkit-box-flex: 1;
    flex: 1 50%;
  }
  form.charsheet main section.combat > div.deathsaves > div div.bubbles {
    -webkit-box-flex: 1;
    flex: 1 40%;
    margin-left: 5px;
  }
  form.charsheet
    main
    section.combat
    > div.deathsaves
    > div
    div.bubbles
    input[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 10px;
    height: 10px;
    border: 1px solid black;
    border-radius: 10px;
  }
  form.charsheet
    main
    section.combat
    > div.deathsaves
    > div
    div.bubbles
    input[type="checkbox"]:checked {
    background-color: black;
  }

  /* Attacks and Spellcasting */
  form.charsheet header section.attacksandspellcasting {
    border: 1px solid black;
    border-radius: 10px;
    margin-top: 10px;
    width: 100%;
  }
  form.charsheet header section.attacksandspellcasting > div {
    margin: 10px;
    font-weight: bold;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
  }
  form.charsheet header section.attacksandspellcasting > div > label {
    -webkit-box-ordinal-group: 4;
    order: 3;
    text-align: center;
  }
  form.charsheet header section.attacksandspellcasting > div > table {
    width: 100%;
  }
  form.charsheet header section.attacksandspellcasting > div > table th {
    font-size: 10px;
    color: black;
  }
  form.charsheet header section.attacksandspellcasting > div > table td {
    font-size: 10px;
    color: black;
  }
  form.charsheet header section.attacksandspellcasting > div > table input {
    width: calc(100% - 4px);
    border: 0;
    background-color: #ddd;
    font-size: 10px;
    padding: 3px;
  }
  form.charsheet header section.attacksandspellcasting > div textarea {
    border: 0;
    height: 10em;
  }

  form.charsheet header section.currency {
    border: 1px solid black;
    border-radius: 10px;
    margin-top: 10px;
    text-align: center;
  }
  form.charsheet header section.currency > div {
    padding: 10px;
    font-weight: bold;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  form.charsheet header section.currency > div > div.money ul {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column; /*
  -webkit-box-pack: justify;
          justify-content: space-between;*/
    height: 100%;
  }
  form.charsheet header section.currency > div > div.money ul > li {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 3px 0;
  }
  form.charsheet header section.currency > div > div.money ul > li label {
    border: 1px solid black;
    border-radius: 10px 0 0 10px;
    border-right: 0;
    width: 20px;
    font-size: 8px;
    text-align: center;
    padding: 3px 0;
  }
  form.charsheet header section.currency > div > div.money ul > li input {
    border: 1px solid black;
    border-radius: 10px;
    width: 40px;
    padding: 10px 3px;
    font-size: 12px;
    text-align: center;
  }
  form.charsheet header section.currency > div > label {
    -webkit-box-ordinal-group: 4;
    order: 3;
    text-align: center;
    -webkit-box-flex: 100%;
    flex: 100%;
  }
  form.charsheet header section.currency > div > textarea {
    -webkit-box-flex: 1;
    flex: 1;
    border: 0;
    height: 23em;
  }

  form.charsheet main section.flavor {
    padding: 10px;
    background: #ddd;
    border-radius: 10px;
  }
  form.charsheet main section.flavor div {
    background: white;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    flex-direction: column-reverse;
    padding: 5px;
    border: 1px solid black;
  }
  form.charsheet main section.flavor div label {
    text-align: center;
    font-size: 10px;
    margin-top: 3px;
  }
  form.charsheet main section.flavor div textarea {
    border: 0;
    border-radius: 0;
    height: 4em;
  }
  form.charsheet main section.flavor div:first-child {
    border-radius: 10px 10px 0 0;
  }
  form.charsheet main section.flavor div:not(:first-child) {
    margin-top: 10px;
  }
  form.charsheet main section.flavor div:last-child {
    border-radius: 0 0 10px 10px;
  }

  form.charsheet main section.features {
    padding: 0px;
  }
  form.charsheet main section.features div {
    padding: 10px;
    font-weight: bold;
    border: 1px solid black;
    border-radius: 10px;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    flex-direction: column-reverse;
  }
  form.charsheet main section.features div label {
    text-align: center;
  }
  form.charsheet main section.features div textarea {
    border: 0;
    padding: 5px;
    height: 47em;
  }

  /* Attacks and Spellcasting */
  form.charsheet header section.encumberance {
    border: 1px solid black;
    border-radius: 10px;
    margin-top: 10px;
    width: 100%;
  }
  form.charsheet header section.encumberance > div {
    margin: 10px;
    font-weight: bold;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
  }
  form.charsheet header section.encumberance > div > label {
    -webkit-box-ordinal-group: 4;
    order: 3;
    text-align: center;
  }
  form.charsheet header section.encumberance > div > div > table {
    width: 100%;
    height: 100%;
  }
  form.charsheet header section.encumberance > div > div > table th {
    font-size: 10px;
    color: black;
  }
  form.charsheet header section.encumberance > div > div > table td {
    font-size: 10px;
    color: black;
  }
  form.charsheet header section.encumberance > div > div > table input {
    width: calc(100% - 4px);
    border: 0;
    background-color: #ddd;
    font-size: 10px;
    padding: 3px;
  }
  form.charsheet header section.encumberance > div textarea {
    border: 0;
    height: 10em;
  }

  textarea {
    /* Hides scroll bar until needed. */
    overflow-y: auto;
  }

  #loadlabel {
    padding: 5px;
    font-weight: bold;
  }
</style> -->
