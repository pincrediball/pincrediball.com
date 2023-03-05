<script>
  import A from '$lib/components/A.svelte';
  import StayUpToDate from '$lib/components/StayUpToDate.svelte';
</script>

<StayUpToDate />

<div class="max-w-full mx-auto mb-32 px-4 py-8 sm:py-16 w-[1200px]">
  <h2 class="font-bold text-4xl sm:text-6xl">About the creator</h2>
  <p class="mt-4 text-xl">
    This game was started as a six-week sabbatical project for me: Jeroen Heijmans. You can find me
    in various places online:
  </p>
  <ul class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <li class="shadow-firm bg-purple-800 text-zinc-50 border-4 border-purple-900/50 rounded p-4">
      <h3 class="text-2xl font-bold">Website</h3>
      <p class="mt-2"><A href="https://jeroenheijmans.nl">https://jeroenheijmans.nl</A></p>
      <p class="mt-2">Also contains a more complete overview of contact information.</p>
    </li>
    <li class="shadow-firm bg-purple-800 text-zinc-50 border-4 border-purple-900/50 rounded p-4">
      <h3 class="text-2xl font-bold">Mastodon</h3>
      <p class="mt-2">
        <A href="https://mastodon.social/@jeroenheijmans">@jeroenheijmans@mastodon.social</A>
      </p>
      <p class="mt-2">My most active social media.</p>
    </li>
    <li class="shadow-firm bg-purple-800 text-zinc-50 border-4 border-purple-900/50 rounded p-4">
      <h3 class="text-2xl font-bold">Twitter</h3>
      <p class="mt-2">
        <A href="https://twitter.com/@jeroenheijmans">@jeroenheijmans</A>
      </p>
      <p class="mt-2">Slightly less active, but still a way to reach me.</p>
    </li>
  </ul>
</div>
