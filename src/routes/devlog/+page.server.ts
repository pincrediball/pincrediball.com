import { readdirSync, readFileSync } from 'fs';
import type { PageLoad } from './$types';

function getTitle(content: string) {
  const matches = content.match(/^## (.+)$/gm);
  if (matches && matches.length > 0) {
    return matches[0].replace('##', '').trim();
  }
  return '<no title>';
}

function getPosts() {
  return readdirSync('content/devlog')
    .filter((f) => f.endsWith('.md'))
    .reverse()
    .map((file) => {
      const id = `post-${file.replace('.md', '')}`;
      const content = readFileSync(`content/devlog/${file}`, 'utf-8');
      const title = getTitle(content);
      return {
        id,
        title,
        content,
      };
    });
}

export const load = (() => {
  return {
    posts: getPosts(),
  };
}) satisfies PageLoad;
