<script>
    import { createRecipe } from "../../services/recipes/RecipeService";
    import Button from "../Generics/Button.svelte";
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

    useEffect(() => {});
</script>

<style>
</style>

<form on:submit|preventDefault={onRecipeSubmit}>
    <input name="recipe_name" placeholder="Recipe Name" />
    <input name="category" placeholder="Category" />
    <input name="recipe_intro" placeholder="Recipe Intro" />
    <input name="prep_time" placeholder="Preparation Time" type="number" />
    <input name="cook_time" placeholder="Cook Time" type="number" />
    <input name="total_time" placeholder="Total Time" type="number" />
    <input name="recipe_image" placeholder="Recipe Image URL" type="text" />
    <input name="yield" placeholder="Yield (number of servings)" type="text" />
    <input
        name="difficulty"
        placeholder="Difficulty - 10 being hardest"
        type="number" />
    {#each recipe.nutrition as nutrition, index}
        <input
            name={`nutrition[${index}]`}
            placeholder="Nutrition"
            defaultValue={nutrition}
            type="text" />

        <input
            name="recipe_url"
            placeholder="URL of recipe (if applicable)"
            type="text" />
    {/each}
    {#each recipe.ingredients as ingredient, index}
        <input
            name={`ingredients[${index}]`}
            placeholder="Ingredients"
            defaultValue={ingredient}
            type="text" />
    {/each}
    {#each recipe.steps as step, index}
        <input
            name={`steps[${index}]`}
            placeholder="Steps"
            defaultValue={step}
            type="text" />
    {/each}
    <Button type="submit" text="Submit" />
</form>
