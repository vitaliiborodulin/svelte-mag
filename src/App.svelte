<script>
	import { onDestroy } from "svelte";
	import { store } from "./store.js";
	import Header from "./components/Header.svelte";
	import Item from "./components/Item.svelte";

	//header component props
	const headerProps = {
		slogan: 'Приветствую вас в нашем замечательном магазине',
		time: '10.00 - 20.00'
	}

	// store subscribe
	let itemsArr = [];

	let unsub = store.subscribe((v) => {
		itemsArr = v;
	});
	onDestroy(unsub);

	//select

	let selected = "fav"; //initial
	let itemsFavArr = itemsArr.filter((item) => item.select === selected); //initial

	const handleSelect = (event) => {
		selected = event.target.value;
		itemsFavArr = itemsArr.filter((item) => item.select === selected);
	};

	// click and show
	let clickedArr = [];

	const handleClick = (event) => {
		let el = event.detail.target.closest(".kitchen-item");
		let title = el.querySelector(".kitchen-name").innerText;

		el.classList.toggle("checked");

		let index = clickedArr.indexOf(title);

		if (index != -1) {
			clickedArr.splice(index, 1);
			clickedArr = clickedArr;
		} else {
			clickedArr = [...clickedArr, title];
		}
	};

	const handleSubmit = () => {
		let output = clickedArr.join(",");
		alert(`Выбраны: ${output}`);
		console.log(`Выбраны: ${output}`);
	};

	// reactivity log
	$: {
		console.log(`Накликано: ${clickedArr}`);
	}
</script>

<main>
	<Header {...headerProps}/>
	<form on:submit|preventDefault={handleSubmit}>
		<select value={selected} on:change={handleSelect}>
			<option value="fav">Избранное</option>
			<option value="new">Новое</option>
		</select>
		<div class="kitchen-box">
			{#each itemsFavArr as { name, image }}
				<Item {image} {name} on:itemClick={handleClick}/>
			{/each}
		</div>
		<button class="kitchen-button">Отправить</button>
	</form>
</main>

<style>
	main {
		max-width: 980px;
		margin: 20px auto;
	}
	.kitchen-box {
		display: flex;
		flex-wrap: wrap;
	}
	.kitchen-button {
		display: block;
		margin-left: auto;
	}
</style>
