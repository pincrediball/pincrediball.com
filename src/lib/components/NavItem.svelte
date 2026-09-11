<script lang="ts">
  import { page } from '$app/stores';
  import { resolve } from '$app/paths';
  import type { Pathname } from '$app/types';

  export let href: Pathname;
  export let clazz: string = '';
  $: text = $page.url.pathname == href ? 'text-purple-900' : 'text-inherit';
</script>

<a href={resolve(href)} class={`p-1 font-bold hover:text-purple-700 sm:p-2 ${text} ${clazz}`}>
  <slot />
</a>
