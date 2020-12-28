<script>
    // Imports
    import { onMount } from "svelte";
    import {
        getAllRecipes,
        deleteRecipeByName,
    } from "../../services/recipes/RecipeService";
    import { SkeletonBlock } from "skeleton-elements/svelte";
    import { SkeletonImage } from "skeleton-elements/svelte";
    import "skeleton-elements/skeleton-elements.css";
    import RecipeDetails from "./RecipeDetails.svelte";
    import MdDeleteForever from "svelte-icons/md/MdDeleteForever.svelte";

    // Initial state variables
    export let data = [];
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
        console.log(name);
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
        height: 20em;
        border: 1px;
        cursor: pointer;
        @media (max-width: 768px) {
            width: 200px;
        }
        display: inline-grid;
        border-radius: 5px;
        background: #e8e5da;
        margin: 0.5em;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        &:hover {
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
            transform: scale(1.05);
        }
        z-index: 1;
    }

    img {
        width: inherit;
        border-radius: 5px 5px 0 0;
        height: 10em;
    }
    .recipe-grid {
        display: inline-grid;
    }

    p {
        font-size: 0.8rem;
        margin-top: 0.3em;
        margin-bottom: 0.3em;
        margin-block-end: 0.3em;
        margin-block-start: 0.3em;
        overflow-wrap: break-word;
    }

    h4 {
        margin-bottom: 0.3em;
        margin-block-end: 0.3em;
        margin-block-start: 0.3em;
    }

    .card-details {
        padding: 0 1em 1em 1em;
        max-width: 11rem;
    }
    icon {
        height: 2rem;
        position: absolute;
        width: 2rem;
        transition: 0.3s;
        color: black;
        background-color: white;
        border-radius: 5px;
        &:hover {
            transform: scale(1.2);
        }
    }

    // Dark Theme
    :global(body.dark-mode) .card {
        background-color: #fff;
    }

    :global(body.dark-mode) h4 {
        color: #000;
    }

    :global(body.dark-mode) p {
        color: #000;
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
                <div class="card-details">
                    {#if recipe.recipe_name}
                        <h4>{recipe.recipe_name}</h4>
                    {/if}
                    {#if recipe.category}
                        <p>{recipe.category}</p>
                    {/if}
                    {#if recipe.prep_time && recipe.prep_time[1]}
                        <p>Prep time: {recipe.prep_time[1]}m</p>
                    {/if}
                    {#if recipe.cook_time && recipe.cook_time[1]}
                        <p>Cook time: {recipe.cook_time[1]}m</p>
                    {/if}
                    {#if recipe.yield}
                        <p>Yield: {recipe.yield}</p>
                    {/if}
                </div>
                <icon
                    on:click={() => {
                        if (window.confirm('Are you sure?')) deleteRecipe(recipe.recipe_name);
                    }}>
                    <MdDeleteForever />
                </icon>
            </div>
        {:else}
            <SkeletonImage width="50" height="50" {effect} />
            <SkeletonBlock tag="p" width="100px" {effect} />
        {/each}
    </div>
</div>

{#if showDetails}
    <RecipeDetails {recipeDetails} />
{/if}
