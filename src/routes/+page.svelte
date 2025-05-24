<script>
  import { onMount } from "svelte";
  import { allProducts } from "../stores/productStore.js";
  import Loading from "$lib/Loading.svelte";
  import ProductList from "$lib/ProductList.svelte";

  let isLoading = true;
  onMount(async () => {
    try {
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      $allProducts = data;
      //   allProducts.set(data);
      //   console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      isLoading = false;
    }
  });
</script>

<main>
  {#if isLoading}
    <Loading />
  {:else}
    <ProductList />
  {/if}
</main>
