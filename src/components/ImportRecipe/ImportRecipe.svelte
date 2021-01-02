<script>
  import CreateRecipe from "../CreateRecipe/CreateRecipe.svelte";
  import { importRecipe } from "../../services/recipes/RecipeService";
  import AddDetails from "../CreateRecipe/AddDetails.svelte";

  export let recipeData = null;
  let manual = false;
  let url;

  function onRecipeSubmit(e) {
    const importUrl = { url };
    console.log(importUrl.url);
    importRecipe(importUrl.url)
      .then((response) => {
        recipeData = response;
        console.log(recipeData);
      })
      .catch((e) => {
        window.alert("Import error, please check your URL and try again.");
        console.log(e.message);
      })
      .finally(() => {});
  }

  function manualCreate() {
    manual = true;
  }
</script>

<div>
  <form on:submit|preventDefault={onRecipeSubmit}>
    <input
      className="form-field"
      bind:value={url}
      placeholder="Url"
      type="text" />
    <button type="submit">Import</button>

    {#if recipeData != null}
      <CreateRecipe recipe={recipeData} />
    {/if}
  </form>
  {#if manual == true}
    <AddDetails />
  {/if}
  <button on:click={manualCreate()}>Manual Import</button>
</div>

<style>
</style>
