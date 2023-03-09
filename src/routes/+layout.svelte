<script lang="ts">
  import A from '$lib/components/A.svelte';
  import NavItem from '$lib/components/NavItem.svelte';
  import SvgMastodon from '$lib/components/SvgMastodon.svelte';
  import SvgTwitter from '$lib/components/SvgTwitter.svelte';
  import '../app.css';
  import '../inter.css';
</script>

<div class="min-h-screen flex flex-col bg-gradient-to-b from-zinc-800 to-zinc-900 text-stone-50">
  <nav
    class="bg-amber-400 text-zinc-900 border-b border-b-zinc-900 px-4 h-16 z-40 sticky top-0 shadow-firm"
  >
    <div class="flex items-center gap-1 h-full max-w-page mx-auto">
      <div class="flex flex-wrap items-center">
        <NavItem clazz="hidden sm:inline-block" href="/">
          <img src="/favicon.png" alt="Pincrediball logo" class="h-12" />
        </NavItem>
        <NavItem href="/"><span class="hidden sm:inline">The </span>Game</NavItem>
        <NavItem href="/devlog">Devlog</NavItem>
        <NavItem href="/resources">Resources</NavItem>
        <NavItem href="/contact">Contact</NavItem>
      </div>
      <div class="ml-auto flex h-full items-center gap-2">
        <a target="_blank" rel="noreferrer me" href="https://twitter.com/pincrediball">
          <SvgTwitter clazz="fill-zinc-50 hover:fill-purple-600" />
        </a>
        <a target="_blank" rel="noreferrer me" href="https://mastodon.social/@pincrediball">
          <SvgMastodon clazz="fill-zinc-50 hover:fill-purple-600" />
        </a>
      </div>
    </div>
  </nav>
  <slot />
  <footer class="mt-auto">
    <div class="border-t-black/50 border-t bg-black/25">
      <div class="max-w-page mx-auto p-4">
        <p class="opacity-50 text-xs">
          © 2023, Jeroen Heijmans | pincrediball.com |
          <A href="https://github.com/pincrediball/pincrediball.com">website source</A>
        </p>
      </div>
    </div>
  </footer>
</div>
