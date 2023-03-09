import { readFileSync } from 'fs';
import type { PageServerLoad } from './$types';

export type Section = {
  content: string;
};

function getContents(file: 'glossary' | 'bookmarks'): Section {
  return {
    content: readFileSync(`content/resources/${file}.md`, 'utf-8'),
  };
}

export const load = (() => {
  return {
    glossary: getContents('glossary'),
    bookmarks: getContents('bookmarks'),
  };
}) satisfies PageServerLoad;
