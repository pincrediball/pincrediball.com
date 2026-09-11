<script lang="ts">
  import { markdownToHtml } from '$lib/marked';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="page-container mx-auto w-[1200px] max-w-full px-4 pt-12 pb-16">
  <div class="grid w-full grid-cols-1 gap-4 md:grid-cols-[2fr_1fr] lg:gap-16">
    <div>
      <p class="mb-4 text-sm text-amber-500">Latest post:</p>

      {#each data.posts as post (post.id)}
        {#if !post.isDraft}
          <article id={post.id} class="prose prose-invert max-w-none scroll-mt-24">
            <!-- eslint-disable-next-line svelte/no-at-html-tags -- content is static markdown authored in content/devlog, not user input -->
            {@html markdownToHtml(post.content).html}
          </article>
          {#if post.order === 1}
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
        class="shadow-firm top-24 rounded bg-gradient-to-r from-zinc-50 to-zinc-200 text-zinc-900"
      >
        <div class="flex flex-col gap-2 p-4">
          <h2 class="text-xl font-bold">Links to all posts</h2>
          {#each data.postsGroupedByWeek as group (group.key)}
            <h3 class="mt-2 font-bold">{group.key}</h3>
            {#each group.posts as post (post.id)}
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
  @reference "../../app.css";

  .page-container :global(.prose h2),
  .page-container :global(.prose h3),
  .page-container :global(.prose h4),
  .page-container :global(.prose h5),
  .page-container :global(.prose h6) {
    @apply scroll-mt-24;
  }
  .page-container :global(.prose h2) {
    @apply mb-2;
  }
  .page-container :global(.prose h2 + h3) {
    @apply -mt-4 border-b border-slate-50/10 pb-2 text-lg;
  }
  .page-container :global(.prose h2 + p strong em) {
    @apply text-amber-500;
  }
  .page-container :global(.prose img) {
    @apply mt-4 border-2 border-black hover:border-amber-600;
  }
  .page-container :global(.prose video) {
    @apply w-full border-2 border-black/50 hover:border-amber-600 lg:min-h-[400px];
  }
  .page-container :global(.prose a) {
    @apply text-orange-50 hover:text-orange-400;
  }
</style>
