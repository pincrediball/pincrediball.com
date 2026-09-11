<script lang="ts">
  import { page } from '$app/stores';
  import { resolve } from '$app/paths';
  import type { Pathname } from '$app/types';

  export let href: Pathname;
  export let clazz: string = '';
  $: text = $page.url.pathname == href ? 'text-purple-900' : 'text-inherit';
</script>

<a href={resolve(href)} class={`font-bold p-1 sm:p-2 hover:text-purple-700 ${text} ${clazz}`}>
  <slot />
</a>
