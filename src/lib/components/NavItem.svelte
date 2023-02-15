<script lang="ts">
  export let href: string;
  export let clazz: string = '';
  import { page } from '$app/stores';
  $: text = $page.url.pathname == href ? 'text-purple-900' : 'text-inherit';
</script>

<a {href} class={`font-bold p-1 sm:p-2 hover:text-purple-700 ${text} ${clazz}`}>
  <slot />
</a>
