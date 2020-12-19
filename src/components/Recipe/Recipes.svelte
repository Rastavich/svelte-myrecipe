<script>
    // Imports
    import { onMount } from "svelte";
    import {
        getAllRecipes,
        deleteRecipeByName,
    } from "../../services/recipes/RecipeService";
    import { SkeletonBlock } from "skeleton-elements/svelte";
    import { SkeletonImage } from "skeleton-elements/svelte";

    // Initial state variables

    export let data = [];
    console.log(data);
    export let recipeDetails = null;
    export let showDetails = false;
    let effect = "wave";
    var recipeCount = 12;

    // Recipe fetch from db
    const fetchRecipes = () => {
        getAllRecipes()
            .then((response) => {
                // Data is the API response recipe list
                data = response.recipes;
                console.log(data);
                // Recipe Details stores the current pulled recipe list from the database so it can be checked against the new values when a recipe is added.
                recipeDetails = data;
            })
            .catch((error) => {
                data = [];
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

<style type="text/scss">
    .card {
        width: 250px;
        flex-direction: row;
        border: 1px;
        cursor: pointer;
        @media (max-width: 768px) {
            flex-direction: column;
            width: 200px;
        }
        display: inline-grid;

        border-radius: 5px;
        background: "#E8E5DA";
        margin: 0.5em;
        color: #000;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        &:hover {
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
            transform: scale(1.05);
        }
    }
    img {
        width: inherit;
        border-radius: 5px 5px 0 0;
        max-height: 10em;
    }
    .recipe-grid {
    }
</style>

<div class="recipe-grid">
    <div>
        {#each data as recipe}
            <div
                class="card"
                key={recipe.recipe_name}
                on:click={viewRecipe(recipe)}>
                <img alt="example" src={recipe.recipe_image} />
                <div>
                    {#if recipe.recipe_name != null}
                        <h4>{recipe.recipe_name}</h4>
                    {/if}
                </div>
            </div>
        {:else}
            <SkeletonImage width="50" height="50" {effect} />
            <SkeletonBlock tag="p" width="100px" {effect} />
        {/each}
    </div>
</div>
