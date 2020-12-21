<script>
    export let recipeDetails;
    let errorMsg;

    if (recipeDetails == null) {
        errorMsg =
            "This recipe has no information...edit this recipe to add them";
    }

    const { steps } = recipeDetails;

    const { ingredients } = recipeDetails;

    const { nutrition } = recipeDetails;
</script>

<style type="text/scss">
    div {
        display: inline-grid;
        width: 20em;
    }
</style>

{#if recipeDetails}
    <div>
        <h5>{recipeDetails.recipe_intro}</h5>
        {#if ingredients}
            <h4>Ingredients</h4>
            <ul>
                {#each ingredients as ingredient}
                    <li key={ingredient}>
                        <div>
                            <span>
                                <p>{ingredient}&nbsp;</p>
                            </span>
                        </div>
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
{:else}
    <p>{errorMsg}</p>
{/if}
<div />
