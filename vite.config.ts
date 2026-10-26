import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit({
      preprocess: vitePreprocess(),
      paths: {
        // Documentation typically wants you to include the repository
        // name in non-dev environments, because GitHub.io Pages sites
        // serve under a specific path. However, we skip that, because
        // we intend to serve the GitHub pages site with a DNS record
        // on our own domain anyways.
        base: '',
      },

      adapter: adapter({
        pages: 'docs',
        assets: 'docs',
        fallback: '404.html',
        precompress: false,
        strict: true,
      }),
    }),
  ],
});
