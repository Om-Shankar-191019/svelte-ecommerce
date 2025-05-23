<script>
  import {
    Instagram,
    Linkedin,
    Facebook,
    Twitter,
    Twitch,
  } from "lucide-svelte";
</script>

<section class="flex justify-around">
  <p class="text-sm">
    &copy; {new Date().getFullYear()} India Premium. All rights reserved.
  </p>
  <div class="flex gap-4">
    <Instagram />
    <Linkedin />
    <Facebook />
    <Twitch />
  </div>
</section>
