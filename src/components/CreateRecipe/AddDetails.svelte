<script>
  import { recipesStore } from "../../stores/recipes";
  export let steps = [];
  export let instructions = [];
  export let ingredients = [];
  export let nutritions = [];

  function addStep() {
    steps = [...steps, ""];
  }

  function addInstruction() {
    instructions = [...instructions, ""];
  }

  function addIngredient() {
    ingredients = [...ingredients, ""];
  }

  function addNutrition() {
    nutritions = [...nutritions, ""];
  }

  function removeSelf(index, type) {
    switch (type) {
      case "steps":
        steps = [...step.slice(0, index), ...steps.slice(index + 1)];
        break;
      case "ingredients":
        ingredients = [
          ...ingredients.slice(0, index),
          ...ingredients.slice(index + 1),
        ];
        break;
      case "instructions":
        instructions = [
          ...instructions.slice(0, index),
          ...instructions.slice(index + 1),
        ];
        break;
      case "nutritions":
        nutritions = [
          ...nutritions.slice(0, index),
          ...nutritions.slice(index + 1),
        ];
        break;
    }
  }
</script>

<div>
  {#each steps as step, index}
    <input bind:value={steps[index]} />
    <button on:click={() => removeSelf(index, 'steps')}>X</button>
    <br />
  {/each}

  <button on:click={addStep}>add</button>
</div>

<div>
  {#each instructions as instruction, index}
    <input bind:value={instructions[index]} />
    <button on:click={() => removeSelf(index, 'instructions')}>X</button>
    <br />
  {/each}

  <button on:click={addInstruction}>add</button>
</div>

<div>
  {#each ingredients as ingredient, index}
    <input bind:value={ingredients[index]} />
    <button on:click={() => removeSelf(index, 'ingredients')}>X</button>
    <br />
  {/each}

  <button on:click={addIngredient}>add</button>
</div>

<div>
  {#each nutritions as nutrition, index}
    <input bind:value={nutritions[index]} />
    <button on:click={() => removeSelf(index, 'nutritions')}>X</button>
    <br />
  {/each}

  <button on:click={addNutrition}>add</button>
</div>
