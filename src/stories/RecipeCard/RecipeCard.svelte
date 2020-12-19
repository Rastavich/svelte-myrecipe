<script>
    // Imports
    import { constants } from "crypto";
    import { onMount } from "svelte";
    import {
        getAllRecipes,
        deleteRecipeByName,
    } from "../../services/recipes/RecipeService";
    import { SkeletonBlock } from "skeleton-elements/svelte";
    import { SkeletonImage } from "skeleton-elements/svelte";
    import Button from "../../stories/Button/Button.svelte";

    // Initial state variables
    export let loading = true;
    export let data = null;
    export let recipeDetails = null;
    export let showDetails = false;
    let effect = "wave";
    var recipeCount = 12;

    // Recipe fetch from db
    const fetchRecipes = () => {
        getAllRecipes()
            .then((response) => {
                // Data is the API response recipe list
                data = response;

                // Recipe Details stores the current pulled recipe list from the database so it can be checked against the new values when a recipe is added.
                recipeDetails = data;
                loading = false;
            })
            .catch((error) => {
                data = null;
                loading = false;
                return error;
            });
    };

    // Recipe view when clicked
    function viewRecipe(recipe) {
        console.log(recipe);
        showDetails = true;
        recipeDetails = recipe;
        return recipeDetails;
    }

    const deleteRecipe = (name) => {
        deleteRecipeByName(name)
            .then(() => {
                data = {
                    recipes: data.recipes.filter(
                        (item) => item.recipe_name !== name
                    ),
                };
            })
            .catch((error) => {
                return error;
            });
    };

    onMount(async () => {
        var isMounted = false;

        if (!isMounted) {
            fetchRecipes();
        }

        return () => {
            isMounted = true;
        };
    });
</script>

{#if loading}
    <SkeletonImage width="50" height="50" {effect} />
    <SkeletonBlock tag="p" width="100px" {effect} />
{:else}
    <Button />
    <div class="recipe-grid">
        <div>
            {#each data.recipes as recipe}
                <div
                    class="card"
                    key={recipe.recipe_name}
                    on:click={viewRecipe(recipe)}>
                    <img alt="example" src={recipe.recipe_image} />
                    <div>
                        {#if recipe.recipe_name != null}
                            <h1>{recipe.recipe_name}</h1>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    </div>
{/if}
