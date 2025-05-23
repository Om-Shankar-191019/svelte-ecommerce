<script>
  import { onMount } from "svelte";
  import { allProducts } from "../stores/productStore.js";
  import ProductList from "$lib/ProductList.svelte";

  onMount(async () => {
    try {
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      $allProducts = data;
      //   console.log(data);
    } catch (error) {
      console.log(error);
    }
  });
</script>

<main>
  <ProductList />
</main>
