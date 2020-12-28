<script>
    import { fly } from "svelte/transition";
    import { sineIn } from "svelte/easing";
    export let recipeDetails;
    let errorMsg;

    if (recipeDetails == null) {
        errorMsg =
            "This recipe has no information...edit this recipe to add them";
    }

    $: ({ steps, ingredients, nutrition } = recipeDetails);

    function hideDetails() {
        recipeDetails = false;
    }
</script>

<style type="text/scss">
    div {
        position: absolute;
        right: 0;
        width: 50rem;
        top: 0;
        max-width: 100%;
        background-color: black;
        @media (max-width: 400px) {
            width: 15rem;
        }
    }
</style>

{#if recipeDetails}
    <div transition:fly={{ x: 100, easing: sineIn }}>
        <button on:click={hideDetails}>Hide</button>
        <h5>{recipeDetails.recipe_intro}</h5>
        {#if ingredients}
            <h4>Ingredients</h4>
            <ul>
                {#each ingredients as ingredient}
                    <li key={ingredient}>
                        <p>{ingredient}</p>
                    </li>
                {/each}
            </ul>
        {/if}
        {#if steps}
            <h4>Steps</h4>
            <ul>
                {#each steps as step}
                    <li key={step}>{step}</li>
                {/each}
            </ul>
        {/if}
        {#if nutrition}
            <h4>Nutrition</h4>
            <ul>
                {#each nutrition as nutrients}
                    <li key={nutrients}>{nutrients}</li>
                {/each}
            </ul>
        {/if}
    </div>
{:else if errorMsg != null}
    <p>{errorMsg}</p>
{/if}
