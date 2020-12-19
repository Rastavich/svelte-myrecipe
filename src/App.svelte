<script>
	import { Route } from "tinro";
</script>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<nav><a href="/">Home</a> <a href="/import-recipe">Import Recipe</a></nav>

<Route path="/">
	<h1>It is main page</h1>
</Route>
<Route path="/import-recipe">
	<!-- <Route path="/">
		<h1>Portfolio introduction</h1>
		<nav>
			<a href="/import-recipe/sites">Sites</a>
			<a href="/import/photos">Photos</a>
		</nav>
	</Route>
	<Route path="/sites">
		<h1>Portfolio: Sites</h1>
	</Route>
	<Route path="/photos">
		<h1>Portfolio: Photos</h1>
	</Route> -->
</Route>
