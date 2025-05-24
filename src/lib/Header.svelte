<script>
  import { page } from "$app/stores";
  import { Menu } from "lucide-svelte";
  import { SquareX } from "lucide-svelte";
  import { allProducts, searchTerm } from "../stores/productStore";
  import { debounce } from "./utils/debounce";
  let isOpenHamberg = false;
  let searchInput = "";

  // let searchedProducts = [];
  // allProducts.subscribe((value) => {
  //   searchedProducts = value;
  // });

  // const runSearch = debounce((term) => {
  //   let filteredProducts = searchedProducts.filter((product) => {
  //     product.title.toLowerCase().includes(term.toLowerCase());
  //   });
  //   // allProducts.set(filteredProducts);
  //   $allProducts = filteredProducts;
  // }, 300);

  // $: runSearch(searchInput);
</script>

<nav class="flex justify-between items-center">
  <img
    class=" rounded-full w-24 h-24"
    src="https://img.freepik.com/premium-vector/cool-man-india-with-hat-culture-logo-design-vector-graphic-symbol-icon-sign-illustration-creative_15473-9479.jpg?ga=GA1.1.587686178.1747900169&semt=ais_hybrid&w=740"
    alt="india premium"
  />

  <!-- search - bar   -->
  <div class="bg-gray-200 rounded-xl">
    <input
      class="outline-none p-2 pl-4 w-40 sm:w-60 md:74 lg:w-96"
      type="text"
      placeholder="search item ... "
      bind:value={searchInput}
    />
  </div>

  {#if !isOpenHamberg}
    <button
      class="md:hidden cursor-pointer"
      on:click={() => (isOpenHamberg = !isOpenHamberg)}
    >
      <Menu />
    </button>
  {:else}
    <button
      class="md:hidden cursor-pointer"
      on:click={() => (isOpenHamberg = !isOpenHamberg)}
    >
      <SquareX />
    </button>
  {/if}

  <!-- // for mobile ------- -->
  {#if isOpenHamberg}
    <ol
      class=" absolute top-20 right-10 shadow-2xl rounded-xl bg-gray-200 p-8 md:hidden flex flex-col gap-4 text-black"
    >
      <li>
        <button on:click={() => (isOpenHamberg = !isOpenHamberg)}>
          <a
            class="opacity-60 font-bold hover:underline"
            class:text-red-600={$page.url.pathname === "/"}
            href="/">Home</a
          >
          <span class="opacity-50">&rsaquo;</span>
        </button>
      </li>
      <li>
        <button on:click={() => (isOpenHamberg = !isOpenHamberg)}>
          <a
            class="opacity-60 font-bold hover:underline"
            class:text-red-600={$page.url.pathname.startsWith("/products")}
            href="/products">products</a
          >
          <span class="opacity-50">&rsaquo;</span>
        </button>
      </li>
      <li>
        <button on:click={() => (isOpenHamberg = !isOpenHamberg)}>
          <a
            class="opacity-60 font-bold hover:underline"
            class:text-red-600={$page.url.pathname === "/cart"}
            href="/cart">Cart</a
          >
          <span class="opacity-50">&rsaquo;</span>
        </button>
      </li>
      <li class="flex flex-col opacity-60">
        <span>For Support? </span>
        <span>+980-34984089</span>
      </li>
    </ol>
  {/if}

  <!-- // for desktop -------- -->
  <ol class="hidden md:flex items-center gap-4 text-black">
    <li>
      <a
        class="opacity-60 font-bold hover:underline"
        class:text-red-600={$page.url.pathname === "/"}
        href="/">Home</a
      >
    </li>
    <li class="opacity-50">&rsaquo;</li>
    <li>
      <a
        class="opacity-60 font-bold hover:underline"
        class:text-red-600={$page.url.pathname.startsWith("/products")}
        href="/products">Products</a
      >
    </li>
    <li class="opacity-50">&rsaquo;</li>
    <li>
      <a
        class="opacity-60 font-bold hover:underline"
        class:text-red-600={$page.url.pathname === "/cart"}
        href="/cart">Cart</a
      >
    </li>
    <li class="opacity-50">&rsaquo;</li>
    <li class="flex flex-col opacity-60">
      <span>For Support? </span>
      <span>+980-34984089</span>
    </li>
  </ol>
</nav>
