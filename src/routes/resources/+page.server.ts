import { readFileSync } from 'fs';
import type { PageServerLoad } from './$types';
import { markdownToHtml, type TransformedMarkdown } from '$lib/marked';

function getContents(file: 'glossary' | 'bookmarks'): TransformedMarkdown {
  const markdown = readFileSync(`content/resources/${file}.md`, 'utf-8');
  return markdownToHtml(markdown);
}

export const load = (() => {
  return {
    glossary: getContents('glossary'),
    bookmarks: getContents('bookmarks'),
  };
}) satisfies PageServerLoad;
