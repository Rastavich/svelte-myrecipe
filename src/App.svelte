<script>
	import { Route } from "tinro";
	import Recipes from "./components/Recipe/Recipes.svelte";
	import ImportRecipe from "./components/ImportRecipe/ImportRecipe.svelte";
</script>

<style>
</style>

<nav><a href="/">Recipes</a> <a href="/import-recipe">Import Recipe</a></nav>

<Route path="/">
	<Recipes />
</Route>
<Route path="/import-recipe">
	<ImportRecipe />
</Route>
