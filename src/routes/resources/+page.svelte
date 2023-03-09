<script lang="ts">
  import { marked } from 'marked';
  import type { PageData } from './$types';

  export let data: PageData;

  // TODO: De-duplicate this logic with devlog page
  const slugger = new marked.Slugger();
  marked.use({ renderer: new marked.Renderer() });
  marked.use({
    renderer: {
      link: (href, _title, text) => {
        if (href?.startsWith('http')) {
          return `<a target="_blank" href='${href}'>${text}</span><sup class="text-xs no-underline">↗</sup></a>`;
        }
        return false; // fallback to default renderer
      },
      heading: (text, level) => {
        // TODO: Preserve these slugs outside the renderer to generate a Table of Contents.
        // TODO: Allow prefixes to the slug per section of bookmarks
        const simpleText = text.replace(/[^a-zA-Z\d\s\-]/g, '').trim();
        const slug = slugger.slug(simpleText);
        return `<h${level} id="${slug}" class="scroll-mt-24">${text}</h${level}>`;
      },
    },
  });
</script>

<div class="w-[1200px] max-w-full mx-auto px-4 pt-12 pb-16 page-container">
  <div class="grid md:grid-cols-[2fr_1fr] grid-cols-1 w-full gap-4 lg:gap-16">
    <div>
      <article id="bookmarks" class="scroll-mt-24 prose prose-invert">
        {@html marked(data.bookmarks.content)}
      </article>
      <hr class="my-8 border-t border-t-amber-400/50" />
      <article id="glossary" class="scroll-mt-24 prose prose-invert mt-16">
        {@html marked(data.glossary.content)}
      </article>
    </div>
    <div>
      <div
        class="rounded bg-gradient-to-r from-zinc-50 to-zinc-200 text-zinc-900 shadow-firm sticky top-24"
      >
        <div class="p-4 flex flex-col gap-2">
          <h2 class="text-xl font-bold">Table of Contents</h2>
          <!-- TODO: Generate this automatically -->
          <ul class="flex flex-col gap-4">
            <li>
              <a href="#bookmarks" class="a-toc">Bookmarks</a>
              <!-- prettier-ignore -->
              <ul class="flex flex-col gap-2 ml-8 mt-2 list-disc">
                <li>🟡 <a class="a-toc" href="#game-store-pages">Game Store Pages</a></li>
                <li>🌍 <a class="a-toc" href="#own-content">Own content</a></li>
                <li>🤖 <a class="a-toc" href="#godot-game-engine">Godot (game engine)</a></li>
                <li>🔫 <a class="a-toc" href="#phaser-game-engine">Phaser (game engine)</a></li>
                <li>🛠 <a class="a-toc" href="#game-development">Game Development</a></li>
                <li>🟣 <a class="a-toc" href="#pinball-machines">Pinball Machines</a></li>
                <li>⚙ <a class="a-toc" href="#tools-used">Tools used</a></li>
              </ul>
            </li>
            <li>
              <a href="#glossary" class="a-toc">Glossary</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
