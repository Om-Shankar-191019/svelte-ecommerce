<script>
  import Sidebar from "$lib/Sidebar.svelte";
  import ProductList from "$lib/ProductList.svelte";
</script>

<div class="grid grid-cols-1 md:grid-cols-[auto_1fr]">
  <!-- Left Sidebar. -->
  <aside class="bg-gray-200 p-4"><Sidebar /></aside>

  <!-- Main Content -->
  <main class="space-y-4 bg-gray-200 p-4">
    <section class=" bg-gray-100 p-4">
      <ProductList />
    </section>
  </main>
</div>
