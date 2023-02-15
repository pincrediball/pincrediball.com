<script>
  import StayUpToDate from '$lib/components/StayUpToDate.svelte';
</script>

<div
  class="bg-[url('/img/matrix-dot-off.png')] bg-repeat bg-[length:8px_8px] min-h-[16rem] md:min-h-[36rem] flex flex-col border-b-zinc-900 border-b-2"
>
  <div class="text-center my-auto">
    <img
      src="/img/header-title-only.png"
      alt="'Pincreciball' in bright orange letters"
      class="inline-block"
    />
  </div>
</div>

<div
  class="bg-gradient-to-r from-purple-800 to-purple-900 border-t-8 border-b-8 border-black/50 text-zinc-100"
>
  <div class="max-w-page mx-auto p-4 py-8 md:pt-16 flex flex-col lg:flex-row gap-4 lg:gap-16">
    <div class="mb-4">
      <h1 class="text-4xl sm:text-6xl font-bold">
        Pincrediball <img
          src="/favicon.png"
          alt="Pincrediball logo"
          class="h-16 hidden sm:inline-block align-top"
        />
      </h1>
      <h2 class="font-bold text-2xl mt-8 italic">The Automata Pinball Wizard game!</h2>
      <p class="text-2xl mt-4">
        You design the machine, in order for the automated pinball player to achieve the best score
        they can get. Create the best and most crazy pinball machine layouts and see where this will
        take you and the automata!
      </p>
    </div>
    <div class="md:w-[48rem]">
      <div
        class="bg-amber-400 border-4 border-amber-600/50 text-zinc-900 rounded-lg p-4 shadow-firm lg:-mb-[120px]"
      >
        <h2 class="font-bold text-3xl">Testimonials</h2>
        <p class="mt-4 italic">
          Out of all the recent games I've created and played, this is my absolute favorite!
          Fantastic idea!
        </p>
        <p class="mt-2 italic">-Jeroen, game's creator</p>
        <hr class="border-amber-900/25  my-4" />
        <p class="mt-4 italic">
          Pinball is my all-time favorite game category, and this game redefines the genre!
        </p>
        <p class="mt-2 italic">-Bunbury</p>
      </div>
    </div>
  </div>
</div>

<div class="max-w-page mx-auto p-4 py-8 md:pt-16 md:pb-32">
  <h2 class="font-bold text-4xl sm:text-6xl">Development Stage</h2>
  <p class="mt-4 text-xl">
    The game is currently under development. It's a one-person, six-week mini-sabbatical project. Or
    at least the initial design and prototyping is. Heck, it's not even 100% sure that the game will
    ever be released! But that won't be for lack of trying.
  </p>
  <p class="mt-4 text-xl">
    The process is largely out in the open though! So that's something to enjoy already. Here's the
    initial design, but be sure to <a href="/devlog" class="underline hover:text-orange-500"
      >check the devlog</a
    > for more frequent updates.
  </p>
  <img
    src="/img/v2023-02-14a-tipm-design.png"
    class="mt-8 border-zinc-50 border-8 shadow-firm"
    alt="Design overview of 'Pincrediball' showing the game screen with annotations"
  />
</div>

<div
  class="px-4 xl:p-0 bg-gradient-to-r from-amber-400 to-amber-600 border-t-8 border-b-8 border-black/10 text-zinc-900"
>
  <div class="max-w-full mx-auto px-4 py-16 w-[1200px]">
    <h2 class="font-bold text-4xl sm:text-6xl">Road Map</h2>
    <p class="mt-4 text-xl">
      What's quite sure is that the design and idea will be completed during Q1-2023. What's less
      sure is when (or if) the rest of the game will be completed. Because it's a side-project,
      which should remain fun at all times! But be sure to let me know if you're looking forward to
      the end result; that might push me to maybe complete the game... Who knows!?
    </p>
    <div class="flex flex-wrap md:flex-nowrap gap-4 mt-8">
      <div
        class="shadow-firm bg-purple-800 text-zinc-50 border-4 border-purple-900/50 rounded p-4 w-full md:w-1/3"
      >
        <h3 class="font-bold text-3xl">Q1 2023</h3>
        <ul class="list-disc mt-4 text-xl">
          <li class="ml-8">Game design</li>
          <li class="ml-8">Website, socials</li>
          <li class="ml-8">Prototype</li>
        </ul>
      </div>
      <div
        class="shadow-firm bg-purple-800 text-zinc-50 border-4 border-purple-900/50 rounded p-4 w-full md:w-1/3"
      >
        <h3 class="font-bold text-3xl">Q1 2023 - Never?</h3>
        <ul class="list-disc mt-4 text-xl">
          <li class="ml-8">Finish Early Access</li>
          <li class="ml-8">Publish on Steam</li>
          <li class="ml-8">Publish on Itch.io</li>
          <li class="ml-8">Earn at least $1!</li>
        </ul>
      </div>
      <div
        class="shadow-firm bg-purple-800 text-zinc-50 border-4 border-purple-900/50 rounded p-4 w-full md:w-1/3"
      >
        <h3 class="font-bold text-3xl">Q2 2023 - Never?</h3>
        <ul class="list-disc mt-4 text-xl">
          <li class="ml-8">Finish version 1.0</li>
          <li class="ml-8">Kickstart(er for) 2.0?</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<StayUpToDate />

<div class="mb-32" />
