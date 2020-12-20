<script>
	import Navbar from "./components/Navbar/Navbar.svelte";
</script>

<style type="text/scss">
	// Global Variables
	$primaryBtn: #648de5;
	$primaryBtnHov: #648;

	//Global Dark Variables

	//Global Light Styles
	:global(body) {
		position: relative;
		width: 100%;
		height: 100%;
	}

	:global(body) {
		margin: 0;
		padding: 8px;
		box-sizing: border-box;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
			Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
	}
	:global(body) {
		background-color: #f2eee2;
		color: #0084f6;
		transition: background-color 0.3s;
	}

	:global(button) {
		padding: 5px;
		margin: 2px;
		background-color: $primaryBtn;
		border-radius: 5px;
		text-align: center;
		cursor: pointer;
		border-style: none;
		&:hover {
			background-color: $primaryBtnHov;
			color: #fff;
		}
	}

	//Global Dark Styles
	:global(body.dark-mode) {
		background-color: #1d3040;
		color: #bfc2c7;
	}

	// Grid for main dashboard nav
	div {
		display: grid;
		grid-template-columns: repeat(2, auto);
		grid-gap: 1rem;
	}
</style>

<div>
	<Navbar />
</div>
