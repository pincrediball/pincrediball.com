<script>
  import A from '$lib/components/A.svelte';
  import StayUpToDate from '$lib/components/StayUpToDate.svelte';
  import { resolve } from '$app/paths';
</script>

<div
  class="flex min-h-[16rem] flex-col border-b-2 border-b-zinc-900 bg-[url('/img/matrix-dot-off.png')] bg-[length:8px_8px] bg-repeat md:min-h-[36rem]"
>
  <div class="my-auto text-center">
    <img
      src="/img/header-title-only.png"
      alt="'Pincrediball' in bright orange letters"
      class="inline-block"
    />
  </div>
</div>

<div
  class="border-t-8 border-b-8 border-black/50 bg-gradient-to-r from-purple-800 to-purple-900 text-zinc-100"
>
  <div class="max-w-page mx-auto flex flex-col gap-4 p-4 py-8 md:pt-16 lg:flex-row lg:gap-16">
    <div class="mb-4">
      <h1 class="text-4xl font-bold sm:text-6xl">
        Pincrediball <img
          src="/favicon.png"
          alt="Pincrediball logo"
          class="hidden h-16 align-top sm:inline-block"
        />
      </h1>
      <h2 class="mt-8 text-2xl font-bold italic">The Automata Pinball Wizard game!</h2>
      <p class="mt-4 text-2xl">
        <em>You</em> design the machine, in order for the automated pinball player to achieve the best
        score they can get. Create the best and most crazy pinball machine layouts and see where this
        will take you and the automata!
      </p>
    </div>
    <div class="md:w-[48rem]">
      <div
        class="shadow-firm rounded-lg border-4 border-amber-600/50 bg-amber-400 p-4 text-zinc-900 lg:-mb-[120px]"
      >
        <h2 class="text-3xl font-bold">Testimonials</h2>
        <p class="mt-4 italic">
          Out of all the recent games I've created and played, this is my absolute favorite!
          Fantastic idea!
        </p>
        <p class="mt-2 italic">-Jeroen, game's creator</p>
        <hr class="my-4 border-amber-900/25" />
        <p class="mt-4 italic">
          Pinball is my all-time favorite game category, and this game redefines the genre!
        </p>
        <p class="mt-2 italic">-Bunbury</p>
      </div>
    </div>
  </div>
</div>

<div class="max-w-page mx-auto p-4 py-8 md:pt-16 md:pb-32">
  <h2 class="text-4xl font-bold sm:text-6xl">Available now!</h2>
  <p class="mt-4 text-xl">
    Pincrediball has been released with a fully playable Tutorial machine! Pick your preferred
    platform below.
  </p>

  <div class="mt-4 flex flex-col gap-4 md:flex-row">
    <div
      class="shadow-firm flex flex-col rounded-lg border-4 border-zinc-900 bg-zinc-700 p-4 md:w-1/2"
    >
      <h3 class="text-2xl font-bold text-amber-400">Steam Store (all Operating Systems)</h3>
      <p class="mt-2">
        Free Early Access version with all features, <em>plus</em> Steam Achievements! Install it now
        on Windows, macOS, Linux, and Steam Deck!
      </p>
      <p class="mt-auto pt-4">
        <a
          class="
          hover:shadow-firm
        inline-block rounded border-2 border-amber-600/60 bg-amber-400 px-4
          py-2 font-bold text-purple-900 hover:animate-pulse hover:border-amber-500/60 hover:bg-amber-300"
          target="_blank"
          rel="noreferrer"
          href="https://store.steampowered.com/app/2378150/Pincrediball/"
        >
          <img src="img/steam-icon.png" alt="Steam Logo" class="mr-1 inline-block w-[24px]" />
          Pincrediball on Steam<sup>↗</sup>
        </a>
      </p>
    </div>
    <div
      class="shadow-firm flex flex-col rounded-lg border-4 border-zinc-900 bg-zinc-700 p-4 md:w-1/2"
    >
      <h3 class="text-2xl font-bold text-amber-400">Itch.io (browser version)</h3>
      <p class="mt-2">
        Play the full game on Itch.io, in your browser (where supported). Free to play, but if you
        really want on Itch you could tip me for the game if you're really inclined.
      </p>
      <p class="mt-auto pt-4">
        <a
          class="
          hover:shadow-firm
        inline-block rounded border-2 border-amber-600/60 bg-amber-400 px-4
          py-2 font-bold text-purple-900 hover:animate-pulse hover:border-amber-500/60 hover:bg-amber-300"
          target="_blank"
          rel="noreferrer"
          href="https://pincrediball.itch.io/pincrediball"
        >
          <img src="img/itch-icon.png" alt="Itch.io Logo" class="mr-1 inline-block w-[24px]" />
          Pincrediball on itch.io<sup>↗</sup>
        </a>
      </p>
    </div>
  </div>

  <h2 class="mt-16 text-4xl font-bold sm:text-6xl">Launch Trailer</h2>
  <p class="mt-4 text-xl">Watch the release trailer with actual gameplay footage...</p>
  <iframe
    class="mt-8 aspect-[16/9] w-full"
    src="https://www.youtube-nocookie.com/embed/oXBfiG2kagI"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
  <h2 class="mt-16 text-4xl font-bold sm:text-6xl">About the Development Stage</h2>
  <p class="mt-4 text-xl">
    The game was a one-person, seven-week mini-sabbatical project. Or at least the initial design
    and prototyping is. A fully functional DEMO version was released at the end. It includes one
    full Tutorial machine. Whether we'll ever finish a full game? Who knows!?
  </p>
  <p class="mt-4 text-xl">
    The process is largely out in the open though! So that's something to enjoy already. Here's the
    initial design, but be sure to <a href={resolve('/devlog')} class="a-internal"
      >check the devlog</a
    > for more frequent updates.
  </p>
  <p class="mt-4 text-xl">Here's a sketch of the initial design for you to enjoy:</p>
  <img
    src="/img/v2023-02-14a-tipm-design.png"
    class="shadow-firm mt-8 border-8 border-zinc-50"
    alt="Design overview of 'Pincrediball' showing the game screen with annotations"
  />
