<script>
  let categories = [
    "all",
    "electronics",
    "men's clothing",
    "women's clothing",
    "jewelery",
    "toys",
    "beauty",
  ];
  let trending = [
    {
      title: "Wireless Headphones",
      image: "https://via.placeholder.com/50",
    },
    {
      title: "Smart Watch",
      image: "https://via.placeholder.com/50",
    },
    {
      title: "Leather Wallet",
      image: "https://via.placeholder.com/50",
    },
  ];
</script>

<aside class="bg-gray-100 p-4 w-full max-w-xs space-y-6">
  <div>
    <h2 class="text-lg font-semibold mb-2">Categories</h2>
    <ul class="space-y-1 text-sm text-gray-700">
      {#each categories as category}
        <li class="hover:text-blue-600 cursor-pointer transition">
          {category}
        </li>
      {/each}
    </ul>
  </div>

  <!-- Trending Products -->
  <div>
    <h2 class="text-lg font-semibold mb-2">Trending Products</h2>
    <ul class="space-y-3">
      {#each trending as product}
        <li class="flex items-center gap-3">
          <span class="text-sm text-gray-800">{product.title}</span>
        </li>
      {/each}
    </ul>
  </div>
</aside>
