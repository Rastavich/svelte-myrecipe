<script>
    import CreateRecipe from "../CreateRecipe/CreateRecipe.svelte";
    import { importRecipe } from "../../services/recipes/RecipeImportService";
    import Button from "../Generics/Button.svelte";

    export let recipeData;

    const onRecipeSubmit = (data, e) => {
        let url = data.url;

        importRecipe(url)
            .then((response) => {
                recipeData = response;
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {});
    };
</script>

<style>
</style>

<div>
    <form className="form-group" on:submit|preventDefault={onRecipeSubmit}>
        <input
            className="form-field"
            name="url"
            placeholder="Url"
            type="text" />
        <Button type="submit" text="Import" />
        <Button text="Manual Import" />
    </form>
</div>

{#if recipeData != null}
    <CreateRecipe recipe={recipeData} />
{/if}