</div>

<div
  class="mb-8 border-t-8 border-b-8 border-black/10 bg-gradient-to-r from-amber-400 to-amber-600 px-4 text-zinc-900 xl:p-0"
>
  <div class="mx-auto w-[1200px] max-w-full px-4 py-16">
    <h2 class="text-4xl font-bold sm:text-6xl">Road Map</h2>
    <p class="mt-4 text-xl">
      What's quite sure is that the design and idea will be completed during Q1-2023 (you can follow
      active progress on the <A dark href="https://github.com/orgs/pincrediball/projects/1/views/1"
        >GitHub Kanban Board</A
      >). What's less sure is when (or if) the rest of the game will be completed. Because it's a
      side-project, which should remain fun at all times! But be sure to let me know if you're
      looking forward to the end result; that might push me to maybe complete the game... Who
      knows!?
    </p>
    <div class="mt-8 flex flex-wrap gap-4 md:flex-nowrap">
      <div
        class="shadow-firm w-full rounded border-4 border-purple-900/50 bg-purple-800 p-4 text-zinc-50 md:w-1/3"
      >
        <h3 class="text-3xl font-bold">Q1 2023</h3>
        <ul class="mt-4 text-xl">
          <li>✔ Game design</li>
          <li>✔ Website, socials</li>
          <li>✔ Prototype</li>
          <li>✔ DEMO Release</li>
        </ul>
      </div>
      <div
        class="shadow-firm w-full rounded border-4 border-purple-900/50 bg-purple-800 p-4 text-zinc-50 md:w-1/3"
      >
        <h3 class="text-3xl font-bold">Q1 2023 - Q2 2023</h3>
        <ul class="mt-4 text-xl">
          <li>✔ Finish Early Access</li>
          <li>✔ Publish on Itch.io</li>
          <li>✔ Earn at least $1!</li>
        </ul>
      </div>
      <div
        class="shadow-firm w-full rounded border-4 border-purple-900/50 bg-purple-800 p-4 text-zinc-50 md:w-1/3"
      >
        <h3 class="text-3xl font-bold">Q3 2023 - 2024?</h3>
        <ul class="mt-4 text-xl">
          <li>✔ Publish on Steam</li>
          <li>🔲 Finish version 1.0</li>
          <li>🔲 Kickstart(er for) 2.0?</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<StayUpToDate />

<div class="mb-32"></div>
