<script lang="ts">
  import TableOfContentsEntryItem from '$lib/components/TableOfContentsEntryItem.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="page-container mx-auto w-[1200px] max-w-full px-4 pt-8 pb-16 md:pt-12">
  <div class="grid w-full grid-cols-1 gap-4 md:grid-cols-[2fr_1fr] lg:gap-16">
    <div class="order-first mb-4 md:order-last">
      <div
        class="shadow-firm sticky top-24 rounded bg-gradient-to-r from-zinc-50 to-zinc-200 text-zinc-900"
      >
        <div class="flex flex-col gap-2 p-4">
          <h2 class="text-xl font-bold">Table of Contents</h2>
          <ul class="mt-2 flex flex-col gap-2">
            <TableOfContentsEntryItem entry={data.bookmarks.tableOfContents} />
          </ul>
          <ul class="mt-2 flex flex-col gap-2">
            <TableOfContentsEntryItem entry={data.glossary.tableOfContents} />
          </ul>
        </div>
      </div>
    </div>
    <div>
      <article id="bookmarks" class="prose prose-invert scroll-mt-24">
        <!-- eslint-disable-next-line svelte/no-at-html-tags -- content is static markdown authored in content/, not user input -->
        {@html data.bookmarks.html}
      </article>
      <hr class="my-8 border-t border-t-amber-400/50" />
      <article id="glossary" class="prose prose-invert mt-16 scroll-mt-24">
        <!-- eslint-disable-next-line svelte/no-at-html-tags -- content is static markdown authored in content/, not user input -->
        {@html data.glossary.html}
      </article>
    </div>
  </div>
</div>

<style lang="postcss">
  @reference "../../app.css";

  .page-container :global(:is(h1, h2, h3, h4, h5, h6)) {
    @apply scroll-mt-24;
  }
  .page-container :global(.prose a) {
    @apply text-orange-50 hover:text-orange-400;
  }
</style>
