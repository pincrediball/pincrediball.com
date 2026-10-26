<script lang="ts">
  import type { TableOfContentEntry } from '#lib/marked.js';
  import TableOfContentsEntryItem from './TableOfContentsEntryItem.svelte';

  let { entry }: { entry: TableOfContentEntry } = $props();
</script>

<li>
  <a class="a-toc" href={`#${entry.slug}`}>
    {entry.text}
  </a>
  {#if entry.children?.length}
    <ul class="mt-2 ml-8 flex list-disc flex-col gap-2">
      {#each entry.children as child (child.slug)}
        <TableOfContentsEntryItem entry={child} />
      {/each}
    </ul>
  {/if}
</li>
