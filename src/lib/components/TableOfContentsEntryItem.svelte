<script lang="ts">
  import type { TableOfContentEntry } from '$lib/marked';
  export let entry: TableOfContentEntry;
</script>

<li>
  <a class="a-toc" href={`#${entry.slug}`}>
    {entry.text}
  </a>
  {#if entry.children?.length}
    <ul class="mt-2 ml-8 flex list-disc flex-col gap-2">
      {#each entry.children as child (child.slug)}
        <svelte:self entry={child} />
      {/each}
    </ul>
  {/if}
</li>
