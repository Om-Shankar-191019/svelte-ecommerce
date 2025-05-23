<script>
  import Footer from "$lib/Footer.svelte";
  import Header from "$lib/Header.svelte";
  import "../app.css";

  let { children } = $props();
</script>

<!-- {@render children()} -->

<div class="grid h-screen grid-rows-[auto_1fr_auto]">
  <!-- Header -->
  <header class="bg-gray-100 p-4 sticky top-0 z-10"><Header /></header>
  <!-- Grid Columns -->
  <div class="grid grid-cols-1">
    {@render children()}
  </div>
  <!-- Footer -->
  <footer class="bg-gray-500 p-8"><Footer /></footer>
</div>
