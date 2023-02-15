<script lang="ts">
  import A from '$lib/components/A.svelte';
</script>

<div class="w-[1200px] max-w-full mx-auto px-4 pt-12 pb-16">
  <div class="grid md:grid-cols-[2fr_1fr] grid-cols-1 w-full gap-4 lg:gap-16">
    <div class="">
      <p class="mb-2 text-sm">Latest post:</p>

      <div id="post-2023-02-15" class="scroll-mt-24">
        <h2 class="font-bold text-3xl">Day 3: Website first?</h2>
        <h3 class="font-bold mt-2">
          <span class="text-amber-500">Jeroen</span>, February 15, 2023
        </h3>
        <hr class="mt-2 opacity-5" />
        <p class="mt-2">
          Continuing from day 2 with a focus on <em>fun</em> activities, I decided to finish up the
          website. This time I don't think I can claim anymore that it's in the end somehow part of
          the <em>critical path</em> though?
        </p>
        <p class="mt-4">
          But regardless of whether it was <em>The Right Thing</em> to do right now, it <em>was</em>
          very effective! I mean: you're looking at the very result right now.
        </p>
        <p class="mt-4">
          The website was built with SvelteKit and TailwindCSS, which was rather efficient because I
          recently used it for both of my other recent side-projects: <A
            href="https://tierdom.jeroenheijmans.nl">Tierdom</A
          > and <A href="https://vesta.infi.nl">vesta.infi.nl</A>. But not before I spent the entire
          morning learning some more Figma skills to do the entire design first.
        </p>
        <p class="mt-4">
          I only bought the domain name, used <A
            href="https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages#using-an-apex-domain-for-your-github-pages-site"
            >GitHub pages with a custom and apex domain</A
          > for hosting the whole thing. Which, after the usual DNS hassle, works quite well!
        </p>
        <p class="mt-4">All this means three important things:</p>
        <ul class="mt-4">
          <li class="ml-8">I can <em>comfortably share</em> the plans with the world</li>
          <li class="ml-8">I am <em>on schedule</em> for week 1's plans</li>
          <li class="ml-8">I have <em>no excuses left</em> to procrastinate prototyping</li>
        </ul>
        <p class="mt-4">
          So let's end this third day with some initial social media posts and links to this
          website.
        </p>
        <p class="mt-4"><strong>And tomorrow: we prototype!</strong></p>
      </div>

      <hr class="opacity-50 my-8" />

      <p class="mb-4 text-sm">Older posts:</p>

      <div id="post-2023-02-14" class="scroll-mt-24">
        <h2 class="font-bold text-3xl">Day 2: Now we're getting somewhere!</h2>
        <h3 class="font-bold mt-2">
          <span class="text-amber-500">Jeroen</span>, February 14, 2023
        </h3>
        <hr class="mt-2 opacity-5" />
        <p class="mt-2">
          Second day I allowed myself to get side-tracked. I decided that the best way to keep
          motivation high was by <em>doing essential things disguised as non-essential things</em>.
          By this I mean I tried to incorporate essential things (work on the designs and game idea)
          into far less essential things (that were enjoyable to do).
        </p>
        <p class="mt-4">
          First thing I did was to <strong>redo the main game screen's design</strong>. For fun I've
          shared that on the (current, at the time of writing)
          <a href="/" class="a-internal">home page</a>. After that I took care of a bunch of other
          non-essential (but fun!) things:
        </p>
        <ul class="mt-4">
          <li class="ml-8">✅ Logo &amp; Banner designed</li>
          <li class="ml-8">✅ YouTube channel claimed</li>
          <li class="ml-8">✅ Itch.io account claimed</li>
          <li class="ml-8">✅ Socials set up</li>
          <li class="ml-8">✅ SteamWorks application submitted (and $100 fee paid...)</li>
        </ul>
        <p class="mt-4">
          It was a <em>fun</em> day with this too, as you can tell from <A
            href="https://mastodon.social/@jeroenheijmans/109865321998439644">my related toot</A
          >. And it really gave me a bunch of inspiration and energy to continue on!
        </p>
      </div>

      <hr class="opacity-50 my-8" />

      <div id="post-2023-02-13" class="scroll-mt-24">
        <h2 class="font-bold text-3xl">Day 1: Gotta start somewhere!</h2>
        <h3 class="font-bold mt-2">
          <span class="text-amber-500">Jeroen</span>, February 13, 2023
        </h3>
        <hr class="mt-2 opacity-5" />
        <p class="mt-2">
          First day of the week I decided to start the project. However, the night before we watched
          the Super Bowl... in the GMT+1 timezone! So was up until 04:30 (that's AM for y'all),
          naturally this wasn't the most productive day.
        </p>
        <p class="mt-4">
          But the most important thing got done: I got <em>started</em> on the project! Plus several
          important things got done nonetheless, as <A
            href="https://mastodon.social/@jeroenheijmans/109859902264743330">I wrote on Mastodon</A
          >:
        </p>
        <ul class="mt-4">
          <li class="ml-8">✅ Brainstorm done</li>
          <li class="ml-8">✅ Rough plan created</li>
          <li class="ml-8">✅ Name chosen</li>
          <li class="ml-8">✅ Domain bought!</li>
          <li class="ml-8">✅ GitHub org and repo's claimed</li>
          <li class="ml-8">✅ Social media names claimed</li>
          <li class="ml-8">✅ Game loop basics designed</li>
          <li class="ml-8">✅ Initial designs</li>
        </ul>
        <p class="mt-4">In the end would call day 1 a success!</p>
      </div>
    </div>

    <div>
      <div
        class="rounded bg-gradient-to-r from-zinc-50 to-zinc-200 text-zinc-900 shadow-firm sticky top-24"
      >
        <!-- prettier-ignore -->
        <div class="p-4 flex flex-col gap-2">
          <h2 class="text-xl font-bold">Links to all posts:</h2>
          <a class="underline hover:text-amber-500" href="#post-2023-02-15">Day 3: Website first?</a>
          <a class="underline hover:text-amber-500" href="#post-2023-02-14">Day 2: Now we're getting somewhere!</a>
          <a class="underline hover:text-amber-500" href="#post-2023-02-13">Day 1: Gotta start somewhere!</a>
        </div>
      </div>
    </div>
  </div>
</div>
