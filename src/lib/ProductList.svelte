<script>
  import { allProducts } from "../stores/productStore";
  import ProductCard from "./ProductCard.svelte";
</script>

<section class="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 p-8">
  {#each $allProducts as product}
    <ProductCard {...product} />
  {/each}
</section>
