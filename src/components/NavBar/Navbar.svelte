<script lang="typescript">
  import NavElement from "./NavElement.svelte";
  import { Route } from "tinro";
  import Recipes from "../Recipe/Recipes.svelte";
  import ImportRecipe from "../ImportRecipe/ImportRecipe.svelte";
  import MdBrightness2 from "svelte-icons/md/MdBrightness2.svelte";
  import MdBrightness5 from "svelte-icons/md/MdBrightness5.svelte";
  let bodyClass;

  //Theme toggle
  function toggle() {
    window.document.body.classList.toggle("dark-mode");
    bodyClass = window.document.body.classList;
  }
</script>

<div>
  <nav>
    <icon on:click={toggle}>
      {#if bodyClass == 'dark-mode'}
        <MdBrightness5 />
      {:else}
        <MdBrightness2 />
      {/if}
    </icon>
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

<style>
  nav {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  icon {
    width: 2rem;
    height: 2rem;
    margin-bottom: 2rem;
  }
</style>
