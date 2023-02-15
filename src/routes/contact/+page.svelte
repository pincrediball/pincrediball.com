<script>
  import A from '$lib/components/A.svelte';
  import StayUpToDate from '$lib/components/StayUpToDate.svelte';
</script>

<StayUpToDate />

<div class="max-w-full mx-auto mb-32 px-4 py-8 sm:py-16 w-[1200px]">
  <h2 class="font-bold text-4xl sm:text-6xl">About the creator</h2>
  <p class="mt-4 text-xl">
    This game was started as a six-week sabbatical project for me: Jeroen Heijmans. You can find my
    personal contact information, socials, and other side projects at:
  </p>
  <ul class="list-disc mt-4 text-xl">
    <li class="ml-8">
      <A href="https://jeroenheijmans.nl">https://jeroenheijmans.nl</A>
    </li>
  </ul>
</div>
