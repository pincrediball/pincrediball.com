<script lang="ts">
  import TableOfContentsEntryItem from '$lib/components/TableOfContentsEntryItem.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="w-[1200px] max-w-full mx-auto px-4 pt-8 md:pt-12 pb-16 page-container">
  <div class="grid md:grid-cols-[2fr_1fr] grid-cols-1 w-full gap-4 lg:gap-16">
    <div class="order-first md:order-last mb-4">
      <div
        class="rounded bg-gradient-to-r from-zinc-50 to-zinc-200 text-zinc-900 shadow-firm sticky top-24"
      >
        <div class="p-4 flex flex-col gap-2">
          <h2 class="text-xl font-bold">Table of Contents</h2>
          <ul class="flex flex-col gap-2 mt-2">
            <TableOfContentsEntryItem entry={data.bookmarks.tableOfContents} />
          </ul>
          <ul class="flex flex-col gap-2 mt-2">
            <TableOfContentsEntryItem entry={data.glossary.tableOfContents} />
          </ul>
        </div>
      </div>
    </div>
    <div>
      <article id="bookmarks" class="scroll-mt-24 prose prose-invert">
        {@html data.bookmarks.html}
      </article>
      <hr class="my-8 border-t border-t-amber-400/50" />
      <article id="glossary" class="scroll-mt-24 prose prose-invert mt-16">
        {@html data.glossary.html}
      </article>
    </div>
  </div>
</div>

<style lang="postcss">
  .page-container :global(:is(h1, h2, h3, h4, h5, h6)) {
    @apply scroll-mt-24;
  }
</style>
