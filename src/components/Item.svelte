<script>
    export let image;
    export let name;
    
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function handleClick(event){
        dispatch('itemClick', event);
    }
</script>

<div class="kitchen-item" on:click={handleClick}>
    <img src={image} alt="" />
    <h2 class="kitchen-name">{name}</h2>
</div>

<style>
    .kitchen-item {
		margin: 5px 10px;
		padding: 5px;
		width: 280px;
		text-align: center;
	}
	.kitchen-name {
		margin: 5px 0;
		font-size: 15px;
	}
	.kitchen-item img {
		max-width: 100%;
		height: auto;
	}
</style>