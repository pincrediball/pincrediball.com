<script lang="ts">
  import { marked } from 'marked';
  import type { PageData } from './$types';

  export let data: PageData;

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
      <p class="mb-4 text-sm text-amber-500">Latest post:</p>

      {#each data.posts as post, idx}
        {#if !post.isDraft}
          <article id={post.id} class="scroll-mt-24 prose prose-invert max-w-none">
            {@html marked(post.content)}
          </article>
          {#if idx === 0}
            <hr class="my-8 border-t border-t-amber-400/50" />
            <p class="mb-8 text-sm text-amber-500">Older posts:</p>
          {:else}
            <hr class="my-8 border-t border-t-amber-400/25" />
          {/if}
        {/if}
      {/each}
    </div>

    <div>
      <div
        class="rounded bg-gradient-to-r from-zinc-50 to-zinc-200 text-zinc-900 shadow-firm sticky top-24"
      >
        <div class="p-4 flex flex-col gap-2">
          <h2 class="text-xl font-bold">Links to all posts</h2>
          {#each data.postsGroupedByWeek as group}
            <h3 class="font-bold mt-2">{group.key}</h3>
            {#each group.posts as post}
              {#if !post.isDraft}
                <a class="underline hover:text-amber-500" href={`#${post.id}`}>{post.title}</a>
              {/if}
            {/each}
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .page-container :global(.prose h2 + h3) {
    @apply -mt-4 pb-2 text-lg border-b border-slate-50/10;
  }
  .page-container :global(.prose h2 + h3 strong) {
    @apply text-amber-500;
  }
  .page-container :global(.prose img) {
    @apply border-2 border-black hover:border-amber-600 mt-4;
  }
  .page-container :global(.prose video) {
    @apply border-2 border-black/50 hover:border-amber-600 w-full lg:min-h-[400px];
  }
  .page-container :global(.prose a) {
    @apply text-orange-50 hover:text-orange-400;
  }
</style>
