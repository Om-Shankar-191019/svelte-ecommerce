<script>
  export let category, description, price, image, title, id;
</script>

<a href={`/products/${id}`}>
  <div
    class="bg-white mb-4 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300 max-w-sm"
  >
    <img src={image} alt="" class="w-full h-64 object-contain p-4" />

    <div class="p-4 space-y-2">
      <h2 class="text-lg font-semibold">{title}</h2>
      <div class="flex items-center justify-between mt-2">
        <span class="text-green-600 font-bold text-lg">${price}</span>

        <p class="text-sm text-gray-500">{category}</p>
      </div>
      <p class="text-gray-700 text-sm line-clamp-2">{description}</p>
    </div>
  </div>
</a>
