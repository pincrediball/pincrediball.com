<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    href,
    dark = false,
    children,
  }: { href: string; dark?: boolean; children?: Snippet } = $props();
</script>

<!-- prettier-ignore -->
<a
  class={dark ? 'a-internal-dark' : 'a-internal'}
  target="_blank"
  rel="noreferrer external"
  {href}><span class="underline"
>{@render children?.()}</span><sup class="text-xs no-underline">↗</sup></a>
