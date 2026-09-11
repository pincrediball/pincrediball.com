<script lang="ts">
  import A from '$lib/components/A.svelte';
  import NavItem from '$lib/components/NavItem.svelte';
  import SvgMastodon from '$lib/components/SvgMastodon.svelte';
  import SvgTwitter from '$lib/components/SvgTwitter.svelte';
  import '../app.css';
  import '../inter.css';
</script>

<div class="flex min-h-screen flex-col bg-gradient-to-b from-zinc-800 to-zinc-900 text-stone-50">
  <nav
    class="shadow-firm sticky top-0 z-40 h-16 border-b border-b-zinc-900 bg-amber-400 px-4 text-zinc-900"
  >
    <div class="max-w-page mx-auto flex h-full items-center gap-1">
      <div class="flex flex-wrap items-center">
        <NavItem clazz="hidden sm:inline-block" href="/">
          <img src="/favicon.png" alt="Pincrediball logo" class="h-12" />
        </NavItem>
        <NavItem href="/"><span class="hidden sm:inline">The&nbsp;</span>Game</NavItem>
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
    <div class="border-t border-t-black/50 bg-black/25">
      <div class="max-w-page mx-auto p-4">
        <p class="text-xs opacity-50">
          © 2023, Jeroen Heijmans | pincrediball.com |
          <A href="https://github.com/pincrediball/pincrediball.com">website source</A>
        </p>
      </div>
    </div>
  </footer>
</div>
