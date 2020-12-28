<script>
    import CreateRecipe from "../CreateRecipe/CreateRecipe.svelte";
    import { importRecipe } from "../../services/recipes/RecipeService";
    import Recipes from "../Recipe/Recipes.svelte";

    export let recipeData = null;
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
                window.alert(
                    "Import error, please check your URL and try again."
                );
                console.log(e.message);
            })
            .finally(() => {});
    }

    function manualCreate() {}
</script>

<style>
</style>

<div>
    <form on:submit|preventDefault={onRecipeSubmit}>
        <input
            className="form-field"
            bind:value={url}
            placeholder="Url"
            type="text" />
        <button type="submit">Import</button>
        <button on:click={manualCreate}>Manual Import</button>

        {#if recipeData != null}
            <CreateRecipe recipe={recipeData} />
            <!-- <Recipes data={recipeData} /> -->
        {/if}
    </form>
</div>
