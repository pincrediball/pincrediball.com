<script lang="ts">
  import { marked } from 'marked';
  import type { PageData } from './$types';

  export let data: PageData;

  // TODO: De-duplicate this logic with devlog page
  marked.use({ renderer: new marked.Renderer() });
  marked.use({
    renderer: {
      link: (href, _title, text) => {
        if (href?.startsWith('http')) {
          return `<a target="_blank" href='${href}'>${text}</span><sup class="text-xs no-underline">↗</sup></a>`;
        }
        return false; // fallback to default renderer
      },
    },
  });
</script>

<div class="w-[1200px] max-w-full mx-auto px-4 pt-12 pb-16 page-container">
  <div class="grid md:grid-cols-[2fr_1fr] grid-cols-1 w-full gap-4 lg:gap-16">
    <div>
      <article id="bookmarks" class="prose prose-invert">
        {@html marked(data.bookmarks.content)}
      </article>
      <article id="glossary" class="prose prose-invert mt-16">
        {@html marked(data.glossary.content)}
      </article>
    </div>
    <div>
      <div
        class="rounded bg-gradient-to-r from-zinc-50 to-zinc-200 text-zinc-900 shadow-firm sticky top-24"
      >
        <div class="p-4 flex flex-col gap-2">
          <h2 class="text-xl font-bold">Table of Contents</h2>
          <a href="#bookmarks" class="underline hover:text-amber-500">Bookmarks</a>
          <a href="#glossary" class="underline hover:text-amber-500">Glossary</a>
        </div>
      </div>
    </div>
  </div>
</div>
