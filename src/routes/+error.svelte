<script lang="ts">
  import { page } from '$app/stores';
</script>

<div class="mx-auto mb-32 w-[1200px] max-w-full px-4 py-8 sm:py-16">
  {#if $page.status === 404}
    <h1 class="text-4xl font-bold">404: Drained!</h1>
    <p class="mt-4 py-4 text-xl">
      The page you are looking for is gone. Drained. Not saved Disappeared. Tilted and left for
      greener pastures. Or at the very least it was <em>Not Found</em>. Sorry!
    </p>
  {:else}
    <h1 class="text-4xl font-bold">Unexpected situation</h1>
    <p class="mt-4 py-4 text-xl">
      An unexpected error occurred. Please try again later, or contact us if the issue persists.
    </p>
  {/if}
</div>
