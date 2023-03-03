<script lang="ts">
  import { page } from '$app/stores';
</script>

<div class="max-w-full mx-auto mb-32 px-4 py-8 sm:py-16 w-[1200px]">
  {#if $page.status === 404}
    <h1 class="text-4xl font-bold">404: Drained!</h1>
    <p class="py-4 text-xl mt-4">
      The page you are looking for is gone. Drained. Not saved Disappeared. Tilted and left for
      greener pastures. Or at the very least it was <em>Not Found</em>. Sorry!
    </p>
  {:else}
    <h1 class="text-4xl font-bold">Unexpected situation</h1>
    <p class="py-4 text-xl mt-4">
      An unexpected error occurred. Please try again later, or contact us if the issue persists.
    </p>
  {/if}
</div>
