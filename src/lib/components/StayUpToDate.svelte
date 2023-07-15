<script>
  import A from './A.svelte';
</script>

<div class="max-w-full mx-auto px-4 py-8 sm:py-16 w-[1200px]">
  <h2 class="font-bold text-4xl sm:text-6xl">Stay up to date!</h2>
  <p class="mt-4 text-xl">
    There's multiple ways to stay up to date with the latest developments around Pincrediball!
  </p>
  <ul class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <li class="bg-amber-400 border-4 border-amber-600/50 text-zinc-900 rounded-lg p-4 shadow-firm">
      <h3 class="text-2xl font-bold">Devlog</h3>
      <p class="mt-2">
        <a href="/devlog" class="a-internal-dark">https://pincrediball.com/devlog</a>
      </p>
      <p class="mt-2">
        Sorry, no RSS yet! Please use socials for notifications on devlog updates where we'll post
        them often.
      </p>
    </li>
    <li class="bg-amber-400 border-4 border-amber-600/50 text-zinc-900 rounded-lg p-4 shadow-firm">
      <h3 class="text-2xl font-bold">Mastodon</h3>
      <p class="mt-2">
        <A dark href="https://mastodon.social/@pincrediball">Follow @Pincrediball@mastodon.social</A
        >
      </p>
      <p class="mt-2">For the most frequent updates, follow the account on Mastodon.</p>
    </li>
    <li class="bg-amber-400 border-4 border-amber-600/50 text-zinc-900 rounded-lg p-4 shadow-firm">
      <h3 class="text-2xl font-bold">Twitter</h3>
      <p class="mt-2">
        <A dark href="https://twitter.com/pincrediball">Follow @Pincrediball on Twitter</A>
      </p>
      <p class="mt-2">
        Mastodon will likely get the most frequent updates, but the most important one will surely
        also go to the bird app?!
      </p>
    </li>
    <li class="bg-amber-400 border-4 border-amber-600/50 text-zinc-900 rounded-lg p-4 shadow-firm">
      <h3 class="text-2xl font-bold">Reddit</h3>
      <p class="mt-2"><A dark href="https://reddit.com/r/pincrediball">Join the Subreddit</A></p>
      <p class="mt-2">
        At the time of writing the subreddit is nearly empty. But it won't hurt to join already!?
      </p>
    </li>
    <li class="bg-amber-400 border-4 border-amber-600/50 text-zinc-900 rounded-lg p-4 shadow-firm">
      <h3 class="text-2xl font-bold">YouTube</h3>
      <p class="mt-2">
        <A dark href="https://www.youtube.com/@pincrediball">Subscribe on YouTube</A>
      </p>
      <p class="mt-2">
        Content forthcoming, but you can already subscribe of course! Who knows, extra subs may push
        me to put some (more) videos up?
      </p>
    </li>
    <li class="bg-amber-400 border-4 border-amber-600/50 text-zinc-900 rounded-lg p-4 shadow-firm">
      <h3 class="text-2xl font-bold">Steam</h3>
      <p class="mt-2">
        <A dark href="https://store.steampowered.com/app/2378150/Pincrediball"
          >Wishlist the game on Steam</A
        >
      </p>
      <p class="mt-2">
        If newer versions or even a full version ever becomes a thing, subscribing to updates for
        the game by Wish Listing it on Steam is probably a great way to stay up to date!
      </p>
    </li>
  </ul>
</div>
