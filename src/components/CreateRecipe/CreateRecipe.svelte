<script>
    import { createRecipe } from "../../services/recipes/RecipeService";
    export let recipe;

    const onRecipeSubmit = (data, e) => {
        console.log(data);
        createRecipe(data)
            .then((response) => {
                alert("Recipe Created");
                e.target.reset();
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {});
    };
</script>

<style>
</style>

<form on:submit|preventDefault={onRecipeSubmit}>
    <input bind:value={recipe.recipe_name} placeholder="Recipe Name" />
    <input bind:value={recipe.category} placeholder="Category" />
    <input bind:value={recipe.recipe_intro} placeholder="Recipe Intro" />
    <input
        bind:value={recipe.prep_time}
        placeholder="Preparation Time"
        type="text" />
    <input bind:value={recipe.cook_time} placeholder="Cook Time" type="text" />
    <input
        bind:value={recipe.total_time}
        placeholder="Total Time"
        type="text" />
    <input
        bind:value={recipe.recipe_image}
        placeholder="Recipe Image URL"
        type="text" />
    <input
        bind:value={recipe.yield}
        placeholder="Yield (number of servings)"
        type="text" />
    <input
        bind:value={recipe.difficulty}
        placeholder="Difficulty - 10 being hardest"
        type="number" />
    <input
        bind:value={recipe.recipe_url}
        placeholder="URL of recipe (if applicable)"
        type="text" />
    {#each recipe.nutrition as nutrition, index}
        <input
            bind:value={recipe.nutrition[index]}
            placeholder="Nutrition"
            defaultValue={nutrition}
            type="text" />
    {/each}
    {#each recipe.ingredients as ingredient, index}
        <input
            bind:value={recipe.ingredients[index]}
            placeholder="Ingredients"
            defaultValue={ingredient}
            type="text" />
    {/each}
    {#each recipe.steps as step, index}
        <input
            bind:value={recipe.steps[index]}
            placeholder="Steps"
            defaultValue={step}
            type="text" />
    {/each}
    <button type="submit">Submit</button>
</form>
