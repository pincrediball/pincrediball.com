<script lang="ts">
  import { page } from '$app/state';
  import { resolve } from '$app/paths';
  import type { Path } from '$app/types';
  import type { Snippet } from 'svelte';

  let { href, clazz = '', children }: { href: Path; clazz?: string; children?: Snippet } = $props();
  let text = $derived(page.url.pathname == `/${href}` ? 'text-purple-900' : 'text-inherit');
</script>

<a href={resolve(href)} class={`p-1 font-bold hover:text-purple-700 sm:p-2 ${text} ${clazz}`}>
  {@render children?.()}
</a>
