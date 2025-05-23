<script>
  export let data;
  //   console.log("data : ", data);
  const { product } = data;
</script>

<article class="p-4">
  <img
    src={product.image}
    alt={product.title}
    class="h-64 object-contain mx-auto"
  />
  <h1 class="text-2xl font-bold mt-4">{product.title}</h1>
  <p class="text-gray-600 text-lg font-bold mt-4">{product.category}</p>
  <p class="text-gray-700 mt-2">{product.description}</p>
  <p class="text-green-600 text-lg font-bold mt-4">${product.price}</p>
</article>
