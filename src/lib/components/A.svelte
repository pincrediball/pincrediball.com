<script lang="ts">
  export let href: string;
  export let dark = false;
</script>

<!-- prettier-ignore -->
<a
  class={dark ? 'a-internal-dark' : 'a-internal'}
  target="_blank"
  rel="noreferrer external"
  {href}><span class="underline"
><slot /></span><sup class="text-xs no-underline">↗</sup></a>
