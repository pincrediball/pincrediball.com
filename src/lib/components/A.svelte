<script lang="ts">
  export let href: string;
</script>

<!-- prettier-ignore -->
<a
  class="text-orange-100 hover:text-orange-400"
  target="_blank"
  rel="noreferrer"
  {href}><span class="underline"
><slot /></span><sup class="text-xs no-underline">↗</sup></a>
