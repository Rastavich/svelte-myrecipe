<script>
    export let text = "Button";
    export let handleClick;
    export let type;
</script>

<style type="text/scss">
    $blue: #648de5;
    $lightBlue: #648;
    $backgroundCol: #fff;
    $borderStyle: none;
    btn {
        padding: 5px;
        margin: 2px;
        background: $blue;
        color: $backgroundCol;
        border-radius: 5px;
        text-align: center;
        cursor: pointer;
        border-style: $borderStyle;
        z-index: 20;
        &:hover {
            background: $lightBlue;
        }
    }
</style>

<btn on:click={handleClick}>{text}</btn>
