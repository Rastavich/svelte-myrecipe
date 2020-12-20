<script>
    import NavElement from "./NavElement.svelte";
    import { Route } from "tinro";
    import Recipes from "../Recipe/Recipes.svelte";
    import ImportRecipe from "../ImportRecipe/ImportRecipe.svelte";

    //Theme toggle
    function toggle() {
        window.document.body.classList.toggle("dark-mode");
    }
</script>

<style>
    nav {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    button {
        width: 5em;
    }
</style>

<div>
    <nav>
        <button on:click={toggle}>Toggle Mode</button>
        <NavElement route="/" routeName="Recipes" />
        <NavElement route="/import-recipe" routeName="Import Recipe" />
        <NavElement route="/shopping-list" routeName="Shopping List" />
    </nav>
</div>
<!-- Route paths -->
<Route path="/">
    <Recipes />
</Route>
<Route path="/import-recipe">
    <ImportRecipe />
</Route>
<Route path="/shopping-list" />
