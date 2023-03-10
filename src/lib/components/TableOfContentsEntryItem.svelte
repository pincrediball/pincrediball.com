<script lang="ts">
  import type { TableOfContentEntry } from '$lib/marked';
  export let entry: TableOfContentEntry;
</script>

<li>
  <a class="a-toc" href={`#${entry.slug}`}>
    {entry.text}
  </a>
  {#if entry.children?.length}
    <ul class="flex flex-col gap-2 ml-8 mt-2 list-disc">
      {#each entry.children as child}
        <svelte:self entry={child} />
      {/each}
    </ul>
  {/if}
</li>
